import React, { useState } from "react";

const PREFS = [
  "選択してください","北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県",
];

const TOPICS = [
  "選択してください",
  "お見積りについて",
  "取扱製品について",
  "採用について",
  "その他のお問い合わせ",
];

export default function Contact() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    tel: "",
    pref: "選択してください",
    address2: "",
    topic: "選択してください",
    message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("内容を送信しました（デモ）\n実装時はメール送信やAPI連携を追加してください。");
  };

  return (
    <div className="bg-slate-50">
      <section className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <p className="text-sm font-semibold text-green-700 tracking-[0.3em]">CONTACT</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            お問い合わせ・ご注文フォーム
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            製品・お取引のご相談やお見積り依頼はこちらからお願いします。※毒劇物の販売は法人様のみのご対応です。
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-6">
          <div className="rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">お電話でのお問い合わせ</h2>
            <p className="text-sm text-gray-600 mt-1">受付時間 9:00〜17:00</p>
            <a href="tel:0792810671" className="mt-4 block text-2xl font-extrabold text-green-700">
              079-281-0671
            </a>
            <p className="mt-2 text-xs text-gray-500">FAX：079-224-1870</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">ご相談例</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                取扱製品の見積依頼
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                用途に合った薬品の選定
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                回収・処分のご相談
              </li>
            </ul>
          </div>
        </aside>

        {/* ヘッダー帯 */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 font-bold text-lg">
            フォーム入力
          </div>

          {/* リード文 */}
          <div className="px-6 py-4 text-sm leading-relaxed text-gray-700 border-b border-slate-200">
            <p className="text-green-700 font-semibold">
              大和薬品株式会社へのお問い合わせは以下フォームよりお願いいたします。
            </p>
            <p className="mt-1">
              些細なご質問でもお気軽にご相談ください。※お毒劇物の販売は法人様に限ります（個人の方への販売は行っておりません）。
            </p>
            <p className="mt-1 text-gray-600">※が付いた項目は必須です。</p>
          </div>

          {/* 入力エリア（表風レイアウト） */}
          <form onSubmit={handleSubmit} className="bg-white">
            <div className="divide-y">
              <Row
                label="お名前※"
                required
                input={
                  <Input name="name" value={form.name} onChange={onChange} required />
                }
              />
              <Row
                label="会社名"
                input={<Input name="company" value={form.company} onChange={onChange} placeholder="（任意）" />}
              />
              <Row
                label="メールアドレス※"
                required
                input={
                  <Input type="email" name="email" value={form.email} onChange={onChange} required />
                }
              />
              <Row
                label="電話番号"
                input={<Input type="tel" name="tel" value={form.tel} onChange={onChange} placeholder="半角数字" />}
              />
              <Row
                label="ご住所（都道府県）"
                input={
                  <Select name="pref" value={form.pref} onChange={onChange} options={PREFS} />
                }
              />
              <Row
                label="ご住所（市区町村以下）"
                input={<Input name="address2" value={form.address2} onChange={onChange} />}
              />
              <Row
                label="お問い合わせ項目※"
                required
                input={<Select name="topic" value={form.topic} onChange={onChange} options={TOPICS} required />}
              />
              <Row
                label="お問い合わせ詳細※"
                required
                input={
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={6}
                    required
                  />
                }
              />
            </div>

            {/* 送信ボタン（確認っぽいカプセル） */}
            <div className="px-6 py-6">
              <button
                type="submit"
                className="w-full md:w-auto mx-auto block px-8 py-3 rounded-full
                           text-white font-semibold shadow-md
                           bg-gradient-to-r from-green-600 to-green-700
                           hover:from-green-700 hover:to-green-800
                           focus:outline-none focus:ring-2 focus:ring-green-600/40"
              >
                内容を確認する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ---------- サブUI（表風の左ラベル／右入力） ---------- */
function Row({ label, input, required = false }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="bg-slate-50 md:border-r border-slate-200 px-4 py-3 text-sm font-semibold text-gray-700">
        {label}
      </div>
      <div className="md:col-span-2 px-4 py-3">{input}</div>
    </div>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={
        "w-full rounded-md border border-gray-300 px-3 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-600/30 " +
        className
      }
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={
        "w-full rounded-md border border-gray-300 px-3 py-2 shadow-inner resize-y focus:outline-none focus:ring-2 focus:ring-green-600/30 " +
        className
      }
    />
  );
}

function Select({ options, className = "", ...props }) {
  return (
    <select
      {...props}
      className={
        "w-full rounded-md border border-gray-300 px-3 py-2 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-600/30 " +
        className
      }
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
