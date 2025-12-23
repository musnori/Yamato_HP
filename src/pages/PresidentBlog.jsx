import React from "react";

export default function PresidentBlog() {
  const posts = [
    {
      date: "2025.07.15",
      title: "地域の製造現場を支えるということ",
      summary:
        "お客様の現場を守るために、私たちが日々大切にしていることをまとめました。",
    },
    {
      date: "2025.06.02",
      title: "安全と品質の両立に向けて",
      summary:
        "法令順守と現場対応を両立させるための体制づくりについてお話しします。",
    },
    {
      date: "2025.04.18",
      title: "次の世代へつなぐ取り組み",
      summary:
        "地域に根ざした企業として、次世代育成への思いを綴っています。",
    },
  ];

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-[url('/morninng.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative layout-container py-14">
          <p className="section-title">BLOG</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            社長ブログ
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            大和薬品の取り組みや地域への思いを、代表の言葉でお届けします。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="layout-container grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            {posts.map((post) => (
              <article key={post.title} className="card p-6">
                <p className="text-sm text-green-700 font-semibold">{post.date}</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">{post.title}</h2>
                <p className="mt-3 text-sm text-slate-600">{post.summary}</p>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="card p-6 bg-white">
              <h3 className="text-lg font-bold text-slate-900">メッセージ</h3>
              <p className="mt-3 text-sm text-slate-600">
                地域に根ざした化学薬品のパートナーとして、安心してご相談いただける
                体制づくりを続けています。日々の気づきや取り組みをブログとして発信してまいります。
              </p>
            </div>
            <div className="card p-6 bg-green-50 border border-green-100">
              <p className="text-sm font-semibold text-green-700">最新情報のご案内</p>
              <p className="mt-2 text-sm text-slate-700">
                製品情報や会社からのお知らせはお問い合わせフォームからもご相談ください。
              </p>
              <a
                href="tel:0792810671"
                className="mt-4 block text-2xl font-extrabold text-green-700"
              >
                079-281-0671
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
