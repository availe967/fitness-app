// 基于 ACE/NSCA EMG 研究验证的动作库
// 动作要领参考 NSCA Exercise Technique Manual & ACE 研究

export const muscleGroups = {
  chest: { name: '胸部', icon: '🫁', color: '#ef4444' },
  back: { name: '背部', icon: '🔙', color: '#3b82f6' },
  shoulders: { name: '肩部', icon: '💪', color: '#f59e0b' },
  biceps: { name: '肱二头肌', icon: '💪', color: '#10b981' },
  triceps: { name: '肱三头肌', icon: '💪', color: '#06b6d4' },
  legs: { name: '腿部', icon: '🦵', color: '#8b5cf6' },
  glutes: { name: '臀部', icon: '🍑', color: '#ec4899' },
  abs: { name: '腹部', icon: '🧱', color: '#f97316' },
  calves: { name: '小腿', icon: '🦶', color: '#64748b' },
  forearms: { name: '前臂', icon: '🤲', color: '#78716c' },
}

export const exercises = [
  // ========== 胸部 ==========
  {
    id: 'barbell-bench-press',
    name: '杠铃平板卧推',
    category: 'chest',
    force: 'push',
    level: 'intermediate',
    mechanic: 'compound',
    equipment: 'barbell',
    primaryMuscles: [muscleGroups.chest],
    secondaryMuscles: [muscleGroups.shoulders, muscleGroups.triceps],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press/1.jpg'
    ],
    instructions: [
      '仰卧平板凳上，眼睛位于杠铃正下方',
      '双脚平放地面，臀部、上背、头部五点接触凳面',
      '正手闭握，握距略宽于肩（约肩宽1.5倍）',
      '出杠后杠铃位于锁骨正上方，手臂伸直但不锁死',
      '吸气，控制杠铃下放至下胸/胸骨下段位置，肘部与身体呈45-75度',
      '杠铃轻触胸部后发力推起，呼气',
      '全程保持肩胛骨收紧，不要耸肩'
    ],
    tips: [
      '握距越宽，胸部受力越大；越窄，肱三头肌参与越多',
      '肘部不要过度外展（90度），增加肩关节压力',
      '推大重量必须有保护者',
      '脚用力蹬地提供稳定性（腿部驱动）'
    ],
    setsReps: '3-5组 × 5-12次'
  },
  {
    id: 'dumbbell-bench-press',
    name: '哑铃平板卧推',
    category: 'chest',
    force: 'push',
    level: 'beginner',
    mechanic: 'compound',
    equipment: 'dumbbell',
    primaryMuscles: [muscleGroups.chest],
    secondaryMuscles: [muscleGroups.shoulders, muscleGroups.triceps],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/1.jpg'
    ],
    instructions: [
      '仰卧平板凳，双手持哑铃置于大腿上',
      '用大腿将哑铃蹬起至肩部高度，掌心朝前',
      '推起哑铃至胸部上方，手臂伸直但不锁死',
      '吸气，控制哑铃下放至胸部两侧，肘部约呈45度',
      '下放到胸部有拉伸感（哑铃比杠铃行程更深）',
      '发力推起，顶端可稍微内收挤压胸肌'
    ],
    tips: [
      '相比杠铃，哑铃行程更大、对肩关节更友好',
      '下降更深可以更好拉伸胸肌纤维',
      '上大重量时注意安全，建议有搭档协助',
      '哑铃不要相碰——保持肌肉持续张力'
    ],
    setsReps: '3-4组 × 8-15次'
  },
  {
    id: 'incline-dumbbell-press',
    name: '上斜哑铃卧推',
    category: 'chest',
    force: 'push',
    level: 'beginner',
    mechanic: 'compound',
    equipment: 'dumbbell',
    primaryMuscles: [muscleGroups.chest],
    secondaryMuscles: [muscleGroups.shoulders, muscleGroups.triceps],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Bench_Press/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Bench_Press/1.jpg'
    ],
    instructions: [
      '将可调凳调至30-45度（不要超过45度，否则肩部参与过多）',
      '持哑铃坐于凳上，蹬起至肩部高度',
      '推起哑铃至上胸部上方',
      '控制下放至锁骨/上胸位置',
      '底部停顿片刻后推起'
    ],
    tips: [
      '重点刺激上胸（锁骨部胸大肌）',
      '30度倾斜最能孤立上胸',
      '角度越高，前束参与越多，胸部参与越少',
      '结合平板卧推可实现胸部全面发展'
    ],
    setsReps: '3-4组 × 8-15次'
  },
  {
    id: 'cable-fly',
    name: '龙门架夹胸',
    category: 'chest',
    force: 'push',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'cable',
    primaryMuscles: [muscleGroups.chest],
    secondaryMuscles: [],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Fly/0.jpg'
    ],
    instructions: [
      '将滑轮调至与肩同高或略高',
      '双手持握把，向前一步使胸部有持续张力',
      '微屈肘关节（保持150-160度固定角度）',
      '手臂以弧形轨迹向胸前合并，想象"抱大树"',
      '顶端挤压胸肌1-2秒',
      '控制回放至胸部有拉伸感'
    ],
    tips: [
      '肘关节角度全程固定，不要变成推的动作',
      '身体微前倾增加稳定性',
      '高滑轮（从上到下）刺激下胸',
      '低滑轮（从下到上）刺激上胸'
    ],
    setsReps: '3-4组 × 12-20次'
  },
  {
    id: 'pec-deck-fly',
    name: '蝴蝶机夹胸',
    category: 'chest',
    force: 'push',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'machine',
    primaryMuscles: [muscleGroups.chest],
    secondaryMuscles: [],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butterfly/0.jpg'
    ],
    instructions: [
      '调整座椅高度，使手臂与肩同高',
      '上臂贴住靠垫，前臂放松',
      '用胸部力量将靠垫向中间合拢',
      '顶端挤压1-2秒',
      '控制回放，不要让重量片完全落下'
    ],
    tips: [
      '对胸肌孤立效果好，适合初学者找到胸部发力感',
      '不要用爆发力弹回',
      '建议放在卧推之后做，作为收尾动作'
    ],
    setsReps: '3-4组 × 12-15次'
  },

  // ========== 背部 ==========
  {
    id: 'lat-pulldown-wide',
    name: '高位下拉（宽握）',
    category: 'back',
    force: 'pull',
    level: 'beginner',
    mechanic: 'compound',
    equipment: 'cable',
    primaryMuscles: [muscleGroups.back],
    secondaryMuscles: [muscleGroups.biceps, muscleGroups.forearms],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lat_Pulldown/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lat_Pulldown/1.jpg'
    ],
    instructions: [
      '坐于下拉器，调整膝垫固定大腿',
      '宽握把手（约肩宽2倍/肩峰宽2倍），掌心朝前',
      '身体略微后倾20-30度，保持脊柱中立',
      '肩胛骨先下沉后缩，然后用手臂将横杆拉至上胸/锁骨位置',
      '手肘始终朝下，不要向后张开',
      '顶端挤压背部1秒',
      '控制回放至手臂完全伸直，肩胛骨自然上提'
    ],
    tips: [
      '想象"用肘部带动下拉"而非用手拉',
      '避免拉至颈后——增加肩关节压力，无额外训练效果（NASM明确反对）',
      '不要过度后仰借力',
      '回放时完全伸展以最大化背阔肌拉伸'
    ],
    gripVariations: [
      { name: '宽握正握（推荐）', effect: '最大化背阔肌激活，肱二头肌参与最少（Signorile EMG研究）', icon: '🔄' },
      { name: '窄握正握', effect: '背阔肌激活类似，可使用更大重量', icon: '🎯' },
      { name: '反握（手心朝内）', effect: '肱二头肌参与显著增加，适合手臂日变式', icon: '💪' },
      { name: '对握/中立握（V把）', effect: '肩关节最友好，适合肩部不适者', icon: '🤝' }
    ],
    setsReps: '3-4组 × 8-15次'
  },
  {
    id: 'barbell-row',
    name: '杠铃俯身划船',
    category: 'back',
    force: 'pull',
    level: 'intermediate',
    mechanic: 'compound',
    equipment: 'barbell',
    primaryMuscles: [muscleGroups.back],
    secondaryMuscles: [muscleGroups.biceps, muscleGroups.forearms],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Row/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Row/1.jpg'
    ],
    instructions: [
      '双脚与肩同宽，正手握杠铃（约肩宽），掌心朝后',
      '屈髋使躯干前倾至与地面约45-60度，膝盖微屈',
      '保持背部挺直，核心收紧，头部中立',
      '先做肩胛骨后缩，再用手肘驱动将杠铃拉向腹部/下胸',
      '顶峰收缩1秒，挤压背部',
      '控制下放至手臂伸直'
    ],
    tips: [
      '先用背部发力（肩胛收缩），再用手臂——这是关键！',
      '不要弓背——核心收紧保护下背',
      '躯干角度越低，上背参与越多',
      '反握可增加肱二头肌参与',
      '避免站起来借力（变成半程硬拉）'
    ],
    setsReps: '3-4组 × 8-12次'
  },
  {
    id: 'seated-cable-row',
    name: '坐姿绳索划船',
    category: 'back',
    force: 'pull',
    level: 'beginner',
    mechanic: 'compound',
    equipment: 'cable',
    primaryMuscles: [muscleGroups.back],
    secondaryMuscles: [muscleGroups.biceps],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Cable_Row/0.jpg'
    ],
    instructions: [
      '坐于划船机，双脚蹬踏板，膝盖微屈',
      '身体挺直，核心收紧',
      '用V把或直把，手臂伸直但不锁死',
      '先肩胛骨后缩，再用手肘将把手拉向腹部',
      '手肘贴近身体两侧，顶峰收缩1-2秒',
      '控制回放，肩胛骨自然前伸'
    ],
    tips: [
      '窄握V把侧重背阔肌中部',
      '宽握直把侧重上背/菱形肌',
      '不要过度后仰借力',
      '全程保持背部挺直'
    ],
    gripVariations: [
      { name: 'V字把手（窄握）', effect: '主打背阔肌中下部，手肘贴近身体', icon: '📐' },
      { name: '直杆（宽握）', effect: '主打中上背、菱形肌、后束', icon: '📏' },
      { name: '绳索（单臂）', effect: '可单侧训练，纠正左右不平衡', icon: '⚖️' }
    ],
    setsReps: '2-3组 × 8-12次'
  },
  {
    id: 'pull-up',
    name: '引体向上',
    category: 'back',
    force: 'pull',
    level: 'intermediate',
    mechanic: 'compound',
    equipment: 'bodyweight',
    primaryMuscles: [muscleGroups.back],
    secondaryMuscles: [muscleGroups.biceps, muscleGroups.forearms],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pull_Ups/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pull_Ups/1.jpg'
    ],
    instructions: [
      '正手握单杠（掌心朝前），握距略宽于肩',
      '完全悬挂，手臂伸直，肩胛骨自然上提',
      '先下沉并后缩肩胛骨（激活背阔肌）',
      '用背部发力将身体拉起，下巴过杠',
      '顶端保持1秒',
      '控制下放至完全悬挂'
    ],
    tips: [
      '如果能做的次数<5，使用辅助引体机或弹力带',
      '宽握偏重大小圆肌/上背宽度',
      '窄握偏重背阔肌下部和厚度',
      '不要摆动借力（Kipping——那是CrossFit动作，非增肌训练）',
      '反握引体（掌心朝内）主打肱二头肌+背阔肌'
    ],
    gripVariations: [
      { name: '正握宽握', effect: '主打背部宽度（大圆肌、背阔肌上部）', icon: '↔️' },
      { name: '正握肩宽', effect: '均衡背部发展', icon: '🎯' },
      { name: '反握（窄握）', effect: '肱二头肌主导+背阔肌，较容易完成', icon: '💪' },
      { name: '对握（中立）', effect: '肩关节最舒适，均衡发展', icon: '🤝' }
    ],
    setsReps: '3-5组 × 力竭或5-12次'
  },
  {
    id: 'dumbbell-row',
    name: '单臂哑铃划船',
    category: 'back',
    force: 'pull',
    level: 'beginner',
    mechanic: 'compound',
    equipment: 'dumbbell',
    primaryMuscles: [muscleGroups.back],
    secondaryMuscles: [muscleGroups.biceps],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Row/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Row/1.jpg'
    ],
    instructions: [
      '单手扶凳，同侧膝跪凳，另一脚站于地面',
      '躯干与地面接近平行，保持背部平直',
      '对侧手持哑铃完全下垂',
      '先做肩胛后缩（NASM三步：缩→拉→停）',
      '用手肘驱动将哑铃拉向髋部/下胸旁',
      '顶峰挤压背部1秒',
      '控制下放至手臂完全伸直'
    ],
    tips: [
      '集中注意力在"肘部向天花板移动"而非"拉哑铃"',
      '可以纠正左右背部不平衡',
      '不要旋转躯干借力',
      '胸部支撑版（趴在上斜凳上）可完全消除下背压力'
    ],
    setsReps: '3-4组 × 8-12次/侧'
  },

  // ========== 肩部 ==========
  {
    id: 'dumbbell-shoulder-press',
    name: '哑铃坐姿推举',
    category: 'shoulders',
    force: 'push',
    level: 'beginner',
    mechanic: 'compound',
    equipment: 'dumbbell',
    primaryMuscles: [muscleGroups.shoulders],
    secondaryMuscles: [muscleGroups.triceps],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Dumbbell_Shoulder_Press/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Dumbbell_Shoulder_Press/1.jpg'
    ],
    instructions: [
      '坐于可调凳（75-85度靠背），哑铃置于肩部高度',
      '掌心朝前，肘部在身体前方约45度（不要完全外展90度）',
      '推起哑铃至头顶上方，手臂伸直但不锁死',
      '顶端哑铃不要相碰',
      '控制下降至耳朵高度左右'
    ],
    tips: [
      'ACE EMG研究：哑铃推举是前束激活#1的动作',
      '肘部保持45度角减少肩峰下撞击风险',
      '站立版激活高8-15%（Saeterbakken研究），但稳定性要求更高',
      '下降幅度到耳朵高度即可，过低会增加肩关节压力'
    ],
    setsReps: '3-4组 × 8-15次'
  },
  {
    id: 'lateral-raise',
    name: '哑铃侧平举',
    category: 'shoulders',
    force: 'push',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'dumbbell',
    primaryMuscles: [muscleGroups.shoulders],
    secondaryMuscles: [],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lateral_Raise/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lateral_Raise/1.jpg'
    ],
    instructions: [
      '站立，双手持轻哑铃置于身体两侧',
      '微屈肘关节（约150度固定角度），掌心朝内',
      '用肩部力量将哑铃向两侧举起至肩高',
      '想象"倒水壶"——小拇指朝上，手腕略旋转',
      '顶端停顿1秒',
      '控制下降（2-3秒离心），不要自由落体'
    ],
    tips: [
      '控制离心比向心更重要——慢放增长效果更好',
      '不要用太重——侧平举最怕借力（耸肩/晃身体）',
      '轻重量高次数效果好',
      '肘部略高于手腕'
    ],
    setsReps: '3-4组 × 12-20次'
  },
  {
    id: 'rear-delt-fly',
    name: '俯身反向飞鸟',
    category: 'shoulders',
    force: 'pull',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'dumbbell',
    primaryMuscles: [muscleGroups.shoulders],
    secondaryMuscles: [muscleGroups.back],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Rear_Delt_Fly/0.jpg'
    ],
    instructions: [
      '双手持轻哑铃，屈髋俯身至躯干与地面接近平行',
      '手臂自然下垂，掌心相对',
      '微屈肘，用肩部后束发力将哑铃向两侧打开',
      '顶端挤压后束1秒',
      '控制回放'
    ],
    tips: [
      'ACE研究：俯身反向飞鸟与坐姿面拉并列后束#1',
      '不要用太重——后束是小肌群',
      '重点在挤压，不在重量',
      '也可以在蝴蝶机反向做'
    ],
    setsReps: '3-4组 × 12-20次'
  },
  {
    id: 'face-pull',
    name: '绳索面拉',
    category: 'shoulders',
    force: 'pull',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'cable',
    primaryMuscles: [muscleGroups.shoulders],
    secondaryMuscles: [muscleGroups.back],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg'
    ],
    instructions: [
      '将龙门架滑轮调至面部高度',
      '双手持绳索两端（拇指朝后）',
      '后退几步使绳索有张力',
      '将绳索拉向面部，双手分开至耳朵两侧',
      '肘部抬高并向外展开',
      '顶端外旋手腕（拇指朝后→朝外）',
      '顶峰收缩1-2秒后控制回放'
    ],
    tips: [
      '同时训练后束+肩袖肌群+上背',
      '对改善圆肩驼背体态非常有效',
      '是预防肩伤的重要动作',
      '轻重量高次数，感受后束发力'
    ],
    setsReps: '3-4组 × 15-20次'
  },

  // ========== 腿部 ==========
  {
    id: 'barbell-squat',
    name: '杠铃深蹲',
    category: 'legs',
    force: 'push',
    level: 'intermediate',
    mechanic: 'compound',
    equipment: 'barbell',
    primaryMuscles: [muscleGroups.legs],
    secondaryMuscles: [muscleGroups.glutes, muscleGroups.abs],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat/1.jpg'
    ],
    instructions: [
      '杠铃置于深蹲架上，高度约在锁骨水平',
      '钻入杠下，将杠铃放在斜方肌上（高杠）或后束上（低杠）',
      '双手均匀握杆，出杠后退2-3步',
      '双脚与肩同宽或略宽，脚尖微朝外15-30度',
      '吸气收紧核心（瓦式呼吸），想象肚子被踢一拳',
      '同时屈髋屈膝，保持躯干角度基本恒定',
      '下蹲至大腿与地面平行或更低',
      '用整个脚掌发力站起，不要前倾'
    ],
    tips: [
      '高杠（杠在斜方肌上）更偏股四头肌，躯干更直立',
      '低杠（杠在后束上）更偏后链，可用更大重量',
      '膝盖方向与脚尖方向一致',
      '下背部不能弓——核心收紧是关键',
      '大重量必须有深蹲架保护杠或两个保护者',
      '初学者建议从空杆或高脚杯深蹲开始'
    ],
    gripVariations: [
      { name: '高杠深蹲', effect: '股四头肌主导，躯干较直立，适合一般训练者', icon: '⬆️' },
      { name: '低杠深蹲', effect: '后链（臀+腘绳）主导，力量举选手常用', icon: '⬇️' },
      { name: '前蹲（杠在前肩）', effect: '最强的股四头肌刺激，核心要求极高', icon: '🎯' }
    ],
    setsReps: '3-5组 × 5-15次'
  },
  {
    id: 'leg-press',
    name: '腿举（倒蹬机）',
    category: 'legs',
    force: 'push',
    level: 'beginner',
    mechanic: 'compound',
    equipment: 'machine',
    primaryMuscles: [muscleGroups.legs],
    secondaryMuscles: [muscleGroups.glutes],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg'
    ],
    instructions: [
      '坐于倒蹬机，背部臀部紧贴靠垫',
      '双脚置于踏板上方，与肩同宽，脚尖微朝外',
      '推出至膝盖微屈（不要锁死）',
      '解锁安全把手',
      '控制下降至膝盖约90度（或更深，但不要弓背）',
      '用脚跟发力推回起始位置'
    ],
    tips: [
      '脚放越高，臀/腘绳参与越多；脚放越低，股四头肌参与越多',
      '不要锁死膝盖——始终留微屈',
      '下降时下背部贴紧靠垫，不要抬起',
      '窄距刺激股四头肌外头，宽距刺激内侧'
    ],
    setsReps: '3-4组 × 8-15次'
  },
  {
    id: 'romanian-deadlift',
    name: '罗马尼亚硬拉',
    category: 'legs',
    force: 'pull',
    level: 'intermediate',
    mechanic: 'compound',
    equipment: 'barbell',
    primaryMuscles: [muscleGroups.legs, muscleGroups.glutes],
    secondaryMuscles: [muscleGroups.back],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg'
    ],
    instructions: [
      '双脚与髋同宽，膝盖微屈（软锁定，不锁死）',
      '正手握杠铃，置于大腿前',
      '保持背部挺直，核心收紧',
      '臀部向后推，躯干前倾，杠铃沿大腿前侧下滑',
      '感受腘绳肌的拉伸感',
      '下降至腘绳肌不能再拉伸（约膝盖下方/小腿中段）',
      '臀肌发力向前推髋回到起始位置'
    ],
    tips: [
      '区别于传统硬拉：罗马尼亚硬拉膝盖几乎不弯曲，主打腘绳肌',
      '杠铃全程紧贴腿部',
      '背部全程挺直——核心是"臀部向后"而非"身体向前倒"',
      '不要用下背发力——感觉到下背说明姿势错了'
    ],
    setsReps: '3-4组 × 8-12次'
  },
  {
    id: 'leg-extension',
    name: '坐姿腿屈伸',
    category: 'legs',
    force: 'push',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'machine',
    primaryMuscles: [muscleGroups.legs],
    secondaryMuscles: [],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg'
    ],
    instructions: [
      '调整靠背使膝盖对准机器转轴',
      '脚踝托置于小腿前侧，脚踝上方',
      '双手抓握把手固定身体',
      '伸直双腿至接近锁死但不锁死',
      '顶端挤压股四头肌1秒',
      '控制下降（离心）约2-3秒'
    ],
    tips: [
      '腿部训练的黄金孤立动作',
      '顶端外旋脚尖可额外刺激股四头肌内侧头（VMO）',
      '控制离心比向心更重要',
      '不要用爆发力弹起，全程控制'
    ],
    setsReps: '3-4组 × 12-20次'
  },
  {
    id: 'lying-leg-curl',
    name: '俯卧腿弯举',
    category: 'legs',
    force: 'pull',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'machine',
    primaryMuscles: [muscleGroups.legs],
    secondaryMuscles: [],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg'
    ],
    instructions: [
      '俯卧于腿弯举机，膝盖对准机器转轴',
      '脚踝托置于跟腱上方',
      '双手抓握把手固定身体',
      '屈膝将脚踝托向臀部弯举',
      '顶峰挤压腘绳肌1秒',
      '控制伸膝回放至起始位置'
    ],
    tips: [
      '臀部不要翘起——全程贴紧垫面',
      '脚尖可微微朝外以更好激活腘绳肌内侧',
      '坐姿腿弯举是替代选项，对腘绳肌拉伸效果更好'
    ],
    setsReps: '3-4组 × 10-15次'
  },
  {
    id: 'standing-calf-raise',
    name: '站姿提踵',
    category: 'calves',
    force: 'push',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'machine',
    primaryMuscles: [muscleGroups.calves],
    secondaryMuscles: [],
    instructions: [
      '站于提踵机上，肩膀顶住靠垫',
      '前脚掌踩踏板边缘，脚跟悬空',
      '脚后跟尽量下放至最低点，感受小腿拉伸',
      '用力将脚跟抬至最高点',
      '顶端停顿1-2秒，挤压小腿',
      '控制下降至起始位置'
    ],
    tips: [
      '全程大范围运动——全拉伸到全收缩',
      '底部和顶部各停顿1-2秒',
      '坐姿提踵主要练比目鱼肌（深层），站姿练腓肠肌（表层）',
      '小腿耐受性强，需要高频率高容量训练'
    ],
    setsReps: '3-5组 × 15-25次'
  },

  // ========== 手臂 ==========
  {
    id: 'barbell-curl',
    name: '杠铃弯举',
    category: 'biceps',
    force: 'pull',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'barbell',
    primaryMuscles: [muscleGroups.biceps],
    secondaryMuscles: [muscleGroups.forearms],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg',
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/1.jpg'
    ],
    instructions: [
      '站立，双手正握杠铃（掌心朝前），握距与肩同宽',
      '上臂紧贴身体两侧，保持不动',
      '屈肘将杠铃向上弯举至肩前',
      '顶端挤压肱二头肌1秒',
      '控制下降（2-3秒离心）至手臂接近伸直但不锁死'
    ],
    tips: [
      '上臂全程保持不动——杜绝摆动借力',
      '直杆 vs EZ杆：直杆对肱二头肌刺激更大，EZ杆对手腕更友好',
      '控制离心是增肌关键',
      '握距越窄越偏外侧头，越宽越偏内侧头'
    ],
    gripVariations: [
      { name: '直杆杠铃', effect: '最大化肱二头肌激活，但对手腕压力大', icon: '📏' },
      { name: 'EZ曲杆', effect: '手腕更舒适，减少腕关节压力', icon: '〰️' },
      { name: '宽握', effect: '侧重肱二头肌内侧短头', icon: '↔️' },
      { name: '窄握', effect: '侧重肱二头肌外侧长头', icon: '🎯' }
    ],
    setsReps: '3-4组 × 8-15次'
  },
  {
    id: 'dumbbell-hammer-curl',
    name: '哑铃锤式弯举',
    category: 'biceps',
    force: 'pull',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'dumbbell',
    primaryMuscles: [muscleGroups.biceps, muscleGroups.forearms],
    secondaryMuscles: [],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Hammer_Cur/0.jpg'
    ],
    instructions: [
      '站立或坐姿，双手持哑铃，掌心相对（中立握），置于身体两侧',
      '上臂不动，弯举哑铃至肩前',
      '顶峰挤压1秒',
      '控制下降至手臂接近伸直'
    ],
    tips: [
      '侧重肱肌（上臂外侧）+肱桡肌（前臂），增加手臂厚度',
      'ACE排名：集中弯举#1，锤式弯举刺激肱肌最有效',
      '可以交替做也可以双手同时做',
      '绳索锤式弯举（用绳索代替哑铃）效果也很好'
    ],
    setsReps: '3-4组 × 10-15次'
  },
  {
    id: 'tricep-pushdown',
    name: '绳索三头下压',
    category: 'triceps',
    force: 'push',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'cable',
    primaryMuscles: [muscleGroups.triceps],
    secondaryMuscles: [],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Pushdown/0.jpg'
    ],
    instructions: [
      '面向龙门架，将滑轮调至高位',
      '双手持绳索（或直杆），上臂紧贴身体',
      '身体微前倾保持稳定',
      '下压绳索至手臂完全伸直，手掌朝后/外',
      '顶峰收缩肱三头肌1秒',
      '控制回放至前臂与地面平行或略高'
    ],
    tips: [
      '全程上臂不动——如果上臂前后摆动就是借力了',
      '绳索版手腕可外旋，额外刺激三头肌外侧头',
      '直杆版可以承受更大重量',
      '回放时不要完全让重量落下——保持三头肌持续张力'
    ],
    gripVariations: [
      { name: '绳索（推荐）', effect: '可外旋手腕，全面激活三头肌三个头', icon: '🔗' },
      { name: '直杆', effect: '可承受更大重量，主打外侧头', icon: '📏' },
      { name: '反握（掌心朝上）', effect: '侧重内侧头', icon: '🔄' },
      { name: '单臂', effect: '可纠正左右不平衡', icon: '⚖️' }
    ],
    setsReps: '3-4组 × 10-15次'
  },
  {
    id: 'overhead-tricep-extension',
    name: '哑铃颈后臂屈伸',
    category: 'triceps',
    force: 'push',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'dumbbell',
    primaryMuscles: [muscleGroups.triceps],
    secondaryMuscles: [],
    images: [
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Overhead_Tricep_Extension/0.jpg'
    ],
    instructions: [
      '坐姿，单手或双手持哑铃，手臂伸直举过头顶',
      '保持上臂贴近耳朵，不移动',
      '屈肘将哑铃下放至颈后/头后',
      '感受三头肌长头的拉伸',
      '伸肘将哑铃推回头顶',
      '顶端挤压三头肌'
    ],
    tips: [
      '是少数能充分拉伸三头肌长头的动作',
      '上臂全程保持不动——这是核心',
      '单臂做可以更好控制',
      '也可以用绳索替代，肌肉张力更持续'
    ],
    setsReps: '3-4组 × 10-15次'
  },

  // ========== 腹部 ==========
  {
    id: 'plank',
    name: '平板支撑',
    category: 'abs',
    force: 'static',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'bodyweight',
    primaryMuscles: [muscleGroups.abs],
    secondaryMuscles: [muscleGroups.shoulders],
    instructions: [
      '俯卧，肘部在肩正下方，前臂平放地面',
      '脚尖着地，身体成一条直线',
      '收紧腹部和臀部——不要塌腰或撅屁股',
      '头部中立，眼看地面',
      '保持均匀呼吸'
    ],
    tips: [
      'ACE EMG：平板支撑达到传统卷腹100%的腹直肌激活+230%的腹斜肌激活',
      '撑不住说明核心力量不足，每天多撑几秒',
      '不要在腰椎下塌时继续——宁愿时间短但姿势标准',
      '进阶：侧平板、抬手抬脚平板、负重平板'
    ],
    setsReps: '3-4组 × 30-60秒（或力竭）'
  },
  {
    id: 'hanging-leg-raise',
    name: '悬垂举腿',
    category: 'abs',
    force: 'pull',
    level: 'intermediate',
    mechanic: 'isolation',
    equipment: 'bodyweight',
    primaryMuscles: [muscleGroups.abs],
    secondaryMuscles: [muscleGroups.forearms],
    instructions: [
      '悬挂于单杠，双手正握，身体完全下垂',
      '收紧核心，用腹部力量将腿抬起',
      '初级：屈膝抬腿至90度',
      '进阶：直腿抬起至腿与地面平行或更高',
      '顶端保持1-2秒',
      '控制下放——不要让腿自由落下'
    ],
    tips: [
      'ACE EMG研究：悬垂举腿（Captain\'s Chair）腹直肌激活212%，腹斜肌310%！',
      '不要摆动借力——如果晃了说明要降低难度',
      '初级可先做屈膝版',
      '终极版：脚尖触碰单杠'
    ],
    setsReps: '3-4组 × 8-15次'
  },
  {
    id: 'cable-crunch',
    name: '绳索卷腹',
    category: 'abs',
    force: 'pull',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'cable',
    primaryMuscles: [muscleGroups.abs],
    secondaryMuscles: [],
    instructions: [
      '跪姿面对龙门架，双手持绳索把手置于头后或胸前',
      '距离龙门架约1米',
      '用腹部力量将躯干向下卷曲',
      '想象"用胸腔靠近骨盆"而非弯腰',
      '底部挤压腹肌1秒',
      '控制回放至起始位置'
    ],
    tips: [
      '可以逐渐加重，是少数方便渐进超负荷的腹肌动作',
      '不要用髋屈肌发力——纯腹部卷曲',
      '臀部位置保持不动',
      '呼气时卷腹，吸气时回放'
    ],
    setsReps: '3-4组 × 12-20次'
  },
  {
    id: 'russian-twist',
    name: '俄罗斯转体',
    category: 'abs',
    force: 'pull',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'bodyweight',
    primaryMuscles: [muscleGroups.abs],
    secondaryMuscles: [muscleGroups.shoulders],
    instructions: [
      '坐姿，膝盖弯曲，脚可离地或放地面',
      '躯干后倾45度，保持背部挺直',
      '双手合十或持负重物',
      '旋转躯干将手移至身体一侧',
      '回到中间再转到另一侧',
      '全程保持核心收紧'
    ],
    tips: [
      'ACE EMG：俄罗斯转体腹斜肌激活优秀',
      '持哑铃/药球增加难度',
      '旋转来自躯干，不是手臂',
      '脚离地增加稳定性挑战'
    ],
    setsReps: '3-4组 × 15-20次/侧'
  },

  // ========== 臀腿辅助 ==========
  {
    id: 'hip-thrust',
    name: '臀推',
    category: 'glutes',
    force: 'push',
    level: 'beginner',
    mechanic: 'isolation',
    equipment: 'barbell',
    primaryMuscles: [muscleGroups.glutes],
    secondaryMuscles: [muscleGroups.legs],
    instructions: [
      '上背靠在平板凳边缘，杠铃横跨髋部（建议用海绵套）',
      '双脚平放地面，与髋同宽，膝盖约90度',
      '下巴微收，眼看前方下方',
      '臀部发力将杠铃向上推至身体成一条直线',
      '顶端用力挤压臀肌1-2秒',
      '控制下降至臀部接近但不触地'
    ],
    tips: [
      '目前公认最强的臀部孤立训练动作',
      '膝盖角度保持约90度——角度越大腘绳肌参与越多',
      '顶端一定要挤压（顶峰收缩）',
      '不要过度弓背——用臀肌发力而非腰椎'
    ],
    setsReps: '3-5组 × 8-15次'
  },
]

// 辅助函数
export function getExercisesByMuscle(muscleId) {
  return exercises.filter(e =>
    e.primaryMuscles.some(m => m && m.name === muscleId) ||
    (e.category === muscleId)
  )
}

export function getExerciseById(id) {
  return exercises.find(e => e.id === id)
}

export function getExercisesByIds(ids) {
  return ids.map(id => getExerciseById(id)).filter(Boolean)
}
