// src/pages/Products.jsx
import React, { useState, useMemo } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import * as wanakana from "wanakana";
import { useNavigate, Link } from "react-router-dom";

/* =========================
   A) 既存：製品（五十音で探す）
========================= */
// プール管理製品のリンク（外部）
const poolBannerLink = "https://share.google/O2LMf2aOrlX2HRvy2";

// 無機・有機（※既存の配列はそのまま流用/追記OK）
const inorganicItems = [
  "PAC(ポリ塩化アルミニウム）","しゅう酸","りん酸塩類","りん酸７５％","りん酸８５％","アンモニア水",
  "カチオン界面活性剤","カリミョウバン（粉末）","カリミョウバン（粒状）","カリ石鹸","ギ酸ソーダ","ギ酸７６％",
  "クエン酸","コハク酸","コハク酸２ナトリウム","サンラックS","シアン化カリウム","シアン化ナトリウム",
  "シリカゲル各種","シリコン各種","スルファミン酸","ソーダ灰","ソービス","タルク","チオ尿素","チオ硫酸ソーダ",
  "トリポリりん酸ソーダ","ネオクロームS","ノニオン界面活性剤","ハイクロン各種","ハイドロサルファイト工業用",
  "ハイドロサルファイト食品添加物","ハイネオクローム","バストップJ","ピロリン酸カリウム","ピロリン酸ソーダ",
  "フッ化アンモニウム","フッ化水素アンモニウム","フッ化水素酸（フッ酸）５５％","フレーク強化水硫化ソーダ",
  "フレーク水硫化ソーダ","フレーク硫化ソーダ","フレーク苛性カリ","フレーク苛性ソーダ","ブドウ糖液体","ブドウ糖粉末",
  "ヘキサメタリン酸ソーダ","ホルマリン","ポリテツ","ポリ硫酸第一鉄","ポリ鉄（ポリ硫酸第ニ鉄）","マレイン酸",
  "メタ珪酸ソーダ","モリブデン酸アンモニウム","リンゴ酸","三酸化アンチモン","並塩（塩化ナトリウム）",
  "中性無水ボウ硝（硫酸ナトリウム）","乳酸","乳酸ナトリウム","二酸化マンガン","亜塩素酸ソーダ","亜硝酸ソーダ",
  "亜硫酸水素ナトリウム","原塩（塩化ナトリウム）","塩化アンモニウム","塩化カリウム","塩化カルシウム","塩化ナトリウム",
  "塩化ニッケル","塩化マグネシウム","塩化亜鉛","塩化亜鉛アンモニウム","塩化第二鉄溶液","塩酸３５％","尿素",
  "希硝酸６７．５％","希硫酸６２．５％","業務用石鹸","次亜塩素酸カルシウム７０％","次亜塩素酸ソーダ","次亜塩素酸ソーダ１２％",
  "次亜塩素酸ソーダ６％","水加ヒドラジン","水酸化カルシウム","水酸化ナトリウム","水酸化マグネシウム","活性炭","消石灰",
  "液体尿素","濃硝酸９８％","濃硫酸９８％","炭酸カリウム","炭酸ソーダ","炭酸水素アンモニウム","無水エタノール",
  "無水クロム酸","無水酢酸","無水酢酸ソーダ","無水重亜硫酸ソーダ","珪酸ソーダ","発煙硝酸","発煙硫酸","白線用石灰",
  "硝酸カリウム","硝酸ソーダ","硝酸マンガン","硝酸６７．５％","硝酸９８％","硫酸アンモニウム","硫酸ナトリウム",
  "硫酸ニッケル","硫酸バンド","硫酸マグネシウム","硫酸第一鉄","硫酸銅５水和物","精製濃硫酸","苛性カリ","苛性ソーダ（フレーク）",
  "苛性ソーダ（粒状）","苛性ソーダ２４％","苛性ソーダ４８％","蒸留水","過マンガン酸カリウム","過硫酸ソーダ","過酸化水素水３５％",
  "酢酸ソーダ","酢酸食品添加物９０％","酸化チタン","重クロム酸カリウム","重クロム酸ナトリウム","重ソウ工業用","重ソウ食品添加物",
  "高度さらし粉",
];

