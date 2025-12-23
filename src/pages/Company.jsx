import React from "react";
import { Link } from "react-router-dom";

export default function Company() {
  // 沿革データ（年 → 出来事）
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

  // 事業領域（タグ表示）
  const domains = [
    "化学合成工場", "医薬品製造所", "上下水道施設", "排水処理施設", "水産工場",
    "食肉工場", "食品工場", "精密機器工場", "皮革工場", "衣料クリーニング・リネン工場",
    "ガラス表面処理工場", "水質分析研究機関", "大学研究所", "学校関係のプール・温水プール",
    "スポーツクラブ", "銭湯", "鍍金・金属表面処理工場", "運動場整備用品",
    "衛生処理施設", "土壌処理施設", "ハウスクリーニング関係",
  ];

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-[url('/morninng.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative layout-container py-14">
          <p className="section-title">COMPANY</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            会社概要
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            創業90年を超える経験と信頼を礎に、地域の医薬・化学品の供給を支えています。
          </p>
        </div>
      </section>

      <div className="layout-container py-12 grid gap-10 lg:grid-cols-3">
        <section className="lg:col-span-2 space-y-10">
          <div className="card">
            <div className="border-b border-slate-200 p-5">
              <h2 className="text-xl font-bold text-gray-900">会社概要</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["会社名", "大和薬品株式会社"],
                    ["代表者", "代表取締役社長：田路 裕之 / 代表取締役会長：田路 享三"],
                    ["所在地", "〒670-0935 兵庫県姫路市北条口1丁目59番地"],
                    ["連絡先", "TEL：079-281-0671 / FAX：079-224-1870"],
                    ["創業", "1933年（昭和8年）4月10日"],
                    ["資本金", "1,000万円"],
                    ["従業員", "男子7名・女子4名"],
                    ["許認可", "薬剤師：田路 享三、田路 裕之 / 登録販売者：田路 富士子"],
                  ].map(([label, value]) => (
                    <tr key={label} className="text-left">
                      <th className="w-36 px-5 py-4 text-slate-500 font-semibold">{label}</th>
                      <td className="px-5 py-4 text-slate-900">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-6">
            <p className="section-title">STRENGTHS</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">大和薬品の強み</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                { title: "90年以上の実績", text: "地域の医薬・化学品供給に長年携わる信頼。", icon: "🏢" },
                { title: "迅速な納品体制", text: "用途に合わせた在庫と配送でスピーディーに対応。", icon: "🚚" },
                { title: "用途別の提案", text: "現場の課題に合わせて最適品を提案。", icon: "🧪" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xl">{item.icon}</div>
                  <p className="mt-2 font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <p className="section-title">FLOW</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">取引の流れ</h2>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {["お問い合わせ", "用途・条件のヒアリング", "見積・提案", "納品・サポート"].map((step, index) => (
                <li key={step} className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 bg-white">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="card p-6">
            <p className="section-title">QUALITY & SAFETY</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">品質・安全への取り組み</h2>
            <p className="mt-3 text-sm text-slate-600">
              法令順守を徹底し、保管・輸送・提供の各工程で安全管理を実施しています。必要に応じて安全データの確認や取り扱いの説明も行います。
            </p>
          </div>

          <div className="card">
            <div className="border-b border-slate-200 p-5">
              <h2 className="text-xl font-bold text-gray-900">事業内容</h2>
              <p className="text-sm text-gray-500 mt-1">
                化学薬品・医薬品の販売、分析・洗浄・環境関連薬品の供給／貸ビル業、月極駐車場 など
              </p>
            </div>
            <div className="p-5">
              <ul className="flex flex-wrap gap-2">
                {domains.map((d) => (
                  <li key={d} className="text-sm bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="border-b border-slate-200 p-5">
              <h2 className="text-xl font-bold text-gray-900">沿革</h2>
            </div>
            <ol className="relative p-6">
              {history.map((h, i) => (
                <li key={i} className="pl-7 pb-6 last:pb-0 relative">
                  <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-green-600" />
                  {i !== history.length - 1 && (
                    <span className="absolute left-[6px] top-5 bottom-0 w-px bg-gray-200" />
                  )}
                  <p className="text-sm text-gray-500">{h.date}</p>
                  <p className="text-gray-900 font-medium leading-relaxed">{h.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <aside className="space-y-6 lg:sticky lg:top-6 self-start">
          <div className="card p-6 bg-gradient-to-br from-green-50 to-white border border-green-200">
            <h3 className="text-lg font-bold text-gray-900">お問い合わせ</h3>
            <p className="text-sm text-gray-600 mt-1">
              製品・お取引に関するご相談はお気軽にどうぞ。
            </p>
            <a href="tel:0792810671" className="mt-4 block text-2xl font-extrabold text-green-700">
              079-281-0671
            </a>
            <Link to="/contact" className="mt-3 btn-primary">
              見積・相談する
            </Link>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold text-gray-900">アクセス</h3>
            <p className="text-sm text-gray-600 mt-1">
              〒670-0935 兵庫県姫路市北条口1丁目59番地
            </p>
            <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="本社マップ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13100.431238785877!2d134.68534486601976!3d34.82838179797159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e00c018022b1%3A0xfc3278ab139d6de1!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1755606818323!5m2!1sja!2sjp"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Link to="/access" className="mt-3 inline-flex text-sm text-green-700 underline underline-offset-4">
              詳しいアクセスを見る
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
