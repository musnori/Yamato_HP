import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import PageHeader from "../../components/PageHeader";
import ContactBand from "../../components/ContactBand";
import SEOHead from "../../components/SEOHead";
import { BookOpen, Droplets, Snowflake, FlaskConical, Search, X, Sparkles, Flame, Beaker, ChevronRight } from "lucide-react";

// 記事データ（将来的に追加しやすい構造）
const KNOWLEDGE_ARTICLES = [
  {
    id: "sodium-hypochlorite-storage",
    category: "水処理薬品",
    categoryColor: "bg-blue-100 text-blue-800",
    icon: Droplets,
    title: "次亜塩素酸ナトリウムの保存方法",
    description: "有効塩素濃度を維持するための温度管理・遮光・容器選びのポイントと、現場でよくある失敗例を解説します。",
    path: "/knowledge/sodium-hypochlorite-storage",
    tags: ["保存方法", "温度管理", "有効塩素"],
  },
  {
    id: "sodium-hypochlorite-decomposition",
    category: "水処理薬品",
    categoryColor: "bg-blue-100 text-blue-800",
    icon: Droplets,
    title: "次亜塩素酸ナトリウムの分解条件",
    description: "温度・光・pH・金属イオンなど、分解を促進する要因と濃度低下を防ぐ管理方法をまとめました。",
    path: "/knowledge/sodium-hypochlorite-decomposition",
    tags: ["分解条件", "濃度管理", "化学反応"],
  },
  {
    id: "pac-coagulant",
    category: "水処理薬品",
    categoryColor: "bg-blue-100 text-blue-800",
    icon: Droplets,
    title: "PAC（ポリ塩化アルミニウム）の特性と使い方",
    description: "上水道・排水処理で広く使われる凝集剤PACの効果的な使用方法、適正pH範囲、保管上の注意点を解説します。",
    path: "/knowledge/pac-coagulant",
    tags: ["凝集剤", "排水処理", "浄水"],
  },
  {
    id: "calcium-chloride-hygroscopic",
    category: "工業用薬品",
    categoryColor: "bg-emerald-100 text-emerald-800",
    icon: Snowflake,
    title: "塩化カルシウムの吸湿性の原因",
    description: "なぜ塩化カルシウムは湿気を吸うのか。化学的な原理と、融雪剤・乾燥剤としての活用、保管時の注意点を解説します。",
    path: "/knowledge/calcium-chloride-hygroscopic",
    tags: ["吸湿性", "融雪剤", "保管方法"],
  },
  {
    id: "hydrochloric-acid-safety",
    category: "工業用薬品",
    categoryColor: "bg-emerald-100 text-emerald-800",
    icon: Beaker,
    title: "塩酸の安全な取り扱い方法",
    description: "強酸である塩酸の危険性と安全管理のポイント。腐食性、蒸気対策、保護具、応急処置について解説します。",
    path: "/knowledge/hydrochloric-acid-safety",
    tags: ["安全管理", "腐食性", "保護具"],
  },
  {
    id: "citric-acid-usage",
    category: "工業用薬品",
    categoryColor: "bg-emerald-100 text-emerald-800",
    icon: FlaskConical,
    title: "クエン酸の特性と活用法",
    description: "食品から工業用途まで幅広く使用される有機酸。洗浄効果のメカニズムと使用上の注意点を解説します。",
    path: "/knowledge/citric-acid-usage",
    tags: ["有機酸", "洗浄", "食品添加物"],
  },
  {
    id: "hydrogen-peroxide-handling",
    category: "クリーニング関係",
    categoryColor: "bg-purple-100 text-purple-800",
    icon: Sparkles,
    title: "過酸化水素の取り扱いと安全管理",
    description: "漂白・殺菌に広く使用される酸化剤。濃度管理、保存方法、取り扱い上の注意点を解説します。",
    path: "/knowledge/hydrogen-peroxide-handling",
    tags: ["酸化剤", "漂白", "安全管理"],
  },
  {
    id: "ethanol-properties",
    category: "試薬・研究用",
    categoryColor: "bg-amber-100 text-amber-800",
    icon: Flame,
    title: "エタノールの性質と安全管理",
    description: "消毒から溶剤まで幅広く使われるエタノール。引火性への注意点と適切な取り扱い方法を解説します。",
    path: "/knowledge/ethanol-properties",
    tags: ["引火性", "消毒", "溶剤"],
  },
  {
    id: "small-lot-manufacturing",
    category: "製造・取扱い",
    categoryColor: "bg-slate-100 text-slate-800",
    icon: FlaskConical,
    title: "化学品の小ロット製造における注意点",
    description: "少量生産特有のリスクと品質管理のポイント、安全対策など現場で役立つ実務知識をまとめました。",
    path: "/knowledge/small-lot-manufacturing",
    tags: ["小ロット", "品質管理", "安全対策"],
  },
];

