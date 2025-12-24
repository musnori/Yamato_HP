import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";

export default function Community() {
  const items = [
    {
      title: "社長ブログ",
      description: "代表メッセージや日々の気づきをブログで発信しています。",
      to: "http://blog.yamato-chemi.co.jp/",
      tag: "BLOG",
      date: "随時更新",
      bg: "/images/president-blog-bg.png",
      external: true,
    },
    {
      title: "西兵庫化学薬品協同組合",
      description: "地域の化学薬品供給を支える連携についてご紹介します。",
      to: "https://nishihyogo-chemical-coop.com/",
      tag: "ASSOCIATION",
      date: "地域連携",
      bg: "/images/coop-bg.png",
      external: true,
    },
    {
      title: "懐かしコレクション",
      description: "昭和レトロのコレクションを写真とともに掲載しています。",
      to: "/collection",
      tag: "ARCHIVE",
      date: "文化活動",
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
            地域活動・関連コンテンツ
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            社長ブログや地域連携の取り組み、懐かしコレクションなど、
            大和薬品の周辺ストーリーをまとめています。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryCTA to="/contact?subject=地域活動について相談" label="相談する" />
            <PrimaryCTA to="/contact?subject=見積依頼" label="見積依頼" variant="outline" />
          </div>
        </div>
      </section>

      <Section
        eyebrow="ACTIVITY"
        title="活動一覧"
        description="活動内容をカードで整理し、信頼につながる情報へアクセスできます。"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => {
            const content = (
              <Card className="relative overflow-hidden h-full transition hover:-translate-y-1">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.bg}')` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-slate-900/55" aria-hidden="true" />
                <div className="relative z-10 flex h-full flex-col p-6 text-white">
                  <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wider text-white">
                    {item.tag}
                  </span>
                  <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
                  <p className="mt-2 text-sm text-white/85">{item.description}</p>
                  <p className="mt-4 text-xs text-white/70">更新: {item.date}</p>
                  <div className="mt-auto pt-4 text-sm font-semibold text-white">詳しく見る →</div>
                </div>
              </Card>
            );

            return item.external ? (
              <a
                key={item.title}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link key={item.title} to={item.to}>
                {content}
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="rounded-2xl border border-slate-200 bg-green-50 p-6 text-center">
          <p className="text-sm text-green-800">地域活動や会社の取り組みに関するご質問もお気軽に。</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <PrimaryCTA to="/contact?subject=地域活動について相談" label="相談する" />
            <PrimaryCTA to="/contact?subject=見積依頼" label="見積依頼" variant="outline" />
          </div>
        </div>
      </Section>
    </div>
  );
}
