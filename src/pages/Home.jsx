import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/morninng.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-900/40" />
        <div className="relative layout-container py-16 md:py-24">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-200">
            Yamato Pharmaceutical
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-balance">
            化学薬品・試薬・工業薬品の調達を、迷わず最短で。
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 text-lg leading-relaxed">
            大和薬品株式会社は、学校・工場・研究機関などの用途に合わせて薬品をご提案。見積・相談までの導線を分かりやすく整えています。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
              製品を探す
            </Link>
            <Link to="/contact" className="btn-primary">
              見積・相談する
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="layout-container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "製品を探す",
                desc: "カテゴリ・用途・キーワードから最適な薬品を検索。",
                to: "/products",
              },
              {
                title: "見積・相談する",
                desc: "用途が不明でもOK。必要事項だけで相談できます。",
                to: "/contact",
              },
              {
                title: "会社情報を見る",
                desc: "会社概要・強み・対応エリアを確認できます。",
                to: "/company",
              },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="card-elevated p-6 hover:-translate-y-1 transition">
                <h3 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                <div className="mt-4 text-sm font-semibold text-green-700">
                  詳しく見る →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          取扱カテゴリ
      ======================== */}
      <section className="section bg-slate-50">
        <div className="layout-container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="section-title">PRODUCT CATEGORY</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">取扱カテゴリ</h2>
              <p className="mt-2 text-gray-600">
                気になるカテゴリからすぐに探せます。用途が未定でも相談可能です。
              </p>
            </div>
            <Link to="/products" className="btn-outline">すべての製品を見る</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "水処理用薬品", desc: "浄水・排水・プール管理", to: "/products?cat=water" },
              { title: "試薬・研究用", desc: "研究・検査・教育現場", to: "/products?cat=reagents" },
              { title: "工業用・医薬品関連", desc: "製造現場の薬品供給", to: "/products?cat=industrial" },
              { title: "クリーニング関係", desc: "洗浄・除菌・漂白用途", to: "/products?cat=cleaning" },
            ].map((c) => (
              <Link key={c.title} to={c.to} className="card p-5 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <div className="mt-4 text-sm font-semibold text-green-700">このカテゴリを見る →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="layout-container grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="card p-6">
            <p className="section-title">TRUST</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">安心して相談できる理由</h2>
            <p className="mt-3 text-gray-600">
              BtoB取引に必要な情報を整理し、見積・相談までの流れが分かるようにしています。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { title: "対応エリア", text: "兵庫県中心に周辺エリアへ柔軟対応。" },
                { title: "納品フロー", text: "相談 → 提案 → 手配 → 納品を最短で。" },
                { title: "専門スタッフ", text: "用途に合わせた薬品選定を支援。" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6 space-y-4">
            <div>
              <p className="section-title">FLOW</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">取引の流れ</h2>
              <ol className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "用途・製品の相談",
                  "見積・提案",
                  "受注・手配",
                  "納品・アフターサポート",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-xl bg-green-50 border border-green-100 p-4 text-sm text-slate-700">
              <p className="font-semibold text-green-700">用途が不明でもOK</p>
              <p className="mt-1">「何に使うか」だけ教えていただければ最適品を提案します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          お知らせ
      ======================== */}
      <section className="section bg-slate-50">
        <div className="layout-container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="section-title">NEWS</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">お知らせ</h2>
              <p className="mt-2 text-gray-600">最新情報は更新時に掲載します。</p>
            </div>
            <Link to="/contact" className="btn-primary">見積・相談する</Link>
          </div>
          <div className="mt-6 card p-6">
            <p className="text-sm text-slate-600">現在、掲載できるお知らせはありません。</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="layout-container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="section-title">COMMUNITY</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">関連コンテンツ</h2>
              <p className="mt-2 text-gray-600">
                社長ブログや地域連携、懐かしコレクションなどをまとめてご覧いただけます。
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-green-500 flex flex-col p-4 h-full">
              <div className="grow flex flex-col items-center text-center">
                <svg className="w-6 h-6 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">社長ブログ</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  日々の気づきや現場の声をブログで発信中！
                </p>
              </div>
              <a
                href="http://blog.yamato-chemi.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex justify-center items-center text-green-700 bg-green-100 hover:bg-green-200 font-medium py-2 px-4 rounded text-sm transition underline-offset-2"
              >
                ブログを見る →
              </a>
            </div>

            <a
              href="https://nishihyogo-chemical-coop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-xl shadow-lg overflow-hidden group h-full flex flex-col justify-end p-4 text-center text-white"
              style={{ backgroundImage: "url('/images/coop-banner.png')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold">西兵庫化学薬品協同組合</h3>
                <p className="text-sm">公式サイトへ</p>
              </div>
            </a>

            <Link
              to="/collection"
              className="relative rounded-xl shadow-lg overflow-hidden group h-full flex flex-col justify-end p-4 text-center text-white"
              style={{ backgroundImage: "url('/images/banner.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold">懐かしコレクション</h3>
                <p className="text-sm">とうじコレクションのご紹介</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="layout-container">
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
              回収・処分サービス
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900">
              古くなって処分に困った薬品の<span className="text-green-700">回収・処分</span>を承ります
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
              <Link
                to={`/contact?subject=${encodeURIComponent("薬品の回収・処分の相談")}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold shadow bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 text-white"
              >
                回収・処分について相談する
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                お問い合わせフォームへ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-green-900 via-green-800 to-green-900">
        <div className="layout-container text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">薬品の調達でお困りですか？</h2>
          <p className="text-white/80 mb-6">用途やご希望に合わせた最適な薬品をご提案いたします。</p>
          <Link to="/contact" className="btn-primary bg-white text-green-800 hover:bg-slate-100">
            見積・相談する
          </Link>
        </div>
      </section>
    </div>
  );
}
