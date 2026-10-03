// src/pages/products/SulfuricAcid.jsx
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

      <PageHeader
        title="硫酸"
        crumbs={[{ name: "取扱製品", to: "/products" }, { name: "硫酸" }]}
        lead="姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う硫酸（濃硫酸98%・希硫酸62.5%）のご案内です。"
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
              <li>・ 化学肥料（リン酸アンモニウム・硫酸アンモニウム）の製造原料</li>
              <li>・ 金属の酸洗い・スケール除去（鉄鋼・銅）</li>
              <li>・ 蓄電池（鉛蓄電池）の電解液</li>
              <li>・ 排水・廃水のpH中和処理</li>
              <li>・ 乾燥剤（濃硫酸の強力な脱水作用を利用）</li>
              <li>・ 有機合成（スルホン化・エステル化の触媒・反応剤）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">7664-93-9</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">H₂SO₄、バイトリオル</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">濃度</td><td className="py-2">98%（濃硫酸）/ 62.5%（希硫酸）</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">20L容器・ドラム（200L）・ローリー</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">劇物（毒物及び劇物取締法）</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 border-l-4 border-amber-400 bg-amber-50 px-4 py-4 md:px-5">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 強酸・強腐食性。皮膚・眼・粘膜への接触は重篤な化学熱傷を引き起こします。保護眼鏡・耐酸性手袋・エプロンを必ず着用してください。</li>
              <li>・ 水と混合すると激しく発熱します。希釈する場合は、必ず水に少量ずつ硫酸を加えてください（逆は危険）。</li>
              <li>・ 有機物・可燃物との接触で発火の危険があります。可燃物とは離して保管してください。</li>
              <li>・ 金属と反応して水素ガスを発生します。換気を十分に行ってください。</li>
              <li>・ 劇物のため、毒物劇物取扱責任者の管理のもとで保管・使用してください。</li>
            </ul>
          </section>

          <section className="mb-8 border border-slate-200 bg-slate-50 px-4 py-4 md:px-5">
            <h2 className="mb-2 text-base font-bold text-slate-900 tracking-normal">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へ硫酸をはじめとする無機薬品・工業薬品を迅速に供給しています。
              濃硫酸・希硫酸の各濃度に対応。SDS（安全データシート）のご提供も承ります。
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
