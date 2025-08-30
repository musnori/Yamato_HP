// src/pages/Products.jsx
import React, { useState, useMemo } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import * as wanakana from "wanakana";

// プール管理製品のリンク（外部）
const poolBannerLink = "https://share.google/O2LMf2aOrlX2HRvy2";

// ───────────────────────────────────────────
// 1) 品目データ
// ───────────────────────────────────────────
const inorganicItems = [
  // 無機薬品
  "PAC(ポリ塩化アルミニウム）",
  "しゅう酸",
  "りん酸塩類",
  "りん酸７５％",
  "りん酸８５％",
  "アンモニア水",
  "カチオン界面活性剤",
  "カリミョウバン（粉末）",
  "カリミョウバン（粒状）",
  "カリ石鹸",
  "ギ酸ソーダ",
  "ギ酸７６％",
  "クエン酸",
  "コハク酸",
  "コハク酸２ナトリウム",
  "サンラックS",
  "シアン化カリウム",
  "シアン化ナトリウム",
  "シリカゲル各種",
  "シリコン各種",
  "スルファミン酸",
  "ソーダ灰",
  "ソービス",
  "タルク",
  "チオ尿素",
  "チオ硫酸ソーダ",
  "トリポリりん酸ソーダ",
  "ネオクロームS",
  "ノニオン界面活性剤",
  "ハイクロン各種",
  "ハイドロサルファイト工業用",
  "ハイドロサルファイト食品添加物",
  "ハイネオクローム",
  "バストップJ",
  "ピロリン酸カリウム",
  "ピロリン酸ソーダ",
  "フッ化アンモニウム",
  "フッ化水素アンモニウム",
  "フッ化水素酸（フッ酸）５５％",
  "フレーク強化水硫化ソーダ",
  "フレーク水硫化ソーダ",
  "フレーク硫化ソーダ",
  "フレーク苛性カリ",
  "フレーク苛性ソーダ",
  "ブドウ糖液体",
  "ブドウ糖粉末",
  "ヘキサメタリン酸ソーダ",
  "ホルマリン",
  "ポリテツ",
  "ポリ硫酸第一鉄",
  "ポリ鉄（ポリ硫酸第ニ鉄）",
  "マレイン酸",
  "メタ珪酸ソーダ",
  "モリブデン酸アンモニウム",
  "リンゴ酸",
  "三酸化アンチモン",
  "並塩（塩化ナトリウム）",
  "中性無水ボウ硝（硫酸ナトリウム）",
  "乳酸",
  "乳酸ナトリウム",
  "二酸化マンガン",
  "亜塩素酸ソーダ",
  "亜硝酸ソーダ",
  "亜硫酸水素ナトリウム",
  "原塩（塩化ナトリウム）",
  "塩化アンモニウム",
  "塩化カリウム",
  "塩化カルシウム",
  "塩化ナトリウム",
  "塩化ニッケル",
  "塩化マグネシウム",
  "塩化亜鉛",
  "塩化亜鉛アンモニウム",
  "塩化第二鉄溶液",
  "塩酸３５％",
  "尿素",
  "希硝酸６７．５％",
  "希硫酸６２．５％",
  "業務用石鹸",
  "次亜塩素酸カルシウム７０％",
  "次亜塩素酸ソーダ",
  "次亜塩素酸ソーダ１２％",
  "次亜塩素酸ソーダ６％",
  "水加ヒドラジン",
  "水酸化カルシウム",
  "水酸化ナトリウム",
  "水酸化マグネシウム",
  "活性炭",
  "消石灰",
  "液体尿素",
  "濃硝酸９８％",
  "濃硫酸９８％",
  "炭酸カリウム",
  "炭酸ソーダ",
  "炭酸水素アンモニウム",
  "無水エタノール",
  "無水クロム酸",
  "無水酢酸",
  "無水酢酸ソーダ",
  "無水重亜硫酸ソーダ",
  "珪酸ソーダ",
  "発煙硝酸",
  "発煙硫酸",
  "白線用石灰",
  "硝酸カリウム",
  "硝酸ソーダ",
  "硝酸マンガン",
  "硝酸６７．５％",
  "硝酸９８％",
  "硫酸アンモニウム",
  "硫酸ナトリウム",
  "硫酸ニッケル",
  "硫酸バンド",
  "硫酸マグネシウム",
  "硫酸第一鉄",
  "硫酸銅５水和物",
  "精製濃硫酸",
  "苛性カリ",
  "苛性ソーダ（フレーク）",
  "苛性ソーダ（粒状）",
  "苛性ソーダ２４％",
  "苛性ソーダ４８％",
  "蒸留水",
  "過マンガン酸カリウム",
  "過硫酸ソーダ",
  "過酸化水素水３５％",
  "酢酸ソーダ",
  "酢酸食品添加物９０％",
  "酸化チタン",
  "重クロム酸カリウム",
  "重クロム酸ナトリウム",
  "重ソウ工業用",
  "重ソウ食品添加物",
  "高度さらし粉",
];

