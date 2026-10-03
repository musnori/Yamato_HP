import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import SEOHead from "../components/SEOHead";
import { LocalBusinessSchema, BreadcrumbSchema, WebSiteSchema } from "../components/StructuredData";

import {
  MapPin,
  Truck,
  Users,
  Clock,
  FlaskConical,
  ShieldCheck,
  Recycle,
  Package,
  FileText,
  Mail,
  Phone,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// --- データ定義 ---
const aboutText = [
  "昭和8年（1933年）創業以来、兵庫県姫路市を拠点に、化学薬品・工業薬品・試薬の供給を専門とする商社として歩んでまいりました。",
  "兵庫県内はもちろん、大阪・岡山・京都など関西エリアの学校・工場・研究機関・水処理施設といった、さまざまな現場のニーズに対応しています。",
  "在庫を活かした迅速な対応と、丁寧な提案・安定供給により、これからも安心してお取引いただけるパートナーを目指します。",
];

const strengths = [
  {
    icon: MapPin,
    title: "対応エリア",
    text: "姫路市を拠点に、兵庫県内・大阪・岡山・京都など関西エリアに対応しています。",
  },
  {
    icon: Truck,
    title: "納品体制",
    text: "自社在庫からの即応に加え、自社便とメーカー直送を使い分けて納品します。",
  },
  {
    icon: Users,
    title: "専門スタッフ",
    text: "「何を使えばいいかわからない」というご相談にも、用途に合わせて製品をご提案します。",
  },
];

const flow = [
  { title: "用途・製品の相談", text: "ご希望の用途や現場の条件をお聞かせください。" },
  { title: "見積・提案", text: "最適な製品をご提案し、お見積りをご提示します。" },
  { title: "受注・手配", text: "ご発注後、在庫・納期を確認して手配します。" },
  { title: "納品・アフターサポート", text: "ご指定の場所へ納品し、納品後もご相談に応じます。" },
];

const consultations = [
  { icon: Clock, title: "急ぎで必要", desc: "納期や在庫状況をすぐに確認します。", to: "/contact?subject=急ぎで薬品が必要" },
  { icon: FlaskConical, title: "製品選びの相談", desc: "用途や条件だけでもご相談ください。", to: "/contact?subject=用途が未定の相談" },
  { icon: ShieldCheck, title: "安全・取扱いの相談", desc: "法令や保管方法も含めてご案内します。", to: "/contact?subject=安全・取扱いの相談" },
  { icon: Recycle, title: "回収・処分", desc: "不要になった薬品の回収・処分に対応します。", to: "/services" },
];

const categories = [
  { title: "水処理用薬品", desc: "浄水・排水・プール管理", to: "/products?cat=water" },
  { title: "試薬・研究用", desc: "研究・検査・教育現場", to: "/products?cat=reagents" },
  { title: "工業用・医薬品関連", desc: "製造現場の薬品供給", to: "/products?cat=industrial" },
  { title: "クリーニング関係", desc: "洗浄・除菌・漂白用途", to: "/products?cat=cleaning" },
];

const contents = [
  {
    title: "社長ブログ",
    desc: "代表メッセージや日々の気づき、業界への想いを発信しています。",
    to: "https://yamato-chemi-blog.hatenablog.com/",
    image: "/images/president-blog-bg.png",
    external: true,
  },
  {
    title: "コレクション",
    desc: "昭和レトロな看板や道具など、貴重なコレクションを公開しています。",
    to: "/collection",
    image: "/images/banner.jpg",
    external: false,
  },
];

// 関連リンクは元サイトと同じくバナー画像で表示（isLogo: ロゴは余白を取って全体表示、写真は枠いっぱいに表示）
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

const news = [
  { date: "2025.12.30", cat: "お知らせ", title: "Webサイトをリニューアルいたしました。" },
  { date: "2025.12.15", cat: "営業日", title: "年末年始の営業についてのお知らせ" },
  { date: "2025.11.20", cat: "製品情報", title: "水処理用凝集剤の新規在庫が入荷しました" },
];

const heroButtons = [
  { label: "取扱製品", to: "/products", icon: Package, primary: true },
  { label: "見積依頼", to: "/contact?subject=見積依頼", icon: FileText },
  { label: "お問い合わせ", to: "/contact", icon: Mail },
];

export default function Home() {
  return (
    <>
      <SEOHead pageKey="home" />
      <LocalBusinessSchema />
      <WebSiteSchema />
      <BreadcrumbSchema items={[{ name: "ホーム" }]} />

      <div className="bg-white text-slate-800">
        {/* ===== ファーストビュー ===== */}
        <section className="relative bg-white">
          {/* 写真：スマホでは上に帯状に、PCでは右側に大きく敷く */}
          <div className="relative h-52 sm:h-64 md:absolute md:inset-y-0 md:right-0 md:left-[50%] lg:left-[40%] md:h-auto">
            <img
              src="/c.jpg"
              alt="大和薬品株式会社 本社倉庫の外観（姫路市北条口）"
              className="h-full w-full object-cover object-[60%_45%]"
              fetchpriority="high"
            />
            <div
              aria-hidden
              className="hidden md:block absolute inset-0"
              style={{ backgroundImage: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0) 22%)" }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 md:py-20 lg:py-24">
            <div className="max-w-xl md:max-w-[48%] lg:max-w-xl">
              <h1 className="font-serif text-[1.65rem] leading-[1.45] sm:text-3xl md:text-[1.7rem] lg:text-[2.4rem] md:leading-[1.4] font-bold text-slate-900 tracking-normal">
                <span className="whitespace-nowrap">化学工業薬品・試薬・</span>
                <br />
                <span className="whitespace-nowrap">水処理薬品・不要薬品回収</span>
                <br />
                <span className="text-brand">に対応</span>
              </h1>
              <span aria-hidden className="block w-12 h-[3px] bg-brand mt-4 mb-4" />
              <p className="text-[15px] md:text-base leading-relaxed text-slate-700">
                1933年の創業以来、兵庫県姫路市を拠点に、
                <br className="hidden sm:inline" />
                学校・工場・研究機関などの多様な現場に
                <br className="hidden sm:inline" />
                最適な薬品をご提案しています。
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                {heroButtons.map(({ label, to, icon, primary }) => {
                  const Icon = icon;
                  return (
                  <Link
                    key={label}
                    to={to}
                    className={[
                      "inline-flex items-center justify-center gap-1.5 rounded px-3 sm:px-5 py-3 text-sm font-bold border transition-colors",
                      primary ? "col-span-2 sm:col-auto" : "",
                      primary
                        ? "bg-brand border-brand text-white hover:bg-brand-dark"
                        : "bg-white border-slate-300 text-slate-800 hover:border-brand hover:text-brand",
                    ].join(" ")}
                  >
                    <Icon size={17} strokeWidth={1.75} className="shrink-0" />
                    {label}
                    <ChevronRight size={15} className="hidden sm:block opacity-70" />
                  </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 大和薬品株式会社について ===== */}
        <Section title="大和薬品株式会社について" className="border-t border-slate-200">
          <div className="grid gap-6 md:grid-cols-[1fr_minmax(0,420px)] md:gap-10 items-start">
            <div className="space-y-3 text-[15px] leading-[1.9] text-slate-700">
              {aboutText.map((t) => (
                <p key={t}>{t}</p>
              ))}
              <p className="pt-2 text-sm text-slate-600">
                代表取締役社長{"\u3000"}<span className="font-bold text-slate-900">田路 裕之</span>
              </p>
              <Link
                to="/company"
                className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline underline-offset-4"
              >
                会社概要を見る
                <ChevronRight size={15} />
              </Link>
            </div>
            <figure>
              <img
                src="/warehouses/abo1.jpg"
                alt="阿保倉庫の内部（薬品の保管庫とフォークリフト）"
                className="w-full aspect-[16/9] md:aspect-[4/3] object-cover rounded-sm"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-2 text-xs text-slate-500">阿保倉庫</figcaption>
            </figure>
          </div>
        </Section>

        {/* ===== 大和薬品の強み ===== */}
        <Section title="大和薬品の強み" className="bg-brand-light">
          <div className="grid md:grid-cols-3 md:divide-x divide-slate-300/70">
            {strengths.map(({ icon, title, text }, i) => {
              const Icon = icon;
              return (
              <div
                key={title}
                className={[
                  "flex gap-4 py-4 md:py-1 md:px-7 md:first:pl-0 md:last:pr-0",
                  i > 0 ? "border-t border-slate-300/70 md:border-t-0" : "",
                ].join(" ")}
              >
                <Icon size={30} strokeWidth={1.5} className="text-brand shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base md:text-[17px] font-bold text-slate-900 tracking-normal">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{text}</p>
                </div>
              </div>
              );
            })}
          </div>
        </Section>

        {/* ===== 取引の流れ ===== */}
        <Section title="取引の流れ">
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-0">
            {flow.map((step, i) => (
              <li key={step.title} className="relative md:px-5 md:first:pl-0 md:border-l md:first:border-l-0 border-slate-200">
                <div className="flex items-start gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="pt-0.5 text-[15px] font-bold text-slate-900 leading-snug tracking-normal">{step.title}</h3>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ===== よくあるご相談 ===== */}
        <Section title="よくあるご相談" className="bg-slate-50 border-y border-slate-200">
          <ul className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {consultations.map(({ icon, title, desc, to }) => {
              const Icon = icon;
              return (
              <li key={title} className="bg-white">
                <Link to={to} className="group flex items-center gap-4 px-4 py-3.5 md:px-5 md:py-4 hover:bg-brand-light transition-colors">
                  <Icon size={24} strokeWidth={1.5} className="text-brand shrink-0" />
                  <span className="flex-1 min-w-0">
                    <span className="block text-[15px] font-bold text-slate-900">{title}</span>
                    <span className="block text-[13px] text-slate-600 leading-snug mt-0.5">{desc}</span>
                  </span>
                  <ChevronRight size={18} className="text-slate-400 group-hover:text-brand shrink-0" />
                </Link>
              </li>
              );
            })}
          </ul>
        </Section>

        {/* ===== 取扱カテゴリ ===== */}
        <Section
          title="取扱カテゴリ"
          actions={
            <Link to="/products" className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline underline-offset-4">
              すべての製品を見る
              <ChevronRight size={15} />
            </Link>
          }
        >
          <ul className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-200">
            {categories.map((c) => (
              <li key={c.title} className="border-r border-b border-slate-200">
                <Link to={c.to} className="group block h-full px-4 py-3.5 hover:bg-brand-light transition-colors">
                  <span className="flex items-center justify-between gap-2 text-sm md:text-[15px] font-bold text-slate-900 group-hover:text-brand">
                    {c.title}
                    <ChevronRight size={15} className="hidden md:block text-slate-400 group-hover:text-brand shrink-0" />
                  </span>
                  <span className="block mt-0.5 text-xs text-slate-500">{c.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* ===== お知らせ ===== */}
        <Section title="お知らせ" className="pt-0 md:pt-0">
          <ul className="border-t border-slate-200">
            {news.map((n) => (
              <li key={n.title} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 py-3 border-b border-slate-200">
                <span className="flex items-center gap-3 shrink-0">
                  <span className="text-[13px] tabular-nums text-slate-500">{n.date}</span>
                  <span className="w-[4.5rem] text-center border border-slate-300 text-[11px] text-slate-600 py-px">{n.cat}</span>
                </span>
                <span className="text-[15px] text-slate-800">{n.title}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ===== 関連コンテンツ・関連リンク ===== */}
        <Section title="関連コンテンツ" className="bg-slate-50 border-t border-slate-200">
          <div className="grid gap-4 md:grid-cols-2">
            {contents.map((c) => {
              const inner = (
                <>
                  <span className="block aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="flex items-center justify-between gap-2 px-4 py-3 border-t border-slate-200">
                    <span>
                      <span className="flex items-center gap-1 text-[15px] font-bold text-slate-900 group-hover:text-brand">
                        {c.title}
                        {c.external && <ExternalLink size={13} className="text-slate-400" />}
                      </span>
                      <span className="block mt-0.5 text-[13px] leading-relaxed text-slate-600">{c.desc}</span>
                    </span>
                    <ChevronRight size={18} className="text-slate-400 group-hover:text-brand shrink-0" />
                  </span>
                </>
              );
              const cls = "group block bg-white border border-slate-200 overflow-hidden hover:border-brand/60 transition-colors";
              return c.external ? (
                <a key={c.title} href={c.to} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={c.title} to={c.to} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>

          <h3 className="mt-8 mb-3 text-[15px] font-bold text-slate-900 tracking-normal">関連リンク</h3>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {partnerLinks.map((p) => (
              <li key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full bg-white border border-slate-200 overflow-hidden hover:border-brand/60 transition-colors"
                >
                  <span className={`flex aspect-[16/9] items-center justify-center overflow-hidden after:content-[attr(data-fallback)] after:px-3 after:text-center after:text-sm after:font-bold after:text-slate-500 ${p.isLogo ? "p-4" : ""}`}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className={
                        p.isLogo
                          ? "max-h-full max-w-full object-contain"
                          : "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      }
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // 画像が読めない場合は社名の文字だけを表示する
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.classList.add("bg-slate-50");
                        e.currentTarget.parentElement.dataset.fallback = p.name;
                      }}
                    />
                  </span>
                  <span className="flex items-center justify-between gap-1 px-3 py-2 border-t border-slate-200 text-xs md:text-[13px] font-medium text-slate-700 group-hover:text-brand">
                    <span className="line-clamp-1">{p.name}</span>
                    <ExternalLink size={12} className="text-slate-400 shrink-0" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        {/* ===== お問い合わせ ===== */}
        <section className="bg-brand text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 md:flex md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-bold tracking-normal">お見積り・ご相談はお気軽に</h2>
              <p className="mt-2 text-sm text-white/85">
                「どの薬品を選べばよいか分からない」といった段階からご相談いただけます。
              </p>
              <a href="tel:0792810671" className="mt-4 inline-flex items-baseline gap-2 text-white">
                <Phone size={18} className="self-center" />
                <span className="text-2xl md:text-[1.7rem] font-bold tabular-nums tracking-wide">079-281-0671</span>
                <span className="text-xs text-white/80">受付時間 9:00〜17:00</span>
              </a>
            </div>
            <div className="mt-5 md:mt-0 grid grid-cols-2 gap-2 md:w-[22rem] shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded px-3 py-3 text-sm font-bold bg-white text-brand hover:bg-brand-light"
              >
                <Mail size={17} strokeWidth={1.75} />
                お問い合わせ
              </Link>
              <Link
                to="/contact?subject=見積依頼"
                className="inline-flex items-center justify-center gap-1.5 rounded px-3 py-3 text-sm font-bold border border-white/70 text-white hover:bg-white/10"
              >
                <FileText size={17} strokeWidth={1.75} />
                見積依頼
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
