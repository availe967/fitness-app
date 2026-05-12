// 训练计划模板 — 基于 Schoenfeld 训练量研究和 ACSM 进阶模型
// 每组接近力竭（0-5 RIR），组间休息根据动作类型调整

export const trainingPlans = [
  {
    id: 'ppl-3day',
    name: '三分化 PPL',
    nameEn: 'Push / Pull / Legs',
    desc: '推/拉/腿三分化，每周训练3-4天，每个部位每周练1-2次。适合初学者到中级训练者，是最受欢迎的分化方式之一。',
    daysPerWeek: 3,
    icon: '🔺',
    days: [
      {
        id: 'push',
        name: '推日',
        nameEn: 'Push Day',
        focus: '胸部 + 肩部前中束 + 肱三头肌',
        warmup: [
          { name: '肩关节绕环', duration: '30秒/方向', desc: '手臂伸直画大圈，向前向后各30秒' },
          { name: '弹力带肩部激活', duration: '15次×2组', desc: '弹力带拉开+过顶推举，激活肩袖' },
          { name: '空杆卧推', duration: '15次×2组', desc: '用空杆感受发力，逐渐加重' }
        ],
        exercises: [
          { exerciseId: 'barbell-bench-press', sets: 4, reps: '8-12', rest: 120, note: '推日核心动作，优先做' },
          { exerciseId: 'incline-dumbbell-press', sets: 3, reps: '10-15', rest: 90, note: '上胸强化' },
          { exerciseId: 'dumbbell-shoulder-press', sets: 3, reps: '10-12', rest: 90, note: '前中束' },
          { exerciseId: 'lateral-raise', sets: 4, reps: '15-20', rest: 60, note: '中束——轻重量控制离心' },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 60, note: '三头收尾' },
          { exerciseId: 'overhead-tricep-extension', sets: 3, reps: '12-15', rest: 60, note: '长头拉伸' }
        ]
      },
      {
        id: 'pull',
        name: '拉日',
        nameEn: 'Pull Day',
        focus: '背部 + 肱二头肌 + 后束',
        warmup: [
          { name: '弹力带肩胛激活', duration: '15次×2组', desc: '弹力带拉开感受肩胛收缩' },
          { name: '直臂下压（轻重量）', duration: '20次×2组', desc: '激活背阔肌，找到发力感' }
        ],
        exercises: [
          { exerciseId: 'pull-up', sets: 4, reps: '力竭', rest: 120, note: '能做几个做几个，做不了用辅助机' },
          { exerciseId: 'barbell-row', sets: 4, reps: '8-12', rest: 90, note: '核心厚度动作' },
          { exerciseId: 'lat-pulldown-wide', sets: 3, reps: '10-15', rest: 75, note: '宽度发展' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 75, note: '中背厚度' },
          { exerciseId: 'face-pull', sets: 4, reps: '15-20', rest: 60, note: '后束+肩袖健康' },
          { exerciseId: 'barbell-curl', sets: 3, reps: '10-15', rest: 60, note: '' },
          { exerciseId: 'dumbbell-hammer-curl', sets: 3, reps: '12-15', rest: 60, note: '肱肌+前臂' }
        ]
      },
      {
        id: 'legs',
        name: '腿日',
        nameEn: 'Leg Day',
        focus: '股四头肌 + 腘绳肌 + 臀部 + 小腿',
        warmup: [
          { name: '空杆深蹲/高脚杯深蹲', duration: '12次×2-3组', desc: '逐渐增加负重，活动髋膝踝' },
          { name: '腿摆动（前后+侧向）', duration: '15次×2组', desc: '动态拉伸髋关节' },
          { name: '臀桥激活', duration: '20次×2组', desc: '激活臀肌' }
        ],
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '8-12', rest: 180, note: '腿日核心，充分休息保证质量' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', rest: 120, note: '腘绳肌+臀' },
          { exerciseId: 'leg-press', sets: 3, reps: '10-15', rest: 90, note: '补充股四头肌容量' },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', rest: 60, note: '股四头肌孤立收尾' },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60, note: '腘绳肌孤立' },
          { exerciseId: 'standing-calf-raise', sets: 4, reps: '15-20', rest: 45, note: '小腿——全幅度慢做' }
        ]
      }
    ]
  },
  {
    id: 'ppl-6day',
    name: '三分化 PPL（双循环）',
    nameEn: 'PPL 2x / Week',
    desc: '推拉腿 × 2轮/周 = 6天训练。每个部位每周刺激2次，适合有一定训练基础的中级训练者。研究显示每周2次频率优于1次。',
    daysPerWeek: 6,
    icon: '🔺🔺',
    days: [
      {
        id: 'push1',
        name: '推日 A（大重量）',
        nameEn: 'Push A - Heavy',
        focus: '以杠铃为主，大重量低次数，侧重力量发展',
        warmup: [
          { name: '肩关节绕环', duration: '30秒/方向' },
          { name: '弹力带肩袖激活', duration: '15次×2组' },
          { name: '卧推热身组', duration: '空杆×15, 50%×8, 70%×5, 85%×3' }
        ],
        exercises: [
          { exerciseId: 'barbell-bench-press', sets: 5, reps: '5-8', rest: 180, note: '大重量日，RPE 8-9' },
          { exerciseId: 'incline-dumbbell-press', sets: 3, reps: '8-10', rest: 90 },
          { exerciseId: 'dumbbell-shoulder-press', sets: 4, reps: '8-10', rest: 90 },
          { exerciseId: 'lateral-raise', sets: 3, reps: '15-20', rest: 60 },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '10-12', rest: 60 }
        ]
      },
      {
        id: 'pull1',
        name: '拉日 A（大重量）',
        nameEn: 'Pull A - Heavy',
        focus: '引体+杠铃划船为主，大重量发展背部力量',
        warmup: [
          { name: '弹力带肩胛激活', duration: '15次×2组' }
        ],
        exercises: [
          { exerciseId: 'pull-up', sets: 4, reps: '5-8', rest: 150, note: '可负重' },
          { exerciseId: 'barbell-row', sets: 4, reps: '6-10', rest: 120 },
          { exerciseId: 'lat-pulldown-wide', sets: 3, reps: '8-12', rest: 90 },
          { exerciseId: 'face-pull', sets: 3, reps: '15-20', rest: 60 },
          { exerciseId: 'barbell-curl', sets: 3, reps: '8-10', rest: 60 }
        ]
      },
      {
        id: 'legs1',
        name: '腿日 A（大重量）',
        nameEn: 'Legs A - Heavy',
        focus: '深蹲为主，大重量发展下肢力量',
        warmup: [
          { name: '高脚杯深蹲热身', duration: '空杆×10, 50%×8, 70%×5' }
        ],
        exercises: [
          { exerciseId: 'barbell-squat', sets: 5, reps: '5-8', rest: 180, note: '大重量日核心' },
          { exerciseId: 'romanian-deadlift', sets: 4, reps: '8-10', rest: 120 },
          { exerciseId: 'leg-press', sets: 3, reps: '8-12', rest: 90 },
          { exerciseId: 'standing-calf-raise', sets: 4, reps: '12-15', rest: 45 }
        ]
      },
      {
        id: 'push2',
        name: '推日 B（高容量）',
        nameEn: 'Push B - Volume',
        focus: '以哑铃/器械为主，中高次数，侧重肌肉泵感和代谢压力',
        warmup: [
          { name: '肩关节绕环', duration: '30秒/方向' },
          { name: '弹力带肩袖激活', duration: '15次×2组' }
        ],
        exercises: [
          { exerciseId: 'dumbbell-bench-press', sets: 4, reps: '10-15', rest: 75, note: '高次数追求泵感' },
          { exerciseId: 'incline-dumbbell-press', sets: 3, reps: '12-15', rest: 75 },
          { exerciseId: 'cable-fly', sets: 3, reps: '15-20', rest: 60 },
          { exerciseId: 'lateral-raise', sets: 5, reps: '15-25', rest: 45, note: '高容量刺激中束' },
          { exerciseId: 'rear-delt-fly', sets: 3, reps: '15-20', rest: 45 },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '15-20', rest: 45 },
          { exerciseId: 'overhead-tricep-extension', sets: 3, reps: '15-20', rest: 45 }
        ]
      },
      {
        id: 'pull2',
        name: '拉日 B（高容量）',
        nameEn: 'Pull B - Volume',
        focus: '更多孤立动作和器械，高次数追求泵感',
        warmup: [
          { name: '弹力带肩胛激活', duration: '15次×2组' }
        ],
        exercises: [
          { exerciseId: 'lat-pulldown-wide', sets: 4, reps: '12-15', rest: 60 },
          { exerciseId: 'seated-cable-row', sets: 4, reps: '12-15', rest: 60 },
          { exerciseId: 'dumbbell-row', sets: 3, reps: '12-15/侧', rest: 45 },
          { exerciseId: 'face-pull', sets: 4, reps: '15-20', rest: 45, note: '对改善体态非常重要' },
          { exerciseId: 'dumbbell-hammer-curl', sets: 4, reps: '12-15', rest: 45 }
        ]
      },
      {
        id: 'legs2',
        name: '腿日 B（高容量）',
        nameEn: 'Legs B - Volume',
        focus: '以器械为主，中高次数，侧重肌肉感受和代谢压力',
        warmup: [
          { name: '高脚杯深蹲', duration: '15次×2组' }
        ],
        exercises: [
          { exerciseId: 'leg-press', sets: 4, reps: '12-20', rest: 90, note: '高容量积累' },
          { exerciseId: 'leg-extension', sets: 4, reps: '15-20', rest: 60 },
          { exerciseId: 'lying-leg-curl', sets: 4, reps: '15-20', rest: 60 },
          { exerciseId: 'hip-thrust', sets: 3, reps: '12-15', rest: 75 },
          { exerciseId: 'standing-calf-raise', sets: 4, reps: '20-30', rest: 45, note: '小腿高容量' }
        ]
      }
    ]
  },
  {
    id: 'bro-split',
    name: '五分化',
    nameEn: 'Bro Split',
    desc: '经典健美分化：胸/背/肩/手臂/腿各一天。每个部位每周练1次，单次训练量充沛。适合中高级训练者或有充足训练时间的爱好者。',
    daysPerWeek: 5,
    icon: '⭐',
    days: [
      {
        id: 'chest',
        name: '胸部日',
        nameEn: 'Chest Day',
        focus: '胸大肌（上胸+中胸+下胸）',
        warmup: [
          { name: '肩关节绕环', duration: '30秒/方向' },
          { name: '弹力带水平外展', duration: '15次×2组' },
          { name: '空杆卧推', duration: '15次×2组' }
        ],
        exercises: [
          { exerciseId: 'barbell-bench-press', sets: 4, reps: '8-12', rest: 120, note: '优先做大重量复合动作' },
          { exerciseId: 'incline-dumbbell-press', sets: 4, reps: '10-15', rest: 90, note: '上胸——重点区域' },
          { exerciseId: 'dumbbell-bench-press', sets: 3, reps: '10-12', rest: 75, note: '哑铃更深拉伸' },
          { exerciseId: 'cable-fly', sets: 3, reps: '15-20', rest: 60, note: '高滑轮侧重下胸' },
          { exerciseId: 'pec-deck-fly', sets: 3, reps: '12-15', rest: 60, note: '收尾孤立动作' }
        ]
      },
      {
        id: 'back',
        name: '背部日',
        nameEn: 'Back Day',
        focus: '背阔肌 + 上背 + 竖脊肌',
        warmup: [
          { name: '弹力带肩胛激活', duration: '15次×2组' },
          { name: '直臂下压', duration: '20次×2组（轻重量）' }
        ],
        exercises: [
          { exerciseId: 'pull-up', sets: 4, reps: '力竭', rest: 120, note: '宽度核心' },
          { exerciseId: 'barbell-row', sets: 4, reps: '8-12', rest: 90, note: '厚度核心' },
          { exerciseId: 'lat-pulldown-wide', sets: 3, reps: '10-15', rest: 75 },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 75 },
          { exerciseId: 'dumbbell-row', sets: 3, reps: '10-12/侧', rest: 60 }
        ]
      },
      {
        id: 'shoulders',
        name: '肩部日',
        nameEn: 'Shoulder Day',
        focus: '三角肌前束+中束+后束',
        warmup: [
          { name: '肩关节绕环', duration: '30秒/方向' },
          { name: '轻重量侧平举+前平举', duration: '各15次' }
        ],
        exercises: [
          { exerciseId: 'dumbbell-shoulder-press', sets: 4, reps: '8-12', rest: 90, note: '肩部核心动作' },
          { exerciseId: 'lateral-raise', sets: 5, reps: '15-25', rest: 45, note: '中束最关键——决定肩宽' },
          { exerciseId: 'rear-delt-fly', sets: 4, reps: '15-20', rest: 45, note: '后束常被忽视但很重要' },
          { exerciseId: 'face-pull', sets: 4, reps: '15-20', rest: 60, note: '肩袖健康+后束' }
        ]
      },
      {
        id: 'arms',
        name: '手臂日',
        nameEn: 'Arm Day',
        focus: '肱二头肌 + 肱三头肌 + 前臂',
        warmup: [
          { name: '轻重量弯举+下压', duration: '各15次×2组' },
          { name: '手腕绕环', duration: '30秒' }
        ],
        exercises: [
          { exerciseId: 'barbell-curl', sets: 4, reps: '8-12', rest: 60 },
          { exerciseId: 'dumbbell-hammer-curl', sets: 3, reps: '10-15', rest: 45 },
          { exerciseId: 'tricep-pushdown', sets: 4, reps: '10-15', rest: 60 },
          { exerciseId: 'overhead-tricep-extension', sets: 3, reps: '12-15', rest: 45 },
          { exerciseId: 'dumbbell-hammer-curl', sets: 3, reps: '12-15', rest: 45, note: '超级组搭配三头动作效果更佳' }
        ]
      },
      {
        id: 'legs-bro',
        name: '腿部日',
        nameEn: 'Leg Day',
        focus: '股四头肌 + 腘绳肌 + 臀肌 + 小腿',
        warmup: [
          { name: '空杆深蹲', duration: '12次×3组（逐渐加重）' },
          { name: '腿摆动', duration: '前后+侧向，各15次' },
          { name: '臀桥', duration: '20次×2组' }
        ],
        exercises: [
          { exerciseId: 'barbell-squat', sets: 5, reps: '8-12', rest: 180, note: '腿日灵魂' },
          { exerciseId: 'leg-press', sets: 4, reps: '10-15', rest: 90 },
          { exerciseId: 'romanian-deadlift', sets: 4, reps: '10-12', rest: 120 },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', rest: 60 },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60 },
          { exerciseId: 'hip-thrust', sets: 3, reps: '12-15', rest: 75 },
          { exerciseId: 'standing-calf-raise', sets: 4, reps: '15-25', rest: 45 }
        ]
      }
    ]
  },
  {
    id: 'upper-lower',
    name: '上下肢分化',
    nameEn: 'Upper / Lower Split',
    desc: '上肢/下肢交替，每周4天。每个部位每周刺激2次，频率优势明显。适合时间有限但想高效训练的训练者。',
    daysPerWeek: 4,
    icon: '↕️',
    days: [
      {
        id: 'upper1',
        name: '上肢 A',
        nameEn: 'Upper A - Strength',
        focus: '胸+背大重量',
        warmup: [
          { name: '肩关节绕环', duration: '30秒/方向' },
          { name: '弹力带肩袖+肩胛激活', duration: '各15次×2组' }
        ],
        exercises: [
          { exerciseId: 'barbell-bench-press', sets: 4, reps: '6-10', rest: 120 },
          { exerciseId: 'barbell-row', sets: 4, reps: '6-10', rest: 120 },
          { exerciseId: 'dumbbell-shoulder-press', sets: 3, reps: '8-12', rest: 90 },
          { exerciseId: 'lat-pulldown-wide', sets: 3, reps: '10-15', rest: 75 },
          { exerciseId: 'lateral-raise', sets: 3, reps: '15-20', rest: 60 },
          { exerciseId: 'barbell-curl', sets: 2, reps: '10-12', rest: 45 },
          { exerciseId: 'tricep-pushdown', sets: 2, reps: '10-12', rest: 45 }
        ]
      },
      {
        id: 'lower1',
        name: '下肢 A',
        nameEn: 'Lower A',
        focus: '股四头肌+腘绳肌+小腿',
        warmup: [
          { name: '空杆深蹲', duration: '12次×3组' },
          { name: '臀桥', duration: '20次×2组' }
        ],
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '6-10', rest: 180 },
          { exerciseId: 'romanian-deadlift', sets: 4, reps: '8-12', rest: 120 },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', rest: 60 },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60 },
          { exerciseId: 'standing-calf-raise', sets: 4, reps: '15-20', rest: 45 }
        ]
      },
      {
        id: 'upper2',
        name: '上肢 B',
        nameEn: 'Upper B - Volume',
        focus: '高容量上肢训练',
        warmup: [
          { name: '肩关节绕环', duration: '30秒/方向' },
          { name: '弹力带激活', duration: '各15次×2组' }
        ],
        exercises: [
          { exerciseId: 'dumbbell-bench-press', sets: 4, reps: '10-15', rest: 75 },
          { exerciseId: 'pull-up', sets: 4, reps: '力竭', rest: 120 },
          { exerciseId: 'incline-dumbbell-press', sets: 3, reps: '12-15', rest: 60 },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '12-15', rest: 60 },
          { exerciseId: 'face-pull', sets: 4, reps: '15-20', rest: 45 },
          { exerciseId: 'dumbbell-hammer-curl', sets: 3, reps: '12-15', rest: 45 }
        ]
      },
      {
        id: 'lower2',
        name: '下肢 B',
        nameEn: 'Lower B',
        focus: '后链+高容量',
        warmup: [
          { name: '高脚杯深蹲', duration: '15次×2组' },
          { name: '臀桥', duration: '20次×2组' }
        ],
        exercises: [
          { exerciseId: 'leg-press', sets: 4, reps: '12-20', rest: 90 },
          { exerciseId: 'hip-thrust', sets: 4, reps: '10-15', rest: 75 },
          { exerciseId: 'leg-extension', sets: 3, reps: '15-20', rest: 60 },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '15-20', rest: 60 },
          { exerciseId: 'standing-calf-raise', sets: 4, reps: '20-25', rest: 45 }
        ]
      }
    ]
  }
]

