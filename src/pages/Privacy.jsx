import React from "react";

export default function Privacy() {
  return (
    <div className="bg-slate-50">
      <section className="border-b bg-white">
        <div className="layout-container py-12">
          <p className="section-title">PRIVACY POLICY</p>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">プライバシーポリシー</h1>
          <p className="mt-3 text-slate-600">
            大和薬品株式会社は、お客様の個人情報を適切に取り扱います。
          </p>
        </div>
      </section>
      <div className="layout-container py-10 space-y-6">
        {[
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
            text: "個人情報に関するお問い合わせはお電話にて承ります。",
          },
        ].map((item) => (
          <div key={item.title} className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
