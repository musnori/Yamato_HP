import React, { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TOPICS = ["お見積りについて", "取扱製品について", "回収・処分について", "その他"];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const subject = searchParams.get("subject") || "";
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    tel: "",
    topic: "選択してください",
    message: subject ? `相談内容：${subject}\n` : "",
    productName: "",
    productUse: "",
    quantity: "",
    timeline: "",
    consent: false,
  });
  const [touched, setTouched] = useState({});

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const errors = useMemo(() => {
    const next = {};
    if (!form.company && !form.name) {
      next.name = "会社名または氏名を入力してください。";
    }
    if (!form.email) {
      next.email = "メールアドレスを入力してください。";
    } else if (!/\\S+@\\S+\\.\\S+/.test(form.email)) {
      next.email = "メールアドレスの形式が正しくありません。";
    }
    if (!form.message) {
      next.message = "お問い合わせ内容を入力してください。";
    }
    if (!form.consent) {
      next.consent = "内容をご確認の上チェックを入れてください。";
    }
    return next;
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      message: true,
      consent: true,
    });
    if (Object.keys(errors).length > 0) return;
    navigate("/contact/thanks");
  };

  return (
    <div className="bg-slate-50">
      <section className="border-b bg-white">
        <div className="layout-container py-10">
          <p className="section-title">CONTACT</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            見積・相談フォーム
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            製品・お取引のご相談やお見積り依頼はこちらからお願いします。※毒劇物の販売は法人様のみのご対応です。
          </p>
        </div>
      </section>

      <div className="layout-container py-10 grid gap-8 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-6">
          <div className="card p-6 bg-gradient-to-br from-green-50 to-white border border-green-200">
            <h2 className="text-lg font-bold text-gray-900">お電話でのお問い合わせ</h2>
            <p className="text-sm text-gray-600 mt-1">受付時間 9:00〜17:00</p>
            <a href="tel:0792810671" className="mt-4 block text-2xl font-extrabold text-green-700">
              079-281-0671
            </a>
            <p className="mt-2 text-xs text-gray-500">FAX：079-224-1870</p>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-bold text-gray-900">ご相談例</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {["取扱製品の見積依頼", "用途に合った薬品の選定", "回収・処分のご相談"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="card overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 font-bold text-lg">
            フォーム入力
          </div>

          <div className="px-6 py-4 text-sm leading-relaxed text-gray-700 border-b border-slate-200">
            <p className="text-green-700 font-semibold">
              大和薬品株式会社へのお問い合わせは以下フォームよりお願いいたします。
            </p>
            <p className="mt-1">
              些細なご質問でもお気軽にご相談ください。※毒劇物の販売は法人様に限ります。
            </p>
            <p className="mt-1 text-gray-600">※が付いた項目は必須です。</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white">
            <div className="divide-y">
              <Row
                label="会社名"
                input={<Input name="company" value={form.company} onChange={onChange} placeholder="（法人の場合）" />}
              />
              <Row
                label="氏名（会社名が未入力の場合）"
                input={
                  <>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      onBlur={() => setTouched({ ...touched, name: true })}
                    />
                    {touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
                  </>
                }
              />
              <Row
                label="メールアドレス※"
                input={
                  <>
                    <Input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      onBlur={() => setTouched({ ...touched, email: true })}
                    />
                    {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
                  </>
                }
              />
              <Row
                label="電話番号"
                input={<Input type="tel" name="tel" value={form.tel} onChange={onChange} placeholder="任意" />}
              />
              <Row
                label="お問い合わせ項目"
                input={
                  <Select
                    name="topic"
                    value={form.topic}
                    onChange={onChange}
                    options={["選択してください", ...TOPICS]}
                  />
                }
              />
              <Row
                label="お問い合わせ詳細※"
                input={
                  <>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      onBlur={() => setTouched({ ...touched, message: true })}
                      rows={6}
                      placeholder="用途やご希望、相談内容をご記入ください。"
                    />
                    {touched.message && errors.message && <ErrorText>{errors.message}</ErrorText>}
                  </>
                }
              />
            </div>

            <div className="border-t border-slate-200 px-6 py-5 space-y-4 bg-slate-50">
              <p className="text-sm font-semibold text-slate-700">製品について（任意）</p>
              <div className="grid gap-4 md:grid-cols-2">
                <Input name="productName" value={form.productName} onChange={onChange} placeholder="製品名" />
                <Input name="productUse" value={form.productUse} onChange={onChange} placeholder="用途" />
                <Input name="quantity" value={form.quantity} onChange={onChange} placeholder="希望数量" />
                <Input name="timeline" value={form.timeline} onChange={onChange} placeholder="希望納期" />
              </div>
            </div>

            <div className="px-6 py-6 space-y-4">
              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={onChange}
                  onBlur={() => setTouched({ ...touched, consent: true })}
                  className="mt-1"
                />
                内容を確認しました（送信前に入力内容をご確認ください）。
              </label>
              {touched.consent && errors.consent && <ErrorText>{errors.consent}</ErrorText>}
              <button type="submit" className="btn-primary w-full md:w-auto px-8 py-3">
                送信する
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
      className={`input-field ${className}`}
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`textarea-field resize-y ${className}`}
    />
  );
}

function Select({ options, className = "", ...props }) {
  return (
    <select
      {...props}
      className={`select-field ${className}`}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

function ErrorText({ children }) {
  return <p className="mt-2 text-xs text-red-600">{children}</p>;
}
