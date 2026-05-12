// 动作补充数据：英文名、发力感受提示、女生专属提示
// 按 exerciseId 索引，在 ExerciseDetail 中合并展示

export const exerciseMeta = {
  'barbell-bench-press': {
    nameEn: 'Barbell Bench Press',
    mindMuscleConnection: [
      '推起时想象"把杠铃推离身体"，而不是"把杠铃推上天"',
      '全程保持肩胛骨夹紧——如果肩膀往前送了，说明胸部失去了张力',
      '底部轻触胸部时暂停0.5秒，感受胸肌的拉伸，然后爆发推起',
      '用小重量先找到"胸肌酸胀"的感觉，再加重量'
    ],
    femaleTips: [
      '练胸不会让胸部变小或变硬——胸肌在乳腺下方，反而能让胸型更挺拔',
      '女生上肢力量较弱，建议从空杆或哑铃开始，先掌握动作再加重',
      '经期前3天可能力量下降10-15%，这是正常的，无需焦虑'
    ]
  },
  'dumbbell-bench-press': {
    nameEn: 'Dumbbell Bench Press',
    mindMuscleConnection: [
      '下降时感受胸肌向外侧拉伸，推起时感受胸肌向中间收缩',
      '与杠铃不同，哑铃可以让手腕自然旋转，找到最舒适的发力角度',
      '顶端两个哑铃不要相碰——保持张力不中断'
    ],
    femaleTips: [
      '哑铃比杠铃对肩关节更友好，特别适合女生入门',
      '从2-5kg哑铃开始，能标准完成15次再考虑加重量'
    ]
  },
  'lat-pulldown-wide': {
    nameEn: 'Lat Pulldown (Wide Grip)',
    mindMuscleConnection: [
      '启动前先下沉肩膀——想象"把肩胛骨放进后口袋"',
      '下拉时想象"用肘部去够地板"，而不是用手拉',
      '上半程感受背阔肌的发力，底部感受肩胛骨之间的挤压',
      '回放时不要一下子松掉——控制2-3秒慢放，感受背阔肌被拉长',
      '如果感觉手臂先酸了，减轻重量重新找感觉'
    ],
    femaleTips: [
      '高位下拉是改善"圆肩驼背"体态的黄金动作，对长期伏案的女生特别友好',
      '女生通常背部力量偏弱，从轻重量开始，重点放在"找到背部发力感"',
      '练背不会让背变厚变壮——女生睾酮水平很低，只会让背部线条更好看'
    ]
  },
  'barbell-row': {
    nameEn: 'Barbell Row',
    mindMuscleConnection: [
      '启动时先做肩胛骨后缩（夹背），再用肘部带动杠铃上拉',
      '想象"用背部把手拉到腹部"，而不是用手臂',
      '顶峰时感受肩胛骨之间的挤压，保持1秒',
      '躯干角度决定刺激区域——越接近平行越偏上背，越直立越偏下背'
    ]
  },
  'pull-up': {
    nameEn: 'Pull Up',
    mindMuscleConnection: [
      '悬挂时先做"沉肩"再拉——这是区分背部引体和手臂引体的关键',
      '拉到顶端时挺胸，让锁骨靠近单杠',
      '不要摆动身体借力——做不标准宁愿用辅助或弹力带'
    ],
    femaleTips: [
      '女生能做1个标准引体已经非常厉害了！大部分人需要从辅助开始',
      '用弹力带辅助或引体向上辅助机是很好的入门方式',
      '哪怕现在一个做不了，坚持练高位下拉和划船，3-6个月后就能拉起第一个'
    ]
  },
  'dumbbell-shoulder-press': {
    nameEn: 'Dumbbell Shoulder Press',
    mindMuscleConnection: [
      '手肘保持在前方45度（不是侧面90度），减少肩关节压力',
      '推到顶端时不要耸肩——耳朵和肩膀保持距离',
      '下降时感受前束的拉伸，推起时感受前束的收缩'
    ],
    femaleTips: [
      '练肩能让肩部线条更明显，视觉上显得腰更细',
      '肩部训练不会让肩膀变"宽壮"——女性的骨骼结构和激素决定了不会'
    ]
  },
  'lateral-raise': {
    nameEn: 'Dumbbell Lateral Raise',
    mindMuscleConnection: [
      '肘部微屈并保持角度不变——变化的是肩关节而非肘关节',
      '想象"把哑铃向远处延伸"，而非"向上抬"',
      '用小拇指侧略高于大拇指——像倒水壶一样',
      '不要用超过你能控制的重量——借力就失去了中束刺激'
    ],
    femaleTips: [
      '侧平举是打造"直角肩"视觉效果的关键动作',
      '用1-3kg哑铃即可，高次数（15-25次）效果远好于大重量低次数',
      '肩部训练后第二天酸痛是正常的，说明练到位了'
    ]
  },
  'face-pull': {
    nameEn: 'Face Pull',
    mindMuscleConnection: [
      '拉到面部时同时外旋手腕——这个细节激活肩袖肌群',
      '想象"用后束把绳子拉开"而非"用手拉"',
      '保持肘部高位，感受后束和上背的收缩'
    ],
    femaleTips: [
      '面拉是改善"圆肩""探颈"体态的必做动作',
      '对长期用电脑/手机的女生来说是预防肩颈问题的良药',
      '轻重量高次数（15-20次）即可，不求大重量'
    ]
  },
  'barbell-squat': {
    nameEn: 'Barbell Squat',
    mindMuscleConnection: [
      '下降时想象"坐到一个看不见的椅子上"，膝盖方向与脚尖一致',
      '脚掌全程抓地——想象"脚趾抓毛巾"保持足弓',
      '发力起身时用臀部和大腿一起推，而不是单纯用腰',
      '底部暂停时保持核心紧绷，不要弹起'
    ],
    femaleTips: [
      '深蹲是打造翘臀的首选动作之一，但需要足够的深度（大腿至少平行地面）',
      '女生通常柔韧性更好，更容易做到标准深蹲——发挥这个优势',
      '经期前两天如果腰痛可以暂停深蹲，改做腿举等腰部压力小的动作',
      '不用担心会练成"大粗腿"——女生增肌速度远慢于男生，适量训练只会让腿部更紧致'
    ]
  },
  'romanian-deadlift': {
    nameEn: 'Romanian Deadlift',
    mindMuscleConnection: [
      '动作来自臀部后推，而非身体前倾——核心感受是"臀向后，杠贴腿"',
      '下降时感受腘绳肌像皮筋一样被拉长',
      '起身时臀肌发力向前推髋——顶峰夹臀1秒',
      '全程保持背部挺直——如果下背酸了说明用腰代偿了'
    ],
    femaleTips: [
      '罗马尼亚硬拉是女生塑形后侧链（翘臀+美腿后侧）的最佳动作之一',
      '从轻重量或空杆开始，重点放在感受腘绳肌和臀部发力'
    ]
  },
  'hip-thrust': {
    nameEn: 'Hip Thrust',
    mindMuscleConnection: [
      '顶端用力夹臀1-2秒——这是臀推最关键的部分',
      '下巴微收，眼看前方下方——避免过度弓腰',
      '发力来自臀部而非腰椎——如果腰酸说明姿势不对',
      '膝盖保持约90度——角度过大会让腘绳肌抢走臀部的工作'
    ],
    femaleTips: [
      '臀推是公认的"翘臀王牌动作"，对臀大肌的激活程度在众多研究中排名第一',
      '建议使用海绵套保护髋部——女生髋骨较突出，直接放杠铃会很疼',
      '可以在经期做——臀推对腰腹压力小，是经期友好的下肢动作',
      '每周2-3次臀推，配合足量蛋白质，能看到臀型的明显改善'
    ]
  },
  'leg-press': {
    nameEn: 'Leg Press',
    mindMuscleConnection: [
      '下降时感受股四头肌的拉伸，推起时用脚跟发力（不是脚尖）',
      '不要锁死膝盖——始终保持微屈保护关节',
      '脚位越高越偏臀和腘绳肌，脚位越低越偏股四头肌'
    ]
  },
  'barbell-curl': {
    nameEn: 'Barbell Curl',
    mindMuscleConnection: [
      '上臂全程紧贴身体两侧不动——如果上臂前后晃就是借力了',
      '弯举到顶端时额外挤压肱二头肌1秒',
      '控制下降（2-3秒）比弯举更重要——离心收缩是增肌的关键'
    ]
  },
  'tricep-pushdown': {
    nameEn: 'Tricep Pushdown',
    mindMuscleConnection: [
      '上臂全程锁在身体两侧——前臂是唯一移动的部分',
      '底部手腕外旋（如果使用绳索）可以额外激活三头肌外侧头',
      '不要用身体重量下压——找合适的重量而不是最重的'
    ]
  },
  'plank': {
    nameEn: 'Plank',
    mindMuscleConnection: [
      '收紧腹部，感觉肚脐向脊柱方向收——想象"肚子要挨一拳"',
      '收紧臀部不让髋部下塌——身体是一条直线而不是V字',
      '不要憋气——保持均匀呼吸，鼻子吸气嘴呼气'
    ],
    femaleTips: [
      '平板支撑是核心训练的基础——练的不是腹肌外形而是深层稳定性',
      '经期可以正常做平板支撑，有助于缓解经期腰痛',
      '不要追求时间长度——标准姿势30秒比塌腰3分钟有效得多'
    ]
  },
  'hanging-leg-raise': {
    nameEn: 'Hanging Leg Raise',
    mindMuscleConnection: [
      '启动时骨盆先卷起（后倾），再抬腿——这样才是腹肌在发力而非髋屈肌',
      '下降时要控制，不要让腿自由落体——离心阶段腹部同样在工作',
      '如果直腿太难先做屈膝版，核心是感受腹部收缩而非腿抬多高'
    ]
  },
  'rear-delt-fly': {
    nameEn: 'Rear Delt Fly',
    mindMuscleConnection: [
      '用后束的力量将哑铃向外上方打开，手掌始终朝下',
      '想象"用肩胛骨把哑铃推开"',
      '不要耸肩——保持肩膀下沉'
    ]
  },
  'dumbbell-row': {
    nameEn: 'Dumbbell Row',
    mindMuscleConnection: [
      '三步法（NASM）：先缩肩胛 → 再拉肘 → 顶端暂停',
      '想象"用肘部去点天花板"而非"拉哑铃"',
      '不要旋转躯干借力——如果身体在扭说明重量太大了'
    ]
  },
  'cable-fly': {
    nameEn: 'Cable Fly',
    mindMuscleConnection: [
      '肘部角度全程保持不变，变化的只有肩关节——不要推',
      '合拢时想象"抱一棵大树"，用胸部挤压',
      '回放时感受胸肌被拉开——控制速度，不要弹回去'
    ]
  },
  'leg-extension': {
    nameEn: 'Leg Extension',
    mindMuscleConnection: [
      '顶端完全伸直但不锁死，额外挤压股四头肌1秒',
      '脚尖微向外旋转可以更好刺激股四头肌内侧头（VMO，膝盖上方的泪滴形肌肉）',
      '控制离心下放——2-3秒下降比快速弹回效果好得多'
    ]
  },
  'lying-leg-curl': {
    nameEn: 'Lying Leg Curl',
    mindMuscleConnection: [
      '弯举时想象"用脚跟去够臀部"',
      '顶峰时夹紧腘绳肌1秒',
      '全程臀部不要离开垫面——如果臀部翘起了说明重量太大'
    ]
  },
  'incline-dumbbell-press': {
    nameEn: 'Incline Dumbbell Press',
    mindMuscleConnection: [
      '下降时哑铃落点在上胸/锁骨位置——比平板卧推更高',
      '感受上胸的拉伸和收缩——如果只感觉肩膀累说明角度太高或姿势不对',
      '30度倾斜最能孤立上胸——超过45度前束会主导'
    ]
  },
  'seated-cable-row': {
    nameEn: 'Seated Cable Row',
    mindMuscleConnection: [
      '启动时先缩肩胛骨再动手臂——顺序决定是练背还是练手臂',
      '顶峰时挺胸夹背1-2秒',
      '回放时肩胛骨自然前伸，感受背部被拉伸'
    ]
  },
  'dumbbell-hammer-curl': {
    nameEn: 'Dumbbell Hammer Curl',
    mindMuscleConnection: [
      '掌心始终相对（中立握），与普通弯举的发力角度不同',
      '侧重手臂外侧的肱肌和前臂——是增加手臂厚度的关键'
    ]
  },
  'overhead-tricep-extension': {
    nameEn: 'Overhead Tricep Extension',
    mindMuscleConnection: [
      '上臂全程贴近耳朵不动——只有前臂在移动',
      '底部感受三头肌长头的拉伸——这是少数能充分拉伸长头的动作',
      '单臂做比双臂做更容易找到发力感'
    ]
  },
  'standing-calf-raise': {
    nameEn: 'Standing Calf Raise',
    mindMuscleConnection: [
      '底部完全下放感受小腿拉伸，顶端用力踮到最高点',
      '顶峰停顿1-2秒——小腿训练停顿很重要',
      '全幅度运动——半程提踵收益减半'
    ]
  },
  'pec-deck-fly': {
    nameEn: 'Pec Deck Fly',
    mindMuscleConnection: [
      '手臂不是主动夹——是胸部发力把靠垫向中间推',
      '顶峰挤压胸肌1-2秒，感受胸肌的充血泵感',
      '适合放在训练末尾做收尾动作'
    ]
  },
  'cable-crunch': {
    nameEn: 'Cable Crunch',
    mindMuscleConnection: [
      '用腹肌卷曲躯干——想象用胸腔去靠近骨盆，而非弯腰',
      '呼气时卷腹、吸气时回放',
      '臀部保持不动——如果臀部在移动说明用了髋屈肌'
    ]
  },
  'russian-twist': {
    nameEn: 'Russian Twist',
    mindMuscleConnection: [
      '旋转来自躯干而非手臂——手臂只是随动',
      '核心全程收紧保持稳定——如果坐不稳可以先脚着地',
      '配合呼吸：转到侧面时呼气，回中时吸气'
    ]
  }
}
