import React from "react";

export default function Company() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      {/* タイトル */}
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">会社概要</h1>
        <p className="text-sm text-gray-500 mt-1">Company Profile</p>
      </div>

      {/* 基本情報 */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <h2 className="text-green-700 font-semibold mb-2">会社名</h2>
          <p>大和薬品株式会社</p>
        </div>
        <div>
          <h2 className="text-green-700 font-semibold mb-2">代表者</h2>
          <p>代表取締役社長：田路 裕之</p>
          <p>代表取締役会長：田路 享三</p>
        </div>
        <div>
          <h2 className="text-green-700 font-semibold mb-2">所在地</h2>
          <p>〒670‑0935 兵庫県姫路市北条口1丁目59番地</p>
        </div>
        <div>
          <h2 className="text-green-700 font-semibold mb-2">連絡先</h2>
          <p>TEL：079‑281‑0671</p>
          <p>FAX：079‑224‑1870</p>
          <p>阿保倉庫：兵庫県姫路市阿保甲403番地（TEL: 079‑282‑0164）</p>
        </div>
        <div>
          <h2 className="text-green-700 font-semibold mb-2">創業</h2>
          <p>1933年（昭和8年）4月10日</p>
        </div>
        <div>
          <h2 className="text-green-700 font-semibold mb-2">資本金 / 従業員</h2>
          <p>資本金：1,000万円</p>
          <p>従業員数：男子7名・女子4名</p>
        </div>
        <div className="sm:col-span-2">
          <h2 className="text-green-700 font-semibold mb-2">許認可</h2>
          <p>薬剤師：田路 享三、田路 裕之 / 登録販売者：田路 富士子</p>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="text-sm">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">事業内容</h2>
        <p className="leading-relaxed text-gray-700">
          化学薬品の販売（医薬品製造所、化学工場、上下水道、食品加工施設などへの供給）、
          分析薬品、洗浄薬品、環境薬品の取扱い、貸ビル業、月極駐車場運営 など
        </p>
      </section>

      {/* 沿革 */}
      <section className="text-sm">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">沿革</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-700 leading-relaxed">
          <li>1933年：初代 田路栄一により創業（大和薬房）</li>
          <li>1950年：大和薬品株式会社 設立</li>
          <li>1965年：薬局部設立</li>
          <li>1976年：本社倉庫新築</li>
          <li>1989年：会長に田路栄一、社長に田路享三が就任</li>
          <li>2006年：阿保倉庫改築</li>
          <li>2017年：田路裕之が代表取締役社長に就任</li>
        </ul>
      </section>
    </div>
  );
}
