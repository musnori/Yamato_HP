// src/pages/products/Methanol.jsx
import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import { BreadcrumbSchema } from "../../components/StructuredData";
import { SITE_URL, COMPANY_INFO } from "../../config/seo";
import { useEffect } from "react";

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
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_INFO.name,
        telephone: COMPANY_INFO.tel,
        address: {
          "@type": "PostalAddress",
          addressCountry: "JP",
          addressRegion: COMPANY_INFO.addressRegion,
          addressLocality: COMPANY_INFO.addressLocality,
          streetAddress: COMPANY_INFO.streetAddress,
          postalCode: COMPANY_INFO.postalCode.replace("〒", ""),
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

export default function Methanol() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "メタノール" },
  ];

  return (
    <>
      <SEOHead pageKey="productMethanol" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema
        name="メタノール"
        description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱うメタノール。有機溶剤として工業・研究用途に幅広く使用。"
        url="/products/methanol"
      />

      <div className="layout-container py-8 md:py-12">
        {/* パンくずリスト */}
        <nav aria-label="パンくずリスト" className="mb-6 text-sm text-slate-500 flex flex-wrap gap-1 items-center">
          <Link to="/" className="hover:text-green-700 hover:underline">ホーム</Link>
          <span aria-hidden="true">›</span>
          <Link to="/products" className="hover:text-green-700 hover:underline">取扱商品</Link>
          <span aria-hidden="true">›</span>
          <span className="text-slate-700 font-medium">メタノール</span>
        </nav>

        <div className="max-w-3xl">
          <p className="tag mb-3">有機溶剤</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">メタノール</h1>
          <p className="text-slate-600 text-lg mb-8">
            姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う工業用・試薬用メタノールのご案内です。
          </p>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 有機合成の溶媒・原料（エステル類、農薬、染料の合成など）</li>
              <li>・ 燃料電池用燃料（ダイレクトメタノール型）</li>
              <li>・ 洗浄・脱脂剤（金属部品・電子基板など）</li>
              <li>・ 樹脂・塗料の溶解・希釈剤</li>
              <li>・ 分析・試験用試薬（HPLC溶媒など）</li>
            </ul>
          </div>

          <div className="card p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td>
                    <td className="py-2">67-56-1</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-semibold text-slate-600">別名</td>
                    <td className="py-2">木精、カルビノール、メチルアルコール</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-semibold text-slate-600">純度</td>
                    <td className="py-2">99.5%以上（工業用）/ 99.8%以上（試薬用）</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-semibold text-slate-600">容量</td>
                    <td className="py-2">18L缶・20L缶・ドラム（200L）・ローリー</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td>
                    <td className="py-2">第4類 アルコール類（引火点 11℃）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6 mb-8 border-l-4 border-amber-400">
            <h2 className="text-xl font-bold text-slate-900 mb-4">保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 引火性が高いため、火気・熱源から遠ざけて保管してください。</li>
              <li>・ 皮膚・眼への接触を避け、必ずゴム手袋・保護眼鏡を着用してください。</li>
              <li>・ 蒸気は空気より重く低所に滞留するため、換気を徹底してください。</li>
              <li>・ 密閉容器に入れ、直射日光を避けた冷暗所に保管してください。</li>
              <li>・ 飲み込むと有毒。失明・死亡に至る危険性があります。取り扱いには十分注意してください。</li>
              <li>・ 廃棄は関係法令に従い、専門の廃棄物処理業者に依頼してください。</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-green-800 mb-2">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へメタノールをはじめとする化学薬品・工業薬品を迅速に供給しています。
              小ロットから大口まで、ご要望に合わせた納品が可能です。SDS（安全データシート）のご提供も承ります。
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
