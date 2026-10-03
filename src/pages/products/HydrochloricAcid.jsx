// src/pages/products/HydrochloricAcid.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import PageHeader from "../../components/PageHeader";
import ContactBand from "../../components/ContactBand";
import { ChevronLeft } from "lucide-react";
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

      <PageHeader
        title="塩酸"
        crumbs={[{ name: "取扱製品", to: "/products" }, { name: "塩酸" }]}
        lead="姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う塩酸（35%）のご案内です。"
      >
        <p className="mt-3">
          <span className="border border-slate-400 bg-white px-1.5 py-px text-[11px] font-bold text-slate-700">無機薬品・酸</span>
        </p>
      </PageHeader>

      <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl">

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 排水・廃水のpH調整（酸性化・中和処理）</li>
              <li>・ 金属表面の酸洗い・スケール除去</li>
              <li>・ めっき前処理（活性化処理）</li>
              <li>・ 水処理施設での薬注（pH低下）</li>
              <li>・ 化学合成の酸触媒・原料</li>
              <li>・ 食品工業でのpH調整剤（食品添加物グレード）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">7647-01-0</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">塩化水素酸、HCl水溶液</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">濃度</td><td className="py-2">35%（工業用）/ 35〜36%（試薬特級）</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">20Lポリ容器・ドラム（200L）・ローリー</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">劇物（毒物及び劇物取締法）</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 border-l-4 border-amber-400 bg-amber-50 px-4 py-4 md:px-5">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 強酸性・腐食性のため、皮膚・眼への接触で重篤な化学熱傷を引き起こします。必ず保護眼鏡・耐酸性手袋・防毒マスクを着用してください。</li>
              <li>・ 揮発性が高く、塩化水素ガスを発生します。必ず換気の良い場所または局所排気装置のある環境で使用してください。</li>
              <li>・ 金属腐食性が高いため、金属製の容器・配管への使用は避けてください。</li>
              <li>・ アルカリ・酸化剤とは離して保管してください。</li>
              <li>・ 劇物のため、毒物劇物取扱責任者の管理のもとで保管・使用してください。</li>
            </ul>
          </section>

          <section className="mb-8 border border-slate-200 bg-slate-50 px-4 py-4 md:px-5">
            <h2 className="mb-2 text-base font-bold text-slate-900 tracking-normal">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へ塩酸をはじめとする無機酸・水処理薬品を迅速に供給しています。
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
