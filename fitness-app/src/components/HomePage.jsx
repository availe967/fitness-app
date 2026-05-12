import { useState, useEffect } from 'react'
import { trainingPlans } from '../data/plans'
import { getExercisesByIds } from '../data/exercises'
import { getRandom, preWorkout } from '../data/encouragement'
import { getWorkoutStreak, getLatestWeight, getRecentDietLogs } from '../utils/storage'

export default function HomePage({ onSelectPlan, selectedPlan, selectedDay, onExerciseClick, onStartWorkout }) {
  const [streak, setStreak] = useState(0)
  const [latestWeight, setLatestWeight] = useState(null)
  const [todayDiet, setTodayDiet] = useState([])
  const [encouragement] = useState(getRandom(preWorkout))
  const [planSelectorOpen, setPlanSelectorOpen] = useState(false)

  useEffect(() => {
    getWorkoutStreak().then(setStreak)
    getLatestWeight().then(setLatestWeight)
    getRecentDietLogs(1).then(setTodayDiet)
  }, [])

  // 如果有激活的计划，展示今日训练概览
  const activePlan = selectedPlan ? trainingPlans.find(p => p.id === selectedPlan.id) : null
  const today = selectedDay || (activePlan?.days[0])

  return (
    <div className="px-4 py-4 space-y-5">
      {/* 鼓励语 */}
      <div className="bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl p-5 text-center animate-pulse-glow">
        <p className="text-2xl mb-1">💪</p>
        <p className="text-sm font-medium text-white/90">{encouragement}</p>
        {streak >= 3 && (
          <p className="text-xs text-primary-light mt-2">
            🔥 已连续训练 {streak} 天
          </p>
        )}
      </div>

      {/* 快捷状态卡片 */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface rounded-xl p-3">
          <p className="text-xs text-gray-400 mb-1">连续训练</p>
          <p className="text-2xl font-bold text-primary-light">{streak}<span className="text-sm text-gray-500"> 天</span></p>
        </div>
        <div className="bg-surface rounded-xl p-3">
          <p className="text-xs text-gray-400 mb-1">最新体重</p>
          <p className="text-2xl font-bold text-accent">
            {latestWeight ? `${latestWeight.weight}` : '--'}<span className="text-sm text-gray-500"> kg</span>
          </p>
        </div>
      </div>

      {/* 今日训练 */}
      {activePlan && today ? (
        <div className="bg-surface rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold">今日训练</h3>
              <p className="text-xs text-gray-400">{activePlan.name} · {today.name}</p>
            </div>
            <button
              onClick={onStartWorkout}
              className="bg-primary hover:bg-primary-dark text-white text-sm px-4 py-2 rounded-xl font-medium transition-colors"
            >
              开始训练
            </button>
          </div>
          <div className="space-y-2">
            {getExercisesByIds(today.exercises.map(e => e.exerciseId)).slice(0, 4).map(ex => (
              <button
                key={ex.id}
                onClick={() => onExerciseClick(ex)}
                className="w-full text-left bg-surface-light rounded-lg p-2.5 flex items-center gap-3 hover:bg-primary/10 transition-colors"
              >
                <span className="text-lg">{ex.primaryMuscles[0]?.icon || '💪'}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{ex.name}</p>
                  <p className="text-xs text-gray-500">{ex.setsReps}</p>
                </div>
                <span className="text-gray-600 text-sm">→</span>
              </button>
            ))}
            {today.exercises.length > 4 && (
              <p className="text-xs text-gray-500 text-center pt-1">+{today.exercises.length - 4} 个动作</p>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-surface rounded-2xl p-5 text-center">
          <p className="text-3xl mb-2">📋</p>
          <p className="text-sm text-gray-400 mb-3">还没有选择训练计划</p>
          <button
            onClick={() => setPlanSelectorOpen(true)}
            className="bg-primary hover:bg-primary-dark text-white text-sm px-5 py-2.5 rounded-xl font-medium transition-colors"
          >
            选择训练计划
          </button>
        </div>
      )}

      {/* 今日饮食概览 */}
      {todayDiet.length > 0 && (
        <div className="bg-surface rounded-2xl p-4">
          <h3 className="font-semibold mb-2">今日饮食</h3>
          {todayDiet.map((d, i) => (
            <div key={d.id || i} className="flex items-center gap-2 py-1.5 border-b border-surface-light last:border-0">
              <span className="text-sm">{d.mealType === 'breakfast' ? '🌅' : d.mealType === 'lunch' ? '☀️' : d.mealType === 'dinner' ? '🌙' : '🍎'}</span>
              <span className="text-sm text-gray-300">{d.content}</span>
            </div>
          ))}
        </div>
      )}

      {/* 训练计划选择器 */}
      {planSelectorOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-end" onClick={() => setPlanSelectorOpen(false)}>
          <div className="bg-surface w-full max-w-lg mx-auto rounded-t-2xl p-5 space-y-4 max-h-[70vh] overflow-y-auto"
               onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-center">选择训练计划</h3>
            <p className="text-xs text-gray-500 text-center">
              Ramos-Campo et al. (2024) 荟萃分析：不同分化方式效果无显著差异，选最适合你时间安排的即可
            </p>
            {trainingPlans.map(plan => (
              <button
                key={plan.id}
                onClick={() => {
                  onSelectPlan(plan, plan.days[0])
                  setPlanSelectorOpen(false)
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedPlan?.id === plan.id
                    ? 'border-primary bg-primary/10'
                    : 'border-surface-light hover:border-primary/30 bg-surface-light'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{plan.icon}</span>
                  <div>
                    <p className="font-semibold">{plan.name}</p>
                    <p className="text-xs text-gray-400">{plan.nameEn} · 每周 {plan.daysPerWeek} 天</p>
                    <p className="text-xs text-gray-500 mt-1">{plan.desc}</p>
                  </div>
                </div>
              </button>
            ))}
            <button
              onClick={() => setPlanSelectorOpen(false)}
              className="w-full py-3 text-sm text-gray-500 hover:text-gray-300"
            >
              取消
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
