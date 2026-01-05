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
const CHEMS = [
  {
    id: "naocl",
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
              {CHEMS.map((c) => (
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
        <nav className="lg:hidden -mx-4 px-4 overflow-x-auto pb-4 scrollbar-hide flex gap-2">
          {CHEMS.map((c) => (
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
        </nav>

        {/* =======================
            Main List
        ======================== */}
        <div className="space-y-10">
          {CHEMS.map((chem) => (
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
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {chem.type === 'solid' ? <Package size={24} /> : 
                     chem.type === 'powder' ? <Package size={24} /> :
                     <Droplets size={24} />}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900">{chem.title}</h2>
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
                        {/* バッジ（スマホ用にここにも表示するか検討、一旦下に配置） */}
                      </div>

                      <div className="p-5 md:p-6">
                        {/* バッジ列 */}
                        {m.badges?.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {m.badges.map((b) => (
                              <Badge key={b}>{b}</Badge>
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
      </div>
    </div>
  );
}

/** ========= Helper Components ========= */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-600 shadow-sm">
      <CheckCircle2 size={10} className="text-emerald-500" />
      {children}
    </span>
  );
}