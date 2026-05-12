// 鼓励机制 — 训练前/中/后随机展示

export const preWorkout = [
  "今天又是变强的一天！🔥",
  "每一次训练都是对昨天的自己的超越 💪",
  "别想太多，先热身，状态会来的 🏃‍♀️",
  "最强的人不是从不跌倒，而是每次都能重新站起来",
  "你的身体比你想象中强大得多 💫",
  "先完成，再完美——开始就是成功的一半 ✨",
  "流的每一滴汗都在雕刻更好的自己",
  "训练前的紧张是好事——说明你的身体准备好了",
  "今天选择训练而不是躺着，你已经赢了99%的人 🏆",
  "力量训练让你由内而外地自信——不只是身材，更是内心的强大",
  "照顾好自己，就是对这个世界最好的回应 🌸",
  "漂亮是给别人看的，强壮是给自己用的——两者你可以同时拥有 💗",
]

export const duringWorkout = [
  "专注当下这一组，别想后面的 💭",
  "控制离心，慢一点更有效！🐢",
  "呼吸节奏不要乱——发力时呼气",
  "最后一组了，你可以的！💪",
  "如果这组能完成，你就又进步了",
  "感受目标肌肉的发力——重量只是工具，肌肉的酸胀感才是目标 ✨",
  "每次训练都在积累微小的进步，量变终会质变",
  "不要着急，质量大于数量——宁可轻但做对，不要重但做错",
  "力竭说明你在突破舒适区——这是肌肉生长的信号 📈",
  "这组做完后的酸胀感，就是身体在说：我在变强了！",
  "不要和旁边的男生比重量——你练的是自己，不是跟别人比赛 🎯",
]

export const postWorkout = [
  "太棒了！今天的你比昨天更强 🎉",
  "训练完成！别忘了补充蛋白质和水分 💧",
  "每一个完成训练的日子都是胜利 ✌️",
  "你离目标又近了一步！",
  "好好休息，肌肉在休息时生长的 🛌",
  "今天完成的是很多人明天也不想开始的事 👏",
  "记住今天训练后的感觉，下次训练前回想它——这就是动力",
  "给自己一个微笑——你真的做到了 💯",
  "不只是身材在变好——你的意志力、自律、自信都在同步增长 🌱",
  "健身是一场和自己的对话，不是和别人的竞赛 ❤️",
  "你流的汗不会背叛你，每一次训练都在为你想要的自己投票 🗳️",
  "好的身材是健身最不重要的副产品——健康、力量、自信才是一辈子的财富 💎",
]

export const weightChange = {
  down: [
    "体重在下降！继续保持健康的节奏 📉",
    "看到努力有回报的感觉真好 💫",
    "减脂是个长跑，你正在正确的路上",
    "每周0.5-1kg的下降是最健康的速度",
  ],
  stable: [
    "体重稳定中，这是很好的维持状态 ⚖️",
    "保持体重也是一种能力",
    "不变总比上涨好，继续观察趋势 📊",
  ],
  up: [
    "体重上升了，如果是增肌那就是好信号 💪",
    "单日波动正常——看长期趋势而非单点",
    "生理期、水分、碳水摄入都会影响短期体重 📈",
    "别忘了：体重只是数据之一，镜子才是最好的衡量",
  ],
}

export const streak = {
  new: "新的连续训练记录开始！坚持就是胜利 🚀",
  three: "三天了！已经养成节奏感了 🎵",
  seven: "一周连续训练！你已经超过了大多数人 👑",
  fourteen: "两周！习惯正在深入骨髓 🧬",
  thirty: "一个月！这已经不是坚持，而是生活方式了 🔥",
}

export function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getEncouragementPhase(phase) {
  const map = { pre: preWorkout, during: duringWorkout, post: postWorkout }
  return getRandom(map[phase] || preWorkout)
}

export function getWeightMessage(change) {
  const key = change < -0.3 ? 'down' : change > 0.3 ? 'up' : 'stable'
  return getRandom(weightChange[key])
}

export function getStreakMessage(streak) {
  if (streak >= 30) return streak.thirty
  if (streak >= 14) return streak.fourteen
  if (streak >= 7) return streak.seven
  if (streak >= 3) return streak.three
  return streak.new
}
