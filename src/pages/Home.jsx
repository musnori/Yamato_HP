import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";
import SEOHead from "../components/SEOHead";
import { LocalBusinessSchema, BreadcrumbSchema, WebSiteSchema } from "../components/StructuredData";

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

  // ナビゲーションボタンのデータ
  const navigationButtons = [
    {
      title: "ブログ",
      description: "代表メッセージや日々の気づき、業界への想いを発信",
      to: "https://yamato-chemi-blog.hatenablog.com/",
      icon: BookOpenText,
      external: true,
      bgImage: "/images/president-blog-bg.png",
      iconColor: "text-emerald-600",
    },
    {
      title: "コレクション",
      description: "昭和レトロな看板や道具など、貴重なコレクションを公開",
      to: "/collection",
      icon: Camera,
      external: false,
      bgImage: "/images/banner.jpg",
      iconColor: "text-amber-600",
    },
  ];

  // 関連リンク・バナーのデータ
  const partnerLinks = [
    {
      name: "四国化成工業株式会社",
      url: "https://kagaku.shikoku.co.jp/products/pool/neochlor/",
      image: "https://jyujyodai-pool.jp/wp/images/kirigaoka-scaled.jpg",
      isLogo: false,
    },
    {
      name: "ナカライテスク株式会社",
      url: "https://www.nacalai.co.jp/",
      image: "https://www.nacalai.co.jp/images/common/logo.svg",
      isLogo: true,
    },
    {
      name: "林純薬工業株式会社",
      url: "https://www.hpc-j.co.jp/",
      image: "https://www.hpc-j.co.jp/global/img/ci.svg",
      isLogo: true,
    },
    {
      name: "西兵庫化学薬品協同組合",
      url: "https://nishihyogo-chemical-coop.com/summary",
      image: "/images/coop-bg.png",
      isLogo: true,
    },
    {
      name: "姫路西ロータリークラブ",
      url: "https://www.himeji-west-rc.jp/",
      image: "https://www.himeji-west-rc.jp/wp/wp-content/themes/westrc/images/common/logo-rc.png",
      isLogo: true,
    },
    {
      name: "姫路青年会議所",
      url: "https://www.himejijc.or.jp/",
      image: "/images/IMG_2269.jpeg",
      isLogo: true,
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
      <WebSiteSchema />
      <BreadcrumbSchema items={[{ name: "ホーム" }]} />

      <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* =======================
          Hero Section
      ======================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white h-[320px] md:h-[400px] lg:h-[450px] flex items-center">
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

        <div className="relative z-20 layout-container py-8 md:py-10">
          <p className="text-[11px] md:text-xs font-medium tracking-[0.3em] text-emerald-800/80 mb-4 animate-fade-in-up">
            YAMATO CHEMICAL — SINCE 1933
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-[1.2] tracking-tight text-slate-900">
            化学工業薬品、試薬、<br className="md:hidden" />
            水処理薬品、<br />
            不要な薬品廃棄の<br className="md:hidden" />
            見積・相談を<span className="text-emerald-700">最短</span>で。
          </h1>

          <p className="mt-4 max-w-2xl text-slate-700 text-base md:text-lg leading-relaxed font-normal">
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
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
             <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200/70">
                <div className="space-y-4 text-[15px] leading-[1.95] text-slate-700">
                  {greetingText.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-[11px] tracking-[0.2em] text-slate-400 mb-1">REPRESENTATIVE</p>
                  <p className="text-[15px] font-bold text-slate-900">代表取締役社長　田路 裕之</p>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 h-full min-h-[180px] md:min-h-[200px] lg:max-h-[320px]">
            <div className="relative h-full rounded-xl overflow-hidden">
              <img
                src={greetingImage}
                alt="大和薬品株式会社の倉庫"
                className="h-full w-full object-cover"
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
                className="group relative bg-white rounded-xl p-5 md:p-6 border border-slate-200/70 flex items-start gap-4"
              >
                <div className="shrink-0 flex items-center justify-center w-9 h-9 text-emerald-700">
                  <item.icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-600 leading-[1.85]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 右側：FLOW */}
          <div className="bg-slate-50/70 rounded-xl p-6 md:p-8 border border-slate-200/70">
            <h3 className="text-lg font-bold text-slate-900 mb-6">取引の流れ</h3>

            <ol className="relative">
              {/* 縦の連結ライン（ノードの中心を通す） */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-slate-200" aria-hidden />
              {[
                "用途・製品の相談",
                "見積・提案",
                "受注・手配",
                "納品・アフターサポート",
              ].map((step, index, arr) => (
                <li
                  key={step}
                  className={`relative flex items-center gap-4 ${index < arr.length - 1 ? "pb-6" : ""}`}
                >
                  <span className="relative z-10 flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-emerald-700 text-white text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-[15px] font-medium text-slate-800">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-6 bg-white border border-emerald-100 rounded-lg p-4 flex items-start gap-3">
              <Lightbulb className="text-emerald-600 shrink-0 mt-0.5" size={18} strokeWidth={1.75} />
              <div>
                <p className="font-bold text-emerald-800 text-sm">用途が不明でもOK</p>
                <p className="mt-1 text-[13px] text-slate-600 leading-relaxed">
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
              <Card className="p-5 h-full flex flex-col hover:border-emerald-300 transition-colors duration-200">
                <div className="flex items-center justify-between mb-3">
                  <CheckCircle2 size={18} className="text-emerald-600/70 group-hover:text-emerald-600 transition-colors" strokeWidth={1.75} />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                <div className="mt-auto pt-4 text-xs font-semibold text-emerald-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                  相談する <ArrowRight size={13} />
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
              <div className="h-full bg-white rounded-xl p-5 md:p-6 hover:bg-emerald-50/50 transition-colors duration-200 border border-slate-200/70 hover:border-emerald-200">
                <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">{c.title}</h3>
                <p className="mt-2 text-[13px] text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* =======================
          ACTIVITY (地域活動・関連コンテンツ)
      ======================== */}
      <Section
        eyebrow="ACTIVITY"
        title="地域活動・関連コンテンツ"
        className="bg-slate-50 border-t border-slate-100"
      >
        {/* A. ナビゲーションボタン（上段） */}
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          {navigationButtons.map((button) => {
            const ButtonContent = (
              <div className="group h-full bg-white rounded-xl border border-slate-200/70 hover:border-emerald-300 transition-colors duration-200 overflow-hidden">
                <div className="aspect-[16/9] flex items-center justify-center p-4 bg-white relative">
                  <img
                    src={button.bgImage}
                    alt={button.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="px-3 py-2 bg-slate-50 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-700 line-clamp-1 flex items-center gap-1">
                    {button.title}
                    {button.external && <ExternalLink size={12} className="text-slate-400" />}
                  </p>
                </div>
              </div>
            );

            return button.external ? (
              <a key={button.title} href={button.to} target="_blank" rel="noopener noreferrer" className="block h-full">
                {ButtonContent}
              </a>
            ) : (
              <Link key={button.title} to={button.to} className="block h-full">
                {ButtonContent}
              </Link>
            );
          })}
        </div>

        {/* B. 関連リンク・バナーグリッド（下段） */}
        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
            <Building2 size={16} className="text-slate-400" />
            関連リンク
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {partnerLinks.map((partner) => {
              const BannerContent = (
                <div className="group h-full bg-white rounded-xl border border-slate-200/70 hover:border-emerald-300 transition-colors duration-200 overflow-hidden">
                  <div className="aspect-[16/9] flex items-center justify-center p-4 bg-white relative">
                    {partner.image ? (
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className={`max-w-full max-h-full ${
                          partner.isLogo ? 'object-contain' : 'object-cover w-full h-full'
                        }`}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('bg-slate-50');
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center text-center px-4 bg-slate-50 w-full h-full">
                        <span className="text-sm font-bold text-slate-700">{partner.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="px-3 py-2 bg-slate-50 border-t border-slate-100">
                    <p className="text-xs font-medium text-slate-700 line-clamp-1">{partner.name}</p>
                  </div>
                </div>
              );

              return partner.url ? (
                <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {BannerContent}
                </a>
              ) : (
                <div key={partner.name} className="block h-full cursor-default">
                  {BannerContent}
                </div>
              );
            })}
          </div>
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
        <div className="border-t border-slate-200">
          {[
             { date: "2025.12.30", cat: "お知らせ", title: "Webサイトをリニューアルいたしました。" },
             { date: "2025.12.15", cat: "営業日", title: "年末年始の営業についてのお知らせ" },
             { date: "2025.11.20", cat: "製品情報", title: "水処理用凝集剤の新規在庫が入荷しました" },
          ].map((news, i) => (
            <Link key={i} to="/news" className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 py-4 md:py-5 hover:bg-slate-50/70 transition-colors group border-b border-slate-200 px-1 md:px-2">
               <div className="flex items-center gap-3 shrink-0">
                 <span className="text-[13px] tabular-nums text-slate-500">{news.date}</span>
                 <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                   {news.cat}
                 </span>
               </div>
               <p className="text-[15px] text-slate-800 group-hover:text-emerald-800 transition-colors line-clamp-1">
                 {news.title}
               </p>
               <ArrowRight className="hidden md:block ml-auto text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0" size={16} />
            </Link>
          ))}
        </div>
      </Section>

      {/* Footer CTA */}
      <section className="py-16 md:py-20 lg:py-24 bg-emerald-950 text-white text-center">
        <div className="layout-container max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 tracking-tight">薬品の調達でお困りですか？</h2>
          <p className="text-emerald-100/80 text-sm lg:text-base mb-8 leading-relaxed">
            「すぐに欲しい」「どれが良いかわからない」など、<br className="hidden md:inline" />
            お客様の課題に合わせて柔軟に対応いたします。
          </p>
          <div className="flex justify-center">
            <PrimaryCTA
              to="/contact"
              label="問い合わせる"
              className="bg-white !text-emerald-900 hover:bg-emerald-50 px-7 py-3 text-sm border-transparent"
            />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}