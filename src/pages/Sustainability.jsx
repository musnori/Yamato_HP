import React from "react";

const Section = ({ title, eyebrow, children, id }) => (
  <section id={id} className="max-w-7xl mx-auto px-4 py-12 space-y-6">
    <div className="space-y-2">
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.3em] text-green-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

const Card = ({ title, desc, icon, badge }) => (
  <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
    <div className="flex items-start gap-4">
      <div className="h-14 w-14 rounded-2xl bg-green-50 border border-green-100 grid place-items-center text-green-700">
        {icon}
      </div>
      <div>
        {badge && (
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
            {badge}
          </span>
        )}
        <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 14c6-8 12-9 16-10-1 4-2 10-10 16-2 1-4 1-6 0-1-1-1-4 0-6z" />
    <path d="M9 15c2-2 4-4 7-7" />
  </svg>
);

const IconRecycle = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 7l2-4 4 2" />
    <path d="M7 7c1-2 4-3 6-2" />
    <path d="M17 9l4 1-2 4" />
    <path d="M17 9c2 1 3 4 2 6" />
    <path d="M9 17l-1 4-4-2" />
    <path d="M9 17c-2-1-3-4-2-6" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconTruck = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 7h11v8H3z" />
    <path d="M14 10h4l3 3v2h-7z" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="17.5" cy="17.5" r="1.5" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M8 11a4 4 0 100-8 4 4 0 000 8z" />
    <path d="M17 13a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M14 20c0-2.2 1.8-4 4-4s4 1.8 4 4" />
  </svg>
);

const IconClipboard = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 4h6l1 2h2v14H6V6h2l1-2z" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </svg>
);

export default function Sustainability() {
  return (
    <div className="bg-slate-50 pb-16">
      {/* ヒーロー */}
      <div
        className="h-[280px] md:h-[340px] w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero/lab.jpg')" }}
        role="img"
        aria-label="サステナビリティのイメージ写真"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-white/70 text-sm tracking-[0.4em]">SUSTAINABILITY</p>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow mt-3">
              サステナビリティ
            </h1>
            <p className="text-white/90 mt-4 md:text-lg max-w-2xl leading-relaxed">
              環境負荷低減・安全対策・地域連携に継続的に取り組み、安心できる供給体制を整えます。
            </p>
          </div>
        </div>
      </div>

      {/* 環境への取り組み */}
      <Section title="環境への取り組み" eyebrow="ENVIRONMENT" id="environment">
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            title="廃液・廃薬品の適正処理"
            desc="法令・自治体ガイドラインに基づき、委託先の適格性を確認の上で適正処理を徹底。マニフェストの管理を強化。"
            icon={<IconRecycle />}
            badge="環境保全"
          />
          <Card
            title="省エネ・脱炭素"
            desc="倉庫・事務所のLED化、空調の高効率化、配送ルート最適化によりCO₂排出を削減。"
            icon={<IconLeaf />}
            badge="脱炭素"
          />
          <Card
            title="梱包の最適化"
            desc="再利用可能な通い容器・リターナブル資材の活用と、過剰梱包の削減に取り組みます。"
            icon={<IconClipboard />}
            badge="資源循環"
          />
          <Card
            title="化学物質管理"
            desc="SDSの整備・最新化、保管区画の明確化、漏えい対策資機材の常備など、取り扱い安全を徹底。"
            icon={<IconShield />}
            badge="安全管理"
          />
        </div>
      </Section>

      {/* 安全・安心 */}
      <Section title="安全・安心への取り組み" eyebrow="SAFETY" id="safety">
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            title="安全教育・訓練"
            desc="フォークリフト・危険物取扱・応急処置などの教育を計画的に実施。年次の緊急時対応訓練を実施。"
            icon={<IconShield />}
            badge="教育・訓練"
          />
          <Card
            title="設備・保安管理"
            desc="危険物倉庫の点検、保安距離・区画の遵守、消火設備・吸収材の配備、温湿度・換気の管理を実施。"
            icon={<IconClipboard />}
            badge="設備管理"
          />
          <Card
            title="輸送の安全"
            desc="積付け・荷崩れ防止の標準化、危険表示の明確化、運送業者との連携強化で事故リスクを低減。"
            icon={<IconTruck />}
            badge="物流安全"
          />
          <Card
            title="情報管理・トレーサビリティ"
            desc="ロット・入出庫履歴の記録と、リコール時の迅速な追跡を可能にする体制を整備。"
            icon={<IconClipboard />}
            badge="情報管理"
          />
        </div>
      </Section>

      {/* 地域・社会貢献 */}
      <Section title="地域・社会との連携" eyebrow="COMMUNITY" id="community">
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            title="地域清掃・緑化活動"
            desc="事業所周辺の清掃活動や緑化に参加し、地域環境の美化に貢献します。"
            icon={<IconLeaf />}
            badge="地域連携"
          />
          <Card
            title="学校・自治体との連携"
            desc="薬品安全の啓発、化学物質の正しい取り扱い方法の共有など、地域との対話を継続。"
            icon={<IconUsers />}
            badge="社会貢献"
          />
          <Card
            title="コンプライアンス"
            desc="法令遵守・内部通報窓口の設置など、公正な事業運営を推進します。"
            icon={<IconShield />}
            badge="遵守"
          />
          <Card
            title="BCP（事業継続計画）"
            desc="災害時の連絡網、在庫・供給確保、代替調達先の確保など、レジリエンスを強化。"
            icon={<IconClipboard />}
            badge="レジリエンス"
          />
        </div>
      </Section>

      {/* 目標と指標（例） */}
      <Section title="目標と指標（例）" eyebrow="KPI" id="kpi">
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
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
      <Section title="関連するお問い合わせ" eyebrow="CONTACT">
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="rounded-full border border-green-200 px-5 py-2 hover:bg-green-50 text-sm font-semibold text-green-800">
            環境・安全に関するご相談
          </a>
          <a href="/products#water" className="rounded-full border border-green-200 px-5 py-2 hover:bg-green-50 text-sm font-semibold text-green-800">
            水処理薬品のご提案
          </a>
        </div>
      </Section>
    </div>
  );
}
