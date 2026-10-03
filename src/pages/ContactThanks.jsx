import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";
import { Phone, ChevronRight } from "lucide-react";

export default function ContactThanks() {
  return (
    <>
      <SEOHead pageKey="contactThanks" />
      <PageHeader
        title="送信完了"
        crumbs={[{ name: "お問い合わせ", to: "/contact" }, { name: "送信完了" }]}
        lead="お問い合わせありがとうございます。担当より内容を確認のうえ、ご連絡いたします。"
      />
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-xl border-t-2 border-brand pt-4">
            <p className="text-sm text-slate-700">お急ぎの場合はお電話でも承っております。</p>
            <a href="tel:0792810671" className="mt-2 inline-flex items-center gap-2 text-2xl font-bold text-brand tabular-nums hover:underline">
              <Phone size={20} />
              079-281-0671
            </a>
            <p className="mt-1 text-xs text-slate-600">受付時間 9:00〜17:00</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/" className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline underline-offset-4">
                トップへ戻る <ChevronRight size={15} />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline underline-offset-4">
                取扱製品を見る <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
