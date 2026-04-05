// src/pages/products/HydrogenPeroxide.jsx
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

export default function HydrogenPeroxide() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "過酸化水素" },
  ];
  return (
    <>
      <SEOHead pageKey="productHydrogenPeroxide" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="過酸化水素" description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱う過酸化水素水35%。漂白・殺菌・化学工業に幅広く使用。" url="/products/hydrogen-peroxide" />

      <div className="layout-container py-8 md:py-12">
        <nav aria-label="パンくずリスト" className="mb-6 text-sm text-slate-500 flex flex-wrap gap-1 items-center">
          <Link to="/" className="hover:text-green-700 hover:underline">ホーム</Link>
          <span aria-hidden="true">›</span>
          <Link to="/products" className="hover:text-green-700 hover:underline">取扱商品</Link>
          <span aria-hidden="true">›</span>
          <span className="text-slate-700 font-medium">過酸化水素</span>
        </nav>

        <div className="max-w-3xl">
          <p className="tag mb-3">酸化剤・漂白剤</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">過酸化水素</h1>
          <p className="text-slate-600 text-lg mb-8">
            姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う過酸化水素水（35%）のご案内です。
          </p>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 繊維・パルプ・紙の漂白</li>
              <li>・ 食品工業での殺菌・漂白（食品添加物グレード）</li>
              <li>・ 半導体・電子部品の洗浄・エッチング</li>
              <li>・ 排水処理での酸化分解（COD低減）</li>
              <li>・ 医療・衛生用の消毒・滅菌</li>
              <li>・ 化学合成での酸化剤（エポキシ化など）</li>
            </ul>
          </div>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">7722-84-1</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">過水、H₂O₂水溶液、オキシドール（低濃度品）</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">濃度</td><td className="py-2">35%（工業用）/ 30〜35%（試薬用）</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">20Lポリ容器・200Lドラム</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">劇物（6%超）・酸化性液体（危険物第6類）</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6 mb-8 border-l-4 border-amber-400">
            <h2 className="text-xl font-bold text-slate-900 mb-4">保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 強力な酸化剤です。有機物・可燃物との接触で発火の危険があります。可燃物とは離して保管してください。</li>
              <li>・ 皮膚・眼への接触で白化・炎症・化学熱傷を引き起こします。保護眼鏡・耐薬品性手袋・エプロンを着用してください。</li>
              <li>・ 高温・光・不純物（鉄・マンガン等）により急激に分解し、酸素ガスと熱を発生します。冷暗所・遮光容器で保管してください。</li>
              <li>・ 密閉保管すると容器内圧が上昇します。密閉しすぎず、定期的に容器を確認してください。</li>
              <li>・ 劇物のため、毒物劇物取扱責任者の管理のもとで保管・使用してください。</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-green-800 mb-2">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へ過酸化水素をはじめとする酸化剤・工業薬品を迅速に供給しています。
              製造業・食品工業・電子部品業界のお客様にご利用いただいています。SDS（安全データシート）のご提供も承ります。
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
