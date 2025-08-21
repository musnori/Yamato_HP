import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  { img: "/morninng.jpg", title: "創業90年、信頼の化学品サプライヤー", subtitle: "学校・プール・工場など幅広いシーンで、安心・安全な薬品を迅速にお届けします" },
  { img: "/lunch.jpg",   title: "地域とともに歩む",                     subtitle: "必要なときに、必要な品質を" },
  { img: "/yugata.jpg",  title: "未来を見据えて挑戦",                   subtitle: "環境と安全に配慮した供給体制" },
  { img: "/night.jpg",   title: "確かな品質と安心を",                   subtitle: "徹底した品質管理とサポート" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* ===== ヒーロー（CTA付き） ===== */}
      <section className="relative h-[60vh] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url('${s.img}')` }}
            aria-hidden={i !== current}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow mb-3">
                {s.title}
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow">
                {s.subtitle}
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Link
                  to="/products"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow"
                >
                  製品一覧を見る
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-white/90 hover:bg-white text-blue-700 font-medium shadow"
                >
                  見積もり依頼はこちら
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ===== ごあいさつ（そのまま／文言微調整） ===== */}
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src="d.jpg" alt="大和薬品イメージ" className="w-full h-64 object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4 relative inline-block">
              ごあいさつ
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-green-300 rounded-full" />
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>大和薬品株式会社は、創業以来90年にわたり、化学品・医薬品の供給を通じて地域の健康と産業を支えてきました。</p>
              <p>培ってきた専門知識とネットワークで、お客様の用途に最適な提案と迅速な供給を実現します。</p>
              <p>これからも品質と安全を最優先に、環境配慮や地域連携にも取り組み、次の100年へ挑戦を続けます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 主要な取扱製品 ===== */}
<section className="bg-gray-50 py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">主要な取扱製品</h2>
    <p className="text-gray-600 mb-8">
      水処理用薬品から工業用薬品まで、幅広いラインナップをご用意。用途に合わせて最適な製品をご提案します。
    </p>

    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      {/* 水処理用薬品 */}
      <Link to="/products#water" className="group bg-white rounded-xl border hover:shadow-lg p-6 transition flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img src="/icons/sehin1.png" alt="水処理用薬品アイコン" className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">水処理用薬品</h3>
          <p className="text-sm text-gray-600 mt-1">プール・温浴施設・工場排水の衛生と管理に。</p>
        </div>
      </Link>

      {/* 試薬 */}
      <Link to="/products#reagents" className="group bg-white rounded-xl border hover:shadow-lg p-6 transition flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img src="/icons/sehin2.png" alt="試薬アイコン" className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">試薬</h3>
          <p className="text-sm text-gray-600 mt-1">教育・研究・検査用途に対応したラインナップ。</p>
        </div>
      </Link>

      {/* 工業用薬品 */}
      <Link to="/products#industrial" className="group bg-white rounded-xl border hover:shadow-lg p-6 transition flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img src="/icons/sehin3.png" alt="工業用薬品アイコン" className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">工業用薬品</h3>
          <p className="text-sm text-gray-600 mt-1">製造現場の効率化・品質向上に。</p>
        </div>
      </Link>

      {/* 医薬品関連 */}
      <Link to="/products#medical" className="group bg-white rounded-xl border hover:shadow-lg p-6 transition flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img src="/icons/sehin4.png" alt="医薬品関連アイコン" className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">医薬品関連</h3>
          <p className="text-sm text-gray-600 mt-1">安心・安全な取り扱いで確実にお届け。</p>
        </div>
      </Link>
    </div>
  </div>
</section>


     {/* ===== 大和薬品の強み ===== */}
