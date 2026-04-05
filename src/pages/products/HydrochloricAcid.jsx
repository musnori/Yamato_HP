// src/pages/products/HydrochloricAcid.jsx
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

export default function HydrochloricAcid() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "塩酸" },
  ];
  return (
    <>
      <SEOHead pageKey="productHydrochloricAcid" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="塩酸" description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱う塩酸35%。金属加工・水処理・化学工業に幅広く使用。" url="/products/hydrochloric-acid" />

      <div className="layout-container py-8 md:py-12">
        <nav aria-label="パンくずリスト" className="mb-6 text-sm text-slate-500 flex flex-wrap gap-1 items-center">
          <Link to="/" className="hover:text-green-700 hover:underline">ホーム</Link>
          <span aria-hidden="true">›</span>
          <Link to="/products" className="hover:text-green-700 hover:underline">取扱商品</Link>
          <span aria-hidden="true">›</span>
          <span className="text-slate-700 font-medium">塩酸</span>
        </nav>

        <div className="max-w-3xl">
          <p className="tag mb-3">無機薬品・酸</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">塩酸</h1>
          <p className="text-slate-600 text-lg mb-8">
            姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う塩酸（35%）のご案内です。
          </p>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 排水・廃水のpH調整（酸性化・中和処理）</li>
              <li>・ 金属表面の酸洗い・スケール除去</li>
              <li>・ めっき前処理（活性化処理）</li>
              <li>・ 水処理施設での薬注（pH低下）</li>
              <li>・ 化学合成の酸触媒・原料</li>
              <li>・ 食品工業でのpH調整剤（食品添加物グレード）</li>
            </ul>
          </div>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">7647-01-0</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">塩化水素酸、HCl水溶液</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">濃度</td><td className="py-2">35%（工業用）/ 35〜36%（試薬特級）</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">20Lポリ容器・ドラム（200L）・ローリー</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">劇物（毒物及び劇物取締法）</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6 mb-8 border-l-4 border-amber-400">
            <h2 className="text-xl font-bold text-slate-900 mb-4">保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 強酸性・腐食性のため、皮膚・眼への接触で重篤な化学熱傷を引き起こします。必ず保護眼鏡・耐酸性手袋・防毒マスクを着用してください。</li>
              <li>・ 揮発性が高く、塩化水素ガスを発生します。必ず換気の良い場所または局所排気装置のある環境で使用してください。</li>
              <li>・ 金属腐食性が高いため、金属製の容器・配管への使用は避けてください。</li>
              <li>・ アルカリ・酸化剤とは離して保管してください。</li>
              <li>・ 劇物のため、毒物劇物取扱責任者の管理のもとで保管・使用してください。</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-green-800 mb-2">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へ塩酸をはじめとする無機酸・水処理薬品を迅速に供給しています。
              小ロットから大口まで対応可能。SDS（安全データシート）のご提供も承ります。
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
