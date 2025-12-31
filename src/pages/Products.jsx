// src/pages/Products.jsx
import React, { useState, useMemo, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import * as wanakana from "wanakana";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_FORMS, PRODUCT_USES } from "../data/products";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";

// アイコン (lucide-react)
import { 
  Search, 
  Filter, 
  X, 
  ChevronDown, 
  ChevronUp, 
  FlaskConical, 
  ArrowRight, 
  Info,
  Beaker
} from "lucide-react";

/* =========================
   A) 既存ロジック：製品（五十音で探す）
========================= */
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

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetail, setOpenDetail] = useState(null);

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("cat") || "all");
  const [useCase, setUseCase] = useState(searchParams.get("use") || "all");
  const [form, setForm] = useState(searchParams.get("form") || "all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
    setCategory(searchParams.get("cat") || "all");
    setUseCase(searchParams.get("use") || "all");
    setForm(searchParams.get("form") || "all");
  }, [searchParams]);

  const groupsInorganic = useGrouped(inorganicItems, query);
  const groupsOrganic = useGrouped(organicItems, query);
  const order = ["あ行","か行","さ行","た行","な行","は行","ま行","や行","ら行","わ行","その他"];
  const rowsIn  = Object.keys(groupsInorganic).sort((a,b)=>order.indexOf(a)-order.indexOf(b));
  const rowsOrg = Object.keys(groupsOrganic).sort((a,b)=>order.indexOf(a)-order.indexOf(b));

  const navigate = useNavigate();
  const ask = (subject) => {
    const qs = new URLSearchParams({ subject: `用途相談：${subject}`, category: "chemicals" }).toString();
    navigate(`/contact?${qs}`);
  };

  const hasCriteria =
    query.trim() !== "" ||
    category !== "all" ||
    useCase !== "all" ||
    form !== "all";

  const filteredProducts = useMemo(() => {
    if (!hasCriteria) return [];

    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesQuery =
        q === ""
          ? true
          : product.name.toLowerCase().includes(q) ||
            product.description.toLowerCase().includes(q);

      const matchesCategory = category === "all" ? true : product.category === category;
      const matchesUse = useCase === "all" ? true : product.uses.includes(useCase);
      const matchesForm = form === "all" ? true : product.form === form;

      return matchesQuery && matchesCategory && matchesUse && matchesForm;
    });
  }, [query, category, useCase, form, hasCriteria]);

  const updateFilters = (next) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      Object.entries(next).forEach(([key, value]) => {
        if (!value || value === "all" || value === "") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      return params;
    });
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setUseCase("all");
    setForm("all");
    setSearchParams({});
    setOpenDetail(null);
  };

  const activeFilters = [
    query ? { key: "q", label: `検索：${query}` } : null,
    category !== "all"
      ? {
          key: "cat",
          label: `${PRODUCT_CATEGORIES.find((c) => c.id === category)?.label}`,
        }
      : null,
    useCase !== "all"
      ? { key: "use", label: `${PRODUCT_USES.find((u) => u.id === useCase)?.label}` }
      : null,
    form !== "all" ? { key: "form", label: `${PRODUCT_FORMS.find((f) => f.id === form)?.label}` } : null,
  ].filter(Boolean);

  const removeFilter = (key) => {
    if (key === "q") { setQuery(""); updateFilters({ q: "" }); return; }
    if (key === "cat") { setCategory("all"); updateFilters({ cat: "all" }); return; }
    if (key === "use") { setUseCase("all"); updateFilters({ use: "all" }); return; }
    if (key === "form") { setForm("all"); updateFilters({ form: "all" }); }
  };

  const recommendedProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* =======================
          HERO
      ======================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="relative layout-container py-12 md:py-16 text-center">
          <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">PRODUCT SEARCH</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            製品を検索
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            薬品名、用途、形状から最適な製品をお探しいただけます。<br className="hidden md:inline" />
            見つからない場合も、お気軽に「見積・相談」よりお問い合わせください。
          </p>
        </div>
      </section>

      {/* =======================
          FILTER CONTROL PANEL
      ======================== */}
      <div className="layout-container -mt-8 relative z-10 pb-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-6 md:p-8">
          
          {/* キーワード検索 */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="キーワードで検索 (例：エタノール / 洗浄 / 工業用)"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                updateFilters({ q: e.target.value });
              }}
              className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all outline-none text-slate-800 placeholder:text-slate-400"
            />
          </div>

          {/* デスクトップ：フィルター列 */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mt-6 items-end">
            {[
              { label: "カテゴリ", val: category, set: setCategory, key: "cat", opts: PRODUCT_CATEGORIES },
              { label: "用途", val: useCase, set: setUseCase, key: "use", opts: PRODUCT_USES },
              { label: "形状", val: form, set: setForm, key: "form", opts: PRODUCT_FORMS },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs font-bold text-slate-500 ml-1 mb-1 block">{f.label}</label>
                <div className="relative">
                  <select
                    className="w-full h-11 pl-3 pr-8 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none appearance-none cursor-pointer hover:bg-slate-50 transition-colors"
                    value={f.val}
                    onChange={(e) => {
                      f.set(e.target.value);
                      updateFilters({ [f.key]: e.target.value });
                    }}
                  >
                    <option value="all">すべて</option>
                    {f.opts.map((o) => (
                      <option key={o.id} value={o.id}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>
              </div>
            ))}
            
            <button 
              type="button" 
              onClick={clearFilters} 
              className="h-11 flex items-center justify-center gap-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-red-500 transition-colors"
            >
              <X size={16} /> 条件クリア
            </button>
          </div>

          {/* モバイル：フィルター開閉 */}
          <div className="lg:hidden mt-4">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setFiltersOpen((prev) => !prev)}
            >
              <Filter size={16} />
              {filtersOpen ? "絞り込みを閉じる" : "詳細条件で絞り込む"}
              <ChevronDown className={`ml-auto transition-transform ${filtersOpen ? "rotate-180" : ""}`} size={16} />
            </button>

            {filtersOpen && (
              <div className="mt-4 space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                {[
                  { label: "カテゴリ", val: category, set: setCategory, key: "cat", opts: PRODUCT_CATEGORIES },
                  { label: "用途", val: useCase, set: setUseCase, key: "use", opts: PRODUCT_USES },
                  { label: "形状", val: form, set: setForm, key: "form", opts: PRODUCT_FORMS },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-xs font-bold text-slate-500 mb-1 block">{f.label}</label>
                    <div className="relative">
                      <select
                        className="w-full p-2 pr-8 bg-white border border-slate-200 rounded-lg text-sm"
                        value={f.val}
                        onChange={(e) => {
                          f.set(e.target.value);
                          updateFilters({ [f.key]: e.target.value });
                        }}
                      >
                        <option value="all">すべて</option>
                        {f.opts.map((o) => (
                          <option key={o.id} value={o.id}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
                <button 
                  type="button" 
                  onClick={clearFilters} 
                  className="w-full py-2 border border-slate-300 rounded-lg text-sm bg-white text-slate-600"
                >
                  条件をリセット
                </button>
              </div>
            )}
          </div>

          {/* アクティブフィルタータグ */}
          <div className="mt-6 flex flex-wrap items-center gap-2 min-h-[32px]">
            {activeFilters.length > 0 ? (
              activeFilters.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => removeFilter(filter.key)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 pl-3 pr-2 py-1 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
                >
                  {filter.label}
                  <div className="bg-emerald-200 rounded-full p-0.5 text-emerald-800">
                    <X size={10} />
                  </div>
                </button>
              ))
            ) : (
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Info size={14} /> 条件を指定すると検索結果が表示されます
              </span>
            )}
          </div>
        </div>
      </div>

      {/* =======================
          RESULTS SECTION
      ======================== */}
      <Section
        id="search"
        eyebrow="RESULTS"
        title={hasCriteria ? "検索結果" : "おすすめ製品"}
        description={hasCriteria ? `${filteredProducts.length}件が見つかりました` : "よくお問い合わせいただく製品です"}
        className="bg-slate-50 pt-0"
      >
        {/* 結果ゼロの場合 */}
        {hasCriteria && filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm border-dashed">
            <FlaskConical className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-800 font-bold text-lg">該当する製品が見つかりませんでした。</p>
            <p className="mt-2 text-slate-500 mb-6">
              条件を変更するか、直接お問い合わせください。<br/>
              リストにない製品も取り扱っております。
            </p>
            <div className="flex justify-center gap-4">
              <button 
                type="button" 
                onClick={clearFilters}
                className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50"
              >
                条件をクリア
              </button>
              <PrimaryCTA to="/contact" label="相談フォームへ" />
            </div>
          </div>
        )}

        {/* 製品カードグリッド (検索結果 or おすすめ) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(hasCriteria ? filteredProducts : recommendedProducts).map((product) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col ${
                openDetail === product.id 
                  ? "border-emerald-500 shadow-md ring-1 ring-emerald-500/20" 
                  : "border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1"
              }`}
            >
              {/* ヘッダータグ */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold tracking-wide border border-slate-200">
                  {PRODUCT_CATEGORIES.find((c) => c.id === product.category)?.label}
                </span>
                {product.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-500 text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* タイトル & 説明 */}
              <div className="flex items-start gap-3 mb-2">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Beaker size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight pt-1">
                  {product.name}
                </h3>
              </div>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-6 pl-[52px]">
                {product.description}
              </p>

              <div className="mt-auto pl-[52px] flex gap-3">
                <button
                  type="button"
                  onClick={() => setOpenDetail(openDetail === product.id ? null : product.id)}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors border ${
                     openDetail === product.id 
                       ? "bg-slate-100 text-slate-700 border-slate-200"
                       : "bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                  }`}
                >
                  {openDetail === product.id ? "閉じる" : "詳細を見る"}
                </button>
                <button 
                  type="button" 
                  className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm shadow-emerald-900/10 transition-colors"
                  onClick={() => ask(product.name)}
                >
                  見積依頼
                </button>
              </div>

              {/* 詳細パネル（展開時） */}
              {openDetail === product.id && (
                <div className="mt-6 pt-5 border-t border-slate-100 text-sm animate-fade-in-down">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold text-slate-400 block mb-1">概要</span>
                      <p className="text-slate-700">{product.detail.overview}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block mb-1">主な用途</span>
                      <ul className="list-disc list-outside ml-4 text-slate-700 space-y-0.5">
                        {product.detail.uses.map((u) => <li key={u}>{u}</li>)}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 text-xs border border-slate-100">
                      {product.detail.specs.map(([l, v]) => (
                        <div key={l} className="flex justify-between py-1 border-b border-slate-200/50 last:border-0">
                          <span className="text-slate-500">{l}</span>
                          <span className="font-semibold text-slate-700">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* =======================
          五十音リスト (Disclosure)
      ======================== */}
      <Section eyebrow="INDEX" title="全品目一覧（五十音順）" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <Disclosure>
            {({ open }) => (
              <div className={`border rounded-2xl transition-all duration-300 ${open ? "border-slate-200 bg-white" : "border-slate-200 hover:border-emerald-300"}`}>
                <Disclosure.Button className="flex w-full items-center justify-between px-6 py-5 text-left text-slate-800 font-bold text-lg hover:bg-slate-50 rounded-2xl transition-colors">
                  <span>全品目リストを開く</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 transition-transform duration-300 ${open ? "rotate-180 bg-emerald-100 text-emerald-600" : ""}`}>
                    <ChevronDown size={20} />
                  </div>
                </Disclosure.Button>

                <Disclosure.Panel className="px-6 pb-8 animate-fade-in">
                  <div className="grid gap-12 lg:grid-cols-2 mt-4 border-t border-slate-100 pt-8">
                    
                    {/* 無機薬品カラム */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-emerald-100">
                        <span className="w-2 h-6 bg-emerald-500 rounded-sm"></span>
                        <h3 className="text-lg font-bold text-slate-900">無機薬品</h3>
                      </div>
                      
                      {rowsIn.map((row) => (
                        <Disclosure key={`in-${row}`}>
                          {({ open: rowOpen }) => (
                            <div className="border-b border-slate-100 last:border-0">
                              <Disclosure.Button className="flex w-full items-center justify-between py-3 text-left text-slate-700 hover:text-emerald-700 group">
                                <span className="font-bold text-sm">{row}</span>
                                <ChevronDown size={16} className={`text-slate-300 group-hover:text-emerald-500 transition-transform ${rowOpen ? "rotate-180" : ""}`} />
                              </Disclosure.Button>
                              <Disclosure.Panel className="pb-4">
                                <div className="grid grid-cols-2 gap-2">
                                  {groupsInorganic[row].map((item) => {
                                    const sid = STOCK_ID_MAP[item];
                                    return sid ? (
                                      <Link key={item} to={`/stock#${sid}`} className="text-xs py-1 px-2 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:underline flex items-center justify-between group/link">
                                        <span className="truncate">{item}</span>
                                        <ArrowRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                      </Link>
                                    ) : (
                                      <span key={item} className="text-xs py-1 px-2 text-slate-600">{item}</span>
                                    );
                                  })}
                                </div>
                              </Disclosure.Panel>
                            </div>
                          )}
                        </Disclosure>
                      ))}
                    </div>

                    {/* 有機薬品カラム */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-emerald-100">
                        <span className="w-2 h-6 bg-emerald-500 rounded-sm"></span>
                        <h3 className="text-lg font-bold text-slate-900">有機薬品</h3>
                      </div>

                      {rowsOrg.map((row) => (
                        <Disclosure key={`org-${row}`}>
                          {({ open: rowOpen }) => (
                            <div className="border-b border-slate-100 last:border-0">
                              <Disclosure.Button className="flex w-full items-center justify-between py-3 text-left text-slate-700 hover:text-emerald-700 group">
                                <span className="font-bold text-sm">{row}</span>
                                <ChevronDown size={16} className={`text-slate-300 group-hover:text-emerald-500 transition-transform ${rowOpen ? "rotate-180" : ""}`} />
                              </Disclosure.Button>
                              <Disclosure.Panel className="pb-4">
                                <div className="grid grid-cols-2 gap-2">
                                  {groupsOrganic[row].map((item) => {
                                    const sid = STOCK_ID_MAP[item];
                                    return sid ? (
                                      <Link key={item} to={`/stock#${sid}`} className="text-xs py-1 px-2 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:underline flex items-center justify-between group/link">
                                        <span className="truncate">{item}</span>
                                        <ArrowRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                      </Link>
                                    ) : (
                                      <span key={item} className="text-xs py-1 px-2 text-slate-600">{item}</span>
                                    );
                                  })}
                                </div>
                              </Disclosure.Panel>
                            </div>
                          )}
                        </Disclosure>
                      ))}
                    </div>

                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      </Section>
    </div>
  );
}