const organicItems = [
  "アセトニトリル","アセトン","アブゾール","イソプロピルアルコール","エキネン","エタノール","エタノール製剤",
  "エチルセロソルブ","エチレングリコール","エピクロルヒドリン","キシレン","クレゾール","クロロホルム","グリセリン",
  "シクロヘキサン","ジエチルエーテル","ジエチレングリコール","ジクロロメタン","ジメチルアセトアミド",
  "ジメチルスルホキシド","スチレンモノマー","ソルベントＩＰ","ソルミックス","テトラヒドロフラン","ディプソール",
  "トリエタノールアミン","トリエチルアミン","トリクロロエチレン","トルエン","ノルマルヘキサン","パラホルムアルデヒド",
  "パークロロエチレン","ピリジン","ピリジン塩酸塩","ブタノール","ブチルカルビトール","ブチルセロソルブ",
  "プロピレングリコール","ヘキシルカルビトール","ベンジルアルコール","ベンジン","ポリエチレングリコール",
  "ポリビニルアルコール","マレイン酸ブチル","メタクリル酸","メタノール","メチルイソブチルケトン","メチルエチルケトン",
  "メチレンクロライド","モノエチルアミン臭化水素酸塩","ラッカーシンナー","酢酸エチル","酢酸ブチル",
];

/* 五十音グループ化補助 */
const rowMap = {
  あ行: "あいうえお",
  か行: "かきくけこがぎぐげご",
  さ行: "さしすせそざじずぜぞ",
  た行: "たちつてとだぢづでど",
  な行: "なにぬねの",
  は行: "はひふへほばびぶべぼぱぴぷぺぽ",
  ま行: "まみむめも",
  や行: "やゆよ",
  ら行: "らりるれろ",
  わ行: "わをん",
};
function getRow(char) {
  for (const [row, chars] of Object.entries(rowMap)) if (chars.includes(char)) return row;
  return "その他";
}
const prefixMap = {
  酢酸: "さ", 塩化: "え", 塩酸: "え", 硫酸: "り", 硝酸: "し", 次亜塩素酸: "じ", 次亜: "じ",
  過酸化: "か", 過マンガン酸: "か", 炭酸: "た", 亜塩素酸: "あ", 亜硝酸: "あ", 無水: "む",
  水酸化: "す", 水: "す", 液体: "え", 希硫酸: "き", 濃硫酸: "の", 精製: "せ", 珪酸: "け",
  発煙: "は", 二酸化: "に", 尿素: "に", 活性炭: "か", 白線: "は",  "乳": "に", "希": "き", "濃": "の",
  "業": "ぎ", "消": "し", "蒸": "じ",
};

function headKana(item) {
  const hira = wanakana.toHiragana(item);
  for (const ch of hira) if (wanakana.isHiragana(ch)) return ch;
  for (const [key, kana] of Object.entries(prefixMap)) {
    if (item.startsWith(key) || hira.startsWith(wanakana.toHiragana(key))) return kana[0];
  }
  const m = hira.match(/[ぁ-ん]/);
  return m ? m[0] : null;
}
function useGrouped(items, query) {
  return useMemo(() => {
    const filtered = items.filter((item) => {
      const q = query.trim().toLowerCase();
      const hira = wanakana.toHiragana(item);
      return item.toLowerCase().includes(q) || hira.includes(q);
    });
    const sorted = filtered.sort((a, b) =>
      wanakana.toHiragana(a).localeCompare(wanakana.toHiragana(b), "ja")
    );
    return sorted.reduce((acc, item) => {
      const head = headKana(item);
      const row = head ? getRow(head) : "その他";
      (acc[row] ||= []).push(item);
      return acc;
    }, {});
  }, [items, query]);
}

/* =========================
   在庫ページ（/stock）セクションID対応
========================= */
const STOCK_ID_MAP = {
  "次亜塩素酸ソーダ": "naocl",
  "次亜塩素酸ソーダ１２％": "naocl",
  "次亜塩素酸ソーダ６％": "naocl",
  "塩酸３５％": "hcl",
  "塩酸": "hcl",
  "苛性ソーダ（液体）": "naoh",
  "苛性ソーダ２４％": "naoh",
  "苛性ソーダ４８％": "naoh",
  "PAC(ポリ塩化アルミニウム）": "pac",
  "PAC（ポリ塩化アルミニウム）": "pac",
  "濃硫酸９８％": "h2so4",
  "精製濃硫酸": "h2so4",
  "塩化カルシウム": "cacl2",
  "消石灰": "cao",
};

