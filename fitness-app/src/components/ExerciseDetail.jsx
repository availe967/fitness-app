import { useState } from 'react'
import { exerciseMeta } from '../data/exerciseMeta'

function MuscleActivationBar({ muscle, level, isPrimary }) {
  const width = level === 'high' ? '100%' : level === 'medium' ? '65%' : '35%'
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="text-sm w-7">{muscle.icon || '💪'}</span>
      <span className="text-xs w-16 text-gray-300">{muscle.name}</span>
      <div className="flex-1 h-2 bg-surface-light rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width,
            background: isPrimary
              ? `linear-gradient(90deg, ${muscle.color}, ${muscle.color}88)`
              : `linear-gradient(90deg, ${muscle.color}88, ${muscle.color}44)`
          }}
        />
      </div>
      <span className="text-[10px] text-gray-600 w-10 text-right">
        {isPrimary ? '主要' : '辅助'}
      </span>
    </div>
  )
}

export default function ExerciseDetail({ exercise }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0)
  const [imageErrors, setImageErrors] = useState({})

  if (!exercise) return null

  // 合并补充元数据（发力感受、女生提示、英文名）
  const meta = exerciseMeta[exercise.id] || {}
  const enriched = { ...exercise, ...meta }

  // 将 raw.githubusercontent.com 改写为 jsDelivr CDN（国内可访问）
  const rewriteImageUrl = (url) => {
    if (!url) return url
    return url.replace(
      'raw.githubusercontent.com/yuhonas/free-exercise-db/main/',
      'cdn.jsdelivr.net/gh/yuhonas/free-exercise-db@main/'
    )
  }
  const rawImages = exercise.images || []
  const images = rawImages.map(rewriteImageUrl)
  const hasValidImage = images.length > 0 && !imageErrors[currentImageIdx]

  const youtubeSearchQuery = encodeURIComponent(`${enriched.nameEn || enriched.name} exercise demonstration form`)
  const youtubeUrl = `https://www.youtube.com/results?search_query=${youtubeSearchQuery}`
  const bilibiliSearchQuery = encodeURIComponent(`${exercise.name} 健身 教学`)
  const bilibiliUrl = `https://search.bilibili.com/all?keyword=${bilibiliSearchQuery}`

  return (
    <div className="px-4 py-4 space-y-4">
      {/* 媒体区：图片或肌肉可视化回退 */}
      <div className="relative bg-surface rounded-2xl overflow-hidden">
        {hasValidImage ? (
          <img
            src={images[currentImageIdx]}
            alt={exercise.name}
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
            onError={() => setImageErrors(prev => ({ ...prev, [currentImageIdx]: true }))}
          />
        ) : (
          <MuscleVisualization exercise={exercise} />
        )}
        {images.length > 1 && hasValidImage && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentImageIdx ? 'bg-white w-4' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 基本信息 */}
      <div className="bg-surface rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-3">{exercise.name}</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
            exercise.level === 'beginner' ? 'bg-green-500/20 text-green-400' :
            exercise.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {exercise.level === 'beginner' ? '初级' : exercise.level === 'intermediate' ? '中级' : '高级'}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs bg-surface-light text-gray-400">
            {exercise.mechanic === 'compound' ? '复合动作' : '孤立动作'}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs bg-surface-light text-gray-400">
            {exercise.equipment === 'barbell' ? '杠铃' :
             exercise.equipment === 'dumbbell' ? '哑铃' :
             exercise.equipment === 'cable' ? '绳索' :
             exercise.equipment === 'machine' ? '器械' :
             exercise.equipment === 'bodyweight' ? '自重' : exercise.equipment}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs bg-surface-light text-gray-400">
            {exercise.force === 'push' ? '推类' : exercise.force === 'pull' ? '拉类' : exercise.force}
          </span>
        </div>

        <div className="mt-3 pt-3 border-t border-surface-light">
          <p className="text-sm font-medium text-primary-light">{exercise.setsReps}</p>
        </div>
      </div>

      {/* 目标肌群发力图谱 */}
      <div className="bg-surface rounded-2xl p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span>🎯</span> 目标肌群发力图谱
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          颜色越深 = 发力越主导。训练时把注意力集中在深色区域。
        </p>
        <div className="space-y-1">
          {exercise.primaryMuscles.filter(Boolean).map((m, i) => (
            <MuscleActivationBar key={`p-${i}`} muscle={m} level="high" isPrimary={true} />
          ))}
          {exercise.secondaryMuscles.filter(Boolean).map((m, i) => (
            <MuscleActivationBar key={`s-${i}`} muscle={m} level="medium" isPrimary={false} />
          ))}
        </div>
      </div>

      {/* 动作要领 */}
      <div className="bg-surface rounded-2xl p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span>📖</span> 动作要领
        </h3>
        <ol className="space-y-2">
          {exercise.instructions.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="text-primary-light font-bold flex-shrink-0">{i + 1}.</span>
              <span className="text-gray-300">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* 如何感受目标肌群发力 */}
      {enriched.mindMuscleConnection && enriched.mindMuscleConnection.length > 0 && (
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span>🧠</span> 如何感受目标肌群发力
          </h3>
          <ul className="space-y-2">
            {enriched.mindMuscleConnection.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-accent flex-shrink-0">✨</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 关键提示 */}
      {exercise.tips && exercise.tips.length > 0 && (
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span>💡</span> 关键提示
          </h3>
          <ul className="space-y-2">
            {exercise.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-yellow-400 flex-shrink-0">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 女生专属提示 */}
      {enriched.femaleTips && enriched.femaleTips.length > 0 && (
        <div className="bg-pink-500/5 border border-pink-500/20 rounded-2xl p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span>👩‍🎓</span> 给女生的特别提示
          </h3>
          <ul className="space-y-2">
            {enriched.femaleTips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-pink-400 flex-shrink-0">💗</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 握法/变式对比 */}
      {exercise.gripVariations && exercise.gripVariations.length > 0 && (
        <div className="bg-surface rounded-2xl p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span>🔄</span> 握法 / 变式对比
            <span className="text-xs text-gray-500 font-normal">
              (基于 Signorile 2002 EMG 研究 & NASM 指南)
            </span>
          </h3>
          <div className="space-y-3">
            {exercise.gripVariations.map((v, i) => (
              <div key={i} className="bg-surface-light rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{v.icon}</span>
                  <span className="font-medium text-sm">{v.name}</span>
                  {i === 0 && (
                    <span className="text-[10px] bg-primary/20 text-primary-light px-1.5 py-0.5 rounded-full">推荐</span>
                  )}
                </div>
                <p className="text-xs text-gray-400 ml-8">{v.effect}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 视频演示 */}
      <div className="bg-surface rounded-2xl p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span>🎬</span> 视频演示
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          看视频是学习正确动作最快的方式。建议在 WiFi 环境下打开。
        </p>
        <div className="space-y-2">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-surface-light rounded-xl p-3 hover:bg-primary/10 transition-colors"
          >
            <span className="text-xl">▶️</span>
            <div>
              <p className="text-sm text-gray-200">YouTube 搜索</p>
              <p className="text-xs text-gray-500">{enriched.nameEn || exercise.name} exercise demo</p>
            </div>
            <span className="ml-auto text-gray-600 text-sm">→</span>
          </a>
          <a
            href={bilibiliUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-surface-light rounded-xl p-3 hover:bg-primary/10 transition-colors"
          >
            <span className="text-xl">📺</span>
            <div>
              <p className="text-sm text-gray-200">B站搜索</p>
              <p className="text-xs text-gray-500">{exercise.name} 教学视频</p>
            </div>
            <span className="ml-auto text-gray-600 text-sm">→</span>
          </a>
        </div>
        <p className="text-[10px] text-gray-600 mt-2">
          💡 推荐 B站UP主：凯圣王（动作讲解最详细）、兔兔姐28（JEFF翻译）、戴夫健身（海外内容翻译）
        </p>
      </div>

      <p className="text-xs text-gray-600 text-center pb-4">
        动作数据参考 ACE / NASM / NSCA 研究 · 所有建议仅供参考
      </p>
    </div>
  )
}

// 图片加载失败时的肌肉可视化回退
function MuscleVisualization({ exercise }) {
  const allMuscles = [
    ...(exercise.primaryMuscles || []).filter(Boolean).map(m => ({ ...m, isPrimary: true })),
    ...(exercise.secondaryMuscles || []).filter(Boolean).map(m => ({ ...m, isPrimary: false })),
  ]

  return (
    <div className="aspect-[4/3] bg-surface-light flex flex-col items-center justify-center p-6">
      <p className="text-4xl mb-4">{exercise.primaryMuscles[0]?.icon || '💪'}</p>
      <p className="text-sm text-gray-400 mb-4 text-center">{exercise.name}</p>
      <div className="w-full max-w-xs space-y-1.5">
        {allMuscles.map((m, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs w-16 text-gray-500">{m.name}</span>
            <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: m.isPrimary ? '90%' : '50%',
                  background: m.isPrimary
                    ? `linear-gradient(90deg, ${m.color}, ${m.color}88)`
                    : `linear-gradient(90deg, ${m.color}88, ${m.color}44)`
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-4">📷 动作示范图加载中...</p>
    </div>
  )
}
