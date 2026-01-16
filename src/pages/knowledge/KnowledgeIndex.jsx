import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Card from "../../components/Card";
import PrimaryCTA from "../../components/PrimaryCTA";
import SEOHead from "../../components/SEOHead";
import { BookOpen, Droplets, Snowflake, FlaskConical, ArrowRight } from "lucide-react";

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
    id: "small-lot-manufacturing",
    category: "製造・取扱い",
    categoryColor: "bg-amber-100 text-amber-800",
    icon: FlaskConical,
    title: "化学品の小ロット製造における注意点",
    description: "少量生産特有のリスクと品質管理のポイント、安全対策など現場で役立つ実務知識をまとめました。",
    path: "/knowledge/small-lot-manufacturing",
    tags: ["小ロット", "品質管理", "安全対策"],
  },
];

export default function KnowledgeIndex() {
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

        {/* 記事一覧 */}
        <Section
          eyebrow="ARTICLES"
          title="記事一覧"
          description="薬品ごとの特性や取り扱いのコツをまとめています。気になるテーマからお読みください。"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {KNOWLEDGE_ARTICLES.map((article) => (
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
        </Section>

        {/* カテゴリ説明 */}
        <Section
          eyebrow="CATEGORIES"
          title="解説しているテーマ"
          className="bg-white"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-5 rounded-xl border border-slate-100 bg-slate-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Droplets size={20} />
                </div>
                <h3 className="font-bold text-slate-900">水処理薬品</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                次亜塩素酸ナトリウム、PAC（ポリ塩化アルミニウム）など、水処理に使用される薬品の保存・取扱い方法。
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
                塩化カルシウム、苛性ソーダなど、工場や現場で使用される工業用薬品の性質と管理方法。
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-slate-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <FlaskConical size={20} />
                </div>
                <h3 className="font-bold text-slate-900">製造・取扱い</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                小ロット製造、調合時の注意点など、化学品を扱う現場で知っておきたい実務知識。
              </p>
            </div>
          </div>
        </Section>

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