/* =========================
   B) 追加：用途で探す（カテゴリ）
========================= */
const USE_CASES = [
  {
    id: "water",                // ← /products#water からも来られる
    title: "水処理用薬品",
    lead: "浄水・排水処理、プール管理など",
    chemicals: [
      "次亜塩素酸ナトリウム","次亜塩素酸カルシウム","高度サラシ粉",
      "PAC（ポリ塩化アルミニウム）","硫酸","苛性ソーダ",
      "トリクロロイソシアヌル酸","高分子凝集剤","塩化カルシウム",
      "消石灰","ポリロックON","ネオクロール類","DPD錠剤"
    ],
    links: [{ name: "四国化成工業HP", url: "https://www.shikoku.co.jp/" }],
  },
  {
    id: "cleaning",
    title: "クリーニング関係薬剤",
    lead: "漂白・除菌・スケール除去・有機溶剤など",
    chemicals: ["次亜塩素酸ナトリウム","過酸化水素","メタ珪酸ソーダ","フッ酸","リグロイン"],
  },
  {
    id: "reagents",             // ← /products#reagents と対応
    title: "研究用試薬",
    lead: "大学・研究機関向け試薬は各社カタログへ",
    vendors: [
      { name: "ナカライテスク", url: "https://www.nacalai.co.jp/" },
      { name: "林純薬工業", url: "https://www.hayashipurechem.co.jp/" },
      { name: "キシダ化学", url: "https://www.kishida.co.jp/" },
      { name: "富士フイルム和光純薬", url: "https://labchem.wako-chem.co.jp/" },
      { name: "関東化学", url: "https://www.kanto.co.jp/" },
      { name: "東京化成工業", url: "https://www.tcichemicals.com/" },
    ],
  },
  {
    id: "industrial",          // ← /products#industrial と対応
    title: "食品添加物・工業系",
    lead: "食品工場・厨房／製造現場の衛生・品質用途",
    chemicals: [
      "次亜塩素酸ナトリウム","次亜塩素酸カルシウム","消石灰","ハイドサルファイト",
      "クエン酸","リンゴ酸","コハク酸","塩化カルシウム","塩酸","硫酸",
      "苛性ソーダ","酢酸ソーダ","硫酸アンモニウム","アルコール製剤"
    ],
  },
];

