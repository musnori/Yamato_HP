import React from "react";
import { Link } from "react-router-dom";

export default function Community() {
  const items = [
    {
      title: "社長ブログ",
      description: "代表メッセージや日々の気づきをまとめた読み物です。",
      to: "/president-blog",
      tag: "BLOG",
    },
    {
      title: "西兵庫化学薬品協同組合",
      description: "地域の化学薬品供給を支える連携についてご紹介します。",
      to: "/association",
      tag: "ASSOCIATION",
    },
    {
      title: "懐かしコレクション",
      description: "昭和レトロのコレクションを写真とともに掲載しています。",
      to: "/collection",
      tag: "ARCHIVE",
    },
  ];

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-[url('/morninng.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative layout-container py-14">
          <p className="section-title">COMMUNITY</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            関連コンテンツ
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            社長ブログや地域連携の取り組み、懐かしコレクションなど、
            大和薬品の周辺ストーリーをまとめています。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="layout-container grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link key={item.title} to={item.to} className="card p-6 hover:-translate-y-1 transition">
              <span className="tag">{item.tag}</span>
              <h2 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              <div className="mt-4 text-sm font-semibold text-green-700">
                詳しく見る →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
