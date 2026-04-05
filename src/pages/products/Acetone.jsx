// src/pages/products/Acetone.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import { BreadcrumbSchema } from "../../components/StructuredData";
import { SITE_URL, COMPANY_INFO } from "../../config/seo";

function ProductSchema({ name, description, url }) {
  useEffect(() => {
    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        url: `${SITE_URL}${url}`,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          areaServed: COMPANY_INFO.areaServed.map((a) => ({ "@type": "Place", name: a })),
          seller: { "@type": "Organization", name: COMPANY_INFO.name },
        },
      },
    ];
    let script = document.getElementById("schema-product-page");
    if (!script) {
      script = document.createElement("script");
      script.id = "schema-product-page";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema, null, 2);
    return () => {
      const el = document.getElementById("schema-product-page");
      if (el) el.remove();
    };
  }, []);
  return null;
}

export default function Acetone() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "アセトン" },
  ];

  return (
    <>
      <SEOHead pageKey="productAcetone" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema
        name="アセトン"
        description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱うアセトン。樹脂・塗料の溶媒、洗浄剤として幅広く使用。"
        url="/products/acetone"
      />

      <div className="layout-container py-8 md:py-12">
        <nav aria-label="パンくずリスト" className="mb-6 text-sm text-slate-500 flex flex-wrap gap-1 items-center">
          <Link to="/" className="hover:text-green-700 hover:underline">ホーム</Link>
          <span aria-hidden="true">›</span>
          <Link to="/products" className="hover:text-green-700 hover:underline">取扱商品</Link>
          <span aria-hidden="true">›</span>
          <span className="text-slate-700 font-medium">アセトン</span>
        </nav>

        <div className="max-w-3xl">
          <p className="tag mb-3">有機溶剤</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">アセトン</h1>
          <p className="text-slate-600 text-lg mb-8">
            姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱うアセトンのご案内です。
          </p>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 樹脂（エポキシ・ポリエステル）の溶媒・希釈剤</li>
              <li>・ 塗料・ラッカー・ニスの溶剤</li>
              <li>・ 電子部品・精密機器の洗浄・脱脂</li>
              <li>・ 有機合成の中間体・溶媒</li>
              <li>・ 接着剤の製造原料</li>
              <li>・ ネイルリムーバー等の原料</li>
            </ul>
          </div>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td>
                    <td className="py-2">67-64-1</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-semibold text-slate-600">別名</td>
                    <td className="py-2">ジメチルケトン、2-プロパノン</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-semibold text-slate-600">純度</td>
                    <td className="py-2">99.5%以上（工業用）/ 99.5%以上（試薬用）</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-semibold text-slate-600">容量</td>
                    <td className="py-2">18L缶・ドラム（200L）・ローリー</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td>
                    <td className="py-2">第4類 第一石油類（引火点 -20℃）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6 mb-8 border-l-4 border-amber-400">
            <h2 className="text-xl font-bold text-slate-900 mb-4">保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 引火点が-20℃と極めて低く、常温でも非常に引火しやすいため火気厳禁です。</li>
              <li>・ 静電気による着火にも注意し、接地・ボンディングを徹底してください。</li>
              <li>・ 高濃度蒸気の吸入は頭痛・眩暈を引き起こします。換気の良い場所で使用してください。</li>
              <li>・ 密閉容器に入れ、直射日光・高温を避けた冷暗所に保管してください。</li>
              <li>・ 廃棄は関係法令に従い、専門の廃棄物処理業者に依頼してください。</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-green-800 mb-2">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へアセトンをはじめとする有機溶剤・化学薬品を迅速に供給しています。
              小ロットから大口まで対応可能。SDS（安全データシート）のご提供も承ります。
            </p>
          </div>

          <div className="card p-6 text-center">
            <p className="text-slate-700 mb-4 font-semibold">お見積り・ご相談はお気軽にどうぞ</p>
            <p className="text-2xl font-bold text-green-700 mb-1">
              <a href="tel:0792810671" className="hover:underline">TEL：079-281-0671</a>
            </p>
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
