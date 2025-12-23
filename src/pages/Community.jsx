import React from "react";
import { Link } from "react-router-dom";

export default function Community() {
  const items = [
    {
      title: "社長ブログ",
      description: "代表メッセージや日々の気づきをブログで発信しています。",
      to: "http://blog.yamato-chemi.co.jp/",
      tag: "BLOG",
      bg: "/images/president-blog-bg.png", // 元の画像に合わせて変更
      external: true,
    },
    {
      title: "西兵庫化学薬品協同組合",
      description: "地域の化学薬品供給を支える連携についてご紹介します。",
      to: "https://nishihyogo-chemical-coop.com/",
      tag: "ASSOCIATION",
      bg: "/images/coop-bg.png", // 元の画像に合わせて変更
      external: true,
    },
    {
      title: "懐かしコレクション",
      description: "昭和レトロのコレクションを写真とともに掲載しています。",
      to: "/collection",
      tag: "ARCHIVE",
      bg: "/images/banner.jpg",
      external: false,
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
          {items.map((item) => {
            const Card = (
              <div
                className="relative rounded-xl shadow-lg overflow-hidden group h-64 flex flex-col justify-end p-5 text-white transition hover:-translate-y-1"
                style={{
                  backgroundImage: `url('${item.bg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <div className="relative z-10">
                  <span className="inline-block mb-2 text-xs font-bold tracking-widest text-green-300">
                    {item.tag}
                  </span>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="mt-1 text-sm text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 text-sm font-semibold text-green-200">
                    詳しく見る →
                  </div>
                </div>
              </div>
            );

            return item.external ? (
              <a
                key={item.title}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Card}
              </a>
            ) : (
              <Link key={item.title} to={item.to}>
                {Card}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
