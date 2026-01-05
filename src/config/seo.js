// SEO設定と会社情報の一元管理

export const SITE_URL = "https://yamato-chemi.co.jp";

export const COMPANY_INFO = {
  name: "大和薬品株式会社",
  nameEn: "Yamato Pharmaceutical Co., Ltd.",
  logo: "/company-logo.png",
  postalCode: "〒670-0935",
  address: "兵庫県姫路市北条口1丁目59番地",
  addressRegion: "兵庫県",
  addressLocality: "姫路市",
  streetAddress: "北条口1丁目59番地",
  tel: "079-281-0671",
  telLink: "tel:0792810671",
  fax: "079-224-1870",
  founded: "1933-04-10",
  president: "田路 裕之",
  // 対応エリア（構造化データ用）
  areaServed: [
    "兵庫県",
    "姫路市",
    "大阪府",
    "岡山県",
    "京都府",
    "滋賀県",
    "奈良県",
    "和歌山県"
  ],
  // 対応エリア（表示用テキスト）
  areaServedText: "兵庫県姫路市を中心に、大阪・岡山・京都など近隣府県に対応",
};

// ページごとのSEOメタ情報
export const PAGE_SEO = {
  home: {
    title: "大和薬品株式会社｜兵庫県姫路市の化学薬品・工業薬品・試薬専門商社",
    description: "兵庫県姫路市を拠点に創業90年以上。化学薬品・工業薬品・試薬の調達を支援する専門商社。兵庫・関西エリアの学校・工場・研究機関へ迅速な納品と丁寧な提案を提供します。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "化学薬品,工業薬品,試薬,溶剤,兵庫,姫路,関西,薬品商社,薬品卸,水処理薬品"
  },
  products: {
    title: "取扱製品｜化学薬品・工業薬品・試薬｜大和薬品株式会社",
    description: "水処理用薬品、試薬・研究用、工業薬品、有機溶剤など幅広い化学薬品を取り扱い。用途や形状から検索可能。兵庫県姫路市から関西エリアへ迅速に対応します。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "化学薬品一覧,試薬検索,工業薬品,溶剤,水処理薬品,兵庫,姫路"
  },
  company: {
    title: "会社概要｜兵庫県姫路市の化学薬品専門商社｜大和薬品株式会社",
    description: "大和薬品株式会社の会社概要。1933年創業、兵庫県姫路市に根ざした化学薬品・工業薬品専門商社として、品質と安全を重視した薬品供給を関西エリアに提供しています。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "会社概要,大和薬品,兵庫,姫路,化学薬品商社,工業薬品,沿革"
  },
  access: {
    title: "アクセス｜兵庫県姫路市北条口｜大和薬品株式会社",
    description: "大和薬品株式会社へのアクセス。兵庫県姫路市北条口1丁目59番地。JR姫路駅から徒歩圏内。化学薬品・工業薬品の調達はお気軽にお越しください。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "アクセス,地図,兵庫,姫路,北条口,大和薬品,化学薬品"
  },
  contact: {
    title: "お問い合わせ｜化学薬品・工業薬品の見積依頼｜大和薬品株式会社",
    description: "化学薬品・工業薬品・試薬・溶剤のお見積り、製品に関するご相談はこちらから。兵庫県姫路市を拠点に、関西エリアへ迅速に対応いたします。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "お問い合わせ,見積依頼,相談,化学薬品,工業薬品,兵庫,姫路"
  },
  services: {
    title: "サービス｜化学薬品の販売・回収・処分｜大和薬品株式会社",
    description: "化学薬品・工業薬品の販売から、安全指導、回収・処分まで幅広くサポート。兵庫県姫路市を拠点に、関西エリアのお客様の現場に最適なソリューションを提供します。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "サービス,化学薬品,薬品回収,処分,安全指導,兵庫,姫路"
  },
  stock: {
    title: "主要在庫品｜化学薬品・工業薬品の在庫｜大和薬品株式会社",
    description: "次亜塩素酸ソーダ、塩酸、苛性ソーダ、PACなど主要な化学薬品・工業薬品を常時在庫。兵庫県姫路市から関西エリアへ迅速に納品いたします。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "在庫,化学薬品,工業薬品,次亜塩素酸ソーダ,塩酸,苛性ソーダ,PAC,兵庫,姫路"
  },
  collection: {
    title: "懐かしコレクション｜大和薬品株式会社",
    description: "昭和レトロな看板や道具など、創業当時からの貴重なコレクションを公開。地域の歴史と共に歩んできた大和薬品の歴史をご覧ください。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "昭和,レトロ,コレクション,歴史,姫路"
  },
  association: {
    title: "西兵庫化学薬品協同組合｜大和薬品株式会社",
    description: "地域の化学薬品供給を支える西兵庫化学薬品協同組合の活動をご紹介。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "協同組合,西兵庫,化学薬品,地域連携"
  },
  sustainability: {
    title: "サステナビリティ｜大和薬品株式会社",
    description: "環境保全と地域社会への貢献。持続可能な薬品供給を目指す大和薬品の取り組みをご紹介します。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "サステナビリティ,環境,SDGs,姫路"
  },
  privacy: {
    title: "プライバシーポリシー｜大和薬品株式会社",
    description: "大和薬品株式会社のプライバシーポリシー・個人情報保護方針をご確認ください。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "プライバシーポリシー,個人情報保護,大和薬品"
  },
  contactThanks: {
    title: "お問い合わせありがとうございます｜大和薬品株式会社",
    description: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "問い合わせ完了,大和薬品"
  },
  hyogo: {
    title: "兵庫県姫路市を拠点とした化学薬品・工業薬品の供給体制｜大和薬品株式会社",
    description: "兵庫県姫路市を拠点に、化学薬品・工業薬品・試薬・溶剤を関西エリアへ供給。小ロット対応、納期相談、安全データシート（SDS/MSDS）提供など、お客様のニーズに柔軟に対応します。",
    ogImage: `${SITE_URL}/company-logo.png`,
    keywords: "兵庫,姫路,化学薬品,工業薬品,試薬,溶剤,関西,小ロット,SDS,MSDS,納期,供給"
  }
};

// OGP共通設定
export const OG_DEFAULTS = {
  type: "website",
  siteName: COMPANY_INFO.name,
  locale: "ja_JP",
};

// Twitter Card設定
export const TWITTER_CARD = {
  card: "summary",
  site: "@yamato_chemi", // Twitterアカウントがあれば設定
};
