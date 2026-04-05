// src/pages/products/Ethanol.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import { BreadcrumbSchema } from "../../components/StructuredData";
import { SITE_URL, COMPANY_INFO } from "../../config/seo";

function ProductSchema({ name, description, url }) {
  useEffect(() => {
    const schema = [{
      "@context": "https://schema.org",
      "@type": "Product",
      name, description, url: `${SITE_URL}${url}`,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        areaServed: COMPANY_INFO.areaServed.map((a) => ({ "@type": "Place", name: a })),
        seller: { "@type": "Organization", name: COMPANY_INFO.name },
      },
    }];
    let script = document.getElementById("schema-product-page");
    if (!script) { script = document.createElement("script"); script.id = "schema-product-page"; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify(schema, null, 2);
    return () => { const el = document.getElementById("schema-product-page"); if (el) el.remove(); };
  }, []);
  return null;
}

export default function Ethanol() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "エタノール" },
  ];
  return (
    <>
      <SEOHead pageKey="productEthanol" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="エタノール" description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱うエタノール（工業用・試薬用・無水）。消毒・溶剤・食品工業など幅広く使用。" url="/products/ethanol" />

      <div className="layout-container py-8 md:py-12">
        <nav aria-label="パンくずリスト" className="mb-6 text-sm text-slate-500 flex flex-wrap gap-1 items-center">
          <Link to="/" className="hover:text-green-700 hover:underline">ホーム</Link>
          <span aria-hidden="true">›</span>
          <Link to="/products" className="hover:text-green-700 hover:underline">取扱商品</Link>
          <span aria-hidden="true">›</span>
          <span className="text-slate-700 font-medium">エタノール</span>
        </nav>

        <div className="max-w-3xl">
          <p className="tag mb-3">有機溶剤・アルコール類</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">エタノール</h1>
          <p className="text-slate-600 text-lg mb-8">
            姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱うエタノール（工業用アルコール・無水エタノール・エタノール製剤）のご案内です。
          </p>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 医療・食品工場・施設での消毒・殺菌（70〜80%水溶液）</li>
              <li>・ 化粧品・医薬品の溶媒・基材</li>
              <li>・ 食品工業での発酵・抽出・保存</li>
              <li>・ 塗料・ニス・インクの溶剤</li>
              <li>・ 分析・試験用試薬（無水エタノール）</li>
              <li>・ 洗浄・脱脂剤（電子部品・精密機器）</li>
            </ul>
          </div>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">64-17-5</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">エチルアルコール、酒精</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">種別・純度</td><td className="py-2">無水エタノール（99.5%以上）・工業用アルコール・エタノール製剤（各種濃度）</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">18L缶・ドラム（200L）・ローリー</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">第4類 アルコール類（引火点 13℃）</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6 mb-8 border-l-4 border-amber-400">
            <h2 className="text-xl font-bold text-slate-900 mb-4">保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 引火性があります。火気・電気機器・静電気から遠ざけてください。</li>
              <li>・ 高濃度蒸気の吸入は頭痛・眩暈を引き起こします。換気を十分に行ってください。</li>
              <li>・ 工業用アルコールは変性剤（メタノール等）が含まれており、飲用・食品用途には使用できません。</li>
              <li>・ 密閉容器に入れ、直射日光・高温を避けた冷暗所に保管してください。</li>
              <li>・ 酸化剤・強酸・強塩基とは離して保管してください。</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-green-800 mb-2">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へエタノール（工業用アルコール・無水エタノール）を迅速に供給しています。
              食品・医療・製造業など多様な業種のお客様にご利用いただいています。SDS（安全データシート）のご提供も承ります。
            </p>
          </div>

          <div className="card p-6 text-center">
            <p className="text-slate-700 mb-4 font-semibold">お見積り・ご相談はお気軽にどうぞ</p>
            <p className="text-2xl font-bold text-green-700 mb-1"><a href="tel:0792810671" className="hover:underline">TEL：079-281-0671</a></p>
            <p className="text-sm text-slate-500 mb-4">受付時間 9:00〜17:00（土日祝休）</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact?subject=見積依頼" className="btn-primary">見積依頼フォームへ</Link>
              <Link to="/products" className="btn-outline">取扱商品一覧へ戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
