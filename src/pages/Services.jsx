import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import ContactBand from "../components/ContactBand";
import SEOHead from "../components/SEOHead";
import { Check, ChevronRight } from "lucide-react";

const disposalPoints = [
  "ラベル不明・混載状態でも対応可能",
  "事前の現地確認・安全確認を実施",
  "マニフェスト伝票の発行・管理を支援",
  "法令（廃棄物処理法）に準拠したフロー提案",
];

const supportSteps = [
  {
    title: "用途を整理",
    text: "現場の条件、対象物、解決したい課題などをお聞きします。「何を使えばいいかわからない」段階からサポートします。",
  },
  {
    title: "最適な選定",
    text: "安全性・コスト・納期・法規制を踏まえて薬品をご提案します。必要に応じてSDS（安全データシート）も提供します。",
  },
  {
    title: "見積・導入",
    text: "選定した製品のお見積りと、納品までのスケジュールをご案内します。継続的な供給体制も整えます。",
  },
];

export default function Services() {
  return (
    <>
      <SEOHead pageKey="services" />

      <PageHeader
        title="サービス案内"
        lead="薬品の販売だけでなく、不要になった薬品の回収・処分や、現場の課題に合わせた選定のご相談まで対応しています。"
      />

      <div className="bg-white">
        {/* 回収・処分 */}
        <Section title="薬品の回収・処分">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10 items-start">
            <div>
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="/images/haiki1.jpg"
                  alt="回収した薬品の容器"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/haiki2.jpg"
                  alt="保管されていた薬品"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">※写真はイメージです。法令に沿った手順をご案内します。</p>
            </div>

            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-slate-900 leading-snug tracking-normal">
                ラベル不明品や長期保管品も、安全・確実に処理します。
              </h3>
              <p className="mt-3 text-[15px] leading-[1.9] text-slate-700">
                「中身が何かわからない」「固まってしまっている」といった状態でもご相談ください。現地を確認したうえで、マニフェスト発行を含めた適正な処理の流れをご提案します。
              </p>
              <ul className="mt-4 border-t border-slate-200">
                {disposalPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-slate-200 py-2.5 text-[15px] text-slate-800">
                    <Check size={18} className="text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={`/contact?subject=${encodeURIComponent("薬品の回収・処分の相談")}`}
                className="mt-5 inline-flex items-center justify-center gap-1 rounded bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-dark"
              >
                回収・処分について相談する
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </Section>

        {/* 用途相談 */}
        <Section
          title="用途相談・選定サポート"
          description="目的の薬品が見つからない場合も、用途や課題をお知らせいただければご提案します。"
          className="bg-slate-50 border-y border-slate-200"
        >
          <ol className="grid gap-px bg-slate-200 border border-slate-200 md:grid-cols-3">
            {supportSteps.map((step, i) => (
              <li key={step.title} className="bg-white p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 tracking-normal">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/contact?subject=用途相談"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline underline-offset-4"
            >
              用途について相談する
              <ChevronRight size={15} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline underline-offset-4"
            >
              取扱製品を探す
              <ChevronRight size={15} />
            </Link>
          </div>
        </Section>

        <ContactBand />
      </div>
    </>
  );
}
