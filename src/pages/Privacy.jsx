import React from "react";
import PageHeader from "../components/PageHeader";
import SEOHead from "../components/SEOHead";

const items = [
  {
    title: "1. 個人情報の利用目的",
    text: "お問い合わせへの対応、製品・サービスの提案、必要なご連絡のために利用します。",
  },
  {
    title: "2. 個人情報の管理",
    text: "個人情報の漏えい・紛失・改ざんを防止するため適切な管理を行います。",
  },
  {
    title: "3. 第三者提供",
    text: "法令に基づく場合を除き、ご本人の同意なく第三者へ提供しません。",
  },
  {
    title: "4. お問い合わせ",
    text: "個人情報に関するお問い合わせはお電話（079-281-0671）にて承ります。",
  },
];

export default function Privacy() {
  return (
    <>
      <SEOHead pageKey="privacy" />
      <PageHeader title="プライバシーポリシー" lead="大和薬品株式会社は、お客様の個人情報を適切に取り扱います。" />
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-3xl space-y-6">
            {items.map((item) => (
              <section key={item.title}>
                <h2 className="border-b border-slate-200 pb-2 text-base md:text-lg font-bold text-slate-900 tracking-normal">
                  {item.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{item.text}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
