export const PRODUCT_CATEGORIES = [
  { id: "water", label: "水処理用薬品" },
  { id: "reagents", label: "試薬・研究用" },
  { id: "industrial", label: "工業用・医薬品関連" },
  { id: "cleaning", label: "クリーニング関係" },
];

export const PRODUCT_USES = [
  { id: "water-treatment", label: "浄水・排水処理" },
  { id: "pool", label: "プール管理" },
  { id: "research", label: "研究・分析" },
  { id: "sanitation", label: "衛生・殺菌" },
  { id: "surface", label: "表面処理" },
  { id: "cleaning", label: "洗浄・漂白" },
];

export const PRODUCT_FORMS = [
  { id: "liquid", label: "液体" },
  { id: "powder", label: "粉体" },
  { id: "granule", label: "粒状" },
];

export const PRODUCTS = [
  {
    id: "sodium-hypochlorite",
    name: "次亜塩素酸ナトリウム",
    description: "除菌・漂白・水処理に幅広く使われる代表的な薬品。",
    category: "water",
    uses: ["water-treatment", "pool", "sanitation"],
    form: "liquid",
    tags: ["殺菌", "水処理", "定番"],
    detail: {
      overview: "プールや排水処理施設で使用される殺菌・消毒用薬品。用途や濃度に合わせて提案します。",
      uses: ["プール水の殺菌", "排水処理", "施設の衛生管理"],
      specs: [
        ["濃度", "6% / 12% など"],
        ["形状", "液体"],
      ],
      notes: "使用方法や保管方法について事前にご相談ください。",
    },
  },
  {
    id: "pac",
    name: "PAC（ポリ塩化アルミニウム）",
    description: "浄水・排水処理の凝集剤として安定した効果を発揮。",
    category: "water",
    uses: ["water-treatment"],
    form: "liquid",
    tags: ["凝集剤", "排水"],
    detail: {
      overview: "濁質の除去に用いられる凝集剤。水質条件に合わせて最適品を選定します。",
      uses: ["浄水処理", "工場排水の凝集"],
      specs: [
        ["形状", "液体"],
        ["用途", "浄水・排水処理"],
      ],
      notes: "投入量や運用条件は現場に合わせてご提案します。",
    },
  },
  {
    id: "hydrogen-peroxide",
    name: "過酸化水素",
    description: "漂白・洗浄・殺菌に使われる酸化剤。",
    category: "cleaning",
    uses: ["cleaning", "sanitation"],
    form: "liquid",
    tags: ["漂白", "酸化"],
    detail: {
      overview: "繊維・食品・医療分野で使われる酸化剤。用途に応じた濃度を提案します。",
      uses: ["漂白", "洗浄", "殺菌"],
      specs: [
        ["形状", "液体"],
        ["濃度", "用途により相談"],
      ],
      notes: "取り扱いには安全保護具の着用を推奨します。",
    },
  },
  {
    id: "citric-acid",
    name: "クエン酸",
    description: "食品添加物や洗浄用途で使用される有機酸。",
    category: "industrial",
    uses: ["cleaning", "sanitation"],
    form: "powder",
    tags: ["食品添加物", "洗浄"],
    detail: {
      overview: "食品工場や衛生管理で広く使用される有機酸。用途別に等級をご案内します。",
      uses: ["スケール除去", "pH調整"],
      specs: [
        ["形状", "粉体"],
        ["等級", "食品添加物"],
      ],
      notes: "用途や規格に応じて最適な製品を提案します。",
    },
  },
  {
    id: "ethanol",
    name: "エタノール",
    description: "研究・検査用途のほか、洗浄・消毒に利用。",
    category: "reagents",
    uses: ["research", "cleaning", "sanitation"],
    form: "liquid",
    tags: ["溶剤", "研究"],
    detail: {
      overview: "研究機関向けの試薬グレードも取り扱い。用途に応じてご案内します。",
      uses: ["研究・分析", "機器洗浄"],
      specs: [
        ["形状", "液体"],
        ["用途", "試薬・洗浄"],
      ],
      notes: "法令に基づいた管理が必要な場合はご相談ください。",
    },
  },
  {
    id: "hydrochloric-acid",
    name: "塩酸",
    description: "工業用途の洗浄・表面処理に使用。",
    category: "industrial",
    uses: ["surface", "cleaning"],
    form: "liquid",
    tags: ["表面処理", "酸"],
    detail: {
      overview: "濃度や用途に合わせた提供が可能です。",
      uses: ["表面処理", "洗浄"],
      specs: [
        ["濃度", "35% など"],
        ["形状", "液体"],
      ],
      notes: "危険物に該当する場合は安全対応を確認します。",
    },
  },
  {
    id: "reagents-catalog",
    name: "研究用試薬（各社カタログ）",
    description: "大学・研究機関向け試薬は各社カタログから選定。",
    category: "reagents",
    uses: ["research"],
    form: "powder",
    tags: ["試薬", "カタログ"],
    detail: {
      overview: "主要メーカーの試薬・分析用品の取り次ぎに対応しています。",
      uses: ["研究", "分析"],
      specs: [
        ["メーカー", "ナカライテスク、関東化学 ほか"],
        ["形状", "液体・粉体"],
      ],
      notes: "カタログ番号や用途をお伝えください。",
    },
  },
];
