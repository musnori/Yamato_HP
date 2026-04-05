import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
// アイコン (lucide-react)
import { 
  FlaskConical, 
  Package, 
  Droplets, 
  Info, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight,
  ShoppingCart
} from "lucide-react";
import PrimaryCTA from "../components/PrimaryCTA";

/** ========= データ ========= */
const SECTIONS = [
  { id: "water", label: "水処理・基礎化学品" },
  { id: "organic", label: "有機溶剤" },
];

const CHEMS = [
  {
    id: "naocl",
    section: "water",
    title: "次亜塩素酸ソーダ",
    type: "liquid", // アイコン出し分け用
    summary:
      "水処理・殺菌で幅広く使用されています。12%および6%などの濃度を常備在庫しており、用途に応じた荷姿（ポリ容器等）でのご提案が可能です。",
    manufacturers: [
      {
        vendor: "南海化学社製",
        badges: ["液体", "12%", "ポリ容器", "20kg"],
        spec: [
          ["性状", "液体（淡黄色）"],
          ["濃度", "12％"],
          ["形体", "ポリ容器"],
          ["容量", "20kg"],
          ["保管場所", "阿保倉庫"],
          ["備考", "食品添加物認定、低食塩グレード"],
        ],
      },
      {
        vendor: "要薬品社製",
        badges: ["液体", "12%", "ポリ容器"],
        spec: [
          ["性状", "液体"],
          ["濃度", "12％"],
          ["形体", "ポリ容器"],
          ["容量", "20kg"],
        ],
      },
    ],
  },
  {
    id: "hcl",
    section: "water",
    title: "塩酸",
    type: "liquid",
    summary:
      "金属洗浄、pH調整などに不可欠な基礎化学品。35％等の工業用標準グレードを常備しています。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "35％", "ポリ容器/ローリー"],
        spec: [
          ["性状", "無色〜淡黄色液体"],
          ["濃度", "35％（他濃度も応相談）"],
          ["荷姿", "20kg ポリ容器, 500kg コンテナ, ローリー"],
        ],
      },
    ],
  },
  {
    id: "naoh",
    section: "water",
    title: "苛性ソーダ（液体）",
    type: "liquid",
    summary: "排水処理やpH調整に最も使用されるアルカリ剤。24％および48％の定番濃度を在庫しています。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "24％/48％", "ポリ容器/ローリー"],
        spec: [
          ["性状", "無色透明液体"],
          ["濃度", "24％ / 48％"],
          ["荷姿", "20kg, 200kg, 1tコンテナ, ローリー配送可"],
        ],
      },
    ],
  },
  {
    id: "pac",
    section: "water",
    title: "PAC（ポリ塩化アルミニウム）",
    type: "liquid",
    summary:
      "優れた凝集効果を持つ水処理剤。浄水・排水のSS除去や色度低減に使用されます。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "各濃度", "ポリ容器/ローリー"],
        spec: [
          ["性状", "液体"],
          ["濃度", "各種（10%〜11%等、お問い合わせください）"],
          ["荷姿", "20kg, 1tコンテナ, ローリー"],
        ],
      },
    ],
  },
  {
    id: "h2so4",
    section: "water",
    title: "濃硫酸 / 精製濃硫酸",
    type: "liquid",
    summary:
      "98％等の濃硫酸を常備。精製グレードも手配可能です。劇物指定のため、取扱には十分な安全対策が必要です。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "98％", "劇物"],
        spec: [
          ["性状", "無色粘性液体"],
          ["濃度", "98％（他グレードあり）"],
          ["荷姿", "20kg ポリ缶"],
          ["注意", "腐食性・強酸性。保護具着用の上で取扱"],
        ],
      },
    ],
  },
  {
    id: "cacl2",
    section: "water",
    title: "塩化カルシウム",
    type: "solid",
    summary: "除湿剤、融雪剤、水処理の硬度調整などに。粒状やフレーク状の取り扱いがございます。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["固体", "粒/フレーク", "袋"],
        spec: [
          ["外観", "白色固体（粒状またはフレーク）"],
          ["荷姿", "25kg クラフト袋 他"],
        ],
      },
    ],
  },
  {
    id: "cao",
    section: "water",
    title: "消石灰",
    type: "powder",
    summary: "pH調整、土壌改良、衛生消毒用途に。取り回しの良い袋入りを常備在庫しています。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["粉体", "袋"],
        spec: [
          ["外観", "白色粉体"],
          ["荷姿", "20kg / 25kg 袋"],
        ],
      },
    ],
  },

  // ── 有機溶剤 ──────────────────────────────────────────
  {
    id: "methanol",
    section: "organic",
    title: "メタノール",
    type: "liquid",
    summary:
      "洗浄・溶剤・燃料用途に幅広く使われる有機溶剤。工業用グレードを常備在庫しており、小ロット（18Lポリ容器）からドラム缶まで対応可能です。「メタノールはありますか？」というお問い合わせをよくいただく製品のひとつです。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "工業用", "18Lポリ容器", "200Lドラム", "劇物"],
        spec: [
          ["性状", "無色透明液体（特有の臭気）"],
          ["純度", "99.5%以上（工業用）"],
          ["引火点", "11°C（危険物第一石油類）"],
          ["荷姿", "18kg ポリ容器 / 200kg ドラム缶"],
          ["法規制", "劇物（毒物及び劇物取締法）・危険物"],
          ["備考", "試薬グレードはお問い合わせください"],
        ],
      },
    ],
  },
  {
    id: "toluene",
    section: "organic",
    title: "トルエン",
    type: "liquid",
    summary:
      "塗料・接着剤・洗浄など幅広い工業用途に使われる芳香族炭化水素系溶剤。工業用グレードを常備在庫しており、ご要望に応じた荷姿でご提供可能です。「トルエンはありますか？」というお問い合わせも多い製品です。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "工業用", "18Lポリ容器", "200Lドラム", "危険物"],
        spec: [
          ["性状", "無色透明液体（芳香臭）"],
          ["純度", "99%以上（工業用）"],
          ["引火点", "4°C（危険物第一石油類）"],
          ["荷姿", "18kg ポリ容器 / 200kg ドラム缶"],
          ["法規制", "危険物第一石油類"],
          ["備考", "試薬グレードはお問い合わせください"],
        ],
      },
    ],
  },
  {
    id: "acetone",
    section: "organic",
    title: "アセトン",
    type: "liquid",
    summary:
      "樹脂・油脂の洗浄溶剤や、塗料・接着剤の希釈剤として多く使用される汎用溶剤。工業用グレードを在庫しています。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "工業用", "18Lポリ容器", "200Lドラム", "危険物"],
        spec: [
          ["性状", "無色透明液体（甘みのある臭気）"],
          ["純度", "99.5%以上（工業用）"],
          ["引火点", "-20°C（危険物第一石油類）"],
          ["荷姿", "18kg ポリ容器 / 200kg ドラム缶"],
          ["法規制", "危険物第一石油類"],
        ],
      },
    ],
  },
  {
    id: "xylene",
    section: "organic",
    title: "キシレン",
    type: "liquid",
    summary:
      "塗料・インキの溶剤、樹脂の希釈剤として広く利用される芳香族系溶剤。工業用グレードを在庫しています。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "工業用", "18Lポリ容器", "200Lドラム", "危険物"],
        spec: [
          ["性状", "無色透明液体（芳香臭）"],
          ["純度", "98%以上（工業用）"],
          ["引火点", "27〜32°C（危険物第二石油類）"],
          ["荷姿", "18kg ポリ容器 / 200kg ドラム缶"],
          ["法規制", "危険物第二石油類"],
        ],
      },
    ],
  },
  {
    id: "ipa",
    section: "organic",
    title: "イソプロピルアルコール（IPA）",
    type: "liquid",
    summary:
      "電子部品・光学機器の洗浄や、消毒・手指衛生など幅広い用途に使われる汎用溶剤。工業用グレードを常備在庫しています。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "工業用", "18Lポリ容器", "200Lドラム", "危険物"],
        spec: [
          ["性状", "無色透明液体（特有の臭気）"],
          ["純度", "99.5%以上（工業用）"],
          ["引火点", "12°C（危険物第一石油類）"],
          ["荷姿", "18kg ポリ容器 / 200kg ドラム缶"],
          ["法規制", "危険物第一石油類"],
          ["備考", "消毒用途（70%希釈）の調製もご相談可"],
        ],
      },
    ],
  },
];

