import { useState, useEffect } from 'react'
import { saveDiet, getDietLogs, getRecentDietLogs } from '../utils/storage'

const MEAL_TYPES = [
  { id: 'breakfast', label: '早餐', icon: '🌅' },
  { id: 'lunch', label: '午餐', icon: '☀️' },
  { id: 'dinner', label: '晚餐', icon: '🌙' },
  { id: 'snack', label: '加餐', icon: '🍎' },
]

export default function DietDiary() {
  const [content, setContent] = useState('')
  const [mealType, setMealType] = useState('breakfast')
  const [todayLogs, setTodayLogs] = useState([])
  const [recentLogs, setRecentLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const loadData = async () => {
    const [todayD, recent] = await Promise.all([
      getDietLogs(today),
      getRecentDietLogs(7)
    ])
    setTodayLogs(todayD)
    setRecentLogs(recent)
    setLoading(false)
  }

  useEffect(() => { loadData() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!content.trim()) return

    await saveDiet({
      content: content.trim(),
      mealType,
      date: today
    })

    setContent('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
    loadData()
  }

  // 按日期分组
  const groupedRecent = recentLogs.reduce((acc, log) => {
    const date = log.date
    if (!acc[date]) acc[date] = []
    acc[date].push(log)
    return acc
  }, {})

  const sortedDates = Object.keys(groupedRecent).sort((a, b) => b.localeCompare(a))

  if (loading) {
    return <div className="px-4 py-12 text-center"><p className="text-gray-500">加载中...</p></div>
  }

  return (
    <div className="px-4 py-4 space-y-4">
      {/* 输入区 */}
      <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-4">
        <h3 className="font-semibold text-sm mb-3">记录饮食</h3>

        {/* 餐次选择 */}
        <div className="flex gap-1.5 mb-3">
          {MEAL_TYPES.map(mt => (
            <button
              key={mt.id}
              type="button"
              onClick={() => setMealType(mt.id)}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                mealType === mt.id
                  ? 'bg-primary text-white'
                  : 'bg-surface-light text-gray-400 hover:text-white'
              }`}
            >
              {mt.icon} {mt.label}
            </button>
          ))}
        </div>

        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="记录吃了什么...例如：鸡胸肉100g + 西兰花 + 糙米饭一碗"
          rows={3}
          className="w-full bg-surface-light border border-surface-light focus:border-primary rounded-xl px-3 py-2.5 text-sm text-white outline-none resize-none transition-colors"
        />

        <button
          type="submit"
          disabled={!content.trim()}
          className={`w-full mt-3 py-3 rounded-xl font-medium text-sm transition-all ${
            submitted
              ? 'bg-green-600 text-white'
              : 'bg-primary hover:bg-primary-dark text-white disabled:bg-gray-700 disabled:text-gray-500'
          }`}
        >
          {submitted ? '✅ 已记录' : '保存记录'}
        </button>
      </form>

      {/* 今日记录 */}
      {todayLogs.length > 0 && (
        <div className="bg-surface rounded-2xl p-4">
          <h3 className="font-semibold text-sm mb-3">今日饮食</h3>
          <div className="space-y-2">
            {MEAL_TYPES.map(mt => {
              const meals = todayLogs.filter(l => l.mealType === mt.id)
              if (meals.length === 0) return null
              return (
                <div key={mt.id} className="bg-surface-light rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">{mt.icon} {mt.label}</p>
                  {meals.map((m, i) => (
                    <p key={i} className="text-sm text-gray-300">{m.content}</p>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* 历史记录 */}
      {sortedDates.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-sm">近7天记录</h3>
          {sortedDates.slice(0, 7).map(date => {
            const dayLogs = groupedRecent[date]
            // 跳过今天（已在上方展示）
            if (date === today && todayLogs.length > 0) return null
            return (
              <div key={date} className="bg-surface rounded-xl p-3">
                <p className="text-xs text-gray-500 mb-2">{date}</p>
                <div className="space-y-1.5">
                  {dayLogs.map((log, i) => {
                    const mt = MEAL_TYPES.find(m => m.id === log.mealType)
                    return (
                      <div key={log.id || i} className="flex items-start gap-2 text-sm">
                        <span>{mt?.icon || '🍽️'}</span>
                        <span className="text-gray-400">{log.content}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
          {sortedDates.every(d => d === today && todayLogs.length > 0) && (
            <p className="text-gray-600 text-xs text-center py-4">暂无更多记录</p>
          )}
        </div>
      )}

      {/* 空状态 */}
      {todayLogs.length === 0 && sortedDates.length === 0 && (
        <div className="bg-surface rounded-2xl p-8 text-center">
          <p className="text-4xl mb-2">🍽️</p>
          <p className="text-gray-400 text-sm">还没有饮食记录</p>
          <p className="text-gray-600 text-xs mt-1">记录你的每一餐，帮助你了解饮食结构</p>
        </div>
      )}

      {/* 营养小贴士 */}
      <div className="bg-surface/50 rounded-xl p-3 border border-surface-light">
        <p className="text-xs text-gray-600">
          💡 <span className="text-gray-500">训练后30-60分钟补充蛋白质（20-30g）+碳水有助于恢复。每天摄入1.6-2.2g/kg体重的蛋白质利于增肌（Schoenfeld 2018 荟萃分析）。</span>
        </p>
      </div>
    </div>
  )
}
