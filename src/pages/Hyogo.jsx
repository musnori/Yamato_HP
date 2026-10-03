import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ContactBand from "../components/ContactBand";
import Section from "../components/Section";
import SEOHead from "../components/SEOHead";
import { BreadcrumbSchema, FAQPageSchema } from "../components/StructuredData";
import {
  ChevronRight,
  MapPin,
  Truck,
  FileText,
  Phone,
  Clock,
  Package,
  CheckCircle2,
  Building2,
  Beaker
} from "lucide-react";

export default function Hyogo() {
  const faqs = [
    {
      q: "小ロット対応は可能ですか？",
      a: "はい、可能です。お客様のご要望に応じて柔軟に対応いたします。まずはお問い合わせください。"
    },
    {
      q: "見積依頼の方法を教えてください",
      a: "お問い合わせフォーム、またはお電話（079-281-0671）にて承っております。製品名・数量・用途をお知らせください。"
    },
    {
      q: "納期の目安はどれくらいですか？",
      a: "在庫品は最短即日～翌日出荷が可能です。取り寄せ品は1週間前後となります。お急ぎの場合はご相談ください。"
    },
    {
      q: "対応エリアはどこまでですか？",
      a: "兵庫県内を中心に、大阪・岡山・京都など関西エリアへ対応しております。その他の地域もご相談ください。"
    },
    {
      q: "SDS（安全データシート）・MSDSは提供してもらえますか？",
      a: "はい、すべての化学薬品に対してSDS（旧MSDS）を提供しております。製品納品時または事前にご提供可能です。"
    },
    {
      q: "荷姿や梱包の相談はできますか？",
      a: "はい、可能です。ドラム缶、一斗缶、ポリ容器など、ご要望に応じた荷姿でご提供いたします。"
    }
  ];

  const strengths = [
    {
      icon: MapPin,
      title: "兵庫県姫路市を拠点",
      desc: "JR姫路駅から徒歩圏内。兵庫県内および関西エリアへのアクセスに優れた立地です。"
    },
    {
      icon: Package,
      title: "在庫を活かした即応体制",
      desc: "主要な化学薬品・工業薬品を常時在庫。急なご依頼にも迅速に対応します。"
    },
    {
      icon: Truck,
      title: "自社便とメーカー直送を使い分け",
      desc: "納期・コストに応じて最適な配送方法を選択し、効率的な納品を実現します。"
    },
    {
      icon: FileText,
      title: "SDS提供・安全サポート",
      desc: "すべての化学薬品にSDSを添付。保管方法や取り扱い方法もサポートします。"
    }
  ];

  return (
    <>
      <SEOHead pageKey="hyogo" />
      <BreadcrumbSchema items={[{ name: "ホーム", url: "/" }, { name: "兵庫・姫路の化学薬品供給" }]} />
      <FAQPageSchema faqs={faqs} />

      <PageHeader
        title="兵庫・姫路の化学薬品供給"
        lead="創業90年以上の実績をもとに、兵庫県姫路市から関西エリアへ、化学薬品・工業薬品・試薬・溶剤を安定供給しています。"
      />

      <div className="bg-white">
        <Section title="対応エリア">
          <p className="max-w-3xl text-[15px] leading-[1.9] text-slate-700">
            兵庫県姫路市を拠点に、兵庫県内全域、大阪府、岡山県、京都府、滋賀県、奈良県、和歌山県など関西エリアへ化学薬品・工業薬品を供給しています。
          </p>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-200 text-sm text-slate-800">
            {["兵庫県", "大阪府", "岡山県", "京都府", "滋賀県", "奈良県", "和歌山県", "その他地域（要相談）"].map((area) => (
              <li key={area} className="border-r border-b border-slate-200 px-3 py-2.5">
                {area}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="大和薬品の供給体制" className="bg-brand-light">
          <div className="grid md:grid-cols-2 md:gap-x-10">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 border-b border-slate-300/70 py-4">
                  <Icon size={26} strokeWidth={1.5} className="text-brand shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 tracking-normal">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section title="よくあるご相談">
          <dl className="border-t border-slate-200">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-slate-200 py-4">
                <dt className="flex items-start gap-2 text-[15px] font-bold text-slate-900">
                  <span className="shrink-0 font-serif text-brand">Q.</span>
                  {faq.q}
                </dt>
                <dd className="mt-1.5 flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <span className="shrink-0 font-serif font-bold text-slate-500">A.</span>
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
            {[
              ["取扱製品一覧", "/products"],
              ["主要在庫品", "/stock"],
              ["サービス案内", "/services"],
              ["会社概要", "/company"],
              ["アクセス", "/access"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="inline-flex items-center gap-1 text-brand hover:underline underline-offset-4">
                  {label}
                  <ChevronRight size={15} />
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <ContactBand subject="兵庫エリアからの相談" text="小ロット対応・納期のご相談・SDSの提供など、お気軽にお問い合わせください。" />
      </div>
    </>
  );
}
