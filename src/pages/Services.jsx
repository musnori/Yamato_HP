import React from "react";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Services() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e2f7e7,_transparent_55%)]" />
        <div className="relative layout-container py-10 md:py-14">
          <p className="section-title">SERVICES</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">サービス</h1>
          <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">
            回収・処分のご相談から用途相談まで、現場の状況に合わせた提案を行います。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryCTA to="/contact?subject=サービスの相談" label="見積・相談する" />
            <PrimaryCTA to="/products" label="製品を検索" variant="outline" />
          </div>
        </div>
      </section>

      <Section
        eyebrow="RECOVERY & DISPOSAL"
        title="回収・処分のご相談"
        description="ラベル不明の薬品や長期保管品など、現場の状況に合わせて安全・法令順守の処理をご提案します。"
      >
        <Card className="p-6 md:p-8 border-slate-100">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            回収・処分サービス
          </span>
          <h2 className="mt-4 text-xl md:text-2xl font-bold text-gray-900">
            まずは現状をお知らせください
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            ラベル不明・長期保管・固結／沈殿・在庫整理などの状況に対応します。必要に応じて現地確認やマニフェスト発行のご相談も可能です。
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            {[
              "ラベル不明の薬品も可能",
              "事前現地確認やマニフェスト発行も可能",
              "安全・法令順守の処理フローをご提案",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-600" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <PrimaryCTA
              to={`/contact?subject=${encodeURIComponent("薬品の回収・処分の相談")}`}
              label="回収・処分について相談する"
            />
            <PrimaryCTA to="/contact" label="お問い合わせフォームへ" variant="outline" />
          </div>
        </Card>
      </Section>

      <Section
        eyebrow="SUPPORT"
        title="用途相談・技術サポート"
        description="目的の薬品が見つからない場合も、用途や課題を共有いただければ最適な提案を行います。"
        className="bg-white"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "用途を整理", text: "現場の条件や用途をヒアリングします。" },
            { title: "候補を提案", text: "安全性・コスト・納期を踏まえてご提案。" },
            { title: "見積・導入", text: "必要な見積や納品スケジュールをご案内。" },
          ].map((item) => (
            <Card key={item.title} className="p-5">
              <p className="text-sm font-semibold text-green-700">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
