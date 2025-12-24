/* ========================================
   きょう何食べる？ - 初期レシピデータ
======================================== */

const DEFAULT_RECIPES = [
  // 主菜
  {
    id: 'recipe_001',
    name: '肉じゃが',
    category: '主菜',
    ingredients: [
      { name: 'じゃがいも', amount: '3個' },
      { name: '牛肉（薄切り）', amount: '200g' },
      { name: '玉ねぎ', amount: '1個' },
      { name: 'にんじん', amount: '1/2本' },
      { name: 'しらたき', amount: '1袋' },
      { name: '醤油', amount: '大さじ3' },
      { name: 'みりん', amount: '大さじ2' },
      { name: '砂糖', amount: '大さじ1' }
    ],
    instructions: '1. 材料を食べやすい大きさに切る\n2. 鍋で牛肉を炒め、野菜を加える\n3. だし汁と調味料を加えて煮込む\n4. じゃがいもに火が通ったら完成'
  },
  {
    id: 'recipe_002',
    name: '生姜焼き',
    category: '主菜',
    ingredients: [
      { name: '豚ロース（薄切り）', amount: '300g' },
      { name: '玉ねぎ', amount: '1/2個' },
      { name: '生姜', amount: '1かけ' },
      { name: '醤油', amount: '大さじ2' },
      { name: 'みりん', amount: '大さじ1' },
      { name: '酒', amount: '大さじ1' }
    ],
    instructions: '1. 生姜をすりおろし、調味料と合わせる\n2. 豚肉を焼き、玉ねぎも炒める\n3. タレを絡めて完成'
  },
  {
    id: 'recipe_003',
    name: '鶏の照り焼き',
    category: '主菜',
    ingredients: [
      { name: '鶏もも肉', amount: '2枚' },
      { name: '醤油', amount: '大さじ3' },
      { name: 'みりん', amount: '大さじ2' },
      { name: '酒', amount: '大さじ2' },
      { name: '砂糖', amount: '大さじ1' }
    ],
    instructions: '1. 鶏肉に切り込みを入れる\n2. フライパンで皮目から焼く\n3. 調味料を加えて煮詰める\n4. 両面にタレを絡めて完成'
  },
  {
    id: 'recipe_004',
    name: 'ハンバーグ',
    category: '主菜',
    ingredients: [
      { name: '合いびき肉', amount: '400g' },
      { name: '玉ねぎ', amount: '1/2個' },
      { name: '卵', amount: '1個' },
      { name: 'パン粉', amount: '1/2カップ' },
      { name: '牛乳', amount: '大さじ3' },
      { name: '塩こしょう', amount: '少々' },
      { name: 'ケチャップ', amount: '大さじ3' },
      { name: 'ウスターソース', amount: '大さじ2' }
    ],
    instructions: '1. 玉ねぎをみじん切りにして炒める\n2. ひき肉と材料を混ぜてこねる\n3. 形を作って焼く\n4. ソースを作って完成'
  },
  {
    id: 'recipe_005',
    name: 'カレーライス',
    category: '主菜',
    ingredients: [
      { name: '豚肉（または牛肉）', amount: '300g' },
      { name: 'じゃがいも', amount: '2個' },
      { name: '玉ねぎ', amount: '2個' },
      { name: 'にんじん', amount: '1本' },
      { name: 'カレールー', amount: '1/2箱' },
      { name: '水', amount: '800ml' }
    ],
    instructions: '1. 野菜と肉を切る\n2. 鍋で炒めてから水を加える\n3. 煮込んでルーを溶かす\n4. とろみがついたら完成'
  },
  {
    id: 'recipe_006',
    name: '鯖の味噌煮',
    category: '主菜',
    ingredients: [
      { name: '鯖', amount: '2切れ' },
      { name: '味噌', amount: '大さじ3' },
      { name: '砂糖', amount: '大さじ2' },
      { name: '酒', amount: '100ml' },
      { name: '水', amount: '100ml' },
      { name: '生姜', amount: '1かけ' }
    ],
    instructions: '1. 鯖に切り込みを入れる\n2. 煮汁を作って沸かす\n3. 鯖を入れて落し蓋で煮込む\n4. 煮汁が半分になったら完成'
  },

  // 副菜
  {
    id: 'recipe_007',
    name: 'ほうれん草のおひたし',
    category: '副菜',
    ingredients: [
      { name: 'ほうれん草', amount: '1束' },
      { name: 'かつお節', amount: '適量' },
      { name: '醤油', amount: '大さじ1' },
      { name: 'だし汁', amount: '大さじ2' }
    ],
    instructions: '1. ほうれん草を茹でて冷水にとる\n2. 水気を絞って切る\n3. 調味料と和える\n4. かつお節をかけて完成'
  },
  {
    id: 'recipe_008',
    name: 'きんぴらごぼう',
    category: '副菜',
    ingredients: [
      { name: 'ごぼう', amount: '1本' },
      { name: 'にんじん', amount: '1/2本' },
      { name: '醤油', amount: '大さじ2' },
      { name: 'みりん', amount: '大さじ1' },
      { name: '砂糖', amount: '大さじ1' },
      { name: 'ごま油', amount: '大さじ1' },
      { name: '白ごま', amount: '適量' }
    ],
    instructions: '1. ごぼうとにんじんを細切りにする\n2. ごま油で炒める\n3. 調味料を加えて炒め煮\n4. ごまを振って完成'
  },
  {
    id: 'recipe_009',
    name: 'ポテトサラダ',
    category: '副菜',
    ingredients: [
      { name: 'じゃがいも', amount: '3個' },
      { name: 'きゅうり', amount: '1本' },
      { name: 'ハム', amount: '3枚' },
      { name: 'マヨネーズ', amount: '大さじ4' },
      { name: '塩こしょう', amount: '少々' }
    ],
    instructions: '1. じゃがいもを茹でて潰す\n2. きゅうりを塩もみ、ハムを切る\n3. 全部混ぜてマヨネーズで和える\n4. 塩こしょうで味を調える'
  },
  {
    id: 'recipe_010',
    name: '卵焼き',
    category: '副菜',
    ingredients: [
      { name: '卵', amount: '3個' },
      { name: '砂糖', amount: '大さじ1' },
      { name: '醤油', amount: '小さじ1' },
      { name: 'だし汁', amount: '大さじ2' }
    ],
    instructions: '1. 卵を溶いて調味料を混ぜる\n2. 卵焼き器で少しずつ焼いて巻く\n3. 形を整えて切り分ける'
  },

  // 汁物
  {
    id: 'recipe_011',
    name: '味噌汁',
    category: '汁物',
    ingredients: [
      { name: '豆腐', amount: '1/2丁' },
      { name: 'わかめ', amount: '適量' },
      { name: '味噌', amount: '大さじ2' },
      { name: 'だし汁', amount: '600ml' },
      { name: 'ねぎ', amount: '適量' }
    ],
    instructions: '1. だし汁を温める\n2. 豆腐とわかめを入れる\n3. 味噌を溶き入れる\n4. ねぎを散らして完成'
  },
  {
    id: 'recipe_012',
    name: '豚汁',
    category: '汁物',
    ingredients: [
      { name: '豚バラ肉', amount: '100g' },
      { name: '大根', amount: '1/4本' },
      { name: 'にんじん', amount: '1/2本' },
      { name: 'こんにゃく', amount: '1/2枚' },
      { name: 'ごぼう', amount: '1/2本' },
      { name: '味噌', amount: '大さじ3' },
      { name: 'だし汁', amount: '800ml' }
    ],
    instructions: '1. 野菜と肉を切る\n2. 豚肉を炒めて野菜を加える\n3. だし汁で煮込む\n4. 味噌を溶いて完成'
  },
  {
    id: 'recipe_013',
    name: 'コンソメスープ',
    category: '汁物',
    ingredients: [
      { name: '玉ねぎ', amount: '1/2個' },
      { name: 'にんじん', amount: '1/4本' },
      { name: 'キャベツ', amount: '2枚' },
      { name: 'ベーコン', amount: '2枚' },
      { name: 'コンソメ', amount: '1個' },
      { name: '水', amount: '600ml' },
      { name: '塩こしょう', amount: '少々' }
    ],
    instructions: '1. 野菜とベーコンを切る\n2. 水とコンソメで煮込む\n3. 塩こしょうで味を調える'
  },

  // ご飯もの
  {
    id: 'recipe_014',
    name: '親子丼',
    category: 'ご飯もの',
    ingredients: [
      { name: '鶏もも肉', amount: '150g' },
      { name: '玉ねぎ', amount: '1/2個' },
      { name: '卵', amount: '2個' },
      { name: '醤油', amount: '大さじ2' },
      { name: 'みりん', amount: '大さじ2' },
      { name: 'だし汁', amount: '100ml' },
      { name: 'ご飯', amount: '適量' }
    ],
    instructions: '1. 鶏肉と玉ねぎを切る\n2. 調味料で煮る\n3. 溶き卵を回し入れる\n4. ご飯に乗せて完成'
  },
  {
    id: 'recipe_015',
    name: '牛丼',
    category: 'ご飯もの',
    ingredients: [
      { name: '牛肉（薄切り）', amount: '200g' },
      { name: '玉ねぎ', amount: '1個' },
      { name: '醤油', amount: '大さじ3' },
      { name: 'みりん', amount: '大さじ2' },
      { name: '酒', amount: '大さじ2' },
      { name: '砂糖', amount: '大さじ1' },
      { name: '水', amount: '150ml' },
      { name: 'ご飯', amount: '適量' }
    ],
    instructions: '1. 玉ねぎを薄切りにする\n2. 調味料で玉ねぎを煮る\n3. 牛肉を加えて煮込む\n4. ご飯に乗せて完成'
  },
  {
    id: 'recipe_016',
    name: 'チャーハン',
    category: 'ご飯もの',
    ingredients: [
      { name: 'ご飯', amount: '2杯分' },
      { name: '卵', amount: '2個' },
      { name: 'ねぎ', amount: '1/2本' },
      { name: 'チャーシュー（またはハム）', amount: '50g' },
      { name: '醤油', amount: '大さじ1' },
      { name: '塩こしょう', amount: '少々' },
      { name: 'ごま油', amount: '大さじ1' }
    ],
    instructions: '1. 材料を細かく切る\n2. 卵を炒めてご飯を加える\n3. 具材を入れて炒める\n4. 調味料で味付けして完成'
  },
  {
    id: 'recipe_017',
    name: 'オムライス',
    category: 'ご飯もの',
    ingredients: [
      { name: 'ご飯', amount: '2杯分' },
      { name: '鶏肉', amount: '100g' },
      { name: '玉ねぎ', amount: '1/2個' },
      { name: 'ケチャップ', amount: '大さじ4' },
      { name: '卵', amount: '4個' },
      { name: 'バター', amount: '20g' },
      { name: '塩こしょう', amount: '少々' }
    ],
    instructions: '1. チキンライスを作る\n2. 卵を薄く焼く\n3. チキンライスを包む\n4. ケチャップをかけて完成'
  },

  // 麺類
  {
    id: 'recipe_018',
    name: 'うどん（かけ）',
    category: '麺類',
    ingredients: [
      { name: 'うどん', amount: '2玉' },
      { name: 'だし汁', amount: '800ml' },
      { name: '醤油', amount: '大さじ2' },
      { name: 'みりん', amount: '大さじ1' },
      { name: 'ねぎ', amount: '適量' },
      { name: '天かす', amount: '適量' }
    ],
    instructions: '1. だし汁を温めて調味料を加える\n2. うどんを茹でる\n3. 器に盛ってつゆをかける\n4. トッピングを乗せて完成'
  },
  {
    id: 'recipe_019',
    name: '焼きそば',
    category: '麺類',
    ingredients: [
      { name: '焼きそば麺', amount: '2玉' },
      { name: 'キャベツ', amount: '2枚' },
      { name: 'もやし', amount: '1/2袋' },
      { name: '豚肉', amount: '100g' },
      { name: 'ソース', amount: '大さじ3' },
      { name: '青のり', amount: '適量' },
      { name: '紅生姜', amount: '適量' }
    ],
    instructions: '1. 野菜と肉を切る\n2. 肉と野菜を炒める\n3. 麺を加えてほぐす\n4. ソースで味付けして完成'
  },
  {
    id: 'recipe_020',
    name: 'ナポリタン',
    category: '麺類',
    ingredients: [
      { name: 'スパゲッティ', amount: '200g' },
      { name: 'ウインナー', amount: '4本' },
      { name: '玉ねぎ', amount: '1/2個' },
      { name: 'ピーマン', amount: '2個' },
      { name: 'ケチャップ', amount: '大さじ5' },
      { name: 'バター', amount: '20g' },
      { name: '塩こしょう', amount: '少々' }
    ],
    instructions: '1. パスタを茹でる\n2. 野菜とウインナーを炒める\n3. パスタを加えてケチャップで味付け\n4. バターで仕上げて完成'
  }
];
