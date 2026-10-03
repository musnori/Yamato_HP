import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SEOHead from "../components/SEOHead";
import { Phone } from "lucide-react";

const activities = [
  {
    title: "共同購買と安定供給",
    text: "医薬・化学薬品の安定供給を目指し、加盟企業が連携して仕入れと在庫を調整しています。",
  },
  {
    title: "安全管理の共有",
    text: "保管・輸送の安全基準を共有し、地域全体のリスク低減に取り組んでいます。",
  },
  {
    title: "情報交換と研修",
    text: "法改正や市場動向の情報共有、研修会の実施で知識をアップデートしています。",
  },
];

const overview = [
  ["名称", "西兵庫化学薬品協同組合"],
  ["所在地", "兵庫県姫路市北条口1丁目59番地"],
  ["活動範囲", "西播磨・中播磨地域の医薬・化学薬品供給"],
  ["主な活動", "共同購買、情報共有、研修・安全対策"],
];

export default function Association() {
  return (
    <>
      <SEOHead pageKey="association" />
      <PageHeader
        title="西兵庫化学薬品協同組合"
        lead="地域の化学薬品供給を支えるネットワークとして、安心・安全な流通体制の維持に取り組んでいます。"
      />
      <div className="bg-white">
        <Section title="組合の役割">
          <p className="max-w-3xl text-[15px] leading-[1.9] text-slate-700">
            西兵庫化学薬品協同組合は、地域の化学薬品供給網を安定させるため、加盟企業の連携と共同体制を整えています。必要な薬品を必要なタイミングで届けるために、仕入れや安全管理、情報共有の仕組みを構築しています。
          </p>
          <ul className="mt-6 grid md:grid-cols-3 md:divide-x divide-slate-200 border-y border-slate-200">
            {activities.map((a, i) => (
              <li key={a.title} className={`py-4 md:px-5 md:first:pl-0 ${i > 0 ? "border-t border-slate-200 md:border-t-0" : ""}`}>
                <h3 className="text-base font-bold text-slate-900 tracking-normal">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{a.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="地域とともに" className="bg-brand-light">
          <p className="max-w-3xl text-[15px] leading-[1.9] text-slate-700">
            医療・教育・製造現場など、地域の社会基盤を支える薬品供給を途切れさせないことが使命です。安全な取り扱いと迅速な対応で、地域の皆さまの信頼に応えてまいります。
          </p>
        </Section>

        <Section title="組合概要">
          <dl className="border-t border-slate-200 text-[15px]">
            {overview.map(([label, value]) => (
              <div key={label} className="grid sm:grid-cols-[10rem_1fr] border-b border-slate-200">
                <dt className="pt-3 sm:py-3 sm:px-4 sm:bg-slate-50 text-sm font-bold text-slate-900">{label}</dt>
                <dd className="pb-3 pt-1 sm:py-3 sm:px-5 text-slate-700">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 border-t-2 border-brand pt-3 max-w-md">
            <p className="text-sm text-slate-700">組合活動に関するご相談は、大和薬品株式会社までご連絡ください。</p>
            <a href="tel:0792810671" className="mt-1 inline-flex items-center gap-2 text-2xl font-bold text-brand tabular-nums hover:underline">
              <Phone size={20} />
              079-281-0671
            </a>
          </div>
        </Section>
      </div>
    </>
  );
}
