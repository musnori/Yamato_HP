import React from "react";
import { Link } from "react-router-dom";

type ProductCard = {
  logo: string;
  title: string;
  desc: string;
  to: string;
  accent: "yellow" | "orange" | "green";
};

const CARDS: ProductCard[] = [
  {
    logo: "/brand/biobran.png",
    title: "水処理用薬品",
    desc: "プール・温浴施設・工場排水の衛生を守る定番ラインナップ。",
    to: "/products#water",
    accent: "yellow",
  },
  {
    logo: "/brand/nkcp.png",
    title: "試薬・研究用",
    desc: "教育・研究・検査の現場へ。用途別に選びやすくご提案。",
    to: "/products#reagents",
    accent: "orange",
  },
  {
    logo: "/brand/keifiran.png",
    title: "工業用・医薬品関連",
    desc: "製造現場を支える工業薬品と、法令順守の医薬品関連供給。",
    to: "/products#industrial",
    accent: "green",
  },
];

const accentClass = {
  yellow: "bg-emerald-600/90",
  orange: "bg-lime-600/90",
  green: "bg-green-700/90",
};

export default function ProductsShowcase() {
  return (
    <section className="bg-green-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
          製品情報
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
              <div className="h-44 grid place-items-center p-6">
                <img src={c.logo} alt={c.title} className="max-h-24 object-contain" loading="lazy" />
              </div>
              <div className={`${accentClass[c.accent]} text-white p-6`}>
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="mt-3 leading-relaxed">{c.desc}</p>
                <div className="mt-5">
                  <Link to={c.to} className="inline-flex items-center justify-center w-full md:w-auto rounded-full bg-white/95 hover:bg-white text-gray-900 font-semibold px-6 py-3 transition">
                    くわしく見る <span className="ml-2">›</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/products" className="inline-flex items-center px-6 py-3 rounded-lg bg-green-700 hover:bg-green-800 text-white font-semibold shadow">
            すべての製品を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
