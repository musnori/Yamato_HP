import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// 下層ページ共通の見出し。パンくず＋明朝体のタイトル＋短い説明文だけの控えめな構成。
// crumbs: [{ name, to? }]（「ホーム」は自動で先頭に付く）
export default function PageHeader({ title, lead, crumbs = [], children }) {
  const items = [{ name: "ホーム", to: "/" }, ...(crumbs.length ? crumbs : [{ name: title }])];

  return (
    <section className="bg-brand-light border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-6 md:pt-4 md:pb-9">
        <nav aria-label="パンくずリスト" className="text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-1">
            {items.map((c, i) => (
              <li key={c.name} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={12} className="text-slate-400" />}
                {c.to && i < items.length - 1 ? (
                  <Link to={c.to} className="hover:text-brand hover:underline">
                    {c.name}
                  </Link>
                ) : (
                  <span className="text-slate-600">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-4 md:mt-6 flex items-center gap-3 font-serif text-2xl md:text-[2rem] font-bold text-slate-900 leading-snug tracking-normal">
          <span aria-hidden className="block w-7 h-[3px] bg-brand shrink-0" />
          {title}
        </h1>
        {lead && <p className="mt-3 max-w-3xl text-sm md:text-[15px] leading-relaxed text-slate-700">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
