import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/** =======================
 *  ヒーロー用スライド
 *  ======================= */
const slides = [
  {
    img: "/morninng.jpg",
    title: "創業90年、信頼の化学品サプライヤー",
    subtitle:
      "学校・プール・工場など幅広いシーンで、安心・安全な薬品を迅速にお届けします",
  },
  {
    img: "/lunch.jpg",
    title: "地域とともに歩む",
    subtitle: "必要なときに、必要な品質を",
  },
  {
    img: "/yugata.jpg",
    title: "未来を見据えて挑戦",
    subtitle: "環境と安全に配慮した供給体制",
  },
  {
    img: "/night.jpg",
    title: "確かな品質と安心を",
    subtitle: "徹底した品質管理とサポート",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* =======================
          HERO
      ======================== */}
      <section className="relative h-[60vh] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
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
            </div>
          </div>
        ))}
      </section>

      {/* =======================
          GREETING
      ======================== */}
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src="/d.jpg" alt="大和薬品イメージ" className="w-full h-64 object-cover" />
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

      {/* =======================
          3カラム導線
      ======================== */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "企業情報", desc: "会社概要・沿革・拠点・許認可などの基本情報。", img: "/hero/company.jpg", to: "/company" },
              { title: "当社の強み", desc: "90年以上の実績、迅速な納品体制、品質管理、サポート。", img: "/hero/lab.jpg", to: "#strengths" },
              { title: "サステナビリティ", desc: "環境負荷低減・安全対策・地域連携への取り組み。", img: "/hero/earth.jpg", to: "/sustainability" },
            ].map((s) => (
              <a
                key={s.title}
                href={s.to}
                className="relative h-[260px] rounded-2xl overflow-hidden group block"
                style={{ backgroundImage: `url('${s.img}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-white/90 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-3">
                    <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-white/90 text-gray-900">›</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          製品情報
      ======================== */}
      <section className="bg-[#EDF5FF] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">製品情報</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                logo: "/icons/sehin1.png",
                title: "水処理用薬品",
                desc: "プール・温浴施設・工場排水の衛生を守る定番ラインナップ。",
                to: "/products#water",
                accent: "bg-yellow-400/90",
              },
              {
                logo: "/icons/sehin2.png",
                title: "試薬・研究用",
                desc: "教育・研究・検査の現場へ。用途別に選びやすくご提案。",
                to: "/products#reagents",
                accent: "bg-orange-500/90",
              },
              {
                logo: "/icons/sehin3.png",
                title: "工業用・医薬品関連",
                desc: "製造現場を支える工業薬品と、法令順守の医薬品関連供給。",
                to: "/products#industrial",
                accent: "bg-green-600/90",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
                <div className="h-44 grid place-items-center p-6">
                  <img src={c.logo} alt={c.title} className="max-h-24 object-contain" loading="lazy" />
                </div>
                <div className={`${c.accent} text-white p-6`}>
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-3 leading-relaxed">{c.desc}</p>
                  <div className="mt-5">
                    <Link
                      to={c.to}
                      className="inline-flex items-center justify-center w-full md:w-auto rounded-full bg-white/95 hover:bg-white text-gray-900 font-semibold px-6 py-3 transition"
                    >
                      くわしく見る <span className="ml-2">›</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/products" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">
              すべての製品を見る
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 大和薬品の強み ===== */}
      <section id="strengths" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">大和薬品の強み</h2>
            <p className="mt-2 text-gray-500">90年以上の実績に裏づけられた“選ばれる理由”。品質・スピード・サポートの3軸で、お客様の現場を支えます。</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: "/icons/strength1.png", title: "90年以上の実績", desc: "全国の学校・企業から信頼されてきた導入の歴史。", tone: "from-blue-600 to-blue-400" },
              { icon: "/icons/strength2.png", title: "迅速な納品体制", desc: "在庫を常に確保し、柔軟な配送ルートでスピーディーにお届け。", tone: "from-sky-600 to-sky-400" },
              { icon: "/icons/strength3.png", title: "信頼の品質管理", desc: "法令に基づいた徹底管理と、細やかな検査体制を実施。", tone: "from-indigo-600 to-indigo-400" },
              { icon: "/icons/strength4.png", title: "幅広いサポート", desc: "導入後も安心してご利用いただけるよう、使い方から安全対策まで丁寧に支援。", tone: "from-cyan-600 to-cyan-400" },
            ].map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <span className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${s.tone}`} aria-hidden />
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:12px_12px]" />
                <div className="relative p-7 md:p-8 flex items-start gap-5">
                  <div className="shrink-0 grid place-items-center w-16 h-16 rounded-2xl bg-blue-50 ring-1 ring-blue-100 group-hover:scale-[1.03] group-hover:rotate-[1deg] transition">
                    <img src={s.icon} alt={`${s.title}アイコン`} className="w-10 h-10 object-contain" loading="lazy" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center text-xs font-bold text-white px-2 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                        0{i + 1}
                      </span>
                      <h3 className="text-xl md:text-[22px] font-extrabold text-gray-900 tracking-tight">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{s.desc}</p>

                  </div>
                </div>
                <div className={`pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-10 blur-2xl transition bg-gradient-to-r ${s.tone}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          問い合わせCTA
      ======================== */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">薬品の調達でお困りですか？</h2>
          <p className="text-gray-600 mb-6">用途やご希望に合わせた最適な薬品をご提案いたします。まずはお気軽にご相談ください。</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">
            お問い合わせフォーム
          </Link>
        </div>
      </section>

      {/* =======================
          連絡カード群（高さを4枚で揃える）
      ======================== */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* ← ここを変更：items-stretch + auto-rows-fr で行内の高さを揃える */}
          <div className="grid gap-6 md:grid-cols-2 items-stretch auto-rows-fr">
            {/* お問い合わせカード */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-brand-green-500 h-full flex flex-col">
              <div className="flex flex-col items-center text-center grow">
                <svg className="w-8 h-8 text-brand-green-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.06-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.06l-2.2 2.2z" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">お問い合わせ</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">製品に関するご質問やご相談をお気軽にどうぞ</p>
                <a href="tel:0792810671" className="text-3xl font-bold text-brand-green-600 hover:underline">
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

            {/* 社長ブログ */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-brand-green-500 h-full flex flex-col">
              <div className="flex flex-col items-center text-center grow">
                <svg className="w-8 h-8 text-brand-green-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">社長ブログ</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">日々の気づきや現場の声をブログで発信中！</p>
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

            {/* 西兵庫化学薬品協同組合 */}
            <a
              href="https://nishihyogo-chemical-coop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-xl shadow-lg overflow-hidden group h-full flex"
              style={{ backgroundImage: "url('/images/coop-banner.png')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-white/40 group-hover:bg-white/50 transition" />
              <div className="relative z-10 mt-auto w-full px-6 pb-4 text-center">
                <span className="block text-lg font-semibold text-black drop-shadow-[1px_1px_2px_rgba(255,255,255,0.7)]">西兵庫化学薬品協同組合</span>
                <span className="mt-1 block text-sm text-black/80 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.6)]">公式サイトへ</span>
              </div>
            </a>

            {/* 懐かしコレクション */}
            <Link
              to="/collection"
              className="relative rounded-xl shadow-lg overflow-hidden group h-full flex"
              style={{ backgroundImage: "url('/images/banner.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-white/40 group-hover:bg-white/50 transition" />
              <div className="relative z-10 mt-auto w-full px-6 pb-4 text-center">
                <span className="block text-lg font-semibold text-black drop-shadow-[1px_1px_2px_rgba(255,255,255,0.7)]">懐かしコレクション</span>
                <span className="mt-1 block text-sm text-black/80 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.6)]">とうじコレクションのご紹介</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