const organicItems = [
  // 有機薬品
  "アセトニトリル",
  "アセトン",
  "アブゾール",
  "イソプロピルアルコール",
  "エキネン",
  "エタノール",
  "エタノール製剤",
  "エチルセロソルブ",
  "エチレングリコール",
  "エピクロルヒドリン",
  "キシレン",
  "クレゾール",
  "クロロホルム",
  "グリセリン",
  "シクロヘキサン",
  "ジエチルエーテル",
  "ジエチレングリコール",
  "ジクロロメタン",
  "ジメチルアセトアミド",
  "ジメチルスルホキシド",
  "スチレンモノマー",
  "ソルベントＩＰ",
  "ソルミックス",
  "テトラヒドロフラン",
  "ディプソール",
  "トリエタノールアミン",
  "トリエチルアミン",
  "トリクロロエチレン",
  "トルエン",
  "ノルマルヘキサン",
  "パラホルムアルデヒド",
  "パークロロエチレン",
  "ピリジン",
  "ピリジン塩酸塩",
  "ブタノール",
  "ブチルカルビトール",
  "ブチルセロソルブ",
  "プロピレングリコール",
  "ヘキシルカルビトール",
  "ベンジルアルコール",
  "ベンジン",
  "ポリエチレングリコール",
  "ポリビニルアルコール",
  "マレイン酸ブチル",
  "メタクリル酸",
  "メタノール",
  "メチルイソブチルケトン",
  "メチルエチルケトン",
  "メチレンクロライド",
  "モノエチルアミン臭化水素酸塩",
  "ラッカーシンナー",
  "酢酸エチル",
  "酢酸ブチル",
];

// ───────────────────────────────────────────
// 2) 五十音マップ（ 濁点・半濁点込み ）と振り分け関数
// ───────────────────────────────────────────
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
  for (const [row, chars] of Object.entries(rowMap)) {
    if (chars.includes(char)) return row;
  }
  return "その他";
}

/** 先頭の“かな”を拾う。無ければ代表的な漢字プレフィックスで推定 */
const prefixMap = {
  // よく出る化学系の先頭語 → 読みの最初のかな
  "酢酸": "さ",
  "塩化": "え",
  "塩酸": "え",
  "硫酸": "り",
  "硝酸": "し",
  "次亜塩素酸": "じ",
  "次亜": "じ",
  "過酸化": "か",
  "過マンガン酸": "か",
  "炭酸": "た",
  "亜塩素酸": "あ",
  "亜硝酸": "あ",
  "無水": "む",
  "水酸化": "す",
  "水": "す",         
  "液体": "え",
  "希硫酸": "き",
  "濃硫酸": "の",
  "精製": "せ",
  "珪酸": "け",
  "発煙": "は",
  "二酸化": "に",
  "尿素": "に",
  "活性炭": "か",
  "白線": "は",
  "乳": "に",
  "希": "き",
  "濃": "の",
  "業": "ぎ",
  "消": "し",
  "蒸": "じ",
};

function headKana(item) {
  // かなを優先して抽出（漢字は飛ばす）
  const hira = wanakana.toHiragana(item);
  for (const ch of hira) {
    if (wanakana.isHiragana(ch)) return ch; // 最初に見つかった“かな”
  }
  // 代表的な漢字先頭での推定
  for (const [key, kana] of Object.entries(prefixMap)) {
    if (item.startsWith(key) || hira.startsWith(wanakana.toHiragana(key))) {
      return kana[0];
    }
  }
  // かっこ内など後方にかながあれば拾う
  const m = hira.match(/[ぁ-ん]/);
  return m ? m[0] : null;
}

