// src/pages/products/SodiumHypochlorite.jsx
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

      <PageHeader
        title="次亜塩素酸ナトリウム"
        crumbs={[{ name: "取扱製品", to: "/products" }, { name: "次亜塩素酸ナトリウム" }]}
        lead="姫路市・播磨地域・兵庫県全域へ供給。大和薬品株式会社が取り扱う次亜塩素酸ソーダ（6%・12%）のご案内です。"
      >
        <p className="mt-3">
          <span className="border border-slate-400 bg-white px-1.5 py-px text-[11px] font-bold text-slate-700">水処理薬品・殺菌剤</span>
        </p>
      </PageHeader>

      <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl">

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />用途・特徴</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 水道水・プール水の殺菌・消毒</li>
              <li>・ 排水処理施設での殺菌・脱臭</li>
              <li>・ 食品工場・医療施設の除菌・漂白</li>
              <li>・ 紙パルプ・繊維の漂白（業務用）</li>
              <li>・ 下水道・汚泥の消毒処理</li>
              <li>・ 施設・設備の洗浄・殺菌</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />一般的な規格・仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600 w-1/3">CAS番号</td><td className="py-2">7681-52-9</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">別名</td><td className="py-2">次亜塩素酸ソーダ、NaClO水溶液</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">有効塩素濃度</td><td className="py-2">6%（家庭・食品用）/ 12%（工業・水処理用）</td></tr>
                  <tr className="border-b border-slate-200"><td className="py-2 pr-4 font-semibold text-slate-600">容量</td><td className="py-2">20Lポリ容器・200Lドラム・ローリー</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold text-slate-600">危険物分類</td><td className="py-2">劇物（12%以上）／非該当（6%未満）</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 border-l-4 border-amber-400 bg-amber-50 px-4 py-4 md:px-5">
            <h2 className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />保管・取扱い上の注意</h2>
            <ul className="space-y-2 text-slate-700">
              <li>・ 酸との混合は厳禁です。塩素ガスが発生し、非常に危険です。</li>
              <li>・ 高温・直射日光・金属イオンにより有効塩素が急速に分解します。冷暗所（10〜15℃以下）で保管してください。</li>
              <li>・ 皮膚・眼への接触で刺激・炎症を引き起こします。保護眼鏡・耐薬品性手袋を着用してください。</li>
              <li>・ 塩素ガスの発生に備え、換気の良い場所で使用・保管してください。</li>
              <li>・ 12%以上は劇物のため、毒物劇物取扱責任者の管理が必要です。</li>
              <li>・ 保管期間が長くなると濃度が低下します。製造後なるべく早く使用してください。</li>
            </ul>
          </section>

          <section className="mb-8 border border-slate-200 bg-slate-50 px-4 py-4 md:px-5">
            <h2 className="mb-2 text-base font-bold text-slate-900 tracking-normal">姫路・播磨地域のお客様へ</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              大和薬品株式会社は兵庫県姫路市を拠点に、播磨地域・兵庫県全域へ次亜塩素酸ソーダを常時在庫・迅速に供給しています。
              水処理施設・食品工場・医療施設など多様な業種のお客様にご利用いただいています。SDS（安全データシート）のご提供も承ります。
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
