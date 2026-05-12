import Dexie from 'dexie'

const db = new Dexie('FitnessApp')

db.version(1).stores({
  settings: 'key',
  workouts: '++id, date, planId, dayId',
  weightLogs: '++id, date',
  dietLogs: '++id, date',
  exerciseLogs: '++id, workoutId, exerciseId'
})

// ====== 设置 ======
export async function getSetting(key, defaultValue = null) {
  const record = await db.settings.get(key)
  return record ? record.value : defaultValue
}

export async function setSetting(key, value) {
  await db.settings.put({ key, value })
}

// ====== 训练记录 ======
export async function saveWorkout(workout) {
  return await db.workouts.add({
    ...workout,
    date: workout.date || new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString()
  })
}

export async function getWorkouts(limit = 30) {
  return await db.workouts
    .orderBy('date')
    .reverse()
    .limit(limit)
    .toArray()
}

export async function getWorkoutById(id) {
  return await db.workouts.get(id)
}

export async function getWorkoutStreak() {
  const records = await db.workouts
    .orderBy('date')
    .reverse()
    .uniqueKeys()

  if (records.length === 0) return 0

  const dates = records.map(d => d)
  dates.sort((a, b) => b.localeCompare(a))

  let streak = 0
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (let i = 0; i < dates.length; i++) {
    const expected = new Date(today)
    expected.setDate(expected.getDate() - i)
    const expectedStr = expected.toISOString().split('T')[0]

    if (dates[i] === expectedStr) {
      streak++
    } else if (i === 0) {
      // 今天还没训练，检查昨天
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().split('T')[0]
      if (dates[i] === yesterdayStr) {
        streak++
        continue
      }
      break
    } else {
      break
    }
  }

  return streak
}

// ====== 动作日志 ======
export async function saveExerciseLogs(logs) {
  return await db.exerciseLogs.bulkAdd(logs)
}

export async function getExerciseHistory(exerciseId, limit = 20) {
  return await db.exerciseLogs
    .where('exerciseId')
    .equals(exerciseId)
    .reverse()
    .sortBy('id')
    .then(results => results.slice(0, limit))
}

// ====== 体重记录 ======
export async function saveWeight(weight, date = null) {
  const recordDate = date || new Date().toISOString().split('T')[0]
  // Upsert: 如果当天已有记录则更新
  const existing = await db.weightLogs.where('date').equals(recordDate).first()
  if (existing) {
    await db.weightLogs.update(existing.id, { weight, updatedAt: new Date().toISOString() })
    return existing.id
  }
  return await db.weightLogs.add({
    weight,
    date: recordDate,
    createdAt: new Date().toISOString()
  })
}

export async function getWeightLogs(days = 90) {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)
  const cutoffStr = cutoff.toISOString().split('T')[0]

  return await db.weightLogs
    .where('date')
    .aboveOrEqual(cutoffStr)
    .toArray()
    .then(results => results.sort((a, b) => a.date.localeCompare(b.date)))
}

export async function getLatestWeight() {
  const records = await db.weightLogs
    .orderBy('date')
    .reverse()
    .limit(1)
    .toArray()
  return records[0] || null
}

// ====== 饮食记录 ======
export async function saveDiet(diet) {
  return await db.dietLogs.add({
    ...diet,
    date: diet.date || new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString()
  })
}

export async function getDietLogs(date = null) {
  const queryDate = date || new Date().toISOString().split('T')[0]
  return await db.dietLogs
    .where('date')
    .equals(queryDate)
    .toArray()
}

export async function getRecentDietLogs(days = 7) {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)
  const cutoffStr = cutoff.toISOString().split('T')[0]

  return await db.dietLogs
    .where('date')
    .aboveOrEqual(cutoffStr)
    .toArray()
    .then(results => results.sort((a, b) => b.date.localeCompare(a.date)))
}

export default db
