import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import ContactBand from "../components/ContactBand";
import SEOHead from "../components/SEOHead";

const groups = [
  {
    id: "environment",
    title: "環境への取り組み",
    items: [
      ["廃液・廃薬品の適正処理", "法令・自治体ガイドラインに基づき、委託先の適格性を確認の上で適正処理を徹底。マニフェストの管理を強化。"],
      ["省エネ・脱炭素", "倉庫・事務所のLED化、空調の高効率化、配送ルート最適化によりCO₂排出を削減。"],
      ["梱包の最適化", "再利用可能な通い容器・リターナブル資材の活用と、過剰梱包の削減に取り組みます。"],
      ["化学物質管理", "SDSの整備・最新化、保管区画の明確化、漏えい対策資機材の常備など、取り扱い安全を徹底。"],
    ],
  },
  {
    id: "safety",
    title: "安全・安心への取り組み",
    items: [
      ["安全教育・訓練", "フォークリフト・危険物取扱・応急処置などの教育を計画的に実施。年次の緊急時対応訓練を実施。"],
      ["設備・保安管理", "危険物倉庫の点検、保安距離・区画の遵守、消火設備・吸収材の配備、温湿度・換気の管理を実施。"],
      ["輸送の安全", "積付け・荷崩れ防止の標準化、危険表示の明確化、運送業者との連携強化で事故リスクを低減。"],
      ["情報管理・トレーサビリティ", "ロット・入出庫履歴の記録と、リコール時の迅速な追跡を可能にする体制を整備。"],
    ],
  },
  {
    id: "community",
    title: "地域・社会との連携",
    items: [
      ["地域清掃・緑化活動", "事業所周辺の清掃活動や緑化に参加し、地域環境の美化に貢献します。"],
      ["学校・自治体との連携", "薬品安全の啓発、化学物質の正しい取り扱い方法の共有など、地域との対話を継続。"],
      ["コンプライアンス", "法令遵守・内部通報窓口の設置など、公正な事業運営を推進します。"],
      ["BCP（事業継続計画）", "災害時の連絡網、在庫・供給確保、代替調達先の確保など、レジリエンスを強化。"],
    ],
  },
];

const kpis = [
  ["CO₂排出量", "t-CO₂/年", "前年比 ▲10%", "—"],
  ["産廃リサイクル率", "%", "80%以上", "—"],
  ["安全訓練実施", "回/年", "年2回以上", "—"],
];

export default function Sustainability() {
  return (
    <>
      <SEOHead pageKey="sustainability" />
      <PageHeader
        title="サステナビリティ"
        lead="環境負荷低減・安全対策・地域連携に継続的に取り組み、安心できる供給体制を整えます。"
      />
      <div className="bg-white">
        {groups.map((g, gi) => (
          <Section key={g.id} id={g.id} title={g.title} className={gi % 2 === 1 ? "bg-slate-50 border-y border-slate-200" : ""}>
            <dl className="grid md:grid-cols-2 md:gap-x-8 border-t border-slate-200">
              {g.items.map(([t, d]) => (
                <div key={t} className="border-b border-slate-200 py-3.5">
                  <dt className="text-base font-bold text-slate-900">{t}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-600">{d}</dd>
                </div>
              ))}
            </dl>
          </Section>
        ))}

        <Section title="目標と指標（例）" id="kpi">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] text-sm border-t border-slate-300">
              <thead className="bg-slate-50 text-left text-slate-900">
                <tr className="[&>th]:px-3 [&>th]:py-2.5 border-b border-slate-300">
                  <th>項目</th>
                  <th>指標</th>
                  <th>目標</th>
                  <th>進捗</th>
                </tr>
              </thead>
              <tbody className="[&>tr>*]:px-3 [&>tr>*]:py-2.5 text-slate-700">
                {kpis.map((row) => (
                  <tr key={row[0]} className="border-b border-slate-200">
                    {row.map((c, i) => (
                      <td key={i}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">※ 指標・目標は例です。実数値が確定したら差し替えてください。</p>
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
            <Link to="/contact" className="text-brand hover:underline underline-offset-4">環境・安全に関するご相談</Link>
            <Link to="/products?cat=water" className="text-brand hover:underline underline-offset-4">水処理薬品のご提案</Link>
          </p>
        </Section>

        <ContactBand />
      </div>
    </>
  );
}
