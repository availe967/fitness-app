import { useState, useEffect, useCallback } from 'react'
import TabBar from './components/TabBar'
import HomePage from './components/HomePage'
import WorkoutView from './components/WorkoutView'
import ExerciseDetail from './components/ExerciseDetail'
import WorkoutLog from './components/WorkoutLog'
import WeightTracker from './components/WeightTracker'
import DietDiary from './components/DietDiary'

const TABS = {
  home: { id: 'home', label: '首页', icon: '🏠' },
  workout: { id: 'workout', label: '训练', icon: '🏋️' },
  log: { id: 'log', label: '记录', icon: '📋' },
  weight: { id: 'weight', label: '体重', icon: '⚖️' },
  diet: { id: 'diet', label: '饮食', icon: '🍽️' },
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)

  // 从 localStorage 恢复选中的计划
  useEffect(() => {
    const savedPlan = localStorage.getItem('active_plan')
    const savedDay = localStorage.getItem('active_day')
    if (savedPlan) setSelectedPlan(JSON.parse(savedPlan))
    if (savedDay) setSelectedDay(JSON.parse(savedDay))
  }, [])

  const handleSelectPlan = useCallback((plan, day) => {
    setSelectedPlan(plan)
    setSelectedDay(day)
    localStorage.setItem('active_plan', JSON.stringify(plan))
    localStorage.setItem('active_day', JSON.stringify(day))
    setActiveTab('workout')
  }, [])

  const handleExerciseClick = useCallback((exercise) => {
    setSelectedExercise(exercise)
  }, [])

  const handleBack = useCallback(() => {
    setSelectedExercise(null)
  }, [])

  return (
    <div className="min-h-screen bg-bg text-white pb-20">
      {/* 顶部状态栏 */}
      <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-surface-light px-4 py-3">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          {selectedExercise ? (
            <button onClick={handleBack} className="text-primary-light flex items-center gap-1 text-sm">
              ← 返回
            </button>
          ) : (
            <h1 className="text-lg font-bold bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              {TABS[activeTab].label}
            </h1>
          )}
          <span className="text-xs text-gray-500">健身助手</span>
        </div>
      </header>

      {/* 主内容区 — 用 activeTab 做 key，保证切换 tab 时重建，但查看动作详情时不重建 */}
      <main className="max-w-lg mx-auto">
        {selectedExercise ? (
          <div className="page-enter" key="exercise-detail">
            <ExerciseDetail exercise={selectedExercise} />
          </div>
        ) : (
          <div className="page-enter" key={activeTab}>
            {activeTab === 'home' ? (
              <HomePage
                onSelectPlan={handleSelectPlan}
                selectedPlan={selectedPlan}
                selectedDay={selectedDay}
                onExerciseClick={handleExerciseClick}
                onStartWorkout={() => setActiveTab('workout')}
              />
            ) : activeTab === 'workout' ? (
              <WorkoutView
                selectedPlan={selectedPlan}
                selectedDay={selectedDay}
                onExerciseClick={handleExerciseClick}
                onSelectPlan={handleSelectPlan}
              />
            ) : activeTab === 'log' ? (
              <WorkoutLog />
            ) : activeTab === 'weight' ? (
              <WeightTracker />
            ) : activeTab === 'diet' ? (
              <DietDiary />
            ) : null}
          </div>
        )}
      </main>

      {/* 底部导航 */}
      <TabBar tabs={Object.values(TABS)} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
