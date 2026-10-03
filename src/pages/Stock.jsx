import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
// アイコン (lucide-react)
import { ChevronRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";
import ContactBand from "../components/ContactBand";

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
        badges: ["液体", "工業用", "1斗缶（14kg）", "170kgドラム", "ローリー", "劇物", "危険物"],
        spec: [
          ["性状", "無色透明液体（芳香臭）"],
          ["純度", "99%以上（工業用）"],
          ["引火点", "4°C（危険物第一石油類）"],
          ["荷姿", "14kg 1斗缶 / 170kg ドラム / ローリー"],
          ["法規制", "劇物（毒物及び劇物取締法）・危険物第一石油類"],
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

  const jumpTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <SEOHead pageKey="stock" />
      <PageHeader
        title="主要在庫品"
        crumbs={[{ name: "取扱製品", to: "/products" }, { name: "主要在庫品" }]}
        lead="当社倉庫に常備している主な化学薬品です。急なご入用や、小ロットでの配送もお気軽にご相談ください。"
      />

      <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 grid gap-6 lg:gap-10 lg:grid-cols-[14rem_1fr] items-start">

        {/* 目次（PC） */}
        <aside className="sticky top-24 hidden lg:block text-sm">
          <p className="font-bold text-slate-900 border-b-2 border-brand pb-2">目次</p>
          <nav>
            {SECTIONS.map((sec) => (
              <div key={sec.id}>
                <p className="pt-3 pb-1 text-xs font-bold text-slate-500">{sec.label}</p>
                {CHEMS.filter((c) => c.section === sec.id).map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className="block border-b border-slate-200 py-2 text-slate-700 hover:text-brand"
                    onClick={(e) => jumpTo(e, c.id)}
                  >
                    {c.title}
                  </a>
                ))}
              </div>
            ))}
          </nav>
          <div className="mt-5 bg-slate-50 border border-slate-200 p-4">
            <p className="text-xs font-bold text-slate-900">リストにない製品は？</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">お取り寄せ可能です。製品検索をご利用いただくか、お問い合わせください。</p>
            <Link to="/contact" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline">
              お問い合わせ <ChevronRight size={13} />
            </Link>
          </div>
        </aside>

        {/* 目次（スマホ） */}
        <nav className="lg:hidden border border-slate-200">
          {SECTIONS.map((sec) => (
            <div key={sec.id} className="border-b border-slate-200 last:border-b-0 px-3 py-2.5">
              <p className="text-xs font-bold text-slate-500 mb-1.5">{sec.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {CHEMS.filter((c) => c.section === sec.id).map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className="px-2.5 py-1 border border-slate-300 rounded-sm text-[13px] text-slate-700 active:bg-brand-light"
                    onClick={(e) => jumpTo(e, c.id)}
                  >
                    {c.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* 一覧 */}
        <div className="space-y-10 md:space-y-12 min-w-0">
          {SECTIONS.map((sec) => {
            const items = CHEMS.filter((c) => c.section === sec.id);
            if (items.length === 0) return null;
            return (
              <div key={sec.id}>
                <h2 className="flex items-center gap-3 font-serif text-xl md:text-2xl font-bold text-slate-900 tracking-normal">
                  <span aria-hidden className="block w-6 h-[2px] bg-brand shrink-0" />
                  {sec.label}
                </h2>
                {sec.id === "organic" && (
                  <p className="mt-2 text-sm text-slate-600">
                    メタノール・トルエンなど有機溶剤を常備在庫しています。お気軽にお問い合わせください。
                  </p>
                )}

                <div className="mt-5 space-y-8">
                  {items.map((chem) => (
                    <section key={chem.id} id={chem.id} className="scroll-mt-24 border-t-2 border-slate-800">
                      <div className="flex flex-wrap items-center justify-between gap-3 py-3">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-normal">{chem.title}</h3>
                        <button
                          type="button"
                          onClick={() => askProduct(chem.title)}
                          className="inline-flex items-center gap-1 rounded border border-brand/50 px-3 py-1.5 text-[13px] font-bold text-brand hover:bg-brand-light"
                        >
                          見積・相談する
                          <ChevronRight size={14} />
                        </button>
                      </div>

                      {chem.summary && <p className="mb-4 text-[15px] leading-relaxed text-slate-700">{chem.summary}</p>}

                      <div className="space-y-4">
                        {chem.manufacturers.map((m, i) => (
                          <div key={m.vendor + i} className="border border-slate-200">
                            <div className="flex flex-wrap items-center gap-2 bg-slate-50 border-b border-slate-200 px-3 md:px-4 py-2">
                              <span className="font-bold text-slate-900 text-sm md:text-[15px]">{m.vendor}</span>
                              {m.badges?.map((b) => (
                                <Badge key={b} warning={b === "劇物" || b === "危険物"}>
                                  {b}
                                </Badge>
                              ))}
                            </div>
                            {m.spec?.length > 0 && (
                              <dl className="text-sm">
                                {m.spec.map(([k, v]) => (
                                  <div key={k + v} className="grid grid-cols-[6.5rem_1fr] md:grid-cols-[9rem_1fr] border-b border-slate-100 last:border-b-0">
                                    <dt className="px-3 md:px-4 py-2 text-xs md:text-sm font-bold text-slate-600">{k}</dt>
                                    <dd className="px-3 md:px-4 py-2 text-slate-800">{v}</dd>
                                  </div>
                                ))}
                              </dl>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ContactBand text="リストにない薬品もお取り寄せできます。在庫や納期はお気軽にお問い合わせください。" />
      </div>
    </>
  );
}

/** ========= Helper Components ========= */
function Badge({ children, warning = false }) {
  if (warning) {
    return (
      <span className="inline-flex items-center px-1.5 py-px text-[11px] font-bold text-white bg-red-600">
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-1.5 py-px text-[11px] font-bold text-slate-600 border border-slate-300 bg-white">
      {children}
    </span>
  );
}