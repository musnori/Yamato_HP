import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";

export default function Home() {
  const greetingText = [
    "昭和8年（1933年）創業以来、地域に根ざした化学品供給の専門商社として歩んでまいりました。",
    "試薬・化学工業薬品・医薬品関連など、学校・工場・研究機関・プール施設といった多様な現場に対応しています。",
    "在庫を活かした即応体制に加え、自社便・メーカー直送を組み合わせることで迅速な納品を実現します。",
    "これからも安心してお取引いただけるよう、丁寧な提案と安定供給に努めてまいります。",
  ];

  const greetingImage = "/images/souko1.jpg";

  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/morninng.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-900/40" />
        <div className="relative layout-container py-16 md:py-24">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-200">
            Yamato Pharmaceutical
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-balance">
            化学薬品・試薬・工業薬品の見積・相談を最短で。
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 text-lg leading-relaxed">
            大和薬品株式会社は、学校・工場・研究機関などの用途に合わせて薬品をご提案。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryCTA
              to="/products"
              label="製品を探す"
              variant="secondary"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            />
            <PrimaryCTA to="/contact?subject=見積依頼" label="見積依頼" variant="outlineLight" />
            <PrimaryCTA to="/contact?subject=相談したい" label="相談する" variant="outlineLight" />
          </div>
        </div>
      </section>

      <Section
        eyebrow="GREETING"
        title="ごあいさつ"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <Card className="p-6 md:p-8 h-full flex flex-col">
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {greetingText.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className="mt-6 text-sm font-semibold text-slate-900">
              代表取締役社長　田路 裕之
            </div>
          </Card>
          <Card className="p-0 overflow-hidden h-full">
            <img
              src={greetingImage}
              alt="大和薬品株式会社の倉庫"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="NEEDS"
        title="よくあるご相談"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {[
            {
              title: "急ぎで必要",
              desc: "納期や在庫状況を最短で確認します。",
              to: "/contact?subject=急ぎで薬品が必要",
              type: "link",
            },
            {
              title: "何を選べばいいか不安",
              desc: "用途や現場条件だけでも相談OK。",
              to: "/contact?subject=用途が未定の相談",
              type: "link",
            },
            {
              title: "安全・取扱いの相談",
              desc: "法令や保管方法も含めてご案内します。",
              to: "/contact?subject=安全・取扱いの相談",
              type: "link",
            },
            {
              title: "回収・処分してほしい",
              desc: "古い薬品、ラベル不明、在庫整理など。回収・処分の相談に対応します。",
              to: "/services",
              type: "link",
            },
          ].map((item) =>
            item.type === "anchor" ? (
              <a key={item.title} href={item.to} className="h-full">
                <Card className="p-6 h-full flex flex-col hover:-translate-y-1 transition">
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  <div className="mt-auto text-sm font-semibold text-green-700">
                    詳しく見る →
                  </div>
                </Card>
              </a>
            ) : (
              <Link key={item.title} to={item.to} className="h-full">
                <Card className="p-6 h-full flex flex-col hover:-translate-y-1 transition">
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  <div className="mt-auto text-sm font-semibold text-green-700">
                    相談する →
                  </div>
                </Card>
              </Link>
            )
          )}
        </div>
      </Section>

      {/* =======================
          取扱カテゴリ
      ======================== */}
      <Section
        eyebrow="PRODUCT CATEGORY"
        title="取扱カテゴリ"
        className="bg-slate-50"
        actions={<PrimaryCTA to="/products" label="すべての製品を見る" variant="outline" />}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "水処理用薬品", desc: "浄水・排水・プール管理", to: "/products?cat=water" },
            { title: "試薬・研究用", desc: "研究・検査・教育現場", to: "/products?cat=reagents" },
            { title: "工業用・医薬品関連", desc: "製造現場の薬品供給", to: "/products?cat=industrial" },
            { title: "クリーニング関係", desc: "洗浄・除菌・漂白用途", to: "/products?cat=cleaning" },
          ].map((c) => (
            <Link key={c.title} to={c.to}>
              <Card className="p-5 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <div className="mt-4 text-sm font-semibold text-green-700">このカテゴリを見る →</div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="TRUST"
        title="安心して相談できる理由"

      >
        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          <div className="flex h-full flex-col gap-4">
            {[
              { title: "対応エリア", text: "兵庫県中心に周辺エリアへ柔軟対応。" },
              { title: "納品フロー", text: "相談 → 提案 → 手配 → 納品を最短で。" },
              { title: "専門スタッフ", text: "用途に合わせた薬品選定を支援。" },
            ].map((item) => (
              <Card key={item.title} className="p-5 h-full">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </Card>
            ))}
          </div>
          <Card className="p-6 h-full flex flex-col">
            <div>
              <p className="section-title">FLOW</p>
              <h3 className="mt-2 text-xl font-bold text-gray-900">取引の流れ</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "用途・製品の相談",
                  "見積・提案",
                  "受注・手配",
                  "納品・アフターサポート",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-auto rounded-xl bg-green-50 border border-green-100 p-4 text-sm text-slate-700">
              <p className="font-semibold text-green-700">用途が不明でもOK</p>
              <p className="mt-1">「何に使うか」だけ教えていただければ最適品を提案します。</p>
            </div>
          </Card>
        </div>
      </Section>


      {/* =======================
          お知らせ
      ======================== */}
      <Section
        eyebrow="NEWS"
        title="お知らせ"
        description="最新情報は更新時に掲載します。"
        className="bg-slate-50"
        actions={<PrimaryCTA to="/contact?subject=見積依頼" label="見積依頼" />}
      >
        <Card className="p-6">
          <p className="text-sm text-slate-600">現在、掲載できるお知らせはありません。</p>
        </Card>
      </Section>

      <section className="section bg-gradient-to-r from-green-900 via-green-800 to-green-900">
        <div className="layout-container text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">薬品の調達でお困りですか？</h2>
          <p className="text-white/80 mb-6">用途やご希望に合わせた最適な薬品をご提案いたします。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <PrimaryCTA to="/contact?subject=見積依頼" label="見積依頼" className="bg-white text-green-800 hover:bg-slate-100" />
            <PrimaryCTA to="/contact?subject=相談したい" label="相談する" variant="outlineLight" />
          </div>
        </div>
      </section>
    </div>
  );
}
