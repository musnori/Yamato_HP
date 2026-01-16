import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Card from "../../components/Card";
import PrimaryCTA from "../../components/PrimaryCTA";
import SEOHead from "../../components/SEOHead";
import {
  Thermometer,
  Sun,
  Beaker,
  CircleDot,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Info
} from "lucide-react";

export default function SodiumHypochloriteDecomposition() {
  return (
    <>
      <SEOHead pageKey="knowledgeSodiumHypochloriteDecomposition" />

      <div className="bg-slate-50 min-h-screen">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-slate-200">
          <div className="layout-container py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-emerald-600">ホーム</Link>
              <span>/</span>
              <Link to="/knowledge" className="hover:text-emerald-600">薬品の基礎知識</Link>
              <span>/</span>
              <span className="text-slate-900">次亜塩素酸ナトリウムの分解条件</span>
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
              <span className="text-sm text-slate-400">化学的性質</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              次亜塩素酸ナトリウムの分解条件
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              次亜塩素酸ナトリウムはなぜ分解するのか。温度・光・pH・金属イオンなど、分解を促進する要因と濃度低下を防ぐための実務的な対策を解説します。
            </p>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="layout-container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">

            {/* 導入 */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                次亜塩素酸ナトリウム（NaClO）は本質的に不安定な化合物であり、時間とともに分解が進みます。分解すると有効塩素濃度が低下し、殺菌・消毒効果が失われます。分解を促進する条件を理解し、適切な管理を行うことが重要です。
              </p>
            </div>

            {/* 分解反応の基本 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Info size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">分解反応の基本</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  次亜塩素酸ナトリウムの分解は主に以下の反応で進行します。
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-4 font-mono text-sm text-slate-700">
                  2NaClO → 2NaCl + O₂↑<br />
                  <span className="text-slate-500">（次亜塩素酸ナトリウムが塩化ナトリウムと酸素に分解）</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  この反応により有効塩素（殺菌成分）が失われ、単なる食塩水に近い状態になります。分解速度は保存条件によって大きく変わります。
                </p>
              </Card>
            </section>

            {/* 温度の影響 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <Thermometer size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">温度の影響</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  温度は分解速度に最も大きな影響を与える要因です。温度が10℃上昇すると、分解速度は約3〜4倍に加速します。
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 font-bold text-slate-700">保存温度</th>
                        <th className="text-left p-3 font-bold text-slate-700">分解速度</th>
                        <th className="text-left p-3 font-bold text-slate-700">保存期間の目安</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 text-slate-700">10℃</td>
                        <td className="p-3 text-slate-600">遅い</td>
                        <td className="p-3 text-emerald-600 font-medium">約6ヶ月</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">20℃</td>
                        <td className="p-3 text-slate-600">やや遅い</td>
                        <td className="p-3 text-slate-600">約3ヶ月</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">30℃</td>
                        <td className="p-3 text-slate-600">速い</td>
                        <td className="p-3 text-amber-600">約1ヶ月</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">40℃以上</td>
                        <td className="p-3 text-slate-600">非常に速い</td>
                        <td className="p-3 text-red-600 font-medium">数日〜2週間</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500">
                  ※ 有効塩素12%の製品を基準とした目安。初期濃度や容器により変動します。
                </p>
              </Card>
            </section>

            {/* 光の影響 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Sun size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">光（紫外線）の影響</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  紫外線は次亜塩素酸ナトリウムの分解を促進します。光のエネルギーが分解反応を活性化させるためです。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">直射日光下では<strong>数時間で濃度が半減</strong>することも</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">蛍光灯の光も長期間では影響あり</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">遮光容器・遮光カバーで対策可能</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* pHの影響 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Beaker size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">pHの影響</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  次亜塩素酸ナトリウム溶液はアルカリ性（pH 11〜13程度）で安定します。pHが下がると不安定になります。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">pH 11以上で安定性が高い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">pH 8以下では分解が急速に進行</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">酸性物質との混合は<strong>塩素ガス発生の危険</strong></span>
                  </li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800 font-medium">
                    酸性の洗剤（塩酸系など）とは絶対に混ぜないでください。有毒な塩素ガスが発生します。
                  </p>
                </div>
              </Card>
            </section>

            {/* 金属イオンの影響 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <CircleDot size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">金属イオンの影響</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  銅、鉄、ニッケル、コバルトなどの重金属イオンは、分解反応の触媒として働き、分解を加速させます。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">金属製容器での保管は避ける</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">錆びた配管を通すと濃度が低下</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">PE・PP製の容器・配管を使用する</span>
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
                <h2 className="text-xl font-bold text-slate-900">よくある失敗例</h2>
              </div>
              <Card className="p-6 border-red-100 bg-red-50/50">
                <ul className="space-y-4">
                  <li>
                    <p className="font-bold text-slate-800 mb-1">希釈後に長期保存してしまった</p>
                    <p className="text-sm text-slate-600">
                      希釈すると濃度が下がり、相対的に分解が進みやすくなります。希釈液は当日〜数日で使い切りましょう。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800 mb-1">水道水で希釈した</p>
                    <p className="text-sm text-slate-600">
                      水道水には微量の金属イオンや有機物が含まれており、分解を促進することがあります。長期保存には精製水が適しています。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800 mb-1">濃度を確認せずに使用した</p>
                    <p className="text-sm text-slate-600">
                      古い在庫は見た目では判断できません。残留塩素計や有効塩素測定キットで定期的に確認することをお勧めします。
                    </p>
                  </li>
                </ul>
              </Card>
            </section>

            {/* まとめ */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">まとめ</h2>
              <Card className="p-6 border-emerald-200 bg-emerald-50/50">
                <p className="text-slate-700 mb-4">分解を防ぐために、以下の点を意識しましょう。</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>低温</strong>（15〜25℃以下）で保管する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>遮光</strong>できる場所・容器を使用する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>酸性物質</strong>との接触を避ける</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>金属製</strong>の容器・配管を使用しない</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>定期的に濃度を測定</strong>して品質を確認する</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 関連記事 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">関連記事</h2>
              <Link
                to="/knowledge/sodium-hypochlorite-storage"
                className="block group"
              >
                <Card className="p-4 hover:border-emerald-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">関連記事</span>
                      <p className="font-bold text-slate-800 group-hover:text-emerald-700">
                        次亜塩素酸ナトリウムの保存方法
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
