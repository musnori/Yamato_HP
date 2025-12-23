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
                <span className="tag">3クリック以内の導線</span>
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
