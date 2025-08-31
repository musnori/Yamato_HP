// src/pages/Stock.jsx
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

/** ========= データ =========
 * 化学品ごとに manufacturers を並べる。
 * 必要に応じて品目を増やしてください。
 */
const CHEMS = [
  {
    id: "naocl",
    title: "次亜塩素酸ソーダ",
    summary:
      "水処理・殺菌で幅広く使用。12%/6%などの濃度を在庫しています。用途に応じた荷姿のご提案が可能です。",
    manufacturers: [
      {
        vendor: "南海化学社製",
        badges: ["液体", "12%", "ポリ容器", "20kg"],
        spec: [
          ["性状", "液体"],
          ["濃度", "12％"],
          ["形体", "ポリ容器"],
          ["容量", "20kg"],
          ["ストックポイント", "阿保倉庫"],
          ["備考", "食品添加物、低食塩"],
        ],
        detailUrl: "#", // 外部詳細がある場合に設定
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
        detailUrl: "#",
      },
    ],
  },
  {
    id: "hcl",
    title: "塩酸",
    summary:
      "金属洗浄・pH調整などに使用。35％など工業用の標準グレードを常備。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "35％", "ポリ容器/ローリー"],
        spec: [
          ["性状", "液体"],
          ["濃度", "35％（他濃度応相談）"],
          ["荷姿", "20kg, 500kg, ローリー可"],
        ],
      },
    ],
  },
  {
    id: "naoh",
    title: "苛性ソーダ（液体）",
    summary: "排水・pH調整向け。24％/48％の定番濃度を在庫しています。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "24％/48％", "ポリ容器/ローリー"],
        spec: [
          ["性状", "液体"],
          ["濃度", "24％ / 48％"],
          ["荷姿", "20kg, 500kg, ローリー可"],
        ],
      },
    ],
  },
  {
    id: "pac",
    title: "PAC（ポリ塩化アルミニウム）",
    summary:
      "凝集剤。浄水・排水のSS除去や色度低減に使用。各濃度・粘度を取り扱い。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "各濃度", "ポリ容器/ローリー"],
        spec: [
          ["性状", "液体"],
          ["濃度", "各種（お問い合わせください）"],
          ["荷姿", "20kg, 500kg, ローリー可"],
        ],
      },
    ],
  },
  {
    id: "h2so4",
    title: "濃硫酸 / 精製濃硫酸",
    summary:
      "98％等の濃硫酸を常備。精製グレードも手配可能。取扱には保護具が必要です。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["液体", "98％", "危険物"],
        spec: [
          ["性状", "液体"],
          ["濃度", "98％（他グレードあり）"],
          ["荷姿", "20kg, 500kg"],
          ["注意", "腐食性・強酸性。保護具着用の上で取扱"],
        ],
      },
    ],
  },
  {
    id: "cacl2",
    title: "塩化カルシウム",
    summary: "除湿・融雪・硬度調整などに。粒状/フレークの取扱有り。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["固体", "粒/フレーク", "袋"],
        spec: [
          ["外観", "白色固体（粒状/フレーク）"],
          ["荷姿", "25kg 袋 他"],
        ],
      },
    ],
  },
  {
    id: "cao",
    title: "消石灰",
    summary: "pH調整・土壌改良・衛生用途。袋入りを常備在庫。",
    manufacturers: [
      {
        vendor: "国内メーカー各社",
        badges: ["粉体", "袋"],
        spec: [
          ["外観", "白色粉体"],
          ["荷姿", "20kg/25kg 袋"],
        ],
      },
    ],
  },
];

/** ========= 小さいUI部品 ========= */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-slate-700">
      {children}
    </span>
  );
}

function SpecTable({ rows }) {
  return (
    <dl className="grid grid-cols-[8rem_1fr] gap-x-4 gap-y-2 text-sm">
      {rows.map(([k, v]) => (
        <React.Fragment key={k + v}>
          <dt className="text-slate-500">{k}</dt>
          <dd className="text-slate-900">{v}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

/** ========= ページ本体 ========= */
export default function Stock() {
  const { hash } = useLocation();

  // /stock#id で来たらそのセクションまでスクロール
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* ヘッダー */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">在庫品紹介</h1>
        <p className="text-slate-600 mt-2">
          常備在庫の主要薬品を掲載しています。荷姿・等級の詳細や在庫状況はお問い合わせください。
        </p>
      </header>

      {/* 目次 */}
      <nav className="mb-8 flex flex-wrap gap-2">
        {CHEMS.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="px-3 py-1 rounded-full border text-sm hover:bg-green-50"
          >
            {c.title}
          </a>
        ))}
        <Link to="/products" className="ml-auto text-green-700 hover:underline text-sm">
          ← 製品一覧へ戻る
        </Link>
      </nav>

      {/* セクション */}
      <div className="space-y-10">
        {CHEMS.map((chem) => (
          <section key={chem.id} id={chem.id} className="rounded-2xl border bg-white shadow-sm">
            {/* 見出しバー（スクショの“黒帯”を現代風に） */}
            <div className="rounded-t-2xl bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-3">
              <h2 className="text-white text-lg font-semibold tracking-wide">
                {chem.title}
              </h2>
            </div>

            <div className="p-5 space-y-6">
              {/* サマリー */}
              {chem.summary && (
                <p className="text-slate-800">{chem.summary}</p>
              )}

              {/* メーカーごとのカード */}
              <div className="space-y-5">
                {chem.manufacturers.map((m, i) => (
                  <div
                    key={m.vendor + i}
                    className="rounded-xl border border-slate-200"
                  >
                    {/* 内側の見出し（スクショの薄グレー帯イメージ） */}
                    <div className="rounded-t-xl bg-gradient-to-b from-white to-slate-100 px-4 py-2 border-b">
                      <p className="font-semibold text-slate-800">{m.vendor}</p>
                    </div>

                    <div className="p-4 space-y-3">
                      {/* バッジ列 */}
                      {m.badges?.length ? (
                        <div className="flex flex-wrap gap-1.5">
                          {m.badges.map((b) => (
                            <Badge key={b}>{b}</Badge>
                          ))}
                        </div>
                      ) : null}

                      {/* スペック */}
                      {m.spec?.length ? <SpecTable rows={m.spec} /> : null}

                      {/* CTA */}
                      {m.detailUrl && m.detailUrl !== "#" ? (
                        <a
                          href={m.detailUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-green-700 hover:underline text-sm"
                        >
                          &gt;&gt; 詳細ページはこちら
                          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h5v2H7v10h10v-3h2v5H5V5z"/>
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