export const programTips = {
  restBetweenSets: {
    heavy: { range: '3-5分钟', desc: '大重量复合动作（深蹲、卧推、硬拉）需要充分恢复以保证每组质量' },
    moderate: { range: '60-90秒', desc: '中等重量动作的最佳休息区间——平衡恢复和训练密度' },
    light: { range: '45-60秒', desc: '孤立动作/小肌群可用较短休息提高代谢压力' }
  },
  progression: {
    beginner: '每周尝试增加1.25-2.5kg或增加1-2次重复',
    intermediate: '双循环渐进：每次训练尝试比上次进步一点（重量或次数）',
    advanced: '周期化：波动强度（大重量周 → 高容量周 → 减载周）'
  },
  deload: '每6-8周安排1周减载（训练量减半或强度降低20%），让身体充分恢复'
}

export function getPlanById(id) {
  return trainingPlans.find(p => p.id === id)
}

export function getTodayPlan(planId, rotationIndex = null) {
  const plan = getPlanById(planId)
  if (!plan) return null

  // 如果没有指定rotation，根据当前日期计算
  if (rotationIndex === null) {
    const startDate = localStorage.getItem(`plan_start_${planId}`)
    if (!startDate) {
      rotationIndex = 1 // 默认第一天
    } else {
      const daysSinceStart = Math.floor(
        (Date.now() - parseInt(startDate)) / (1000 * 60 * 60 * 24)
      )
      rotationIndex = (daysSinceStart % plan.days.length)
    }
  }

  return plan.days[rotationIndex % plan.days.length]
}