// ───────────────────────────────────────────
// 3) 指定配列を検索・ソート・五十音グループ化するヘルパー
// ───────────────────────────────────────────
function useGrouped(items, query) {
  return useMemo(() => {
    // 1) フィルタ
    const filtered = items.filter((item) => {
      const q = query.trim().toLowerCase();
      const hira = wanakana.toHiragana(item);
      return item.toLowerCase().includes(q) || hira.includes(q);
    });

    // 2) 読みでソート
    const sorted = filtered.sort((a, b) => {
      const ra = wanakana.toHiragana(a);
      const rb = wanakana.toHiragana(b);
      return ra.localeCompare(rb, "ja");
    });

    // 3) グループ化（← ここを修正）
    return sorted.reduce((acc, item) => {
      const head = headKana(item);
      const row = head ? getRow(head) : "その他";
      if (!acc[row]) acc[row] = [];
      acc[row].push(item);
      return acc;
    }, {});
  }, [items, query]);
}


// ── 4) 本体 ──
export default function Products() {
  const [query, setQuery] = useState("");
  const groupsInorganic = useGrouped(inorganicItems, query);
  const groupsOrganic   = useGrouped(organicItems, query);

  const order = ["あ行","か行","さ行","た行","な行","は行","ま行","や行","ら行","わ行","その他"];
  const rowsIn  = Object.keys(groupsInorganic).sort((a,b)=>order.indexOf(a)-order.indexOf(b));
  const rowsOrg = Object.keys(groupsOrganic).sort((a,b)=>order.indexOf(a)-order.indexOf(b));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 space-y-10">
      {/* 検索ボックス */}
      <div>
        <input
          type="text"
          placeholder="品目を検索…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-[42rem] rounded-md border border-slate-300/80 bg-white px-3.5 py-2 text-sm
                     placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-200/70"
        />
      </div>

      {/* バナー（色味抑えめ） */}
      <div>
        <a
          href={poolBannerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-slate-300 bg-gradient-to-r from-slate-900 to-slate-800
                     text-white px-6 py-4 text-center tracking-wide hover:brightness-105 transition"
        >
          プール管理製品はこちら →
        </a>
        <p className="mt-2 text-xs text-slate-500">ソース：四国化成工業株式会社（外部リンク）</p>
      </div>

      {/* 無機薬品 */}
      <section className="space-y-3">
        <h2 className="text-base md:text-lg font-semibold text-slate-900">無機薬品</h2>
        {rowsIn.length === 0 && <p className="text-slate-500">該当する品目がありません。</p>}

        {rowsIn.map((row) => (
          <Disclosure key={`in-${row}`} defaultOpen={false}>
            {({ open }) => (
              <div className="rounded-lg border border-slate-200 bg-white">
                <Disclosure.Button
                  className="flex w-full items-center justify-between px-4 py-3 text-left
                             text-slate-800 hover:bg-slate-50"
                >
                  <span className="font-medium">{row}</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180" : ""} h-5 w-5 text-slate-500 transition-transform`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-4">
                  <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {groupsInorganic[row].map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm
                                   hover:bg-slate-50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </section>

      {/* 有機薬品 */}
      <section className="space-y-3">
        <h2 className="text-base md:text-lg font-semibold text-slate-900">有機薬品</h2>
        {rowsOrg.length === 0 && <p className="text-slate-500">該当する品目がありません。</p>}

        {rowsOrg.map((row) => (
          <Disclosure key={`org-${row}`} defaultOpen={false}>
            {({ open }) => (
              <div className="rounded-lg border border-slate-200 bg-white">
                <Disclosure.Button
                  className="flex w-full items-center justify-between px-4 py-3 text-left
                             text-slate-800 hover:bg-slate-50"
                >
                  <span className="font-medium">{row}</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180" : ""} h-5 w-5 text-slate-500 transition-transform`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-4">
                  <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {groupsOrganic[row].map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm
                                   hover:bg-slate-50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </section>
    </div>
  );
}