import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Card from "../../components/Card";
import PrimaryCTA from "../../components/PrimaryCTA";
import SEOHead from "../../components/SEOHead";
import { BookOpen, Droplets, Snowflake, FlaskConical, ArrowRight, Search, X, Sparkles, Flame, Beaker } from "lucide-react";

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

  return (
    <>
      <SEOHead pageKey="knowledgeIndex" />

      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white border-b border-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

          <div className="relative layout-container py-12 md:py-20 text-center">
            <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">KNOWLEDGE</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              薬品の基礎知識
            </h1>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
              化学薬品・試薬・水処理薬品について、保存方法や性質、<br className="hidden md:inline" />
              取り扱い上の注意点を実務の視点でわかりやすく解説します。
            </p>
            <p className="mt-3 text-sm text-slate-400">
              現場で「困った」「知りたい」に応える情報をお届けします。
            </p>
          </div>
        </section>

        {/* 検索セクション */}
        <section className="bg-white border-b border-slate-200">
          <div className="layout-container py-6">
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="キーワードで記事を検索（例：保存方法、凝集剤、安全）"
                  className="w-full pl-11 pr-10 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-2 text-sm text-slate-500 text-center">
                  {filteredArticles.length > 0 ? (
                    <>「{searchQuery}」で <span className="font-bold text-emerald-600">{filteredArticles.length}件</span> の記事が見つかりました</>
                  ) : (
                    <>「{searchQuery}」に一致する記事が見つかりませんでした</>
                  )}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* 記事一覧 */}
        <Section
          eyebrow="ARTICLES"
          title={searchQuery ? "検索結果" : "記事一覧"}
          description={searchQuery ? "" : "薬品ごとの特性や取り扱いのコツをまとめています。気になるテーマからお読みください。"}
        >
          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={article.path}
                  className="group block"
                >
                  <Card className="h-full p-6 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* アイコン */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <article.icon size={24} />
                      </div>

                      {/* コンテンツ */}
                      <div className="flex-1 min-w-0">
                        {/* カテゴリタグ */}
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${article.categoryColor} mb-2`}>
                          {article.category}
                        </span>

                        {/* タイトル */}
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                          {article.title}
                        </h3>

                        {/* 説明 */}
                        <p className="text-sm text-slate-600 leading-relaxed mb-3">
                          {article.description}
                        </p>

                        {/* タグ */}
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 矢印 */}
                      <div className="flex-shrink-0 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 mb-4">検索条件に一致する記事が見つかりませんでした。</p>
              <button
                onClick={handleClearSearch}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                検索をクリア
              </button>
            </div>
          )}
        </Section>

        {/* カテゴリ説明 */}
        {!searchQuery && (
          <Section
            eyebrow="CATEGORIES"
            title="解説しているテーマ"
            className="bg-white"
          >
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              <div className="p-5 rounded-xl border border-slate-100 bg-slate-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Droplets size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900">水処理薬品</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  次亜塩素酸ナトリウム、PACなど、水処理に使用される薬品の保存・取扱い方法。
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-100 bg-slate-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Snowflake size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900">工業用薬品</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  塩化カルシウム、塩酸、クエン酸など、工業用薬品の性質と管理方法。
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-100 bg-slate-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900">クリーニング</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  過酸化水素など、漂白・殺菌に使用される薬品の取り扱い方法。
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-100 bg-slate-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Flame size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900">試薬・研究用</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  エタノールなど、研究・実験に使用される試薬の性質と安全管理。
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-100 bg-slate-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-600 flex items-center justify-center">
                    <FlaskConical size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900">製造・取扱い</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  小ロット製造、調合時の注意点など、現場で役立つ実務知識。
                </p>
              </div>
            </div>
          </Section>
        )}

        {/* お問い合わせ誘導（控えめ） */}
        <Section className="bg-slate-50">
          <Card className="p-6 md:p-8 border-slate-200 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <BookOpen size={24} />
              </div>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              掲載内容についてのご質問
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto mb-6 leading-relaxed">
              記事の内容についてご不明点があれば、お気軽にお問い合わせください。<br />
              薬品の選定や取り扱いに関するご相談も承っております。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <PrimaryCTA to="/contact" label="お問い合わせ" variant="outline" />
              <PrimaryCTA to="/products" label="製品を探す" variant="ghost" />
            </div>
          </Card>
        </Section>
      </div>
    </>
  );
}
