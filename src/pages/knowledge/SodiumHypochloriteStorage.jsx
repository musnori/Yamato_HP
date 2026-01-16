import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Card from "../../components/Card";
import PrimaryCTA from "../../components/PrimaryCTA";
import SEOHead from "../../components/SEOHead";
import {
  Thermometer,
  Sun,
  Container,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  BookOpen
} from "lucide-react";

export default function SodiumHypochloriteStorage() {
  return (
    <>
      <SEOHead pageKey="knowledgeSodiumHypochloriteStorage" />

      <div className="bg-slate-50 min-h-screen">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-slate-200">
          <div className="layout-container py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-emerald-600">ホーム</Link>
              <span>/</span>
              <Link to="/knowledge" className="hover:text-emerald-600">薬品の基礎知識</Link>
              <span>/</span>
              <span className="text-slate-900">次亜塩素酸ナトリウムの保存方法</span>
            </nav>
          </div>
        </div>

        {/* 記事ヘッダー */}
        <section className="bg-white border-b border-slate-200">
          <div className="layout-container py-8 md:py-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-800">
                水処理薬品
              </span>
              <span className="text-sm text-slate-400">保存・管理</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              次亜塩素酸ナトリウムの保存方法
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              有効塩素濃度を維持するための正しい保管方法を解説します。温度管理、遮光、容器の選び方から、現場でよくある失敗例まで、実務に役立つポイントをまとめました。
            </p>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="layout-container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">

            {/* 導入 */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                次亜塩素酸ナトリウム（次亜塩素酸ソーダ）は、水処理や殺菌・消毒に広く使用される薬品です。しかし、保存状態が悪いと有効塩素濃度が急速に低下し、期待した効果が得られなくなります。この記事では、濃度を維持するための正しい保存方法をお伝えします。
              </p>
            </div>

            {/* 温度管理 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <Thermometer size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">温度管理が最も重要</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  次亜塩素酸ナトリウムは温度が高いほど分解が進みます。保存温度の目安は以下のとおりです。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>理想：15℃以下</strong>の冷暗所で保管</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>許容範囲：25℃以下</strong>であれば大きな問題なし</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>30℃を超えると</strong>分解が急速に進行</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-500">
                  夏場は特に注意が必要です。直射日光が当たる場所や、空調のない倉庫では温度が40℃を超えることもあります。
                </p>
              </Card>
            </section>

            {/* 遮光 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Sun size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">光を遮ることが必須</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  紫外線は次亜塩素酸ナトリウムの分解を促進します。保管場所・容器の両面で遮光対策が必要です。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">窓のない倉庫や暗所で保管する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">遮光性のある容器（黒・茶色など）を使用する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">透明容器の場合は遮光カバーで覆う</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 容器選び */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Container size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">適切な容器を選ぶ</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  容器の材質や状態も保存期間に影響します。
                </p>

                <h3 className="font-bold text-slate-800 mb-2">推奨される容器</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">ポリエチレン（PE）製の容器</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">ポリプロピレン（PP）製の容器</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">FRP（繊維強化プラスチック）製タンク</span>
                  </li>
                </ul>

                <h3 className="font-bold text-slate-800 mb-2">避けるべき容器</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">金属製容器（腐食・分解促進の原因）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">汚れた容器・異物が混入した容器</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* よくある失敗例 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">現場でよくある失敗例</h2>
              </div>
              <Card className="p-6 border-red-100 bg-red-50/50">
                <ul className="space-y-4">
                  <li>
                    <p className="font-bold text-slate-800 mb-1">屋外に放置してしまった</p>
                    <p className="text-sm text-slate-600">
                      夏場の屋外では容器内が50℃以上になることも。数日で有効塩素が大幅に低下します。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800 mb-1">古い在庫を使い切らず新しいものを補充</p>
                    <p className="text-sm text-slate-600">
                      先入れ先出しを徹底しないと、長期保管品の濃度低下に気づかないまま使用してしまいます。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800 mb-1">容器の蓋を開けたまま保管</p>
                    <p className="text-sm text-slate-600">
                      塩素ガスが揮散し、濃度低下と周囲への影響（腐食・臭気）を招きます。
                    </p>
                  </li>
                </ul>
              </Card>
            </section>

            {/* まとめ */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">まとめ</h2>
              <Card className="p-6 border-emerald-200 bg-emerald-50/50">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">保存温度は<strong>15〜25℃以下</strong>を維持</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>遮光</strong>できる場所・容器で保管</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>PE・PP製</strong>の清潔な容器を使用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>先入れ先出し</strong>で在庫を管理</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 関連記事 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">関連記事</h2>
              <Link
                to="/knowledge/sodium-hypochlorite-decomposition"
                className="block group"
              >
                <Card className="p-4 hover:border-emerald-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">次に読む</span>
                      <p className="font-bold text-slate-800 group-hover:text-emerald-700">
                        次亜塩素酸ナトリウムの分解条件
                      </p>
                    </div>
                    <span className="text-slate-300 group-hover:text-emerald-600">→</span>
                  </div>
                </Card>
              </Link>
            </section>

            {/* 戻るリンク・お問い合わせ */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <Link
                to="/knowledge"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600"
              >
                <ArrowLeft size={16} />
                薬品の基礎知識一覧に戻る
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-400">ご不明点があれば</span>
                <PrimaryCTA to="/contact" label="お問い合わせ" variant="outline" size="sm" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
