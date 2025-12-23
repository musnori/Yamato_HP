import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // --- minimal hero slider (build-safe) ---
  const slides = useMemo(
    () => [
      {
        img: "/hero/hero-1.jpg",
        title: "地域に寄り添い、確かな品質を。",
        subtitle: "化学品・医薬品の供給を通じて、現場に最適な提案と安定供給を行います。",
      },
      {
        img: "/hero/hero-2.jpg",
        title: "用途に合わせた最適提案。",
        subtitle: "学校・工場・医療機関など、用途・規格・納期に合わせてご提案します。",
      },
      {
        img: "/hero/hero-3.jpg",
        title: "迅速な納品体制。",
        subtitle: "在庫確保と柔軟な配送ルートでスピーディーにお届けします。",
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="bg-white text-gray-800 font-sans">

      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${s.img}')` }}
            aria-hidden={i !== current}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />
            <div className="relative z-10 h-full w-full flex flex-col items-start justify-center px-4">
              <div className="max-w-6xl mx-auto w-full">
                <p className="text-white/80 text-sm md:text-base tracking-[0.2em] uppercase mb-4">
                  Yamato Pharmaceutical
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow mb-4">
                  {s.title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow">
                  {s.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-green-900/20 transition"
                  >
                    お問い合わせ
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/70 text-white hover:bg-white/10 font-semibold transition"
                  >
                    製品情報を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === current ? "w-10 bg-white" : "w-2.5 bg-white/60"
              }`}
              aria-label={`slide ${i + 1}`}
            />
          ))}
        </div>
      </section>


      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/d.jpg"
              alt="大和薬品イメージ"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-sm font-semibold tracking-wide">
              地域とともに歩む
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
            <h2 className="text-3xl font-extrabold text-green-800 mb-4 relative inline-block">
              ごあいさつ
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-300 rounded-full" />
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                大和薬品株式会社は、創業以来90年にわたり、化学品・医薬品の供給を通じて地域の健康と産業を支えてきました。
              </p>
              <p>
                培ってきた専門知識とネットワークで、お客様の用途に最適な提案と迅速な供給を実現します。
              </p>
              <p>
                これからも品質と安全を最優先に、環境配慮や地域連携にも取り組み、次の100年へ挑戦を続けます。
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm text-gray-600">
              {["地域密着の供給体制", "用途別の最適提案", "品質・安全の徹底"].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700">
                    ✓
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="layout-container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "企業情報",
                desc: "会社概要・沿革・拠点・許認可などの基本情報。",
                img: "/hero/company.jpg",
                to: "/company",
              },
              {
                title: "当社の強み",
                desc: "90年以上の実績、迅速な納品体制、品質管理、サポート。",
                img: "/hero/lift.jpg",
                to: "#strengths",
              },
              {
                title: "サステナビリティ",
                desc: "環境負荷低減・安全対策・地域連携への取り組み。",
                img: "/hero/lab.jpg",
                to: "/sustainability",
              },
            ].map((s) => (
              <a
                key={s.title}
                href={s.to}
                className="relative h-[280px] rounded-3xl overflow-hidden group block shadow-lg"
                style={{
                  backgroundImage: `url('${s.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur">
                    詳しく見る
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-white/90 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                    もっと見る <span className="text-lg">›</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-[#EDF5FF] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-700 tracking-[0.3em]">PRODUCTS</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">製品情報</h2>
            <p className="mt-3 text-gray-600">
              学校・工場・医療機関など用途に合わせて最適な薬品を提案します。
            </p>
          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "製品を探す",
                desc: "カテゴリ・用途・キーワードから最適な薬品を検索。",
                to: "/products",
                logo: "/icons/products.png",
                accent: "bg-gradient-to-r from-blue-700 to-blue-500",
              },
              {
                title: "見積・相談する",
                desc: "用途が不明でもOK。必要事項だけで相談できます。",
                to: "/contact",
                logo: "/icons/contact.png",
                accent: "bg-gradient-to-r from-sky-700 to-sky-500",
              },
              {
                title: "会社情報を見る",
                desc: "会社概要・強み・対応エリアを確認できます。",
                to: "/company",
                logo: "/icons/company.png",
                accent: "bg-gradient-to-r from-indigo-700 to-indigo-500",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition"
              >
                <div className="h-44 grid place-items-center p-6 bg-gradient-to-br from-white to-slate-50">
                  <img
                    src={c.logo}
                    alt={c.title}
                    className="max-h-24 object-contain drop-shadow"
                    loading="lazy"
                  />
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
        </div>
      </section>


      <section id="strengths" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-700 tracking-[0.3em]">STRENGTHS</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">当社の強み</h2>
            <p className="mt-3 text-gray-600">長年の実績と現場目線の供給体制で、安心してお任せいただけます。</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "/icons/strength1.png",
                title: "90年以上の実績",
                desc: "全国の学校・企業から信頼されてきた導入の歴史。",
                tone: "from-blue-600 to-blue-400",
              },
              {
                icon: "/icons/strength2.png",
                title: "迅速な納品体制",
                desc: "在庫を常に確保し、柔軟な配送ルートでスピーディーにお届け。",
                tone: "from-sky-600 to-sky-400",
              },
              {
                icon: "/icons/strength3.png",
                title: "信頼の品質管理",
                desc: "法令に基づいた徹底管理と、細やかな検査体制を実施。",
                tone: "from-indigo-600 to-indigo-400",
              },
              {
                icon: "/icons/strength4.png",
                title: "幅広いサポート",
                desc: "導入後も安心してご利用いただけるよう、使い方から安全対策まで丁寧に支援。",
                tone: "from-cyan-600 to-cyan-400",
              },
            ].map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <span className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${s.tone}`} aria-hidden />
                <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:12px_12px]" />
                <div className="relative p-7 md:p-8 flex items-start gap-5">
                  <div className="shrink-0 grid place-items-center w-16 h-16 rounded-2xl bg-blue-50 ring-1 ring-blue-100 group-hover:scale-[1.03] group-hover:rotate-[1deg] transition">
                    <img
                      src={s.icon}
                      alt={`${s.title}アイコン`}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center text-xs font-bold text-white px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                        0{i + 1}
                      </span>
                      <h3 className="text-xl md:text-[22px] font-extrabold text-gray-900 tracking-tight">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{s.desc}</p>
                  </div>
                </div>
                <div
                  className={`pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-10 blur-2xl transition bg-gradient-to-r ${s.tone}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">薬品の調達でお困りですか？</h2>
          <p className="text-white/80 mb-6">
            用途やご希望に合わせた最適な薬品をご提案いたします。まずはお気軽にご相談ください。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-black/20"
          >
            お問い合わせフォーム
          </Link>
        </div>
      </section>
    </div>
  );
}
