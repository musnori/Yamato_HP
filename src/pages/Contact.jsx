import React, { useState, useMemo } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";
import { BreadcrumbSchema } from "../components/StructuredData";
// アイコン (lucide-react)
import { Phone, Mail, Check, AlertTriangle, Send } from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

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
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      message: true,
      consent: true,
    });
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'メール送信に失敗しました');
      }

      navigate("/contact/thanks");
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitError(error.message || 'メール送信に失敗しました。しばらくしてから再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead pageKey="contact" />
      <BreadcrumbSchema items={[{ name: "ホーム", url: "/" }, { name: "お問い合わせ" }]} />

      <PageHeader
        title="見積・相談フォーム"
        lead="製品の在庫確認、お見積り、取り扱いのご相談など、お気軽にお問い合わせください。内容を確認のうえ、担当者よりご連絡いたします。"
      />

      <div className="bg-white text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid gap-8 lg:grid-cols-[17rem_1fr] items-start">

        {/* お電話・ご案内 */}
        <aside className="space-y-5 text-sm lg:sticky lg:top-24">
          <div className="border-t-2 border-brand pt-3">
            <h2 className="text-base font-bold text-slate-900 tracking-normal">お電話でのお問い合わせ</h2>
            <a href="tel:0792810671" className="mt-1 inline-flex items-center gap-2 text-2xl font-bold text-brand tabular-nums hover:underline">
              <Phone size={20} />
              079-281-0671
            </a>
            <p className="mt-1 text-xs text-slate-600">受付時間 平日 9:00〜17:00 ／ FAX 079-224-1870</p>
          </div>

          <div className="hidden lg:block border-t border-slate-200 pt-3">
            <h2 className="text-base font-bold text-slate-900 tracking-normal">よくあるご相談</h2>
            <ul className="mt-2 space-y-1.5 text-slate-700">
              {[
                "取扱製品の在庫・納期確認",
                "用途に合った薬品の選定相談",
                "不要薬品の回収・処分見積",
                "SDS（安全データシート）の依頼",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={15} className="text-brand mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="flex gap-2 border-l-4 border-amber-400 bg-amber-50 px-3 py-2.5 text-xs leading-relaxed text-amber-900">
            <AlertTriangle size={16} className="shrink-0 text-amber-500 mt-0.5" />
            毒物・劇物の一般の方への販売は法律で禁止されています。法人様のみへの販売となりますのでご了承ください。
          </p>
        </aside>

        {/* フォーム */}
        <div className="border border-slate-300">
          <div className="bg-slate-50 border-b border-slate-300 px-4 md:px-6 py-3 flex items-center gap-2">
            <Mail className="text-brand" size={18} />
            <h2 className="text-base font-bold text-slate-900 tracking-normal">お問い合わせ内容の入力</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="divide-y divide-slate-200">
              
              {/* 基本情報エリア */}
              <div className="bg-white">
                <Row
                  label="会社名"
                  subLabel="法人の場合"
                  input={<Input name="company" value={form.company} onChange={onChange} placeholder="例：大和薬品株式会社" />}
                />
                <Row
                  label="氏名"
                  subLabel="必須"
                  required
                  input={
                    <>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        onBlur={() => setTouched({ ...touched, name: true })}
                        placeholder="例：山田 太郎"
                        error={touched.name && errors.name}
                      />
                      {touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
                    </>
                  }
                />
                <Row
                  label="メールアドレス"
                  subLabel="必須"
                  required
                  input={
                    <>
                      <Input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        onBlur={() => setTouched({ ...touched, email: true })}
                        placeholder="例：info@yamato-chem.co.jp"
                        error={touched.email && errors.email}
                      />
                      {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
                    </>
                  }
                />
                <Row
                  label="電話番号"
                  subLabel="任意"
                  input={<Input type="tel" name="tel" value={form.tel} onChange={onChange} placeholder="例：079-281-0671" />}
                />
                <Row
                  label="お問い合わせ項目"
                  subLabel="必須"
                  required
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
                  label="お問い合わせ内容"
                  subLabel="必須"
                  required
                  input={
                    <>
                      <Textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        onBlur={() => setTouched({ ...touched, message: true })}
                        rows={6}
                        placeholder="ご希望の製品名、用途、お困りの点などを詳しくご記入ください。"
                        error={touched.message && errors.message}
                      />
                      {touched.message && errors.message && <ErrorText>{errors.message}</ErrorText>}
                    </>
                  }
                />
              </div>

              {/* 製品詳細（任意エリア） */}
              <div className="bg-slate-50">
                <div className="px-4 md:px-6 py-3 border-b border-slate-200">
                  <p className="text-sm font-bold text-slate-900">
                    具体的な製品のご相談（任意）
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    すでにご希望の製品がある場合は、詳細をご記入いただくとスムーズです。
                  </p>
                </div>
                <div className="px-4 py-4 md:p-6 grid gap-4 md:grid-cols-2">
                   <div>
                     <label className="text-xs font-bold text-slate-700 mb-1 block">製品名・物質名</label>
                     <Input name="productName" value={form.productName} onChange={onChange} placeholder="例：塩酸、次亜塩素酸ソーダ" />
                   </div>
                   <div>
                     <label className="text-xs font-bold text-slate-700 mb-1 block">使用用途</label>
                     <Input name="productUse" value={form.productUse} onChange={onChange} placeholder="例：工場の排水処理" />
                   </div>
                   <div>
                     <label className="text-xs font-bold text-slate-700 mb-1 block">希望数量</label>
                     <Input name="quantity" value={form.quantity} onChange={onChange} placeholder="例：20kg × 5缶" />
                   </div>
                   <div>
                     <label className="text-xs font-bold text-slate-700 mb-1 block">希望納期</label>
                     <Input name="timeline" value={form.timeline} onChange={onChange} placeholder="例：来週中、特になし" />
                   </div>
                </div>
              </div>
            </div>

            {/* 送信エリア */}
            <div className="px-4 md:px-6 py-6 md:py-8 bg-white border-t border-slate-200">
              <div className="max-w-xl mx-auto space-y-5 text-center">
                <label className="flex items-start justify-center gap-3 text-sm text-slate-600 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={onChange}
                      onBlur={() => setTouched({ ...touched, consent: true })}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-sm border border-slate-400 checked:border-brand checked:bg-brand focus:ring-2 focus:ring-brand/30"
                    />
                    <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" size={14} />
                  </div>
                  <span className="group-hover:text-slate-900 transition-colors pt-0.5">
                    入力内容を確認しました（<Link to="/privacy" className="text-brand underline underline-offset-2">プライバシーポリシー</Link>に同意のうえ送信します）
                  </span>
                </label>
                
                {touched.consent && errors.consent && (
                  <p className="text-sm font-bold text-red-600 bg-red-50 py-2 px-4 inline-block">
                    {errors.consent}
                  </p>
                )}

                {submitError && (
                  <div className="text-sm font-bold text-red-600 bg-red-50 py-3 px-4 border border-red-200">
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={16} />
                      <span>{submitError}</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-[240px] mx-auto px-8 py-3.5 bg-brand hover:bg-brand-dark disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold rounded transition-colors flex items-center justify-center gap-2 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      送信する
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-500">
                  お客様の情報はプライバシーポリシーに基づき厳重に管理いたします。
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

/* =========================================
   UI Components (Modernized)
========================================= */

// 表形式の行コンポーネント（レスポンシブ対応）
function Row({ label, input, required = false }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[13rem_1fr] border-b border-slate-200 last:border-0">
      <div className="px-4 md:px-6 pt-4 pb-2 md:py-5 md:bg-slate-50 flex items-center md:items-start justify-start gap-2">
        <label className="text-sm font-bold text-slate-900">
          {label}
        </label>
        <div className="flex items-center gap-2">
          {required ? (
            <span className="inline-block px-1.5 py-px text-[10px] font-bold bg-red-600 text-white">
              必須
            </span>
          ) : (
             <span className="inline-block px-1.5 py-px text-[10px] font-bold border border-slate-300 text-slate-500">
               任意
             </span>
          )}
        </div>
      </div>
      <div className="px-4 md:px-6 pb-4 pt-0 md:py-5">
        {input}
      </div>
    </div>
  );
}

// Input Field
function Input({ className = "", error, ...props }) {
  return (
    <input
      {...props}
      className={`w-full rounded border bg-white px-3 py-2.5 text-[15px] outline-none transition-colors placeholder:text-slate-400
        ${error 
          ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100" 
          : "border-slate-300 focus:border-brand focus:ring-2 focus:ring-brand/20"
        } ${className}`}
    />
  );
}

// Textarea Field
function Textarea({ className = "", error, ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full rounded border bg-white px-3 py-2.5 text-[15px] outline-none transition-colors placeholder:text-slate-400 resize-y
        ${error 
          ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100" 
          : "border-slate-300 focus:border-brand focus:ring-2 focus:ring-brand/20"
        } ${className}`}
    />
  );
}

// Select Field
function Select({ options, className = "", ...props }) {
  return (
    <div className="relative">
      <select
        {...props}
        className={`w-full appearance-none rounded border border-slate-300 bg-white px-3 py-2.5 text-[15px] outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer ${className}`}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// Error Message
function ErrorText({ children }) {
  return (
    <p className="mt-2 text-xs font-bold text-red-600 flex items-center gap-1">
      <AlertTriangle size={12} />
      {children}
    </p>
  );
}