import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, FileText } from "lucide-react";

// ページ末尾のお問い合わせ帯（電話番号＋フォームへの2ボタン）
export default function ContactBand({
  title = "お見積り・ご相談はお気軽に",
  text = "「どの薬品を選べばよいか分からない」といった段階からご相談いただけます。",
  subject,
}) {
  const quoteTo = subject ? `/contact?subject=${subject}` : "/contact?subject=見積依頼";
  return (
    <section className="bg-brand text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 md:flex md:items-center md:justify-between gap-8">
        <div>
          <h2 className="font-serif text-xl md:text-2xl font-bold tracking-normal">{title}</h2>
          <p className="mt-2 text-sm text-white/85">{text}</p>
          <a href="tel:0792810671" className="mt-4 inline-flex flex-wrap items-baseline gap-x-2 text-white">
            <Phone size={18} className="self-center" />
            <span className="text-2xl md:text-[1.7rem] font-bold tabular-nums tracking-wide">079-281-0671</span>
            <span className="text-xs text-white/80">受付時間 9:00〜17:00</span>
          </a>
        </div>
        <div className="mt-5 md:mt-0 grid grid-cols-2 gap-2 md:w-[22rem] shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded px-3 py-3 text-sm font-bold bg-white text-brand hover:bg-brand-light"
          >
            <Mail size={17} strokeWidth={1.75} />
            お問い合わせ
          </Link>
          <Link
            to={quoteTo}
            className="inline-flex items-center justify-center gap-1.5 rounded px-3 py-3 text-sm font-bold border border-white/70 text-white hover:bg-white/10"
          >
            <FileText size={17} strokeWidth={1.75} />
            見積依頼
          </Link>
        </div>
      </div>
    </section>
  );
}
