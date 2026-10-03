// src/pages/Products.jsx
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Disclosure } from "@headlessui/react";
import * as wanakana from "wanakana";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_FORMS, PRODUCT_USES } from "../data/products";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";
import PageHeader from "../components/PageHeader";
import ContactBand from "../components/ContactBand";
import SEOHead from "../components/SEOHead";
import { BreadcrumbSchema, ProductCatalogSchema } from "../components/StructuredData";

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
  ChevronRight
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
  // prefixMap を先にチェック（漢字始まりの薬品名を正しく分類するため）
  for (const [key, kana] of Object.entries(prefixMap)) {
    if (item.startsWith(key) || hira.startsWith(wanakana.toHiragana(key))) return kana[0];
  }
  for (const ch of hira) if (wanakana.isHiragana(ch)) return ch;
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
  "メタノール": "methanol",
  "トルエン": "toluene",
  "アセトン": "acetone",
  "キシレン": "xylene",
  "イソプロピルアルコール": "ipa",
};

/* 全品目リスト（サジェスト・検索用） */
const allCatalogItems = [...new Set([
  ...inorganicItems,
  ...organicItems,
  ...PRODUCTS.map((p) => p.name),
])];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetail, setOpenDetail] = useState(null);

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("cat") || "all");
  const [useCase, setUseCase] = useState(searchParams.get("use") || "all");
  const [form, setForm] = useState(searchParams.get("form") || "all");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
    setCategory(searchParams.get("cat") || "all");
    setUseCase(searchParams.get("use") || "all");
    setForm(searchParams.get("form") || "all");
  }, [searchParams]);

  /* サジェスト候補（部分一致） */
  const suggestions = useMemo(() => {
    const q = query.trim();
    if (q.length === 0) return [];
    const lower = q.toLowerCase();
    const hiraQ = wanakana.toHiragana(q);
    return allCatalogItems
      .filter((item) => {
        const itemLower = item.toLowerCase();
        const itemHira = wanakana.toHiragana(item);
        return itemLower.includes(lower) || itemHira.includes(hiraQ);
      })
      .slice(0, 10);
  }, [query]);

  /* 検索欄の外クリックでサジェスト閉じる */
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const groupsInorganic = useGrouped(inorganicItems, "");
  const groupsOrganic = useGrouped(organicItems, "");
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

  /* 注目製品（詳細付き）のフィルタ */
  const filteredProducts = useMemo(() => {
    if (!hasCriteria) return [];

    const q = query.trim().toLowerCase();
    const hiraQ = wanakana.toHiragana(query.trim());
    return PRODUCTS.filter((product) => {
      const matchesQuery =
        q === ""
          ? true
          : product.name.toLowerCase().includes(q) ||
            product.description.toLowerCase().includes(q) ||
            wanakana.toHiragana(product.name).includes(hiraQ);

      const matchesCategory = category === "all" ? true : product.category === category;
      const matchesUse = useCase === "all" ? true : product.uses.includes(useCase);
      const matchesForm = form === "all" ? true : product.form === form;

      return matchesQuery && matchesCategory && matchesUse && matchesForm;
    });
  }, [query, category, useCase, form, hasCriteria]);

  /* 全品目から検索にマッチしたもの（注目製品と重複しないもの） */
  const matchedCatalogItems = useMemo(() => {
    const q = query.trim();
    if (q.length === 0) return [];
    const lower = q.toLowerCase();
    const hiraQ = wanakana.toHiragana(q);
    const featuredNames = new Set(PRODUCTS.map((p) => p.name));
    return allCatalogItems.filter((item) => {
      if (featuredNames.has(item)) return false;
      const itemLower = item.toLowerCase();
      const itemHira = wanakana.toHiragana(item);
      return itemLower.includes(lower) || itemHira.includes(hiraQ);
    });
  }, [query]);

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

  const selectSuggestion = (item) => {
    setQuery(item);
    setShowSuggestions(false);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("q", item);
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
    <>
      <SEOHead pageKey="products" />
      <BreadcrumbSchema items={[{ name: "ホーム", url: "/" }, { name: "取扱製品" }]} />
      <ProductCatalogSchema items={allCatalogItems} />

      <PageHeader
        title="取扱製品"
        lead="化学薬品・工業薬品・試薬・有機溶剤を、姫路市から関西エリアへお届けしています。薬品名・用途・形状から製品をお探しいただけます。見つからない場合もお気軽にお問い合わせください。"
      >
        <p className="mt-2 text-xs leading-relaxed text-slate-600 max-w-3xl">
          主な取扱品目：メタノール / トルエン / エタノール / アセトン / キシレン / 塩酸 / 苛性ソーダ / 次亜塩素酸ソーダ / PAC / 硫酸 / 過酸化水素 ほか160品目以上
        </p>
      </PageHeader>

      <div className="bg-white min-h-screen">
      {/* =======================
          FILTER CONTROL PANEL
      ======================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 pb-2">
        <div className="border border-slate-300 bg-slate-50 p-4 md:p-6">
          
          {/* キーワード検索（サジェスト付き） */}
          <div className="relative" ref={searchRef}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10" size={20} />
            <input
              type="text"
              placeholder="薬品名で検索（例：メタノール / エタノール / 塩酸）"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
                updateFilters({ q: e.target.value });
              }}
              onFocus={() => query.trim().length > 0 && setShowSuggestions(true)}
              className="w-full h-12 pl-12 pr-4 bg-white border border-slate-300 rounded focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors outline-none text-[15px] text-slate-800 placeholder:text-slate-400"
            />
            {/* サジェストドロップダウン */}
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-300 rounded shadow-md z-50 max-h-64 overflow-y-auto">
                {suggestions.map((item) => {
                  const q = query.trim();
                  const idx = item.toLowerCase().indexOf(q.toLowerCase());
                  return (
                    <li key={item}>
                      <button
                        type="button"
                        className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-brand-light hover:text-brand transition-colors flex items-center gap-2 border-b border-slate-100 last:border-0"
                        onMouseDown={(e) => { e.preventDefault(); selectSuggestion(item); }}
                      >
                        <Search size={14} className="text-slate-300 shrink-0" />
                        {idx >= 0 ? (
                          <span>
                            {item.slice(0, idx)}
                            <span className="font-bold text-brand">{item.slice(idx, idx + q.length)}</span>
                            {item.slice(idx + q.length)}
                          </span>
                        ) : (
                          <span>{item}</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* デスクトップ：フィルター列 */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mt-4 items-end">
            {[
              { label: "カテゴリ", val: category, set: setCategory, key: "cat", opts: PRODUCT_CATEGORIES },
              { label: "用途", val: useCase, set: setUseCase, key: "use", opts: PRODUCT_USES },
              { label: "形状", val: form, set: setForm, key: "form", opts: PRODUCT_FORMS },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs font-bold text-slate-700 mb-1 block">{f.label}</label>
                <div className="relative">
                  <select
                    className="w-full h-11 pl-3 pr-8 bg-white border border-slate-300 rounded text-sm text-slate-700 focus:border-brand focus:ring-1 focus:ring-brand outline-none appearance-none cursor-pointer"
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
              className="h-11 flex items-center justify-center gap-2 border border-slate-300 bg-white rounded text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors"
            >
              <X size={16} /> 条件クリア
            </button>
          </div>

          {/* モバイル：フィルター開閉 */}
          <div className="lg:hidden mt-4">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700"
              onClick={() => setFiltersOpen((prev) => !prev)}
            >
              <Filter size={16} />
              {filtersOpen ? "絞り込みを閉じる" : "詳細条件で絞り込む"}
              <ChevronDown className={`ml-auto transition-transform ${filtersOpen ? "rotate-180" : ""}`} size={16} />
            </button>

            {filtersOpen && (
              <div className="mt-3 space-y-4 p-4 bg-white border border-slate-300">
                {[
                  { label: "カテゴリ", val: category, set: setCategory, key: "cat", opts: PRODUCT_CATEGORIES },
                  { label: "用途", val: useCase, set: setUseCase, key: "use", opts: PRODUCT_USES },
                  { label: "形状", val: form, set: setForm, key: "form", opts: PRODUCT_FORMS },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-xs font-bold text-slate-700 mb-1 block">{f.label}</label>
                    <div className="relative">
                      <select
                        className="w-full p-2.5 pr-8 bg-white border border-slate-300 rounded text-sm"
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
                  className="w-full py-2.5 border border-slate-300 rounded text-sm bg-white text-slate-600"
                >
                  条件をリセット
                </button>
              </div>
            )}
          </div>

          {/* アクティブフィルタータグ */}
          <div className="mt-4 flex flex-wrap items-center gap-2 min-h-[28px]">
            {activeFilters.length > 0 ? (
              activeFilters.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => removeFilter(filter.key)}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-brand/40 bg-white pl-3 pr-2 py-1 text-xs font-bold text-brand hover:bg-brand-light transition-colors"
                >
                  {filter.label}
                  <X size={12} />
                </button>
              ))
            ) : (
              <span className="text-xs text-slate-500 flex items-center gap-1">
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
        title={hasCriteria ? "検索結果" : "おすすめ製品"}
        description={hasCriteria ? `${filteredProducts.length + matchedCatalogItems.length}件が見つかりました` : "よくお問い合わせいただく製品です"}
        className="pt-6 md:pt-8"
      >
        {/* 結果ゼロの場合 */}
        {hasCriteria && filteredProducts.length === 0 && matchedCatalogItems.length === 0 && (
          <div className="text-center py-10 px-4 bg-slate-50 border border-slate-300">
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
                className="px-6 py-2.5 rounded border border-slate-300 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50"
              >
                条件をクリア
              </button>
              <PrimaryCTA to="/contact" label="相談フォームへ" />
            </div>
          </div>
        )}

        {/* 製品カードグリッド (検索結果 or おすすめ) */}
        <div className="grid gap-px bg-slate-200 border border-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {(hasCriteria ? filteredProducts : recommendedProducts).map((product) => (
            <div 
              key={product.id} 
              className={`p-4 md:p-5 flex flex-col ${openDetail === product.id ? "bg-brand-light" : "bg-white"}`}
            >
              {/* ヘッダータグ */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2 py-0.5 bg-brand text-white text-[11px] font-bold">
                  {PRODUCT_CATEGORIES.find((c) => c.id === product.category)?.label}
                </span>
                {product.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 border border-slate-300 text-slate-600 text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* タイトル & 説明 */}
              <h3 className="text-[17px] font-bold text-slate-900 leading-snug tracking-normal">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed mb-4">
                {product.description}
              </p>

              <div className="mt-auto flex gap-2">
                <button
                  type="button"
                  onClick={() => setOpenDetail(openDetail === product.id ? null : product.id)}
                  className="flex-1 py-2.5 text-[13px] font-bold rounded transition-colors border bg-white text-brand border-brand/50 hover:bg-brand-light"
                >
                  {openDetail === product.id ? "閉じる" : "詳細を見る"}
                </button>
                <button 
                  type="button" 
                  className="flex-1 py-2.5 bg-brand hover:bg-brand-dark text-white text-[13px] font-bold rounded transition-colors"
                  onClick={() => ask(product.name)}
                >
                  見積依頼
                </button>
              </div>

              {/* 詳細パネル（展開時） */}
              {openDetail === product.id && (
                <div className="mt-4 pt-4 border-t border-slate-300 text-sm">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block mb-1">概要</span>
                      <p className="text-slate-700">{product.detail.overview}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block mb-1">主な用途</span>
                      <ul className="list-disc list-outside ml-4 text-slate-700 space-y-0.5">
                        {product.detail.uses.map((u) => <li key={u}>{u}</li>)}
                      </ul>
                    </div>
                    <div className="bg-white p-3 text-xs border border-slate-200">
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

        {/* 全品目からの検索結果 */}
        {hasCriteria && matchedCatalogItems.length > 0 && (
          <div className="mt-8">
            <h3 className="text-[15px] font-bold text-slate-900 mb-3 flex items-center gap-2 tracking-normal">
              <FlaskConical size={16} />
              取扱品目からの検索結果（{matchedCatalogItems.length}件）
            </h3>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-slate-200 sm:gap-x-6">
                {matchedCatalogItems.map((item) => {
                  const sid = STOCK_ID_MAP[item];
                  return (
                    <div key={item} className="flex items-center justify-between gap-2 py-2.5 border-b border-slate-200">
                      {sid ? (
                        <Link
                          to={`/stock#${sid}`}
                          className="text-sm text-slate-800 hover:text-brand font-medium flex-1 min-w-0 truncate"
                        >
                          {item}
                        </Link>
                      ) : (
                        <span className="text-sm text-slate-700 flex-1 min-w-0 truncate">{item}</span>
                      )}
                      <div className="flex items-center gap-2 shrink-0">
                        {sid ? (
                          <Link
                            to={`/stock#${sid}`}
                            className="text-xs font-bold text-brand hover:underline flex items-center gap-0.5"
                          >
                            詳細 <ArrowRight size={10} />
                          </Link>
                        ) : (
                          <button
                            type="button"
                            className="text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
                            onClick={() => {
                              const qs = new URLSearchParams({ subject: `薬品のご相談：${item}`, category: "chemicals" }).toString();
                              navigate(`/contact?${qs}`);
                            }}
                          >
                            詳細
                          </button>
                        )}
                        <button
                          type="button"
                          className="text-xs font-bold text-slate-600 hover:text-brand transition-colors"
                          onClick={() => ask(item)}
                        >
                          見積依頼
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* =======================
          五十音リスト (Disclosure)
      ======================== */}
      <Section title="全品目一覧（五十音順）" className="bg-slate-50 border-y border-slate-200">
        <div>
          <Disclosure>
            {({ open }) => (
              <div className={`border bg-white ${open ? "border-slate-300" : "border-slate-300 hover:border-brand/60"}`}>
                <Disclosure.Button className="flex w-full items-center justify-between px-4 md:px-6 py-4 text-left text-slate-900 font-bold text-base">
                  <span>全品目リストを開く</span>
                  <div className={`flex items-center justify-center text-brand transition-transform ${open ? "rotate-180" : ""}`}>
                    <ChevronDown size={20} />
                  </div>
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 md:px-6 pb-6">
                  <div className="grid gap-8 lg:grid-cols-2 border-t border-slate-200 pt-5">
                    
                    {/* 無機薬品カラム */}
                    <div>
                      <div className="flex items-center gap-2 mb-1 pb-2 border-b-2 border-brand">
                        <h3 className="text-base font-bold text-slate-900 tracking-normal">無機薬品</h3>
                      </div>
                      
                      {rowsIn.map((row) => (
                        <Disclosure key={`in-${row}`}>
                          {({ open: rowOpen }) => (
                            <div className="border-b border-slate-200">
                              <Disclosure.Button className="flex w-full items-center justify-between py-3 text-left text-slate-800 hover:text-brand group">
                                <span className="font-bold text-sm">{row}</span>
                                <ChevronDown size={16} className={`text-slate-400 group-hover:text-brand transition-transform ${rowOpen ? "rotate-180" : ""}`} />
                              </Disclosure.Button>
                              <Disclosure.Panel className="pb-4">
                                <div className="grid grid-cols-2 gap-2">
                                  {groupsInorganic[row].map((item) => {
                                    const sid = STOCK_ID_MAP[item];
                                    return sid ? (
                                      <Link key={item} to={`/stock#${sid}`} className="text-[13px] py-1.5 px-2 bg-brand-light text-brand hover:underline flex items-center justify-between group/link">
                                        <span className="truncate">{item}</span>
                                        <ArrowRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                      </Link>
                                    ) : (
                                      <span key={item} className="text-[13px] py-1.5 px-2 text-slate-700">{item}</span>
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
                    <div>
                      <div className="flex items-center gap-2 mb-1 pb-2 border-b-2 border-brand">
                        <h3 className="text-base font-bold text-slate-900 tracking-normal">有機薬品</h3>
                      </div>

                      {rowsOrg.map((row) => (
                        <Disclosure key={`org-${row}`}>
                          {({ open: rowOpen }) => (
                            <div className="border-b border-slate-200">
                              <Disclosure.Button className="flex w-full items-center justify-between py-3 text-left text-slate-800 hover:text-brand group">
                                <span className="font-bold text-sm">{row}</span>
                                <ChevronDown size={16} className={`text-slate-400 group-hover:text-brand transition-transform ${rowOpen ? "rotate-180" : ""}`} />
                              </Disclosure.Button>
                              <Disclosure.Panel className="pb-4">
                                <div className="grid grid-cols-2 gap-2">
                                  {groupsOrganic[row].map((item) => {
                                    const sid = STOCK_ID_MAP[item];
                                    return sid ? (
                                      <Link key={item} to={`/stock#${sid}`} className="text-[13px] py-1.5 px-2 bg-brand-light text-brand hover:underline flex items-center justify-between group/link">
                                        <span className="truncate">{item}</span>
                                        <ArrowRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                      </Link>
                                    ) : (
                                      <span key={item} className="text-[13px] py-1.5 px-2 text-slate-700">{item}</span>
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
      {/* 注目商品 個別ページ */}
      <Section
        title="主な製品の詳細"
        description="よくご注文いただく商品の詳細情報・規格・保管方法をご確認いただけます"
        className="bg-white"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-slate-200">
          {[
            { label: "メタノール", path: "/products/methanol", cat: "有機溶剤" },
            { label: "トルエン", path: "/products/toluene", cat: "有機溶剤" },
            { label: "アセトン", path: "/products/acetone", cat: "有機溶剤" },
            { label: "苛性ソーダ", path: "/products/sodium-hydroxide", cat: "無機薬品" },
            { label: "塩酸", path: "/products/hydrochloric-acid", cat: "無機薬品" },
            { label: "硫酸", path: "/products/sulfuric-acid", cat: "無機薬品" },
            { label: "IPA", path: "/products/isopropyl-alcohol", cat: "有機溶剤" },
            { label: "エタノール", path: "/products/ethanol", cat: "有機溶剤" },
            { label: "次亜塩素酸ソーダ", path: "/products/sodium-hypochlorite", cat: "水処理薬品" },
            { label: "過酸化水素", path: "/products/hydrogen-peroxide", cat: "酸化剤" },
          ].map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className="flex flex-col gap-0.5 border-r border-b border-slate-200 px-3 py-3 hover:bg-brand-light transition-colors group"
            >
              <span className="text-[11px] text-slate-500">{p.cat}</span>
              <span className="flex items-center justify-between text-sm font-bold text-slate-900 group-hover:text-brand">{p.label}<ChevronRight size={14} className="text-slate-400 group-hover:text-brand" /></span>
            </Link>
          ))}
        </div>
      </Section>
      <ContactBand text="一覧にない薬品や、用途に合う製品が分からない場合もお気軽にご相談ください。" />
    </div>
    </>
  );
}