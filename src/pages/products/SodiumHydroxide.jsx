// src/pages/products/SodiumHydroxide.jsx
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

export default function SodiumHydroxide() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "取扱商品", url: "/products" },
    { name: "苛性ソーダ（水酸化ナトリウム）" },
  ];

  return (
    <>
      <SEOHead pageKey="productSodiumHydroxide" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema
        name="苛性ソーダ（水酸化ナトリウム）"
        description="姫路・播磨・兵庫県の化学薬品専門商社 大和薬品株式会社が取り扱う苛性ソーダ（水酸化ナトリウム）。水処理・化学工業に不可欠なアルカリ剤。"
        url="/products/sodium-hydroxide"
      />

      <PageHeader
        title="苛性ソーダ（水酸化ナトリウム）"
        crumbs={[{ name: "取扱製品", to: "/products" }, { name: "苛性ソーダ（水酸化ナトリウム）" }]}
        lead="姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う苛性ソーダのご案内です。"
      >
        <p className="mt-3">
          <span className="border border-slate-400 bg-white px-1.5 py-px text-[11px] font-bold text-slate-700">無機薬品・アルカリ剤</span>
        </p>
      </PageHeader>

      <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl">

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 排水・廃水のpH調整（中和処理）</li>
              <li>・ 水処理施設でのpHアップ剤</li>
              <li>・ 化学工業での原料（石鹸・紙パルプ・繊維加工）</li>
              <li>・ 金属表面処理・アルカリ洗浄</li>
              <li>・ 食品工業でのアルカリ処理（こんにゃく・そばなど）</li>
              <li>・ めっき・電気分解工程のアルカリ剤</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td>
                    <td className="py-2">1310-73-2</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-semibold text-slate-600">別名</td>
                    <td className="py-2">水酸化ナトリウム、苛性ソーダ、NaOH</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-semibold text-slate-600">形状・濃度</td>
                    <td className="py-2">フレーク（固体）・粒状・液体（24%・48%）</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-semibold text-slate-600">容量</td>
                    <td className="py-2">25kgバッグ・フレコン・ドラム・ローリー</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td>
                    <td className="py-2">劇物（毒物及び劇物取締法）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 border-l-4 border-amber-400 bg-amber-50 px-4 py-4 md:px-5">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 強アルカリ性のため、皮膚・眼への接触は重篤な化学熱傷を引き起こします。必ず保護眼鏡・耐アルカリ性手袋を着用してください。</li>
              <li>・ 水と接触すると発熱します。液体を希釈する際は必ず水に薬品を少量ずつ加えてください（逆は厳禁）。</li>
              <li>・ 固体は大気中の水分・CO₂を吸収しやすいため、密閉容器に保管してください。</li>
              <li>・ アルミニウム・亜鉛などの金属と反応し水素ガスを発生します。金属容器の使用は避けてください。</li>
              <li>・ 劇物のため、取り扱いには毒物劇物取扱責任者の管理が必要です。</li>
            </ul>
          </section>

          <section className="mb-8 border border-slate-200 bg-slate-50 px-4 py-4 md:px-5">
            <h2 className="mb-2 text-base font-bold text-slate-900 tracking-normal">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へ苛性ソーダ（水酸化ナトリウム）をはじめとする無機薬品・水処理薬品を迅速に供給しています。
              フレーク・液体など各種形状に対応。SDS（安全データシート）のご提供も承ります。
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
