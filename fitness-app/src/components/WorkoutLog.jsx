import { useState, useEffect } from 'react'
import { getWorkouts, getWorkoutStreak } from '../utils/storage'
import { getExerciseById } from '../data/exercises'
import { getStreakMessage, getRandom, postWorkout } from '../data/encouragement'

export default function WorkoutLog() {
  const [workouts, setWorkouts] = useState([])
  const [streak, setStreak] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      getWorkouts(30),
      getWorkoutStreak()
    ]).then(([w, s]) => {
      setWorkouts(w)
      setStreak(s)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="px-4 py-12 text-center">
        <p className="text-gray-500">加载中...</p>
      </div>
    )
  }

  return (
    <div className="px-4 py-4 space-y-4">
      {/* 连续训练卡片 */}
      <div className="bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">连续训练</p>
            <p className="text-3xl font-bold">{streak} <span className="text-lg text-gray-400">天</span></p>
          </div>
          <span className="text-4xl">🔥</span>
        </div>
        <p className="text-xs text-primary-light/80 mt-2">
          {getStreakMessage({ three: streakMessages.three, seven: streakMessages.seven, fourteen: streakMessages.fourteen, thirty: streakMessages.thirty }[Object.keys(streakMessages).find(k => streak >= parseInt(k))] || streakMessages.new)}
        </p>
      </div>

      {/* 总统计 */}
      {workouts.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-primary-light">{workouts.length}</p>
            <p className="text-xs text-gray-500">总训练次数</p>
          </div>
          <div className="bg-surface rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-accent">
              {Math.round(workouts.filter(w => {
                if (w.completedExercises) {
                  const total = w.completedExercises.reduce((s, e) => s + e.totalSets, 0)
                  const done = w.completedExercises.reduce((s, e) => s + e.completedSets, 0)
                  return total > 0 ? Math.round((done / total) * 100) : 100
                }
                return 100
              }).reduce((a, b) => a + b, 0) / Math.max(workouts.length, 1))}%
            </p>
            <p className="text-xs text-gray-500">平均完成率</p>
          </div>
        </div>
      )}

      {/* 训练历史 */}
      {workouts.length === 0 ? (
        <div className="bg-surface rounded-2xl p-8 text-center">
          <p className="text-4xl mb-3">📋</p>
          <p className="text-gray-400 text-sm">还没有训练记录</p>
          <p className="text-gray-600 text-xs mt-1">完成一次训练后这里就会出现记录</p>
        </div>
      ) : (
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">训练历史</h3>
          {workouts.map(w => {
            const totalSets = w.completedExercises?.reduce((s, e) => s + e.totalSets, 0) || 0
            const doneSets = w.completedExercises?.reduce((s, e) => s + e.completedSets, 0) || 0
            const completionPct = totalSets > 0 ? Math.round((doneSets / totalSets) * 100) : 100
            return (
              <div key={w.id} className="bg-surface rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-sm">{w.planName} · {w.dayName}</p>
                    <p className="text-xs text-gray-500">{w.date}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    completionPct >= 90 ? 'bg-green-500/20 text-green-400' :
                    completionPct >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {doneSets}/{totalSets}组
                  </span>
                </div>
                {/* 进度条 */}
                <div className="h-1 bg-surface-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${completionPct}%` }}
                  />
                </div>
                {/* 动作列表 */}
                {w.completedExercises && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {w.completedExercises.map((e, i) => {
                      const ex = getExerciseById(e.exerciseId)
                      return (
                        <span key={i} className={`text-xs px-2 py-0.5 rounded ${
                          e.completedSets >= e.totalSets
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-surface-light text-gray-500'
                        }`}>
                          {ex?.name || e.exerciseId}
                        </span>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

const streakMessages = {
  new: '新的连续训练记录开始！坚持就是胜利 🚀',
  three: '三天了！已经养成节奏感了 🎵',
  seven: '一周连续训练！你已经超过了大多数人 👑',
  fourteen: '两周！习惯正在深入骨髓 🧬',
  thirty: '一个月！这已经不是坚持，而是生活方式了 🔥',
}