/* =========================
   C) 画面本体
========================= */
export default function Products() {
  // 1) 上段タブ（カテゴリ / 用途）
  const [mode, setMode] = useState("category"); // "category" | "usecase"

  // 2) カテゴリ側の検索
  const [query, setQuery] = useState("");
  const groupsInorganic = useGrouped(inorganicItems, query);
  const groupsOrganic = useGrouped(organicItems, query);
  const order = ["あ行","か行","さ行","た行","な行","は行","ま行","や行","ら行","わ行","その他"];
  const rowsIn  = Object.keys(groupsInorganic).sort((a,b)=>order.indexOf(a)-order.indexOf(b));
  const rowsOrg = Object.keys(groupsOrganic).sort((a,b)=>order.indexOf(a)-order.indexOf(b));

  
  // 3) 問い合わせ導線
  const navigate = useNavigate();
  const ask = (subject) => {
    const qs = new URLSearchParams({ subject: `用途相談：${subject}`, category: "chemicals" }).toString();
    navigate(`/contact?${qs}`);
  };

  // 4) URLのハッシュ(#water など)が来たら自動で「用途で探す」タブを開き、スクロール
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      if (USE_CASES.some(u => u.id === id)) {
        setMode("usecase");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  }, []);

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e2f7e7,_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-14">
          <p className="text-sm font-semibold text-green-700 tracking-[0.3em]">PRODUCTS</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">取扱製品</h1>
          <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">
            用途に応じた薬品を幅広く取り扱っています。カテゴリ検索と用途別検索のどちらでも探せます。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact?subject=取扱製品について"
              className="inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
            >
              製品について相談する
              <span aria-hidden>›</span>
            </Link>
            <a
              href={poolBannerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-800 hover:bg-green-100"
            >
              プール管理製品
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 space-y-10">
        {/* 上段タブ */}
        <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${mode==='category' ? 'bg-green-700 text-white shadow' : 'hover:bg-neutral-50 text-slate-700'}`}
            onClick={() => setMode("category")}
          >
            カテゴリで見る
          </button>
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${mode==='usecase' ? 'bg-green-700 text-white shadow' : 'hover:bg-neutral-50 text-slate-700'}`}
            onClick={() => setMode("usecase")}
          >
            用途で探す
          </button>
        </div>

      {mode === "category" ? (
        <>
          {/* 検索 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <label className="text-sm font-semibold text-slate-700">品目検索</label>
            <div className="mt-3 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
              <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
              <input
                type="text"
                placeholder="品目を検索…（例：次亜、酢酸、IPA など）"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* バナー（プール管理） */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-700">プール管理製品</p>
                <p className="text-xs text-slate-500 mt-1">ソース：四国化成工業株式会社（外部リンク）</p>
              </div>
              <a
                href={poolBannerLink}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                こちらから見る
                <span aria-hidden>›</span>
              </a>
            </div>
          </div>

          {/* 2カラム：無機/有機 */}
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* 無機薬品（左） */}
            <section className="space-y-3" id="water">
              <div className="flex items-center justify-between">
                <h2 className="text-base md:text-lg font-semibold text-slate-900">無機薬品</h2>
                <span className="text-xs text-slate-500">五十音順</span>
              </div>
              {rowsIn.length === 0 && <p className="text-slate-500">該当する品目がありません。</p>}
              {rowsIn.map((row) => (
                <Disclosure key={`in-${row}`} defaultOpen={false}>
                  {({ open }) => (
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <Disclosure.Button className="flex w-full items-center justify-between px-5 py-3 text-left text-slate-800 hover:bg-slate-50 rounded-2xl">
                        <span className="font-semibold">{row}</span>
                        <ChevronUpIcon className={`${open ? "rotate-180" : ""} h-5 w-5 text-slate-500 transition-transform`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-5 pb-5">
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {groupsInorganic[row].map((item) => {
                            const sid = STOCK_ID_MAP[item];
                            return (
                              <li key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
                                {sid ? (
                                  <Link to={`/stock#${sid}`} className="text-green-700 hover:underline">
                                    {item}（在庫紹介へ）
                                  </Link>
                                ) : (
                                  item
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </section>

            {/* 有機薬品（右） */}
            <section className="space-y-3" id="reagents">
              <div className="flex items-center justify-between">
                <h2 className="text-base md:text-lg font-semibold text-slate-900">有機薬品</h2>
                <span className="text-xs text-slate-500">五十音順</span>
              </div>
              {rowsOrg.length === 0 && <p className="text-slate-500">該当する品目がありません。</p>}
              {rowsOrg.map((row) => (
                <Disclosure key={`org-${row}`} defaultOpen={false}>
                  {({ open }) => (
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <Disclosure.Button className="flex w-full items-center justify-between px-5 py-3 text-left text-slate-800 hover:bg-slate-50 rounded-2xl">
                        <span className="font-semibold">{row}</span>
                        <ChevronUpIcon className={`${open ? "rotate-180" : ""} h-5 w-5 text-slate-500 transition-transform`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-5 pb-5">
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {groupsOrganic[row].map((item) => {
                            const sid = STOCK_ID_MAP[item];
                            return (
                              <li key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
                                {sid ? (
                                  <Link to={`/stock#${sid}`} className="text-green-700 hover:underline">
                                    {item}（在庫紹介へ）
                                  </Link>
                                ) : (
                                  item
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </section>
          </div>
        </>
      ) : (
        /* =========================
           用途で探すタブ
        ======================== */
        <div className="grid gap-6 md:grid-cols-2">
          {USE_CASES.map((u) => (
            <section key={u.id} id={u.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-semibold text-green-700">{u.title}</h3>
                  <p className="text-sm text-neutral-600 mt-1">{u.lead}</p>
                </div>
                <button
                  onClick={() => ask(u.title)}
                  className="rounded-full bg-green-700 text-white px-4 py-2 text-sm font-semibold hover:bg-green-800"
                >
                  この用途で問い合わせ
                </button>
              </div>

              {/* 代表的な薬品名（チップ） */}
              {u.chemicals?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {u.chemicals.map((c) => (
                    <button
                      key={c}
                      onClick={() => ask(`${u.title} / ${c}`)}
                      className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              ) : null}

              {/* ベンダー/外部リンク or vendors */}
              {(u.vendors?.length || u.links?.length) ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {(u.vendors || u.links).map((l) => (
                    <a
                      key={l.name || l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      {(l.name || l.label)} 公式HP
                    </a>
                  ))}
                </div>
              ) : null}

              {u.id === "industrial" && (
                <p className="mt-4 text-xs text-neutral-500">
                  ※「工業用・医薬品関連」はお客様の用途に応じて最適品をご提案します。まずは用途をご記入ください。
                </p>
              )}
            </section>
          ))}
        </div>
      )}

      {/* 下部の注意書き（用途タブ時のみ） */}
      {mode === "usecase" && (
        <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 text-green-900 px-4 py-3 text-sm">
          「薬品名が分からない」でもOK。用途や困りごとだけ書いて送ってください。
        </div>
      )}
      </div>
    </div>
  );
}
