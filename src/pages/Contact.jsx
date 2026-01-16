import React, { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { BreadcrumbSchema } from "../components/StructuredData";
// アイコン (lucide-react)
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  AlertTriangle,
  Send,
  HelpCircle
} from "lucide-react";

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

      <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
       {/* =======================
           Header Section
       ======================== */}
      <section className="bg-white border-b border-slate-200">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
          <div className="relative max-w-4xl mx-auto px-4 py-10 md:py-12 lg:py-14 text-center">
            <p className="text-emerald-600 font-bold tracking-widest text-sm mb-2">CONTACT</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              見積・相談フォーム
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              製品の在庫確認、お見積り、技術的なご相談など、お気軽にお問い合わせください。<br className="hidden md:inline" />
              専門スタッフが迅速に対応いたします。
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 lg:grid-cols-[1fr_2.5fr] items-start">
        
        {/* =======================
            Sidebar (Contact Info)
        ======================== */}
        <aside className="space-y-6">
          {/* 電話番号カード */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Phone size={64} className="text-emerald-900" />
            </div>
            <h2 className="text-sm font-bold text-slate-400 mb-1 flex items-center gap-2">
              <Phone size={16} /> お電話でのお問い合わせ
            </h2>
            <p className="text-xs text-slate-500 mb-4">平日 9:00〜17:00</p>
            <a href="tel:0792810671" className="block text-2xl font-extrabold text-emerald-700 hover:text-emerald-800 transition-colors tracking-tight">
              079-281-0671
            </a>
            <p className="mt-2 text-xs text-slate-400 font-mono">FAX：079-224-1870</p>
          </div>

          {/* ご相談例カード */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h2 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
              <HelpCircle size={18} className="text-emerald-500" /> よくあるご相談
            </h2>
            <ul className="space-y-3">
              {[
                "取扱製品の在庫・納期確認",
                "用途に合った薬品の選定相談",
                "不要薬品の回収・処分見積",
                "SDS（安全データシート）の依頼"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 注意書き */}
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 text-amber-900/80 text-xs leading-relaxed flex gap-3">
             <AlertTriangle size={20} className="shrink-0 text-amber-500" />
             <p>毒物・劇物の一般の方への販売は法律で禁止されています。法人様のみへの販売となりますのでご了承ください。</p>
          </div>
        </aside>

        {/* =======================
            Main Form
        ======================== */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          {/* Form Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
            <Mail className="text-emerald-600" size={20} />
            <h2 className="font-bold text-slate-800">お問い合わせ入力</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="divide-y divide-slate-100">
              
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
              <div className="bg-slate-50/50">
                <div className="px-6 py-4 border-b border-slate-100">
                  <p className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MessageSquare size={16} className="text-slate-400" />
                    具体的な製品のご相談（任意）
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    すでにご希望の製品がある場合は、詳細をご記入いただくとスムーズです。
                  </p>
                </div>
                <div className="p-6 grid gap-4 md:grid-cols-2">
                   <div>
                     <label className="text-xs font-bold text-slate-500 mb-1 block">製品名・物質名</label>
                     <Input name="productName" value={form.productName} onChange={onChange} placeholder="例：塩酸、次亜塩素酸ソーダ" />
                   </div>
                   <div>
                     <label className="text-xs font-bold text-slate-500 mb-1 block">使用用途</label>
                     <Input name="productUse" value={form.productUse} onChange={onChange} placeholder="例：工場の排水処理" />
                   </div>
                   <div>
                     <label className="text-xs font-bold text-slate-500 mb-1 block">希望数量</label>
                     <Input name="quantity" value={form.quantity} onChange={onChange} placeholder="例：20kg × 5缶" />
                   </div>
                   <div>
                     <label className="text-xs font-bold text-slate-500 mb-1 block">希望納期</label>
                     <Input name="timeline" value={form.timeline} onChange={onChange} placeholder="例：来週中、特になし" />
                   </div>
                </div>
              </div>
            </div>

            {/* 送信エリア */}
            <div className="px-6 py-8 bg-white border-t border-slate-200">
              <div className="max-w-xl mx-auto space-y-6 text-center">
                <label className="flex items-start justify-center gap-3 text-sm text-slate-600 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={onChange}
                      onBlur={() => setTouched({ ...touched, consent: true })}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow-sm checked:border-emerald-500 checked:bg-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                    <CheckCircle2 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" size={14} />
                  </div>
                  <span className="group-hover:text-slate-900 transition-colors pt-0.5">
                    入力内容を確認しました
                  </span>
                </label>
                
                {touched.consent && errors.consent && (
                  <p className="text-sm font-bold text-red-500 bg-red-50 py-2 px-4 rounded-lg inline-block">
                    {errors.consent}
                  </p>
                )}

                {submitError && (
                  <div className="text-sm font-bold text-red-600 bg-red-50 py-3 px-4 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={16} />
                      <span>{submitError}</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-[240px] mx-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-lg"
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
                <p className="text-xs text-slate-400">
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
function Row({ label, subLabel, input, required = false }) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
      <div className="px-6 py-4 md:py-6 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2">
        <label className="text-sm font-bold text-slate-700 group-hover:text-emerald-800 transition-colors">
          {label}
        </label>
        <div className="flex items-center gap-2">
          {required ? (
            <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-red-100 text-red-600 rounded">
              必須
            </span>
          ) : (
             <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-slate-100 text-slate-500 rounded">
               任意
             </span>
          )}
        </div>
      </div>
      <div className="px-6 pb-6 pt-0 md:py-6">
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
      className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300
        ${error 
          ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
          : "border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 hover:border-emerald-300"
        } ${className}`}
    />
  );
}

// Textarea Field
function Textarea({ className = "", error, ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300 resize-y
        ${error 
          ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
          : "border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 hover:border-emerald-300"
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
        className={`w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 hover:border-emerald-300 cursor-pointer ${className}`}
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
    <p className="mt-2 text-xs font-bold text-red-600 flex items-center gap-1 animate-pulse">
      <AlertTriangle size={12} />
      {children}
    </p>
  );
}