<section className="py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">大和薬品の強み</h2>

    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      {/* 実績 */}
      <div className="bg-white rounded-xl border p-6 flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img src="/icons/strength1.png" alt="実績アイコン" className="w-full h-full object-contain" />
        </div>
        <div>
          <p className="font-semibold">90年以上の実績</p>
          <p className="text-sm text-gray-600 mt-1">全国の学校・企業での導入実績。</p>
        </div>
      </div>

      {/* 迅速納品 */}
      <div className="bg-white rounded-xl border p-6 flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img src="/icons/strength2.png" alt="迅速納品アイコン" className="w-full h-full object-contain" />
        </div>
        <div>
          <p className="font-semibold">迅速な納品体制</p>
          <p className="text-sm text-gray-600 mt-1">在庫確保と柔軟な配送でスピーディーに。</p>
        </div>
      </div>

      {/* 品質管理 */}
      <div className="bg-white rounded-xl border p-6 flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img src="/icons/strength3.png" alt="品質管理アイコン" className="w-full h-full object-contain" />
        </div>
        <div>
          <p className="font-semibold">信頼の品質管理</p>
          <p className="text-sm text-gray-600 mt-1">法令順守と徹底した管理体制。</p>
        </div>
      </div>

      {/* サポート */}
      <div className="bg-white rounded-xl border p-6 flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0">
          <img src="/icons/strength4.png" alt="サポートアイコン" className="w-full h-full object-contain" />
        </div>
        <div>
          <p className="font-semibold">幅広いサポート</p>
          <p className="text-sm text-gray-600 mt-1">使用方法や安全管理も丁寧にご案内。</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ===== お問い合わせ導線（そのまま。見出しだけ画像案に寄せた文言） ===== */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">薬品の調達でお困りですか？</h2>
          <p className="text-gray-600 mb-6">
            用途やご希望に合わせた最適な薬品をご提案いたします。まずはお気軽にご相談ください。
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">
            お問い合わせフォーム
          </Link>
        </div>
      </section>




      {/* ===== お問い合わせ／社長ブログ／外部リンク／コレクション（統一カード） ===== */}
<section className="bg-green-50 py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid gap-6 md:grid-cols-2">
    {/* 1. お問い合わせ */}
<div
  className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 border-t-4 border-brand-green-500 min-h-[220px]"
>
  <div className="flex flex-col items-center text-center">
    <svg
      className="w-8 h-8 text-brand-green-500 mb-3"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.06-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.06l-2.2 2.2z" />
    </svg>
    <h3 className="text-2xl font-semibold text-gray-800 mb-1">お問い合わせ</h3>
    <p className="text-gray-600 mb-3 leading-relaxed">
      製品に関するご質問やご相談をお気軽にどうぞ
    </p>

    {/* 電話番号をtelリンクに */}
    <a
      href="tel:0792810671"
      className="text-3xl font-bold text-brand-green-600 hover:underline"
    >
      079-281-0671
    </a>
  </div>

  <Link
    to="/contact"
    className="mt-6 inline-flex justify-center items-center bg-brand-green-600 hover:bg-brand-green-700 text-white font-medium py-2 px-6 rounded transition"
  >
    フォームへ
  </Link>
</div>


      {/* 2. 社長ブログ */}
      <div className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 border-t-4 border-brand-green-500 min-h-[220px]">
        <div className="flex flex-col items-center text-center">
          <svg className="w-8 h-8 text-brand-green-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">社長ブログ</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            日々の気づきや現場の声をブログで発信中！
          </p>
        </div>
        <a
          href="http://blog.yamato-chemi.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex justify-center items-center text-brand-green-700 bg-green-100 hover:bg-green-200 font-medium py-2 px-6 rounded transition underline-offset-2"
        >
          ブログを見る →
        </a>
      </div>

     {/* 3. 西兵庫化学薬品協同組合（外部） */}
<a
  href="https://nishihyogo-chemical-coop.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative flex flex-col rounded-xl shadow-lg min-h-[220px]
             overflow-hidden group"
  style={{
    backgroundImage: "url('/images/coop-banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* 透明感（読みやすさ用の白オーバーレイ） */}
  <div className="absolute inset-0 bg-white/40 group-hover:bg-white/50 transition" />

  {/* テキストを下に配置 */}
  <div className="absolute bottom-4 left-0 right-0 px-6 text-center z-10">
    <span className="block text-lg font-semibold text-black drop-shadow-[1px_1px_2px_rgba(255,255,255,0.7)]">
      西兵庫化学薬品協同組合
    </span>
    <span className="mt-1 block text-sm text-black/80 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.6)]">
      公式サイトへ
    </span>
  </div>
</a>



{/* 4. 懐かしコレクション（内部） */}
<Link
  to="/collection"
  className="flex flex-col justify-center items-center text-center rounded-xl shadow-lg p-6 min-h-[220px]
             relative overflow-hidden group"
  style={{
    backgroundImage: "url('/images/banner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* 半透明の白オーバーレイ */}
  <div className="absolute inset-0 bg-white bg-opacity-40 group-hover:bg-opacity-50 transition"></div>

  {/* テキストを下に配置 */}
  <div className="absolute bottom-4 left-0 right-0 px-6 text-center z-10">
    <span className="block text-lg font-semibold text-black drop-shadow-[1px_1px_2px_rgba(255,255,255,0.7)]">
      懐かしコレクション
    </span>
    <span className="mt-1 block text-sm text-black/80 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.6)]">
      とうじコレクションのご紹介
    </span>
  </div>
</Link>
    </div>
  </div>
</section>
   
    </div>
  );
}