export default function KnowledgeIndex() {
  const [searchQuery, setSearchQuery] = useState("");

  // 検索フィルタリング
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) {
      return KNOWLEDGE_ARTICLES;
    }

    const query = searchQuery.toLowerCase().trim();
    return KNOWLEDGE_ARTICLES.filter((article) => {
      const searchTargets = [
        article.title,
        article.description,
        article.category,
        ...article.tags,
      ].map((s) => s.toLowerCase());

      return searchTargets.some((target) => target.includes(query));
    });
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const themes = [
    { title: "水処理薬品", text: "次亜塩素酸ナトリウム、PACなど、水処理に使用される薬品の保存・取扱い方法。" },
    { title: "工業用薬品", text: "塩化カルシウム、塩酸、クエン酸など、工業用薬品の性質と管理方法。" },
    { title: "クリーニング", text: "過酸化水素など、漂白・殺菌に使用される薬品の取り扱い方法。" },
    { title: "試薬・研究用", text: "エタノールなど、研究・実験に使用される試薬の性質と安全管理。" },
    { title: "製造・取扱い", text: "小ロット製造、調合時の注意点など、現場で役立つ実務知識。" },
  ];

  return (
    <>
      <SEOHead pageKey="knowledgeIndex" />

      <PageHeader
        title="薬品の基礎知識"
        lead="化学薬品・試薬・水処理薬品について、保存方法や性質、取り扱い上の注意点を実務の視点で解説しています。"
      >
        <div className="mt-5 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="キーワードで記事を検索（例：保存方法、凝集剤、安全）"
              className="w-full pl-10 pr-10 py-3 bg-white border border-slate-300 rounded text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                aria-label="検索をクリア"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-slate-600">
              {filteredArticles.length > 0 ? (
                <>「{searchQuery}」で <span className="font-bold text-brand">{filteredArticles.length}件</span> の記事が見つかりました</>
              ) : (
                <>「{searchQuery}」に一致する記事が見つかりませんでした</>
              )}
            </p>
          )}
        </div>
      </PageHeader>

      <div className="bg-white">
        <Section title={searchQuery ? "検索結果" : "記事一覧"}>
          {filteredArticles.length > 0 ? (
            <ul className="border-t border-slate-200 md:grid md:grid-cols-2 md:gap-x-8">
              {filteredArticles.map((article) => (
                <li key={article.id} className="border-b border-slate-200">
                  <Link to={article.path} className="group flex items-start gap-3 py-4">
                    <span className="flex-1 min-w-0">
                      <span className="inline-block border border-slate-300 px-1.5 py-px text-[11px] text-slate-600">
                        {article.category}
                      </span>
                      <span className="mt-1.5 block text-base font-bold text-slate-900 leading-snug group-hover:text-brand">
                        {article.title}
                      </span>
                      <span className="mt-1 block text-[13px] leading-relaxed text-slate-600">{article.description}</span>
                    </span>
                    <ChevronRight size={18} className="mt-6 shrink-0 text-slate-400 group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="border border-slate-200 bg-slate-50 py-10 text-center">
              <p className="text-slate-600 mb-3">検索条件に一致する記事が見つかりませんでした。</p>
              <button type="button" onClick={handleClearSearch} className="text-sm font-bold text-brand hover:underline">
                検索をクリア
              </button>
            </div>
          )}
        </Section>

        {!searchQuery && (
          <Section title="解説しているテーマ" className="bg-slate-50 border-y border-slate-200">
            <dl className="border-t border-slate-200 bg-white">
              {themes.map((t) => (
                <div key={t.title} className="grid sm:grid-cols-[10rem_1fr] border-b border-slate-200 px-3 sm:px-4 py-3">
                  <dt className="text-sm font-bold text-slate-900">{t.title}</dt>
                  <dd className="mt-0.5 sm:mt-0 text-sm leading-relaxed text-slate-700">{t.text}</dd>
                </div>
              ))}
            </dl>
          </Section>
        )}

        <ContactBand
          title="掲載内容についてのご質問"
          text="記事の内容や、薬品の選定・取り扱いに関するご相談も承っております。"
        />
      </div>
    </>
  );
}
