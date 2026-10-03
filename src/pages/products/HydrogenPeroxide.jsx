// src/pages/products/HydrogenPeroxide.jsx
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

      <PageHeader
        title="過酸化水素"
        crumbs={[{ name: "取扱製品", to: "/products" }, { name: "過酸化水素" }]}
        lead="姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う過酸化水素水（35%）のご案内です。"
      >
        <p className="mt-3">
          <span className="border border-slate-400 bg-white px-1.5 py-px text-[11px] font-bold text-slate-700">酸化剤・漂白剤</span>
        </p>
      </PageHeader>

      <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl">

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 繊維・パルプ・紙の漂白</li>
              <li>・ 食品工業での殺菌・漂白（食品添加物グレード）</li>
              <li>・ 半導体・電子部品の洗浄・エッチング</li>
              <li>・ 排水処理での酸化分解（COD低減）</li>
              <li>・ 医療・衛生用の消毒・滅菌</li>
              <li>・ 化学合成での酸化剤（エポキシ化など）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">7722-84-1</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">過水、H₂O₂水溶液、オキシドール（低濃度品）</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">濃度</td><td className="py-2">35%（工業用）/ 30〜35%（試薬用）</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">20Lポリ容器・200Lドラム</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">劇物（6%超）・酸化性液体（危険物第6類）</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 border-l-4 border-amber-400 bg-amber-50 px-4 py-4 md:px-5">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 強力な酸化剤です。有機物・可燃物との接触で発火の危険があります。可燃物とは離して保管してください。</li>
              <li>・ 皮膚・眼への接触で白化・炎症・化学熱傷を引き起こします。保護眼鏡・耐薬品性手袋・エプロンを着用してください。</li>
              <li>・ 高温・光・不純物（鉄・マンガン等）により急激に分解し、酸素ガスと熱を発生します。冷暗所・遮光容器で保管してください。</li>
              <li>・ 密閉保管すると容器内圧が上昇します。密閉しすぎず、定期的に容器を確認してください。</li>
              <li>・ 劇物のため、毒物劇物取扱責任者の管理のもとで保管・使用してください。</li>
            </ul>
          </section>

          <section className="mb-8 border border-slate-200 bg-slate-50 px-4 py-4 md:px-5">
            <h2 className="mb-2 text-base font-bold text-slate-900 tracking-normal">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へ過酸化水素をはじめとする酸化剤・工業薬品を迅速に供給しています。
              製造業・食品工業・電子部品業界のお客様にご利用いただいています。SDS（安全データシート）のご提供も承ります。
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
