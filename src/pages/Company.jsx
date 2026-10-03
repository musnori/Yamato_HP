import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import ContactBand from "../components/ContactBand";
import SEOHead from "../components/SEOHead";
import { BreadcrumbSchema } from "../components/StructuredData";
import { ShieldCheck, ChevronRight } from "lucide-react";

export default function Company() {
  // 沿革データ
  const history = [
    { date: "1933年（昭和8年）4月", text: "現在地にて初代 田路栄一が「大和薬房」の名称で開設" },
    { date: "1945年（昭和20年）6月", text: "戦災により焼失" },
    { date: "1946年（昭和21年）1月", text: "再度「大和薬房」を設立" },
    { date: "1950年（昭和25年）10月", text: "資本金100万円にて「大和薬品株式会社」を設立" },
    { date: "1965年（昭和40年）5月", text: "大和薬品株式会社 薬局部を設立" },
    { date: "1974年（昭和49年）4月", text: "資本金200万円に増資" },
    { date: "1976年（昭和51年）10月", text: "本社倉庫新築" },
    { date: "1989年（平成元年）3月", text: "田路栄一 会長に就任 / 田路享三 代表取締役に就任" },
    { date: "1989年（平成元年）4月", text: "資本金800万円に増資" },
    { date: "1989年（平成2年）4月", text: "資本金1,000万円に増資" },
    { date: "1999年（平成11年）4月", text: "神屋倉庫 区画整理のため解体後、月極駐車場へ" },
    { date: "2001年（平成13年）1月", text: "32台収容タワーパーキング完成" },
    { date: "2006年（平成18年）4月", text: "阿保倉庫改築" },
    { date: "2009年（平成21年）10月", text: "阿保倉庫 毒劇物倉庫新築" },
    { date: "2017年（平成29年）10月", text: "田路享三 代表取締役会長 / 田路裕之 代表取締役社長に就任" },
  ];

  // 事業領域
  const domains = [
    "化学合成工場", "医薬品製造所", "上下水道施設", "排水処理施設", "水産工場",
    "食肉工場", "食品工場", "精密機器工場", "皮革工場", "衣料クリーニング・リネン工場",
    "ガラス表面処理工場", "水質分析研究機関", "大学研究所", "学校関係のプール・温水プール",
    "スポーツクラブ", "銭湯", "鍍金・金属表面処理工場", "運動場整備用品",
    "衛生処理施設", "土壌処理施設", "ハウスクリーニング関係",
  ];

  const profile = [
    { label: "会社名", value: "大和薬品株式会社" },
    { label: "代表者", value: "代表取締役社長　田路 裕之\n代表取締役会長　田路 享三" },
    { label: "所在地", value: "〒670-0935 兵庫県姫路市北条口1丁目59番地" },
    { label: "連絡先", value: "TEL 079-281-0671　FAX 079-224-1870" },
    { label: "創業", value: "1933年（昭和8年）4月10日" },
    { label: "資本金", value: "1,000万円" },
    { label: "従業員", value: "11名（男子7名・女子4名）" },
    { label: "事業内容", value: "化学薬品・工業薬品・試薬の販売、環境関連薬品の供給、不動産賃貸業 他" },
    { label: "許認可", value: "毒物劇物一般販売業登録\n薬剤師：田路 享三、田路 裕之\n登録販売者：田路 富士子" },
  ];

  return (
    <>
      <SEOHead pageKey="company" />
      <BreadcrumbSchema items={[{ name: "ホーム", url: "/" }, { name: "会社概要" }]} />

      <PageHeader
        title="会社概要"
        lead="昭和8年（1933年）の創業以来、兵庫県姫路市に根ざした化学薬品・工業薬品の専門商社として、関西エリアのお客様の事業を支えています。"
      />

      <div className="bg-white">
        {/* 会社概要 */}
        <Section title="会社情報">
          <dl className="border-t border-slate-200 text-[15px]">
            {profile.map((row) => (
              <div key={row.label} className="grid sm:grid-cols-[10rem_1fr] border-b border-slate-200">
                <dt className="pt-3 sm:py-4 sm:px-4 sm:bg-slate-50 text-sm font-bold text-slate-900">{row.label}</dt>
                <dd className="pb-3 pt-1 sm:py-4 sm:px-5 text-slate-700 whitespace-pre-line leading-relaxed">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* 品質・安全 */}
        <Section title="品質・安全への取り組み" className="bg-brand-light">
          <div className="flex gap-4 max-w-4xl">
            <ShieldCheck size={30} strokeWidth={1.5} className="text-brand shrink-0 mt-1 hidden sm:block" />
            <p className="text-[15px] leading-[1.9] text-slate-700">
              化学薬品・工業薬品を取り扱う企業として、法令順守を徹底しています。姫路市の自社倉庫では保管・輸送・提供の各工程で安全管理を行い、SDS（安全データシート）の提供や取り扱い説明を通じて、お客様の安全な使用をサポートします。
            </p>
          </div>
        </Section>

        {/* 主な納入先 */}
        <Section title="主な納入先・対応業種">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-slate-200 text-sm text-slate-700">
            {domains.map((d) => (
              <li key={d} className="border-r border-b border-slate-200 px-3 py-2.5">
                {d}
              </li>
            ))}
          </ul>
        </Section>

        {/* 沿革 */}
        <Section title="沿革" className="bg-slate-50 border-y border-slate-200">
          <ol className="border-t border-slate-200 bg-white">
            {history.map((h) => (
              <li
                key={h.date + h.text}
                className="grid sm:grid-cols-[13rem_1fr] gap-x-4 border-b border-slate-200 px-1 sm:px-4 py-3"
              >
                <span className="text-sm font-bold text-brand tabular-nums">{h.date}</span>
                <span className="text-[15px] text-slate-700 leading-relaxed">{h.text}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* 所在地 */}
        <Section
          title="所在地"
          actions={
            <Link to="/access" className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline underline-offset-4">
              アクセス・倉庫の詳細
              <ChevronRight size={15} />
            </Link>
          }
        >
          <div className="grid gap-5 md:grid-cols-[1fr_1.4fr] items-start">
            <div className="text-[15px] leading-relaxed text-slate-700">
              <p className="font-bold text-slate-900">本社</p>
              <p className="mt-1">
                〒670-0935
                <br />
                兵庫県姫路市北条口1丁目59番地
              </p>
              <p className="mt-2 text-sm">TEL 079-281-0671 ／ FAX 079-224-1870</p>
            </div>
            <div className="aspect-[16/10] w-full overflow-hidden border border-slate-200 bg-slate-100 relative">
              <iframe
                title="大和薬品株式会社 本社の地図"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.635811776823!2d134.69324831518345!3d34.83226998039869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e20101735555%3A0x1122334455667788!2z5aSn5ZKM6IOc5ZOB5qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Section>

        <ContactBand />
      </div>
    </>
  );
}