/** ========= コンポーネント本体 ========= */
export default function Stock() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  // ハッシュリンクへのスクロール制御
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      // ヘッダー固定分のオフセットを考慮
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [hash]);

  const askProduct = (productName) => {
    navigate(`/contact?subject=在庫品問い合わせ：${productName}`);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* =======================
          Header Section
      ======================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="relative layout-container py-10 md:py-12 lg:py-14 text-center">
          <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">STOCK LIST</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            主要在庫品紹介
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            当社倉庫にて常備在庫している主要な化学薬品です。<br className="hidden md:inline" />
            急なご入用や、小ロットでの配送もお気軽にご相談ください。
          </p>
          <div className="mt-6">
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-emerald-600 transition-colors">
              <ChevronRight size={14} className="rotate-180" /> 製品検索へ戻る
            </Link>
          </div>
        </div>
      </section>

      <div className="layout-container py-10 grid gap-8 lg:grid-cols-[250px_1fr] items-start">
        
        {/* =======================
            Sidebar (TOC)
        ======================== */}
        <aside className="sticky top-6 hidden lg:block space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">目次</h3>
            <nav className="space-y-1">
              {SECTIONS.map((sec) => (
                <div key={sec.id}>
                  <p className="px-3 pt-3 pb-1 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
                    {sec.label}
                  </p>
                  {CHEMS.filter((c) => c.section === sec.id).map((c) => (
                    <a
                      key={c.id}
                      href={`#${c.id}`}
                      className="block px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(c.id);
                        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }}
                    >
                      {c.title}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 text-center">
            <p className="text-xs font-bold text-emerald-800 mb-2">リストにない製品は？</p>
            <p className="text-xs text-emerald-700/80 mb-4">
              お取り寄せ可能です。製品検索をご利用いただくか、直接お問い合わせください。
            </p>
            <PrimaryCTA to="/contact" label="問い合わせる" className="w-full justify-center text-xs py-2" />
          </div>
        </aside>

        {/* Mobile Nav (Horizontal) */}
        <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-4 scrollbar-hide space-y-2">
          {SECTIONS.map((sec) => (
            <div key={sec.id} className="flex items-center gap-2">
              <span className="flex-shrink-0 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase whitespace-nowrap">
                {sec.label}
              </span>
              {CHEMS.filter((c) => c.section === sec.id).map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 shadow-sm whitespace-nowrap active:bg-emerald-50 active:text-emerald-700 active:border-emerald-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(c.id);
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  {c.title}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* =======================
            Main List
        ======================== */}
        <div className="space-y-16">
          {SECTIONS.map((sec) => {
            const items = CHEMS.filter((c) => c.section === sec.id);
            if (items.length === 0) return null;
            return (
              <div key={sec.id} className="space-y-10">
                {/* セクションヘッダー */}
                <div className="flex items-center gap-4">
                  <div className={`h-8 w-1.5 rounded-full ${sec.id === "organic" ? "bg-amber-400" : "bg-emerald-500"}`} />
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900">{sec.label}</h2>
                    {sec.id === "organic" && (
                      <p className="text-sm text-slate-500 mt-0.5">
                        メタノール・トルエンなど有機溶剤を常備在庫しています。お気軽にお問い合わせください。
                      </p>
                    )}
                  </div>
                </div>

                {items.map((chem) => (
                  <section
                    key={chem.id}
                    id={chem.id}
                    className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
                  >
                    {/* Header */}
                    <div className="border-b border-slate-100 px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
                      <div className="flex items-center gap-4">
                        <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
                          chem.type === 'solid' ? 'bg-amber-100 text-amber-600' :
                          chem.type === 'powder' ? 'bg-slate-200 text-slate-600' :
                          sec.id === 'organic' ? 'bg-amber-50 text-amber-600' :
                          'bg-blue-100 text-blue-600'
                        }`}>
                          {chem.type === 'solid' ? <Package size={24} /> :
                           chem.type === 'powder' ? <Package size={24} /> :
                           <Droplets size={24} />}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900">{chem.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-500 uppercase">
                              Stock Item
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => askProduct(chem.title)}
                        className="hidden md:flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-lg transition-colors"
                      >
                        <ShoppingCart size={16} />
                        見積・相談する
                      </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 md:p-8 space-y-8">
                      {/* Summary */}
                      {chem.summary && (
                        <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 flex gap-3">
                          <Info className="shrink-0 text-slate-400 mt-0.5" size={18} />
                          {chem.summary}
                        </p>
                      )}

                      {/* Manufacturers Cards */}
                      <div className="grid gap-6">
                        {chem.manufacturers.map((m, i) => (
                          <div
                            key={m.vendor + i}
                            className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                          >
                            <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                              <span className="font-bold text-slate-700 flex items-center gap-2">
                                <FlaskConical size={16} className="text-slate-400" />
                                {m.vendor}
                              </span>
                            </div>

                            <div className="p-5 md:p-6">
                              {/* バッジ列 */}
                              {m.badges?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {m.badges.map((b) => (
                                    <Badge key={b} warning={b === "劇物" || b === "危険物"}>{b}</Badge>
                                  ))}
                                </div>
                              )}

                              {/* スペック表 */}
                              {m.spec?.length > 0 && (
                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                                  {m.spec.map(([k, v]) => (
                                    <div key={k + v} className="flex flex-col border-b border-slate-100 pb-2 last:border-0 sm:last:border-b">
                                      <dt className="text-xs font-bold text-slate-400 mb-1">{k}</dt>
                                      <dd className="text-slate-800 font-medium">{v}</dd>
                                    </div>
                                  ))}
                                </dl>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mobile Action Button */}
                      <div className="md:hidden pt-2">
                        <button
                          onClick={() => askProduct(chem.title)}
                          className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/10 active:scale-95 transition-all"
                        >
                          この製品について相談する <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** ========= Helper Components ========= */
function Badge({ children, warning = false }) {
  if (warning) {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-bold text-red-600 shadow-sm">
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-600 shadow-sm">
      <CheckCircle2 size={10} className="text-emerald-500" />
      {children}
    </span>
  );
}