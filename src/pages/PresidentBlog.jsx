import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import ContactBand from "../components/ContactBand";

const posts = [
  {
    date: "2025.07.15",
    title: "地域の製造現場を支えるということ",
    summary: "お客様の現場を守るために、私たちが日々大切にしていることをまとめました。",
  },
  {
    date: "2025.06.02",
    title: "安全と品質の両立に向けて",
    summary: "法令順守と現場対応を両立させるための体制づくりについてお話しします。",
  },
  {
    date: "2025.04.18",
    title: "次の世代へつなぐ取り組み",
    summary: "地域に根ざした企業として、次世代育成への思いを綴っています。",
  },
];

export default function PresidentBlog() {
  return (
    <>
      <PageHeader title="社長ブログ" lead="大和薬品の取り組みや地域への思いを、代表の言葉でお届けします。" />
      <div className="bg-white">
        <Section title="メッセージ">
          <p className="max-w-3xl text-[15px] leading-[1.9] text-slate-700">
            地域に根ざした化学薬品のパートナーとして、安心してご相談いただける体制づくりを続けています。日々の気づきや取り組みをブログとして発信してまいります。
          </p>
        </Section>
        <Section title="記事一覧" className="pt-0 md:pt-0">
          <ul className="border-t border-slate-200">
            {posts.map((post) => (
              <li key={post.title} className="border-b border-slate-200 py-4">
                <p className="text-[13px] tabular-nums text-slate-500">{post.date}</p>
                <h3 className="mt-1 text-base md:text-lg font-bold text-slate-900 tracking-normal">{post.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{post.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
        <ContactBand />
      </div>
    </>
  );
}
