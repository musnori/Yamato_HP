import React from "react";

type Strength = {
  title: string;
  desc: string;
  img: string;
  to?: string;
};

const ITEMS: Strength[] = [
  {
    title: "企業情報",
    desc: "会社概要・沿革・拠点・許認可などの基本情報。",
    img: "/hero/company.jpg",
    to: "/company",
  },
  {
    title: "当社の強み",
    desc: "90年以上の実績、迅速な納品体制、品質管理、サポート。",
    img: "/hero/lab.jpg",
    to: "/#strengths",
  },
  {
    title: "サステナビリティ",
    desc: "環境負荷低減・安全対策・地域連携への取り組み。",
    img: "/hero/earth.jpg",
    to: "/sustainability",
  },
];

export default function StrengthsShowcase() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((s) => {
            const Card = (
              <div
                className="relative h-[260px] rounded-2xl overflow-hidden group"
                style={{
                  backgroundImage: `url('${s.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-white/90 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-3">
                    <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-white/90 text-gray-900">›</span>
                  </div>
                </div>
              </div>
            );
            return s.to ? (
              <a key={s.title} href={s.to} className="block">
                {Card}
              </a>
            ) : (
              <div key={s.title}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
