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
    // 3) グループ化
    return sorted.reduce((acc, item) => {
      const hira = wanakana.toHiragana(item);
      const row = getRow(hira.charAt(0));
      if (!acc[row]) acc[row] = [];
      acc[row].push(item);
      return acc;
    }, {});
  }, [items, query]);
}

// ───────────────────────────────────────────
// 4) コンポーネント本体
// ───────────────────────────────────────────
export default function Products() {
  const [query, setQuery] = useState("");

  // 無機と有機をそれぞれグループ化
  const groupsInorganic = useGrouped(inorganicItems, query);
  const groupsOrganic = useGrouped(organicItems, query);

  // 表示順
  const order = [
    "あ行",
    "か行",
    "さ行",
    "た行",
    "な行",
    "は行",
    "ま行",
    "や行",
    "ら行",
    "わ行",
    "その他",
  ];

  // グループキーを並べ替え
  const rowsIn = Object.keys(groupsInorganic).sort(
    (a, b) => order.indexOf(a) - order.indexOf(b)
  );
  const rowsOrg = Object.keys(groupsOrganic).sort(
    (a, b) => order.indexOf(a) - order.indexOf(b)
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10 font-sans">
      {/* 検索ボックス */}
      <div>
        <input
          type="text"
          placeholder="品目を検索…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 p-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        />
      </div>

      {/* ── プール管理製品バナー（テキストのみ） ── */}
      <div className="relative">
        <a
          href={poolBannerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl border border-green-700/60 bg-gradient-to-r from-green-600 to-green-700 text-white
                     shadow-md hover:shadow-lg hover:scale-[1.01] transition transform"
          aria-label="プール管理製品はこちら（外部サイトへ）"
        >
          <div className="px-6 py-5 flex items-center justify-center gap-3">
           
            <span className="text-xl font-bold tracking-wide">
              プール管理製品はこちら →
            </span>
          </div>
        </a>
        {/* 補助テキスト */}
        <p className="mt-2 text-sm text-gray-600">
          ソース：四国化成工業株式会社（外部リンク）
        </p>
      </div>

      {/* 無機薬品セクション */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-green-700">無機薬品</h2>
        {rowsIn.length === 0 && (
          <p className="text-gray-500">該当する品目がありません。</p>
        )}
        {rowsIn.map((row) => (
          <Disclosure key={`in-${row}`} defaultOpen={false}>
            {({ open }) => (
              <div className="border rounded">
                <Disclosure.Button className="flex w-full justify-between bg-green-100 px-4 py-2 text-left text-green-800 font-semibold hover:bg-green-200">
                  <span>{row}</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180" : ""} h-5 w-5 text-green-800 transition-transform`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 bg-white">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {groupsInorganic[row].map((item) => (
                      <li
                        key={item}
                        className="bg-green-50 p-3 border rounded shadow-sm hover:shadow-md transition text-sm"
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

      {/* 有機薬品セクション */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-blue-700">有機薬品</h2>
        {rowsOrg.length === 0 && (
          <p className="text-gray-500">該当する品目がありません。</p>
        )}
        {rowsOrg.map((row) => (
          <Disclosure key={`org-${row}`} defaultOpen={false}>
            {({ open }) => (
              <div className="border rounded">
                <Disclosure.Button className="flex w-full justify-between bg-blue-100 px-4 py-2 text-left text-blue-800 font-semibold hover:bg-blue-200">
                  <span>{row}</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180" : ""} h-5 w-5 text-blue-800 transition-transform`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 bg-white">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {groupsOrganic[row].map((item) => (
                      <li
                        key={item}
                        className="bg-blue-50 p-3 border rounded shadow-sm hover:shadow-md transition text-sm"
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
