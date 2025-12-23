import React from "react";
import { Link } from "react-router-dom";

export default function ContactThanks() {
  return (
    <div className="bg-slate-50">
      <section className="border-b bg-white">
        <div className="layout-container py-12">
          <p className="section-title">CONTACT</p>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">送信完了</h1>
          <p className="mt-3 text-slate-600">
            お問い合わせありがとうございます。担当より確認後ご連絡いたします。
          </p>
        </div>
      </section>
      <div className="layout-container py-10">
        <div className="card p-6">
          <p className="text-sm text-slate-600">
            緊急の場合はお電話でも承っております。
          </p>
          <a href="tel:0792810671" className="mt-3 block text-2xl font-extrabold text-green-700">
            079-281-0671
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/" className="btn-outline">トップへ戻る</Link>
            <Link to="/products" className="btn-primary">製品を探す</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
