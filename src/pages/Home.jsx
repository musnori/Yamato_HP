import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";

export default function Home() {
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
            大和薬品株式会社は、学校・工場・研究機関などの用途に合わせて薬品をご提案。何を選べば良いか分からない場合も、相談から整理できます。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryCTA
              to="/products"
              label="製品を探す"
              variant="secondary"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            />
            <PrimaryCTA to="/contact?subject=見積依頼" label="見積依頼" />
            <PrimaryCTA to="/contact?subject=相談したい" label="相談する" variant="outlineLight" />
          </div>
        </div>
      </section>

      <Section
        eyebrow="GREETING"
        title="ごあいさつ"
        description="創業以来、医薬品や工業薬品の供給を通じて地域に貢献してまいりました。"
      >
        <Card className="p-6 md:p-8">
          <p className="text-sm text-slate-700 leading-relaxed">
            当社は創業以来、医薬品や工業薬品の供給を手がけ、様々な分野で信頼を積み重ねてまいりました。
            地域社会に貢献し、顧客第一主義を貫いてまいります。
          </p>
          <div className="mt-4 text-sm font-semibold text-slate-900">
            代表取締役社長　田路 裕之
          </div>
        </Card>
      </Section>

      <Section
        eyebrow="NEEDS"
        title="よくあるご相談"
        description="「急ぎ」「選定が不安」などの悩みからすぐに見積・相談へ進めます。"
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
              to: "#disposal",
              type: "anchor",
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
        description="気になるカテゴリからすぐに探せます。用途が未定でも相談可能です。"
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
        description="BtoB取引に必要な情報を整理し、見積・相談までの流れが分かるようにしています。"
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


      <Section id="disposal" className="bg-slate-50">
        <Card className="p-8 border-slate-100">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            回収・処分サービス
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900">
            回収・処分のご相談
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            ラベル不明・長期保管・固結／沈殿・在庫整理など、まずは現状をお知らせください。安全・法令順守での処理方法をご提案します。
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            {[
              "ラベル不明の薬品も可能",
              "事前現地確認やマニフェスト発行も可能",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-4">
            <PrimaryCTA
              to={`/contact?subject=${encodeURIComponent("薬品の回収・処分の相談")}`}
              label="回収・処分について相談する"
            />
            <PrimaryCTA to="/contact" label="お問い合わせフォームへ" variant="outline" />
          </div>
        </Card>
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
