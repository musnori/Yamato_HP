import React from "react";

export default function Association() {
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

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-[url('/morninng.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative layout-container py-14">
          <p className="section-title">ASSOCIATION</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            西兵庫化学薬品協同組合
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            地域の化学薬品供給を支えるネットワークとして、
            安心・安全な流通体制の維持に取り組んでいます。
          </p>
        </div>
      </section>

      <div className="layout-container py-12 grid gap-10 lg:grid-cols-3">
        <section className="lg:col-span-2 space-y-8">
          <div className="card p-6">
            <p className="section-title">MISSION</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">組合の役割</h2>
            <p className="mt-3 text-sm text-slate-600">
              西兵庫化学薬品協同組合は、地域の化学薬品供給網を安定させるため、
              加盟企業の連携と共同体制を整えています。必要な薬品を必要なタイミングで届けるために、
              仕入れや安全管理、情報共有の仕組みを構築しています。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity.title} className="card p-5">
                <h3 className="text-lg font-semibold text-slate-900">{activity.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{activity.text}</p>
              </div>
            ))}
          </div>

          <div className="card p-6">
            <p className="section-title">MESSAGE</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">地域とともに</h2>
            <p className="mt-3 text-sm text-slate-600">
              医療・教育・製造現場など、地域の社会基盤を支える薬品供給を途切れさせないことが使命です。
              安全な取り扱いと迅速な対応で、地域の皆さまの信頼に応えてまいります。
            </p>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="card p-6 bg-white">
            <h3 className="text-lg font-bold text-gray-900">組合概要</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <tbody className="divide-y divide-slate-200">
                  {overview.map(([label, value]) => (
                    <tr key={label}>
                      <th className="py-3 pr-4 text-left font-semibold text-slate-500">{label}</th>
                      <td className="py-3 text-slate-900">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6 bg-green-50 border border-green-100">
            <p className="text-sm text-green-700 font-semibold">お問い合わせ</p>
            <p className="mt-2 text-sm text-slate-700">
              組合活動に関するご相談は、大和薬品株式会社までご連絡ください。
            </p>
            <p className="mt-4 text-2xl font-extrabold text-green-700">079-281-0671</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
