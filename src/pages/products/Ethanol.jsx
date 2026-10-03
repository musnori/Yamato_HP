// src/pages/products/Ethanol.jsx
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

export default function Ethanol() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "エタノール" },
  ];
  return (
    <>
      <SEOHead pageKey="productEthanol" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="エタノール" description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱うエタノール（工業用・試薬用・無水）。消毒・溶剤・食品工業など幅広く使用。" url="/products/ethanol" />

      <PageHeader
        title="エタノール"
        crumbs={[{ name: "取扱製品", to: "/products" }, { name: "エタノール" }]}
        lead="姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱うエタノール（工業用アルコール・無水エタノール・エタノール製剤）のご案内です。"
      >
        <p className="mt-3">
          <span className="border border-slate-400 bg-white px-1.5 py-px text-[11px] font-bold text-slate-700">有機溶剤・アルコール類</span>
        </p>
      </PageHeader>

      <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl">

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 医療・食品工場・施設での消毒・殺菌（70〜80%水溶液）</li>
              <li>・ 化粧品・医薬品の溶媒・基材</li>
              <li>・ 食品工業での発酵・抽出・保存</li>
              <li>・ 塗料・ニス・インクの溶剤</li>
              <li>・ 分析・試験用試薬（無水エタノール）</li>
              <li>・ 洗浄・脱脂剤（電子部品・精密機器）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">64-17-5</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">エチルアルコール、酒精</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">種別・純度</td><td className="py-2">無水エタノール（99.5%以上）・工業用アルコール・エタノール製剤（各種濃度）</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">18L缶・ドラム（200L）・ローリー</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">第4類 アルコール類（引火点 13℃）</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 border-l-4 border-amber-400 bg-amber-50 px-4 py-4 md:px-5">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 引火性があります。火気・電気機器・静電気から遠ざけてください。</li>
              <li>・ 高濃度蒸気の吸入は頭痛・眩暈を引き起こします。換気を十分に行ってください。</li>
              <li>・ 工業用アルコールは変性剤（メタノール等）が含まれており、飲用・食品用途には使用できません。</li>
              <li>・ 密閉容器に入れ、直射日光・高温を避けた冷暗所に保管してください。</li>
              <li>・ 酸化剤・強酸・強塩基とは離して保管してください。</li>
            </ul>
          </section>

          <section className="mb-8 border border-slate-200 bg-slate-50 px-4 py-4 md:px-5">
            <h2 className="mb-2 text-base font-bold text-slate-900 tracking-normal">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へエタノール（工業用アルコール・無水エタノール）を迅速に供給しています。
              食品・医療・製造業など多様な業種のお客様にご利用いただいています。SDS（安全データシート）のご提供も承ります。
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
