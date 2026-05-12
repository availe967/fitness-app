import { useState, useEffect, useCallback } from 'react'
import { trainingPlans, getPlanById } from '../data/plans'
import { getExercisesByIds } from '../data/exercises'
import { getRandom, duringWorkout, postWorkout } from '../data/encouragement'
import { saveWorkout } from '../utils/storage'

export default function WorkoutView({ selectedPlan, selectedDay, onExerciseClick, onSelectPlan }) {
  const [activePlanId, setActivePlanId] = useState(selectedPlan?.id || null)
  const [currentDayIdx, setCurrentDayIdx] = useState(0)
  const [isWorkingOut, setIsWorkingOut] = useState(false)
  const [completedSets, setCompletedSets] = useState({})
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const [currentRestExercise, setCurrentRestExercise] = useState(null)
  const [workoutDone, setWorkoutDone] = useState(false)
  const [encouragement, setEncouragement] = useState('')
  const [planSelectorOpen, setPlanSelectorOpen] = useState(false)

  const plan = activePlanId ? getPlanById(activePlanId) : null
  const day = plan?.days[currentDayIdx]

  // 同步外部选择
  useEffect(() => {
    if (selectedPlan?.id) {
      setActivePlanId(selectedPlan.id)
      const dayIdx = selectedPlan.days.findIndex(d => d.id === selectedDay?.id)
      if (dayIdx >= 0) setCurrentDayIdx(dayIdx)
    }
  }, [selectedPlan, selectedDay])

  // 按日期自动轮换训练日：从选择计划那天起，每天自动推进到下一个训练日
  useEffect(() => {
    if (!activePlanId || !plan) return
    const startKey = 'plan_start_' + activePlanId
    let start = localStorage.getItem(startKey)
    if (!start) {
      start = new Date().toISOString().split('T')[0]
      localStorage.setItem(startKey, start)
    }
    const daysSince = Math.floor((Date.now() - new Date(start).getTime()) / (1000 * 60 * 60 * 24))
    const idx = daysSince % plan.days.length
    setCurrentDayIdx(idx)
  }, [activePlanId, plan?.id])

  // 切换计划时更新起始日期
  const switchPlan = (planObj) => {
    setActivePlanId(planObj.id)
    setCurrentDayIdx(0)
    setCompletedSets({})
    setIsWorkingOut(false)
    setWorkoutDone(false)
    localStorage.setItem('plan_start_' + planObj.id, new Date().toISOString().split('T')[0])
    localStorage.setItem('active_plan', JSON.stringify(planObj))
    setPlanSelectorOpen(false)
  }

  // 休息计时器
  useEffect(() => {
    if (!timerActive || timerSeconds <= 0) {
      setTimerActive(false)
      return
    }
    const interval = setInterval(() => {
      setTimerSeconds(s => {
        if (s <= 1) {
          setTimerActive(false)
          // 播放提示音
          try { new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACAf39/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==').play() } catch(e) {}
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [timerActive, timerSeconds])

  const startRestTimer = useCallback((exerciseName, seconds) => {
    setCurrentRestExercise(exerciseName)
    setTimerSeconds(seconds)
    setTimerActive(true)
  }, [])

  const toggleSet = useCallback((exerciseId, setIndex) => {
    setCompletedSets(prev => {
      const key = `${exerciseId}-${setIndex}`
      const next = { ...prev }
      if (next[key]) {
        delete next[key]
      } else {
        next[key] = true
      }
      return next
    })
    setEncouragement(getRandom(duringWorkout))
  }, [])

  const handleStartWorkout = () => {
    setIsWorkingOut(true)
    setCompletedSets({})
    setWorkoutDone(false)
    setEncouragement(getRandom(duringWorkout))
  }

  const handleFinishWorkout = async () => {
    setIsWorkingOut(false)
    setWorkoutDone(true)
    setEncouragement(getRandom(postWorkout))

    if (plan && day) {
      await saveWorkout({
        planId: plan.id,
        planName: plan.name,
        dayId: day.id,
        dayName: day.name,
        completedExercises: day.exercises.map(e => {
          const totalSets = e.sets
          const done = Array.from({ length: totalSets }, (_, i) =>
            !!completedSets[`${e.exerciseId}-${i}`]
          ).filter(Boolean).length
          return { exerciseId: e.exerciseId, completedSets: done, totalSets }
        })
      })
    }
  }

  const handleNewWorkout = () => {
    setWorkoutDone(false)
    setIsWorkingOut(false)
    setCompletedSets({})
  }

  // 完成页面
  if (workoutDone) {
    return (
      <div className="px-4 py-8 text-center space-y-4">
        <p className="text-5xl">🎉</p>
        <h2 className="text-xl font-bold">训练完成！</h2>
        <p className="text-sm text-gray-400">{encouragement}</p>
        <div className="bg-surface rounded-2xl p-4 text-left space-y-2">
          <p className="text-sm font-medium">今日完成：</p>
          {day && day.exercises.map(e => {
            const ex = getExercisesByIds([e.exerciseId])[0]
            const totalSets = e.sets
            const done = Array.from({ length: totalSets }, (_, i) =>
              !!completedSets[`${e.exerciseId}-${i}`]
            ).filter(Boolean).length
            return (
              <div key={e.exerciseId} className="flex items-center gap-2 text-sm">
                <span className={done >= totalSets ? 'text-green-400' : 'text-yellow-400'}>
                  {done >= totalSets ? '✅' : '⚠️'}
                </span>
                <span className="text-gray-300">{ex?.name || e.exerciseId}</span>
                <span className="text-gray-600 text-xs ml-auto">{done}/{totalSets}组</span>
              </div>
            )
          })}
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={handleNewWorkout} className="bg-surface hover:bg-surface-light text-white px-5 py-3 rounded-xl font-medium transition-colors">
            再来一组训练
          </button>
          <button onClick={() => { setWorkoutDone(false); setIsWorkingOut(true); setCompletedSets({}) }}
            className="bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl font-medium transition-colors">
            重新训练
          </button>
        </div>
      </div>
    )
  }

  // 未选择计划
  if (!plan) {
    return (
      <div className="px-4 py-8 text-center space-y-4">
        <p className="text-5xl mb-4">🏋️</p>
        <p className="text-gray-400">请先在首页选择训练计划</p>
        <button onClick={() => setPlanSelectorOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-medium transition-colors">
          选择计划
        </button>
        {planSelectorOpen && <PlanSelector plans={trainingPlans} selectedId={activePlanId}
          onSelect={switchPlan}
          onClose={() => setPlanSelectorOpen(false)} />}
      </div>
    )
  }

  const exercises = day ? getExercisesByIds(day.exercises.map(e => e.exerciseId)) : []
  const totalSets = day ? day.exercises.reduce((sum, e) => sum + e.sets, 0) : 0
  const completedCount = Object.keys(completedSets).length
  const progressPct = totalSets > 0 ? Math.round((completedCount / totalSets) * 100) : 0

  return (
    <div className="px-4 py-4 space-y-4">
      {/* 计划切换 */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {plan.days.map((d, i) => (
          <button
            key={d.id}
            onClick={() => { setCurrentDayIdx(i); setCompletedSets({}) }}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              i === currentDayIdx
                ? 'bg-primary text-white'
                : 'bg-surface text-gray-400 hover:text-white'
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* 训练日信息 */}
      <div className="bg-surface rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-lg">{day.name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-primary/20 text-primary-light px-2 py-1 rounded-full">
              {plan.name}
            </span>
            <button
              onClick={() => setPlanSelectorOpen(true)}
              className="text-xs text-gray-500 hover:text-primary-light underline underline-offset-2"
            >
              更换计划
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-400">{day.focus}</p>

        {/* 热身提示 */}
        {isWorkingOut && day.warmup && (
          <div className="mt-3 pt-3 border-t border-surface-light">
            <p className="text-xs font-medium text-yellow-400 mb-2">🔥 热身（RAMP 协议）</p>
            {day.warmup.map((w, i) => (
              <div key={i} className="flex justify-between text-xs text-gray-400 py-0.5">
                <span>{w.name}</span>
                <span className="text-gray-600">{w.duration}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 进度条 */}
      {isWorkingOut && (
        <div className="bg-surface rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">训练进度</span>
            <span className="text-xs font-bold text-primary-light">{progressPct}%</span>
          </div>
          <div className="h-2 bg-surface-light rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">{completedCount}/{totalSets} 组完成</p>
        </div>
      )}

      {/* 休息计时器 */}
      {timerActive && (
        <div className="bg-accent/20 border border-accent/30 rounded-2xl p-4 text-center animate-pulse">
          <p className="text-xs text-accent mb-1">⏱️ 组间休息</p>
          <p className="text-2xl font-bold text-accent">
            {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
          </p>
          {currentRestExercise && (
            <p className="text-xs text-gray-400 mt-1">下一组：{currentRestExercise}</p>
          )}
          <button onClick={() => setTimerActive(false)}
            className="text-xs text-gray-500 mt-2 underline">跳过</button>
        </div>
      )}

      {/* 鼓励语 */}
      {isWorkingOut && encouragement && (
        <div className="text-center py-1">
          <p className="text-xs text-primary-light/70 italic">{encouragement}</p>
        </div>
      )}

      {/* 动作列表 */}
      <div className="space-y-3">
        {day.exercises.map((entry, idx) => {
          const ex = exercises[idx]
          if (!ex) return null
          const restTime = entry.rest || 90
          return (
            <div key={ex.id} className="bg-surface rounded-2xl p-4">
              {/* 动作头部 */}
              <button
                onClick={() => onExerciseClick(ex)}
                className="w-full text-left flex items-center gap-3 mb-3"
              >
                <span className="text-2xl">{ex.primaryMuscles[0]?.icon || '💪'}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm">{ex.name}</h3>
                  <p className="text-xs text-gray-500">
                    {entry.sets}组 × {entry.reps} · 组间休息 {restTime}秒
                  </p>
                </div>
                <span className="text-gray-600 text-sm">查看要领 →</span>
              </button>

              {entry.note && (
                <p className="text-xs text-yellow-400/80 mb-3 ml-11">💡 {entry.note}</p>
              )}

              {/* 组数勾选 */}
              {isWorkingOut && (
                <div className="ml-11 space-y-1.5">
                  <div className="flex gap-2">
                    {Array.from({ length: entry.sets }, (_, si) => {
                      const key = `${ex.id}-${si}`
                      const isDone = !!completedSets[key]
                      return (
                        <button
                          key={si}
                          onClick={() => toggleSet(ex.id, si)}
                          className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                            isDone
                              ? 'bg-primary text-white'
                              : 'bg-surface-light text-gray-500 hover:bg-primary/20'
                          }`}
                        >
                          第{si + 1}组 {isDone ? '✓' : ''}
                        </button>
                      )
                    })}
                  </div>
                  <button
                    onClick={() => startRestTimer(ex.name, restTime)}
                    className="text-xs text-primary-light/60 hover:text-primary-light mt-1 underline"
                  >
                    ⏱️ 休息 {restTime}秒
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* 底部按钮 */}
      <div className="py-4">
        {!isWorkingOut ? (
          <button
            onClick={handleStartWorkout}
            className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-[0.98]"
          >
            开始训练 💪
          </button>
        ) : (
          <button
            onClick={handleFinishWorkout}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-[0.98]"
          >
            完成训练 ✅ ({completedCount}/{totalSets}组)
          </button>
        )}
      </div>

      {/* 知识提示 */}
      {!isWorkingOut && !workoutDone && (
        <div className="bg-surface/50 rounded-xl p-3 border border-surface-light">
          <p className="text-xs text-gray-600">
            📚 <span className="text-gray-500">Schoenfeld (2021)：增肌在5-30次范围内均有效，关键是每组接近力竭（0-5 RIR）。组间休息60-90秒适合增肌，大重量复合动作休息3分钟以上。</span>
          </p>
        </div>
      )}

      {/* 计划选择器弹窗（全局可用） */}
      {planSelectorOpen && <PlanSelector plans={trainingPlans} selectedId={activePlanId}
        onSelect={switchPlan}
        onClose={() => setPlanSelectorOpen(false)} />}
    </div>
  )
}

function PlanSelector({ plans, selectedId, onSelect, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-end" onClick={onClose}>
      <div className="bg-surface w-full max-w-lg mx-auto rounded-t-2xl p-5 space-y-3 max-h-[70vh] overflow-y-auto"
           onClick={e => e.stopPropagation()}>
        <h3 className="text-lg font-bold text-center mb-2">选择训练计划</h3>
        {plans.map(plan => (
          <button key={plan.id} onClick={() => onSelect(plan)}
            className={`w-full text-left p-3 rounded-xl border transition-all ${
              selectedId === plan.id ? 'border-primary bg-primary/10' : 'border-surface-light hover:border-primary/30'
            }`}>
            <div className="flex items-center gap-3">
              <span className="text-xl">{plan.icon}</span>
              <div>
                <p className="font-medium text-sm">{plan.name}</p>
                <p className="text-xs text-gray-500">{plan.nameEn} · 每周{plan.daysPerWeek}天</p>
              </div>
            </div>
          </button>
        ))}
        <button onClick={onClose} className="w-full py-2 text-sm text-gray-500">取消</button>
      </div>
    </div>
  )
}
