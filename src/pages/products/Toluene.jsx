// src/pages/products/Toluene.jsx
import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import PageHeader from "../../components/PageHeader";
import ContactBand from "../../components/ContactBand";
import { ChevronLeft } from "lucide-react";
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

export default function Toluene() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "トルエン" },
  ];

  return (
    <>
      <SEOHead pageKey="productToluene" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema
        name="トルエン"
        description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱うトルエン。塗料・接着剤・有機合成の溶媒として幅広く使用。"
        url="/products/toluene"
      />

      <PageHeader
        title="トルエン"
        crumbs={[{ name: "取扱製品", to: "/products" }, { name: "トルエン" }]}
        lead="姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う工業用・試薬用トルエンのご案内です。"
      >
        <p className="mt-3">
          <span className="border border-slate-400 bg-white px-1.5 py-px text-[11px] font-bold text-slate-700">有機溶剤</span>
        </p>
      </PageHeader>

      <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl">

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 塗料・ニス・ラッカーの溶剤</li>
              <li>・ 接着剤・シーリング剤の溶媒</li>
              <li>・ 有機合成の原料（ベンゼン・キシレンの中間体）</li>
              <li>・ 洗浄・脱脂剤（グリース・油脂の除去）</li>
              <li>・ 印刷インキ・農薬製造の溶剤</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td>
                    <td className="py-2">108-88-3</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-semibold text-slate-600">別名</td>
                    <td className="py-2">メチルベンゼン、フェニルメタン</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-semibold text-slate-600">純度</td>
                    <td className="py-2">99.5%以上（工業用）/ 99.5%以上（試薬用）</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-semibold text-slate-600">荷姿</td>
                    <td className="py-2">14kg 1斗缶 / 170kg ドラム / ローリー</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold text-slate-600">法規制</td>
                    <td className="py-2">劇物（毒物及び劇物取締法）／ 危険物第4類 第一石油類（引火点 4℃）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 border-l-4 border-amber-400 bg-amber-50 px-4 py-4 md:px-5">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 引火点が4℃と低く非常に引火しやすいため、火気・熱源から完全に遠ざけてください。</li>
              <li>・ 蒸気吸入は中枢神経に影響するため、適切な換気または防毒マスクを使用してください。</li>
              <li>・ 皮膚への繰り返し接触は皮膚炎を引き起こす場合があります。耐溶剤性手袋を着用してください。</li>
              <li>・ 密閉容器に入れ、直射日光・高温を避けた場所に保管してください。</li>
              <li>・ 廃棄は関係法令に従い、専門の廃棄物処理業者に依頼してください。</li>
            </ul>
          </section>

          <section className="mb-8 border border-slate-200 bg-slate-50 px-4 py-4 md:px-5">
            <h2 className="mb-2 text-base font-bold text-slate-900 tracking-normal">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へトルエンをはじめとする化学薬品・工業薬品を迅速に供給しています。
              小ロットから大口まで対応可能。SDS（安全データシート）のご提供も承ります。
            </p>
          </section>

          <Link to="/products" className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline underline-offset-4">
            <ChevronLeft size={15} />
            取扱製品一覧へ戻る
          </Link>
        </div>
      </div>
      <ContactBand />
      </div>
    </>
  );
}
