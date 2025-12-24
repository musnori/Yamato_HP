// src/pages/Products.jsx
import React, { useState, useMemo, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import * as wanakana from "wanakana";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_FORMS, PRODUCT_USES } from "../data/products";
import Card from "../components/Card";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";

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
   B) 画面本体
========================= */
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetail, setOpenDetail] = useState(null);

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("cat") || "all");
  const [useCase, setUseCase] = useState(searchParams.get("use") || "all");
  const [form, setForm] = useState(searchParams.get("form") || "all");

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

  
  // 3) 問い合わせ導線
  const navigate = useNavigate();
  const ask = (subject) => {
    const qs = new URLSearchParams({ subject: `用途相談：${subject}`, category: "chemicals" }).toString();
    navigate(`/contact?${qs}`);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesQuery = query
        ? product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesCategory = category === "all" ? true : product.category === category;
      const matchesUse = useCase === "all" ? true : product.uses.includes(useCase);
      const matchesForm = form === "all" ? true : product.form === form;
      return matchesQuery && matchesCategory && matchesUse && matchesForm;
    });
  }, [query, category, useCase, form]);

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

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e2f7e7,_transparent_55%)]" />
        <div className="relative layout-container py-10 md:py-14">
          <p className="section-title">PRODUCTS</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">取扱製品</h1>
          <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">
            探す → 比較 → すぐ見積まで、迷わず進める製品ページです。名称が分からなくてもご相談いただけます。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryCTA to="/contact?subject=取扱製品について" label="見積依頼" />
            <PrimaryCTA to="/contact?subject=製品の相談" label="相談する" variant="outline" />
            <PrimaryCTA
              href={poolBannerLink}
              label="プール管理製品"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </section>

      <Section
        eyebrow="HOW TO"
        title="探す → 比較 → すぐ見積"
        description="検索して候補を比較し、そのまま見積相談へ進めます。"
        className="bg-white"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "探す", text: "キーワードや用途で絞り込み。" },
            { title: "比較する", text: "用途・規格・説明を確認。" },
            { title: "見積する", text: "気になる製品からそのまま相談。" },
          ].map((item) => (
            <Card key={item.title} className="p-5">
              <p className="text-sm font-semibold text-green-700">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="disposal" className="bg-slate-50">
        <Card className="p-8 border-slate-100">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            回収・処分サービス
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900">
            回収・処分のご相談
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            ラベル不明・長期保管・固結／沈殿・在庫整理など、まずは現状をお知らせください。安全・法令順守での処理方法をご提案します。
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            {[
              "ラベル不明の薬品も可能",
              "事前現地確認やマニフェスト発行も可能",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-4">
            <PrimaryCTA
              to={`/contact?subject=${encodeURIComponent("薬品の回収・処分の相談")}`}
              label="回収・処分について相談する"
            />
            <PrimaryCTA to="/contact" label="お問い合わせフォームへ" variant="outline" />
          </div>
        </Card>
      </Section>

      <Section
        id="search"
        eyebrow="SEARCH"
        title="製品を探す"
        description="キーワード・カテゴリ・用途・形状から絞り込み。必要ならその場で見積へ。"
      >
        <Card className="p-6">
          <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr_1fr_auto] items-end">
            <div>
              <label className="text-sm font-semibold text-slate-700">キーワード検索</label>
              <input
                type="text"
                placeholder="製品名・用途・カテゴリ（例：次亜、洗浄）"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  updateFilters({ q: e.target.value });
                }}
                className="input-field mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">カテゴリ</label>
              <select
                className="select-field mt-2"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  updateFilters({ cat: e.target.value });
                }}
              >
                <option value="all">すべて</option>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">用途</label>
              <select
                className="select-field mt-2"
                value={useCase}
                onChange={(e) => {
                  setUseCase(e.target.value);
                  updateFilters({ use: e.target.value });
                }}
              >
                <option value="all">すべて</option>
                {PRODUCT_USES.map((use) => (
                  <option key={use.id} value={use.id}>{use.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">形状</label>
              <select
                className="select-field mt-2"
                value={form}
                onChange={(e) => {
                  setForm(e.target.value);
                  updateFilters({ form: e.target.value });
                }}
              >
                <option value="all">すべて</option>
                {PRODUCT_FORMS.map((shape) => (
                  <option key={shape.id} value={shape.id}>{shape.label}</option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
                setUseCase("all");
                setForm("all");
                setSearchParams({});
              }}
              className="btn-outline h-10 mt-6"
            >
              条件をクリア
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="tag">日本語部分一致で検索</span>
            <span className="tag">カテゴリ直リンク対応</span>
            <span className="tag">比較後すぐ見積</span>
          </div>
        </Card>
      </Section>

      <Section
        eyebrow="COMPARE"
        title="おすすめ製品"
        description={`表示件数：${filteredProducts.length}件`}
      >
        {filteredProducts.length === 0 && (
          <p className="mt-4 text-slate-500">該当する製品がありません。条件を変更してください。</p>
        )}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="p-5 flex flex-col">
              <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                <span className="tag">{PRODUCT_CATEGORIES.find((c) => c.id === product.category)?.label}</span>
                {product.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{product.description}</p>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => setOpenDetail(openDetail === product.id ? null : product.id)}
                >
                  詳細
                </button>
                <button type="button" className="btn-primary" onClick={() => ask(product.name)}>
                  見積・相談する
                </button>
              </div>
              {openDetail === product.id && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">概要</p>
                  <p className="mt-1">{product.detail.overview}</p>
                  <p className="mt-3 font-semibold text-slate-900">用途例</p>
                  <ul className="mt-1 list-disc list-inside space-y-1">
                    {product.detail.uses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                  <p className="mt-3 font-semibold text-slate-900">仕様</p>
                  <div className="mt-2 grid gap-2">
                    {product.detail.specs.map(([label, value]) => (
                      <div key={label} className="flex justify-between text-xs text-slate-600">
                        <span>{label}</span>
                        <span className="font-semibold text-slate-800">{value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-slate-500">{product.detail.notes}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-2xl border border-green-200 bg-green-50 text-green-900 px-4 py-3 text-sm">
          「薬品名が分からない」でもOK。用途や困りごとだけ書いて送ってください。
        </div>
      </Section>

      <Section eyebrow="ALL ITEMS" title="全品目一覧（五十音）">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <section className="space-y-3" id="water">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg font-semibold text-slate-900">無機薬品</h3>
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

          <section className="space-y-3" id="reagents">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg font-semibold text-slate-900">有機薬品</h3>
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
      </Section>
    </div>
  );
}
