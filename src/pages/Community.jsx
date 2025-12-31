import React from "react";
import { Link } from "react-router-dom";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";
// アイコン
import { 
  BookOpenText, 
  Building2, 
  Camera, 
  ExternalLink, 
  ArrowRight,
  MessageCircle
} from "lucide-react";

export default function Community() {
  const items = [
    // ▼▼▼ 修正: 社長ブログ（はてなブログ）のみ配置 ▼▼▼
    {
      title: "社長ブログ",
      description: "代表メッセージや日々の気づき、業界への想いをブログ形式で発信しています。",
      to: "https://yamato-chemi-blog.hatenablog.com/", // 指定のURLに変更
      tag: "BLOG",
      tagColor: "bg-emerald-100 text-emerald-700",
      date: "随時更新",
      bg: "/images/president-blog-bg.png",
      icon: BookOpenText,
      external: true, // 外部サイトへ飛ぶ設定
    },
    // ▲▲▲ 修正ここまで ▲▲▲
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

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* =======================
          Header Section
      ======================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="relative layout-container py-12 md:py-16 text-center">
          <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">COMMUNITY</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            地域活動・関連コンテンツ
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            社長ブログや地域連携の取り組み、当社の歴史を感じるコレクションなど、<br className="hidden md:inline" />
            ビジネス以外の「大和薬品の横顔」をご紹介します。
          </p>
        </div>
      </section>

      {/* =======================
          Main Content
      ======================== */}
      <Section
        eyebrow="ACTIVITY"
        title="活動一覧"
        description="それぞれのカードをクリックすると詳細ページへ移動します。"
        className="pt-8"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => {
            const CardContent = (
              <div className="group h-full flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  {item.bg ? (
                    <img 
                      src={item.bg} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300 ${item.bg ? 'hidden' : 'flex'}`}>
                    <item.icon size={48} />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide shadow-sm ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                      <item.icon size={20} className="text-slate-400 group-hover:text-emerald-500" />
                      {item.title}
                    </h2>
                    {item.external && <ExternalLink size={16} className="text-slate-300 group-hover:text-emerald-500" />}
                  </div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">{item.date}</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      VIEW MORE <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            );

            return item.external ? (
              <a
                key={item.title}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {CardContent}
              </a>
            ) : (
              <Link key={item.title} to={item.to} className="block h-full">
                {CardContent}
              </Link>
            );
          })}
        </div>
      </Section>

      {/* =======================
          Contact CTA
      ======================== */}
      <Section className="pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-8 md:p-12 text-center shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none">
            <MessageCircle size={300} />
          </div>

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-4">
              活動に関するお問い合わせ
            </h3>
            <p className="text-slate-600 mb-8">
              地域活動への参加依頼や、記事の内容に関するご質問などがございましたら、<br className="hidden md:inline" />
              お気軽にお問い合わせフォームよりご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <PrimaryCTA 
                to="/contact?subject=地域活動について" 
                label="この件について相談する" 
                className="bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-900/10"
              />
              <PrimaryCTA 
                to="/contact?subject=見積依頼" 
                label="製品の見積依頼はこちら" 
                variant="outline" 
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}