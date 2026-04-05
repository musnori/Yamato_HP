// src/pages/products/SulfuricAcid.jsx
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

export default function SulfuricAcid() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "硫酸" },
  ];
  return (
    <>
      <SEOHead pageKey="productSulfuricAcid" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="硫酸" description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱う硫酸98%（濃硫酸）。化学工業・バッテリー・水処理などに使用。" url="/products/sulfuric-acid" />

      <div className="layout-container py-8 md:py-12">
        <nav aria-label="パンくずリスト" className="mb-6 text-sm text-slate-500 flex flex-wrap gap-1 items-center">
          <Link to="/" className="hover:text-green-700 hover:underline">ホーム</Link>
          <span aria-hidden="true">›</span>
          <Link to="/products" className="hover:text-green-700 hover:underline">取扱商品</Link>
          <span aria-hidden="true">›</span>
          <span className="text-slate-700 font-medium">硫酸</span>
        </nav>

        <div className="max-w-3xl">
          <p className="tag mb-3">無機薬品・酸</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">硫酸</h1>
          <p className="text-slate-600 text-lg mb-8">
            姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う硫酸（濃硫酸98%・希硫酸62.5%）のご案内です。
          </p>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 化学肥料（リン酸アンモニウム・硫酸アンモニウム）の製造原料</li>
              <li>・ 金属の酸洗い・スケール除去（鉄鋼・銅）</li>
              <li>・ 蓄電池（鉛蓄電池）の電解液</li>
              <li>・ 排水・廃水のpH中和処理</li>
              <li>・ 乾燥剤（濃硫酸の強力な脱水作用を利用）</li>
              <li>・ 有機合成（スルホン化・エステル化の触媒・反応剤）</li>
            </ul>
          </div>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">7664-93-9</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">H₂SO₄、バイトリオル</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">濃度</td><td className="py-2">98%（濃硫酸）/ 62.5%（希硫酸）</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">20L容器・ドラム（200L）・ローリー</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">劇物（毒物及び劇物取締法）</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6 mb-8 border-l-4 border-amber-400">
            <h2 className="text-xl font-bold text-slate-900 mb-4">保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 強酸・強腐食性。皮膚・眼・粘膜への接触は重篤な化学熱傷を引き起こします。保護眼鏡・耐酸性手袋・エプロンを必ず着用してください。</li>
              <li>・ 水と混合すると激しく発熱します。希釈する場合は、必ず水に少量ずつ硫酸を加えてください（逆は危険）。</li>
              <li>・ 有機物・可燃物との接触で発火の危険があります。可燃物とは離して保管してください。</li>
              <li>・ 金属と反応して水素ガスを発生します。換気を十分に行ってください。</li>
              <li>・ 劇物のため、毒物劇物取扱責任者の管理のもとで保管・使用してください。</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-green-800 mb-2">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へ硫酸をはじめとする無機薬品・工業薬品を迅速に供給しています。
              濃硫酸・希硫酸の各濃度に対応。SDS（安全データシート）のご提供も承ります。
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
