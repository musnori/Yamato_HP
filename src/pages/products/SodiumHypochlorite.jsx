// src/pages/products/SodiumHypochlorite.jsx
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

export default function SodiumHypochlorite() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "次亜塩素酸ナトリウム" },
  ];
  return (
    <>
      <SEOHead pageKey="productSodiumHypochlorite" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="次亜塩素酸ナトリウム" description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱う次亜塩素酸ソーダ（6%・12%）。水道水処理・殺菌・漂白に幅広く使用。" url="/products/sodium-hypochlorite" />

      <div className="layout-container py-8 md:py-12">
        <nav aria-label="パンくずリスト" className="mb-6 text-sm text-slate-500 flex flex-wrap gap-1 items-center">
          <Link to="/" className="hover:text-green-700 hover:underline">ホーム</Link>
          <span aria-hidden="true">›</span>
          <Link to="/products" className="hover:text-green-700 hover:underline">取扱商品</Link>
          <span aria-hidden="true">›</span>
          <span className="text-slate-700 font-medium">次亜塩素酸ナトリウム</span>
        </nav>

        <div className="max-w-3xl">
          <p className="tag mb-3">水処理薬品・殺菌剤</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">次亜塩素酸ナトリウム</h1>
          <p className="text-slate-600 text-lg mb-8">
            姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う次亜塩素酸ソーダ（6%・12%）のご案内です。
          </p>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 水道水・プール水の殺菌・消毒</li>
              <li>・ 排水処理施設での殺菌・脱臭</li>
              <li>・ 食品工場・医療施設の除菌・漂白</li>
              <li>・ 紙パルプ・繊維の漂白（業務用）</li>
              <li>・ 下水道・汚泥の消毒処理</li>
              <li>・ 施設・設備の洗浄・殺菌</li>
            </ul>
          </div>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">7681-52-9</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">次亜塩素酸ソーダ、NaClO水溶液</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">有効塩素濃度</td><td className="py-2">6%（家庭・食品用）/ 12%（工業・水処理用）</td></tr>
                  <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">20Lポリ容器・200Lドラム・ローリー</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">劇物（12%以上）／非該当（6%未満）</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6 mb-8 border-l-4 border-amber-400">
            <h2 className="text-xl font-bold text-slate-900 mb-4">保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 酸との混合は厳禁です。塩素ガスが発生し、非常に危険です。</li>
              <li>・ 高温・直射日光・金属イオンにより有効塩素が急速に分解します。冷暗所（10〜15℃以下）で保管してください。</li>
              <li>・ 皮膚・眼への接触で刺激・炎症を引き起こします。保護眼鏡・耐薬品性手袋を着用してください。</li>
              <li>・ 塩素ガスの発生に備え、換気の良い場所で使用・保管してください。</li>
              <li>・ 12%以上は劇物のため、毒物劇物取扱責任者の管理が必要です。</li>
              <li>・ 保管期間が長くなると濃度が低下します。製造後なるべく早く使用してください。</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-green-800 mb-2">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へ次亜塩素酸ソーダを常時在庫・迅速に供給しています。
              水処理施設・食品工場・医療施設など多様な業種のお客様にご利用いただいています。SDS（安全データシート）のご提供も承ります。
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
