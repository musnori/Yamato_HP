import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";
import SEOHead from "../components/SEOHead";
import { LocalBusinessSchema, BreadcrumbSchema } from "../components/StructuredData";

// アイコン (Communityで使用していたものも含めて一括インポート)
import { 
  MapPin, 
  Truck, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2,
  BookOpenText, // 追加
  Building2,    // 追加
  Camera,       // 追加
  ExternalLink  // 追加
} from "lucide-react";

export default function Home() {
  // --- データ定義 ---
  const greetingText = [
    "昭和8年（1933年）創業以来、兵庫県姫路市を拠点に、化学薬品・工業薬品・試薬の供給を専門とする商社として歩んでまいりました。",
    "兵庫県内はもちろん、大阪・岡山・京都など関西エリアの学校・工場・研究機関・水処理施設といった多様な現場に対応しています。",
    "在庫を活かした即応体制に加え、自社便・メーカー直送を組み合わせることで迅速な納品を実現します。",
    "これからも安心してお取引いただけるよう、丁寧な提案と安定供給に努めてまいります。",
  ];

  const greetingImage = "/images/souko1.jpg";

  const heroImages = ["/morninng.jpg", "/yugata.jpg", "/night.jpg"];
  const [heroIndex, setHeroIndex] = useState(0);

  // 地域活動のデータ (Community.jsxから移動)
  const communityItems = [
    {
      title: "社長ブログ",
      description: "代表メッセージや日々の気づき、業界への想いをブログ形式で発信しています。",
      to: "https://yamato-chemi-blog.hatenablog.com/",
      tag: "BLOG",
      tagColor: "bg-emerald-100 text-emerald-700",
      date: "随時更新",
      bg: "/images/president-blog-bg.png",
      icon: BookOpenText,
      external: true,
    },
    {
      title: "西兵庫化学薬品協同組合",
      description: "地域の化学薬品供給を支える連携ネットワーク。組合の活動内容をご紹介します。",
      to: "https://nishihyogo-chemical-coop.com/",
      tag: "ASSOCIATION",
      tagColor: "bg-blue-100 text-blue-700",
      date: "地域連携",
      bg: "/images/coop-bg.png",
      icon: Building2,
      external: true,
    },
    {
      title: "懐かしコレクション",
      description: "昭和レトロな看板や道具など、創業当時からの貴重なコレクションを公開中。",
      to: "/collection",
      tag: "ARCHIVE",
      tagColor: "bg-amber-100 text-amber-700",
      date: "文化活動",
      bg: "/images/banner.jpg",
      icon: Camera,
      external: false,
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <SEOHead pageKey="home" />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "ホーム" }]} />

      <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* =======================
          Hero Section
      ======================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white h-[280px] md:h-[350px] lg:h-[380px] flex items-center">
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

        {/* 背景オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-10" />
        
        <div className="relative z-20 layout-container py-6 md:py-8">
          <p className="text-xs font-bold tracking-[0.3em] text-emerald-800 mb-1.5 animate-fade-in-up drop-shadow-sm">
            Yamato Pharmaceutical
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance leading-tight tracking-tight text-slate-900 drop-shadow-sm">
            化学薬品・試薬・工業薬品の<br />
            見積・相談を<span className="text-emerald-700">最短</span>で。
          </h1>

          <p className="mt-2 max-w-2xl text-slate-900 text-sm leading-relaxed font-semibold drop-shadow-sm opacity-90">
            大和薬品株式会社は、学校・工場・研究機関などの<br className="hidden md:block"/>
            多様な現場ニーズに合わせて最適な薬品をご提案します。
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <PrimaryCTA
              to="/products"
              label="製品を探す"
              variant="outline"
              size="sm"
              className="border-slate-800 text-slate-900 hover:bg-slate-800 hover:text-white"
            />
            <PrimaryCTA
              to="/contact?subject=見積依頼"
              label="見積依頼"
              variant="outline"
              size="sm"
              className="border-slate-800 text-slate-900 hover:bg-slate-800 hover:text-white"
            />
          </div>

          <div className="absolute bottom-4 right-4 md:right-auto md:left-8 flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setHeroIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  i === heroIndex ? "bg-slate-900 w-6" : "bg-slate-500/50 hover:bg-slate-700"
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
      <Section eyebrow="GREETING" title="ごあいさつ" className="bg-slate-50">
        <div className="grid gap-4 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
             <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100">
                <div className="space-y-2 text-xs md:text-sm leading-relaxed text-slate-700 font-medium">
                  {greetingText.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 mb-0.5">REPRESENTATIVE</p>
                    <p className="text-sm font-bold text-slate-800">代表取締役社長　田路 裕之</p>
                  </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 h-full min-h-[180px] md:min-h-[200px] lg:max-h-[320px]">
            <div className="relative h-full rounded-xl overflow-hidden shadow-md">
              <img
                src={greetingImage}
                alt="大和薬品株式会社の倉庫"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* =======================
          TRUST & FLOW
      ======================== */}
      <Section eyebrow="TRUST & FLOW" title="安心して相談できる理由" className="bg-white">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          
          {/* 左側：TRUST */}
          <div className="flex flex-col gap-3">
            {[
              {
                icon: MapPin,
                title: "対応エリア",
                text: "兵庫県姫路市を拠点に、兵庫県内・大阪・岡山・京都など関西エリアへ柔軟に対応。地域密着ならではの細やかなサポートを提供します。"
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
                className="group relative bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <item.icon size={18} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-0.5 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 右側：FLOW */}
          <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 relative">
            <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
              FLOW
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-4">取引の流れ</h3>
            
            <div className="relative pl-2">
              <div className="absolute left-[11px] top-2 bottom-8 w-0.5 bg-slate-200"></div>
              <div className="space-y-4">
                {[
                  "用途・製品の相談",
                  "見積・提案",
                  "受注・手配",
                  "納品・アフターサポート",
                ].map((step, index) => (
                  <div key={step} className="relative flex items-center gap-3">
                    <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 font-bold text-xs shadow-sm">
                      {index + 1}
                    </div>
                    <div className="text-slate-700 font-medium text-xs md:text-sm">
                      {step}
                    </div>
                    {index < 3 && (
                      <div className="absolute left-[10px] top-6 text-slate-300">
                        <ArrowRight size={10} className="rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 bg-emerald-50/80 border border-emerald-100 rounded-lg p-3 flex items-start gap-3">
              <Lightbulb className="text-emerald-500 shrink-0 mt-0.5" size={16} />
              <div>
                <p className="font-bold text-emerald-800 text-xs">用途が不明でもOK</p>
                <p className="mt-0.5 text-[10px] md:text-xs text-emerald-700/80 leading-relaxed">
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
      <Section eyebrow="NEEDS" title="よくあるご相談" className="bg-slate-50">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 items-stretch">
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
              <Card className="p-4 h-full flex flex-col border-none shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle2 size={18} className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-500 group-hover:text-slate-600 transition-colors leading-snug">{item.desc}</p>
                <div className="mt-auto pt-2 text-[10px] font-bold text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  相談する <ArrowRight size={12} />
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
        className="bg-white"
        actions={<PrimaryCTA to="/products" label="すべての製品を見る" variant="outline" size="sm" className="text-xs px-3 py-1.5" />}
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "水処理用薬品", desc: "浄水・排水・プール管理", to: "/products?cat=water" },
            { title: "試薬・研究用", desc: "研究・検査・教育現場", to: "/products?cat=reagents" },
            { title: "工業用・医薬品関連", desc: "製造現場の薬品供給", to: "/products?cat=industrial" },
            { title: "クリーニング関係", desc: "洗浄・除菌・漂白用途", to: "/products?cat=cleaning" },
          ].map((c) => (
            <Link key={c.title} to={c.to} className="group">
              <div className="h-full bg-slate-50 rounded-xl p-4 hover:bg-emerald-50 hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-emerald-100">
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-emerald-900 transition-colors">{c.title}</h3>
                <p className="mt-1 text-xs text-slate-500 group-hover:text-emerald-700/80 transition-colors">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* =======================
          COMMUNITY (Home.jsxに統合)
      ======================== */}
      <Section
        eyebrow="ACTIVITY"
        title="地域活動・関連コンテンツ"
        description="それぞれのカードをクリックすると詳細ページへ移動します。"
        className="bg-slate-50 border-t border-slate-100"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {communityItems.map((item) => {
            // カードの中身
            const CardContent = (
              <div className="group h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* 画像エリア */}
                <div className="relative h-28 md:h-32 overflow-hidden bg-slate-100">
                  {item.bg ? (
                    <img
                      src={item.bg}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300 ${item.bg ? 'hidden' : 'flex'}`}>
                    <item.icon size={32} />
                  </div>
                  
                  {/* タグ */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide shadow-sm ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* テキストエリア */}
                <div className="flex-1 p-4 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                      <item.icon size={16} className="text-slate-400 group-hover:text-emerald-500" />
                      {item.title}
                    </h2>
                    {item.external && <ExternalLink size={14} className="text-slate-300 group-hover:text-emerald-500" />}
                  </div>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-mono">{item.date}</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      VIEW MORE <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            );

            // リンクの出し分け
            return item.external ? (
              <a key={item.title} href={item.to} target="_blank" rel="noopener noreferrer" className="block h-full">{CardContent}</a>
            ) : (
              <Link key={item.title} to={item.to} className="block h-full">{CardContent}</Link>
            );
          })}
        </div>
      </Section>

      {/* =======================
          NEWS (お知らせ)
      ======================== */}
      <Section
        eyebrow="NEWS"
        title="お知らせ"
        className="bg-white"
        actions={<PrimaryCTA to="/news" label="一覧" variant="outline" size="sm" className="text-xs px-3 py-1.5" />}
      >
        <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
          {[
             { date: "2025.12.30", cat: "お知らせ", title: "Webサイトをリニューアルいたしました。" },
             { date: "2025.12.15", cat: "営業日", title: "年末年始の営業についてのお知らせ" },
             { date: "2025.11.20", cat: "製品情報", title: "水処理用凝集剤の新規在庫が入荷しました" },
          ].map((news, i) => (
            <Link key={i} to="/news" className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-3 md:p-4 hover:bg-white transition-colors group border-b border-slate-200 last:border-0">
               <div className="flex items-center gap-2 shrink-0">
                 <span className="text-xs font-mono text-slate-500">{news.date}</span>
                 <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                   {news.cat}
                 </span>
               </div>
               <p className="text-xs md:text-sm font-medium text-slate-800 group-hover:text-emerald-800 transition-colors line-clamp-1">
                 {news.title}
               </p>
               <ArrowRight className="ml-auto text-slate-300 group-hover:text-emerald-500 opacity-0 group-hover:opacity-100 transition-all" size={14} />
            </Link>
          ))}
        </div>
      </Section>

      {/* Footer CTA */}
      <section className="py-8 md:py-10 lg:py-12 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white text-center">
        <div className="layout-container max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">薬品の調達でお困りですか？</h2>
          <p className="text-emerald-100 text-sm lg:text-base mb-5 leading-relaxed">
            「すぐに欲しい」「どれが良いかわからない」など、<br className="hidden md:inline" />
            お客様の課題に合わせて柔軟に対応いたします。
          </p>
          <div className="flex justify-center">
            <PrimaryCTA
              to="/contact"
              label="問い合わせる"
              className="bg-emerald-600 !text-white hover:bg-emerald-700 px-6 py-2.5 text-sm shadow-xl border-transparent"
            />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}