import React from "react";

const Section = ({ title, children, id }) => (
  <section id={id} className="max-w-7xl mx-auto px-4 py-10 space-y-4">
    <h2 className="text-2xl font-bold text-green-800">{title}</h2>
    {children}
  </section>
);

const Card = ({ title, desc }) => (
  <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow transition">
    <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{desc}</p>
  </div>
);

export default function Sustainability() {
  return (
    <div className="pb-14">
      {/* ヒーロー */}
      <div
        className="h-56 md:h-64 w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero/lab.jpg')" }}
        role="img"
        aria-label="サステナビリティのイメージ写真"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow">
              サステナビリティ
            </h1>
            <p className="text-white/90 mt-2 md:text-lg">
              環境負荷低減・安全対策・地域連携に継続的に取り組みます。
            </p>
          </div>
        </div>
      </div>

      {/* 環境への取り組み */}
      <Section title="環境への取り組み" id="environment">
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="廃液・廃薬品の適正処理"
            desc="法令・自治体ガイドラインに基づき、委託先の適格性を確認の上で適正処理を徹底。マニフェストの管理を強化。"
          />
          <Card
            title="省エネ・脱炭素"
            desc="倉庫・事務所のLED化、空調の高効率化、配送ルート最適化によりCO₂排出を削減。"
          />
          <Card
            title="梱包の最適化"
            desc="再利用可能な通い容器・リターナブル資材の活用と、過剰梱包の削減に取り組みます。"
          />
          <Card
            title="化学物質管理"
            desc="SDSの整備・最新化、保管区画の明確化、漏えい対策資機材の常備など、取り扱い安全を徹底。"
          />
        </div>
      </Section>

      {/* 安全・安心 */}
      <Section title="安全・安心への取り組み" id="safety">
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="安全教育・訓練"
            desc="フォークリフト・危険物取扱・応急処置などの教育を計画的に実施。年次の緊急時対応訓練を実施。"
          />
          <Card
            title="設備・保安管理"
            desc="危険物倉庫の点検、保安距離・区画の遵守、消火設備・吸収材の配備、温湿度・換気の管理を実施。"
          />
          <Card
            title="輸送の安全"
            desc="積付け・荷崩れ防止の標準化、危険表示の明確化、運送業者との連携強化で事故リスクを低減。"
          />
          <Card
            title="情報管理・トレーサビリティ"
            desc="ロット・入出庫履歴の記録と、リコール時の迅速な追跡を可能にする体制を整備。"
          />
        </div>
      </Section>

      {/* 地域・社会貢献 */}
      <Section title="地域・社会との連携" id="community">
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="地域清掃・緑化活動"
            desc="事業所周辺の清掃活動や緑化に参加し、地域環境の美化に貢献します。"
          />
          <Card
            title="学校・自治体との連携"
            desc="薬品安全の啓発、化学物質の正しい取り扱い方法の共有など、地域との対話を継続。"
          />
          <Card
            title="コンプライアンス"
            desc="法令遵守・内部通報窓口の設置など、公正な事業運営を推進します。"
          />
          <Card
            title="BCP（事業継続計画）"
            desc="災害時の連絡網、在庫・供給確保、代替調達先の確保など、レジリエンスを強化。"
          />
        </div>
      </Section>

      {/* 目標と指標（例） */}
      <Section title="目標と指標（例）" id="kpi">
        <div className="overflow-x-auto rounded-2xl border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-green-50 text-green-900">
              <tr className="[&>th]:px-4 [&>th]:py-3 text-left">
                <th>項目</th>
                <th>指標</th>
                <th>目標</th>
                <th>進捗</th>
              </tr>
            </thead>
            <tbody className="[&>tr>*]:px-4 [&>tr>*]:py-3">
              <tr className="border-t">
                <td>CO₂排出量</td>
                <td>t-CO₂/年</td>
                <td>前年比 ▲10%</td>
                <td>—</td>
              </tr>
              <tr className="border-t">
                <td>産廃リサイクル率</td>
                <td>%</td>
                <td>80%以上</td>
                <td>—</td>
              </tr>
              <tr className="border-t">
                <td>安全訓練実施</td>
                <td>回/年</td>
                <td>年2回以上</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          ※ 指標・目標は例です。実数値が確定したら差し替えてください。
        </p>
      </Section>

      {/* お問い合わせ */}
      <Section title="関連するお問い合わせ">
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="rounded-xl border px-4 py-2 hover:bg-green-50">
            環境・安全に関するご相談
          </a>
          <a href="/products#water" className="rounded-xl border px-4 py-2 hover:bg-green-50">
            水処理薬品のご提案
          </a>
        </div>
      </Section>
    </div>
  );
}
