import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";
import Community from "./Community";

// アイコン
import { 
  MapPin, 
  Truck, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export default function Home() {
  const greetingText = [
    "昭和8年（1933年）創業以来、地域に根ざした化学品供給の専門商社として歩んでまいりました。",
    "試薬・化学工業薬品・医薬品関連など、学校・工場・研究機関・プール施設といった多様な現場に対応しています。",
    "在庫を活かした即応体制に加え、自社便・メーカー直送を組み合わせることで迅速な納品を実現します。",
    "これからも安心してお取引いただけるよう、丁寧な提案と安定供給に努めてまいります。",
  ];

  const greetingImage = "/images/souko1.jpg";

  const heroImages = ["/morninng.jpg", "/yugata.jpg", "/night.jpg"];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* =======================
          Hero Section
      ======================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                i === heroIndex ? "opacity-50" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        {/* 背景オーバーレイ：白透明 */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent z-10" />
        
        <div className="relative z-20 layout-container py-12 md:py-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-slate-900 mb-3 animate-fade-in-up drop-shadow-sm">
            Yamato Pharmaceutical
          </p>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-balance leading-tight tracking-tight text-slate-900 drop-shadow-md">
            化学薬品・試薬・工業薬品の<br />
            見積・相談を<span className="text-slate-900 drop-shadow-sm">最短</span>で。
          </h1>
          
          <p className="mt-4 max-w-2xl text-slate-900 text-base md:text-lg leading-relaxed font-medium drop-shadow-sm">
            大和薬品株式会社は、学校・工場・研究機関などの<br className="hidden md:block"/>
            多様な現場ニーズに合わせて最適な薬品をご提案します。
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryCTA
              to="/products"
              label="製品を探す"
              variant="secondary"
              className="bg-emerald-600 border-transparent text-white hover:bg-emerald-700 shadow-lg shadow-emerald-900/20"
            />
            <PrimaryCTA 
              to="/contact?subject=見積依頼" 
              label="見積依頼" 
              variant="outline" 
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
            />
          </div>

          <div className="absolute bottom-6 right-6 md:right-auto md:left-8 flex gap-3">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setHeroIndex(i)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === heroIndex ? "bg-slate-900 w-8" : "bg-slate-400/40 hover:bg-slate-600/70"
                }`}
                aria-label={`スライド${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          GREETING
      ======================== */}
      <Section eyebrow="GREETING" title="ごあいさつ" className="bg-slate-50 py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 space-y-4">
             <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="space-y-3 text-sm leading-7 text-slate-600 font-medium">
                  {greetingText.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">REPRESENTATIVE</p>
                    <p className="text-base font-bold text-slate-800">代表取締役社長　田路 裕之</p>
                  </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 h-full min-h-[250px] md:min-h-[300px]">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={greetingImage}
                alt="大和薬品株式会社の倉庫"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Section>

      {/* =======================
          TRUST & FLOW
      ======================== */}
      <Section eyebrow="TRUST & FLOW" title="安心して相談できる理由" className="bg-white py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          
          {/* 左側：TRUST */}
          <div className="flex flex-col gap-4">
            {[
              { 
                icon: MapPin, 
                title: "対応エリア", 
                text: "兵庫県を中心に、周辺エリアへ柔軟に対応。地域密着ならではの細やかなサポートを提供します。" 
              },
              { 
                icon: Truck, 
                title: "納品フロー", 
                text: "相談 → 提案 → 手配 → 納品を最短ルートで。自社便とメーカー直送便を使い分けます。" 
              },
              { 
                icon: Users, 
                title: "専門スタッフ", 
                text: "「何を使えばいいかわからない」等の疑問に、経験豊富なスタッフが用途に合わせた選定を支援します。" 
              },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <item.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 右側：FLOW */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 relative">
            <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">
              FLOW
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-6">取引の流れ</h3>
            
            <div className="relative pl-2">
              <div className="absolute left-[15px] top-2 bottom-10 w-0.5 bg-slate-200"></div>
              <div className="space-y-6">
                {[
                  "用途・製品の相談",
                  "見積・提案",
                  "受注・手配",
                  "納品・アフターサポート",
                ].map((step, index) => (
                  <div key={step} className="relative flex items-center gap-4">
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 font-bold text-sm shadow-sm">
                      {index + 1}
                    </div>
                    <div className="text-slate-700 font-medium text-sm md:text-base">
                      {step}
                    </div>
                    {index < 3 && (
                      <div className="absolute left-[13px] top-8 text-slate-300">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 bg-emerald-50/80 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
              <Lightbulb className="text-emerald-500 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-bold text-emerald-800 text-sm">用途が不明でもOK</p>
                <p className="mt-0.5 text-xs md:text-sm text-emerald-700/80 leading-relaxed">
                  「何に使うか」だけ教えていただければ、最適な製品をご提案します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* =======================
          NEEDS
      ======================== */}
      <Section eyebrow="NEEDS" title="よくあるご相談" className="bg-slate-50 py-8 md:py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {[
            {
              title: "急ぎで必要",
              desc: "納期や在庫状況を最短で確認します。",
              to: "/contact?subject=急ぎで薬品が必要",
            },
            {
              title: "製品選びの相談",
              desc: "用途や現場条件だけでも相談OK。",
              to: "/contact?subject=用途が未定の相談",
            },
            {
              title: "安全・取扱いの相談",
              desc: "法令や保管方法も含めてご案内します。",
              to: "/contact?subject=安全・取扱いの相談",
            },
            {
              title: "回収・処分",
              desc: "不要な薬品の回収・処分の相談に対応。",
              to: "/services",
            },
          ].map((item) => (
            <Link key={item.title} to={item.to} className="h-full group">
              <Card className="p-5 h-full flex flex-col border-none shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <CheckCircle2 size={20} className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-800">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500 group-hover:text-slate-600 transition-colors leading-snug">{item.desc}</p>
                <div className="mt-auto pt-3 text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  相談する <ArrowRight size={14} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* =======================
          CATEGORY
      ======================== */}
      <Section
        eyebrow="PRODUCT CATEGORY"
        title="取扱カテゴリ"
        className="bg-white py-8 md:py-12"
        actions={<PrimaryCTA to="/products" label="すべての製品を見る" variant="outline" size="sm" />}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "水処理用薬品", desc: "浄水・排水・プール管理", to: "/products?cat=water" },
            { title: "試薬・研究用", desc: "研究・検査・教育現場", to: "/products?cat=reagents" },
            { title: "工業用・医薬品関連", desc: "製造現場の薬品供給", to: "/products?cat=industrial" },
            { title: "クリーニング関係", desc: "洗浄・除菌・漂白用途", to: "/products?cat=cleaning" },
          ].map((c) => (
            <Link key={c.title} to={c.to} className="group">
              <div className="h-full bg-slate-50 rounded-xl p-5 hover:bg-emerald-50 hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-emerald-100">
                <h3 className="text-base font-bold text-slate-800 group-hover:text-emerald-900 transition-colors">{c.title}</h3>
                <p className="mt-1 text-xs md:text-sm text-slate-500 group-hover:text-emerald-700/80 transition-colors">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* =======================
          COMMUNITY (地域活動)
      ======================== */}
      <div className="border-t border-slate-100">
        <Community isEmbedded={true} />
      </div>

      {/* =======================
          NEWS (お知らせ)
      ======================== */}
      <Section
        eyebrow="NEWS"
        title="お知らせ"
        className="bg-white pt-0 md:pt-0 pb-12 md:pb-16" 
        actions={<PrimaryCTA to="/news" label="一覧を見る" variant="outline" size="sm" />}
      >
        <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
          {[
             { date: "2025.12.30", cat: "お知らせ", title: "Webサイトをリニューアルいたしました。" },
             { date: "2025.12.15", cat: "営業日", title: "年末年始の営業についてのお知らせ" },
             { date: "2025.11.20", cat: "製品情報", title: "水処理用凝集剤の新規在庫が入荷しました" },
          ].map((news, i) => (
            <Link key={i} to="/news" className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 p-4 md:p-5 hover:bg-white transition-colors group border-b border-slate-200 last:border-0">
               <div className="flex items-center gap-3 shrink-0">
                 <span className="text-sm font-mono text-slate-500">{news.date}</span>
                 <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                   {news.cat}
                 </span>
               </div>
               <p className="text-sm font-medium text-slate-800 group-hover:text-emerald-800 transition-colors line-clamp-1">
                 {news.title}
               </p>
               <ArrowRight className="ml-auto text-slate-300 group-hover:text-emerald-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
            </Link>
          ))}
        </div>
      </Section>

      {/* Footer CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white text-center">
        <div className="layout-container max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">薬品の調達でお困りですか？</h2>
          <p className="text-emerald-100 text-base md:text-lg mb-8 leading-relaxed">
            「すぐに欲しい」「どれが良いかわからない」など、<br className="hidden md:inline" />
            お客様の課題に合わせて柔軟に対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* ▼▼▼ 修正: 背景をエメラルド、文字を白に変更 ▼▼▼ */}
            <PrimaryCTA 
              to="/contact?subject=見積依頼" 
              label="無料で見積依頼する" 
              className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-3 text-base shadow-xl border-transparent" 
            />
            <PrimaryCTA 
              to="/contact?subject=相談したい" 
              label="まずは相談する" 
              variant="outlineLight"
              className="px-8 py-3 text-base"
            />
          </div>
        </div>
      </section>
    </div>
  );
}