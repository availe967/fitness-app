import { useState, useEffect, useRef } from 'react'
import { saveWeight, getWeightLogs, getLatestWeight } from '../utils/storage'
import { getWeightMessage } from '../data/encouragement'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

export default function WeightTracker() {
  const [weight, setWeight] = useState('')
  const [logs, setLogs] = useState([])
  const [latest, setLatest] = useState(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const inputRef = useRef(null)

  useEffect(() => {
    Promise.all([getWeightLogs(90), getLatestWeight()]).then(([l, lt]) => {
      setLogs(l)
      setLatest(lt)
      setLoading(false)
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const w = parseFloat(weight)
    if (!w || w < 20 || w > 300) return

    const today = new Date().toISOString().split('T')[0]
    await saveWeight(w, today)

    const newLogs = await getWeightLogs(90)
    setLogs(newLogs)
    setLatest({ weight: w, date: today })
    setWeight('')

    // 计算变化
    if (newLogs.length >= 2) {
      const prev = newLogs[newLogs.length - 2]
      const change = w - prev.weight
      setMessage(getWeightMessage(change))
    } else {
      setMessage('首次记录体重！开始追踪你的变化 📊')
    }

    setTimeout(() => setMessage(''), 5000)
  }

  const handleQuickSet = (val) => {
    setWeight(val.toString())
    inputRef.current?.focus()
  }

  // 图表数据
  const chartData = {
    labels: logs.map(l => l.date.slice(5)), // MM-DD
    datasets: [{
      label: '体重 (kg)',
      data: logs.map(l => l.weight),
      fill: true,
      borderColor: '#818cf8',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      pointBackgroundColor: '#818cf8',
      pointRadius: 3,
      pointHoverRadius: 6,
      tension: 0.3,
      borderWidth: 2,
    }]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e1b4b',
        titleColor: '#fff',
        bodyColor: '#c7d2fe',
        borderColor: '#312e81',
        borderWidth: 1,
        callbacks: {
          label: (ctx) => `${ctx.parsed.y} kg`
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(49, 46, 129, 0.3)' },
        ticks: { color: '#6b7280', font: { size: 10 }, maxTicksLimit: 10 }
      },
      y: {
        grid: { color: 'rgba(49, 46, 129, 0.3)' },
        ticks: { color: '#6b7280', font: { size: 10 } },
        min: logs.length > 0 ? Math.floor(Math.min(...logs.map(l => l.weight)) - 2) : 40,
        max: logs.length > 0 ? Math.ceil(Math.max(...logs.map(l => l.weight)) + 2) : 80,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  }

  // 统计数据
  const stats = logs.length >= 2 ? (() => {
    const first = logs[0].weight
    const last = logs[logs.length - 1].weight
    const change = last - first
    const days = Math.max(1, (new Date(logs[logs.length - 1].date) - new Date(logs[0].date)) / (1000 * 60 * 60 * 24))
    const weekly = (change / days) * 7
    const avg = logs.reduce((s, l) => s + l.weight, 0) / logs.length
    const min = Math.min(...logs.map(l => l.weight))
    const max = Math.max(...logs.map(l => l.weight))
    return { change, weekly, avg, min, max }
  })() : null

  if (loading) {
    return <div className="px-4 py-12 text-center"><p className="text-gray-500">加载中...</p></div>
  }

  return (
    <div className="px-4 py-4 space-y-4">
      {/* 输入区 */}
      <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-4">
        <label className="text-sm font-medium mb-3 block">今日体重</label>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="number"
              step="0.1"
              min="20"
              max="300"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="例如 55.0"
              className="w-full bg-surface-light border border-surface-light focus:border-primary rounded-xl px-4 py-3 text-white text-lg text-center outline-none transition-colors"
              inputMode="decimal"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">kg</span>
          </div>
          <button
            type="submit"
            disabled={!weight}
            className="bg-primary hover:bg-primary-dark disabled:bg-gray-700 disabled:text-gray-500 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            记录
          </button>
        </div>
        {/* 快捷设置 */}
        {latest && (
          <div className="flex gap-2 mt-3">
            {[latest.weight - 0.5, latest.weight, latest.weight + 0.5].map(v => (
              <button
                key={v}
                type="button"
                onClick={() => handleQuickSet(v.toFixed(1))}
                className="flex-1 py-1.5 bg-surface-light hover:bg-primary/20 rounded-lg text-xs text-gray-400 hover:text-white transition-colors"
              >
                {v.toFixed(1)} kg
              </button>
            ))}
          </div>
        )}
        {message && (
          <p className="text-xs text-primary-light mt-2 text-center">{message}</p>
        )}
      </form>

      {/* 最新数据 */}
      {latest && (
        <div className="bg-surface rounded-xl p-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">最新记录</p>
            <p className="text-xl font-bold">{latest.weight} <span className="text-sm text-gray-500">kg</span></p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{latest.date}</p>
            {stats && (
              <p className={`text-sm font-medium ${stats.change < 0 ? 'text-green-400' : stats.change > 0 ? 'text-red-400' : 'text-gray-400'}`}>
                {stats.change > 0 ? '+' : ''}{stats.change.toFixed(1)} kg
                <span className="text-xs text-gray-600 ml-1">({stats.days}天)</span>
              </p>
            )}
          </div>
        </div>
      )}

      {/* 统计卡片 */}
      {stats && (
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-surface rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500">周变化</p>
            <p className={`text-sm font-bold ${stats.weekly < 0 ? 'text-green-400' : stats.weekly > 0 ? 'text-red-400' : 'text-gray-400'}`}>
              {stats.weekly > 0 ? '+' : ''}{stats.weekly.toFixed(2)} kg
            </p>
          </div>
          <div className="bg-surface rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500">平均值</p>
            <p className="text-sm font-bold text-white">{stats.avg.toFixed(1)} kg</p>
          </div>
          <div className="bg-surface rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500">范围</p>
            <p className="text-sm font-bold text-white">{stats.min.toFixed(1)} - {stats.max.toFixed(1)}</p>
          </div>
        </div>
      )}

      {/* 趋势图 */}
      {logs.length >= 2 ? (
        <div className="bg-surface rounded-2xl p-4">
          <h3 className="font-semibold text-sm mb-3">体重趋势（近90天）</h3>
          <div className="h-56">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      ) : logs.length === 1 ? (
        <div className="bg-surface rounded-2xl p-8 text-center">
          <p className="text-gray-400 text-sm">再多记录一天就能看到趋势图了</p>
        </div>
      ) : (
        <div className="bg-surface rounded-2xl p-8 text-center">
          <p className="text-4xl mb-2">⚖️</p>
          <p className="text-gray-400 text-sm">还没有体重记录</p>
          <p className="text-gray-600 text-xs mt-1">建议每天早晨空腹称重并记录</p>
        </div>
      )}

      {/* 建议 */}
      <div className="bg-surface/50 rounded-xl p-3 border border-surface-light">
        <p className="text-xs text-gray-600">
          💡 <span className="text-gray-500">建议每天早晨起床后、上完厕所、空腹称重。单日波动1-2kg是正常的（水分、碳水、生理期等），关注周均趋势而非单点数据。</span>
        </p>
      </div>
    </div>
  )
}
