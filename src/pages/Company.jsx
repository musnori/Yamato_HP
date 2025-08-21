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
    <div className="bg-white">
      {/* ===== ヒーロー ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/morninng.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            会社概要
          </h1>
          <p className="text-gray-600 mt-2">Company Profile</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* ファクトカード */}
            <div className="rounded-xl border bg-white/90 p-4">
              <p className="text-xs text-gray-500">創業</p>
              <p className="text-lg font-semibold text-gray-900">1933年（昭和8年）</p>
            </div>
            <div className="rounded-xl border bg-white/90 p-4">
              <p className="text-xs text-gray-500">資本金</p>
              <p className="text-lg font-semibold text-gray-900">1,000万円</p>
            </div>
            <div className="rounded-xl border bg-white/90 p-4">
              <p className="text-xs text-gray-500">所在地</p>
              <p className="text-lg font-semibold text-gray-900">兵庫県姫路市</p>
            </div>
            <a href="tel:0792810671" className="rounded-xl border bg-green-50 p-4 hover:bg-green-100 transition">
              <p className="text-xs text-gray-600">お電話</p>
              <p className="text-lg font-semibold text-green-700">079-281-0671</p>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-3">
        {/* ===== 左：基本情報 ===== */}
        <section className="lg:col-span-2 space-y-10">
          {/* 基本情報（定義リスト） */}
          <div className="rounded-2xl border bg-white">
            <div className="border-b p-5">
              <h2 className="text-xl font-bold text-gray-900">基本情報</h2>
            </div>
            <dl className="divide-y">
              <div className="grid grid-cols-12 gap-4 p-5">
                <dt className="col-span-12 sm:col-span-3 text-gray-500">会社名</dt>
                <dd className="col-span-12 sm:col-span-9 text-gray-900 font-medium">大和薬品株式会社</dd>
              </div>
              <div className="grid grid-cols-12 gap-4 p-5">
                <dt className="col-span-12 sm:col-span-3 text-gray-500">代表者</dt>
                <dd className="col-span-12 sm:col-span-9 text-gray-900">
                  <p>代表取締役社長：田路 裕之</p>
                  <p>代表取締役会長：田路 享三</p>
                </dd>
              </div>
              <div className="grid grid-cols-12 gap-4 p-5">
                <dt className="col-span-12 sm:col-span-3 text-gray-500">所在地</dt>
                <dd className="col-span-12 sm:col-span-9">
                  <p className="text-gray-900 font-medium">
                    〒670-0935 兵庫県姫路市北条口1丁目59番地
                  </p>
                </dd>
              </div>
              <div className="grid grid-cols-12 gap-4 p-5">
                <dt className="col-span-12 sm:col-span-3 text-gray-500">連絡先</dt>
                <dd className="col-span-12 sm:col-span-9 text-gray-900">
                  <p>TEL：<a className="underline decoration-dotted underline-offset-2" href="tel:0792810671">079-281-0671</a></p>
                  <p>FAX：079-224-1870</p>
                  <p>阿保倉庫：兵庫県姫路市阿保甲403番地（TEL：079-282-0164）</p>
                </dd>
              </div>
              <div className="grid grid-cols-12 gap-4 p-5">
                <dt className="col-span-12 sm:col-span-3 text-gray-500">創業</dt>
                <dd className="col-span-12 sm:col-span-9 text-gray-900">1933年（昭和8年）4月10日</dd>
              </div>
              <div className="grid grid-cols-12 gap-4 p-5">
                <dt className="col-span-12 sm:col-span-3 text-gray-500">資本金 / 従業員</dt>
                <dd className="col-span-12 sm:col-span-9 text-gray-900">
                  <p>資本金：1,000万円</p>
                  <p>従業員数：男子7名・女子4名</p>
                </dd>
              </div>
              <div className="grid grid-cols-12 gap-4 p-5">
                <dt className="col-span-12 sm:col-span-3 text-gray-500">許認可</dt>
                <dd className="col-span-12 sm:col-span-9 text-gray-900">
                  薬剤師：田路 享三、田路 裕之 / 登録販売者：田路 富士子
                </dd>
              </div>
            </dl>
          </div>

          {/* 事業内容（タグ） */}
          <div className="rounded-2xl border bg-white">
            <div className="border-b p-5">
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

          {/* 沿革（縦タイムライン） */}
          <div className="rounded-2xl border bg-white">
            <div className="border-b p-5">
              <h2 className="text-xl font-bold text-gray-900">沿革</h2>
            </div>
            <ol className="relative p-6">
              {history.map((h, i) => (
                <li key={i} className="pl-6 pb-6 last:pb-0 relative">
                  <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-green-600" />
                  {i !== history.length - 1 && (
                    <span className="absolute left-[5px] top-4 bottom-0 w-px bg-gray-200" />
                  )}
                  <p className="text-sm text-gray-500">{h.date}</p>
                  <p className="text-gray-900 font-medium leading-relaxed">{h.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== 右：サイド情報 ===== */}
        <aside className="space-y-6 lg:sticky lg:top-6 self-start">
          {/* お問い合わせカード */}
          <div className="rounded-2xl border bg-green-50 p-6">
            <h3 className="text-lg font-bold text-gray-900">お問い合わせ</h3>
            <p className="text-sm text-gray-600 mt-1">
              製品・お取引に関するご相談はお気軽にどうぞ。
            </p>
            <a href="tel:0792810671" className="mt-4 block text-2xl font-extrabold text-green-700">
              079-281-0671
            </a>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium"
            >
              フォームから問い合わせる
            </Link>
          </div>

          {/* アクセス（地図は差し替え可） */}
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-bold text-gray-900">アクセス</h3>
            <p className="text-sm text-gray-600 mt-1">
              〒670-0935 兵庫県姫路市北条口1丁目59番地
            </p>
            <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg border">

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

          {/* 会社ポリシー */}
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-bold text-gray-900">ポリシー</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li>・品質と安全の最優先</li>
              <li>・法令遵守と適正管理</li>
              <li>・地域とともに持続的成長</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
