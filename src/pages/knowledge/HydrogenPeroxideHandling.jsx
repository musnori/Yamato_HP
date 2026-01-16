import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Card from "../../components/Card";
import PrimaryCTA from "../../components/PrimaryCTA";
import SEOHead from "../../components/SEOHead";
import {
  Thermometer,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Info,
  Sparkles,
  ShieldAlert,
  Droplets
} from "lucide-react";

export default function HydrogenPeroxideHandling() {
  return (
    <>
      <SEOHead pageKey="knowledgeHydrogenPeroxideHandling" />

      <div className="bg-slate-50 min-h-screen">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-slate-200">
          <div className="layout-container py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-emerald-600">ホーム</Link>
              <span>/</span>
              <Link to="/knowledge" className="hover:text-emerald-600">薬品の基礎知識</Link>
              <span>/</span>
              <span className="text-slate-900">過酸化水素の取り扱いと安全管理</span>
            </nav>
          </div>
        </div>

        {/* 記事ヘッダー */}
        <section className="bg-white border-b border-slate-200">
          <div className="layout-container py-8 md:py-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-purple-100 text-purple-800">
                クリーニング関係
              </span>
              <span className="text-sm text-slate-400">取り扱い・安全管理</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              過酸化水素の取り扱いと安全管理
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              過酸化水素（H₂O₂）は漂白・殺菌に広く使用される酸化剤です。安全に使用するための濃度管理、保存方法、取り扱い上の注意点を解説します。
            </p>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="layout-container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">

            {/* 導入 */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                過酸化水素（H₂O₂）は、漂白剤、消毒剤、酸化剤として幅広い産業で使用されています。適切に取り扱えば安全ですが、高濃度品や不適切な管理は危険を伴います。本記事では、現場で役立つ安全管理のポイントをまとめます。
              </p>
            </div>

            {/* 基本的な性質 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Info size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">過酸化水素の基本性質</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  過酸化水素は水と酸素に分解する不安定な化合物です。
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-4 font-mono text-sm text-slate-700">
                  2H₂O₂ → 2H₂O + O₂↑<br />
                  <span className="text-slate-500">（過酸化水素が水と酸素に分解）</span>
                </div>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 text-slate-700 font-medium w-1/3">化学式</td>
                        <td className="p-3 text-slate-600">H₂O₂</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">外観</td>
                        <td className="p-3 text-slate-600">無色透明の液体</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">市販濃度</td>
                        <td className="p-3 text-slate-600">3%（消毒用）〜35%（工業用）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">pH</td>
                        <td className="p-3 text-slate-600">弱酸性（約pH 4〜5）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </section>

            {/* 用途 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">主な用途</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">漂白剤</span>
                      <p className="text-sm text-slate-600">繊維、紙パルプ、食品の漂白に使用</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">殺菌・消毒</span>
                      <p className="text-sm text-slate-600">医療器具、食品加工設備の消毒</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">環境浄化</span>
                      <p className="text-sm text-slate-600">排水処理、土壌浄化での酸化処理</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">化学合成</span>
                      <p className="text-sm text-slate-600">有機合成の酸化剤として使用</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 濃度と危険性 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <ShieldAlert size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">濃度と危険性</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  濃度によって危険性が大きく異なります。高濃度品は特に注意が必要です。
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 font-bold text-slate-700">濃度</th>
                        <th className="text-left p-3 font-bold text-slate-700">用途例</th>
                        <th className="text-left p-3 font-bold text-slate-700">危険性</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 text-slate-700">3%</td>
                        <td className="p-3 text-slate-600">消毒用オキシドール</td>
                        <td className="p-3 text-emerald-600">低い</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">6〜12%</td>
                        <td className="p-3 text-slate-600">美容・漂白</td>
                        <td className="p-3 text-amber-600">中程度（皮膚刺激）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">30〜35%</td>
                        <td className="p-3 text-slate-600">工業用</td>
                        <td className="p-3 text-red-600">高い（腐食性・発火性）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">50%以上</td>
                        <td className="p-3 text-slate-600">特殊用途</td>
                        <td className="p-3 text-red-600 font-medium">非常に高い</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800 font-medium">
                    35%以上の高濃度品は、可燃物に接触すると発火の危険があります。取り扱いには十分な注意が必要です。
                  </p>
                </div>
              </Card>
            </section>

            {/* 保存方法 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Thermometer size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">正しい保存方法</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>冷暗所</strong>に保管（15〜25℃が理想）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>通気性のある容器</strong>を使用（ガス抜き栓付き）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>PE・PP製容器</strong>を使用（金属容器は不可）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">直射日光を避け、<strong>遮光</strong>して保管</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">可燃物・有機物から<strong>離して保管</strong></span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 分解を促進する要因 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">分解を促進する要因</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  以下の要因は過酸化水素の分解を加速させます。分解すると酸素ガスが発生し、密閉容器では内圧が上昇して危険です。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>高温</strong>：温度が10℃上がると分解速度が約2倍に</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>光（紫外線）</strong>：分解反応を促進</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>金属イオン</strong>：鉄、銅、マンガンが触媒として作用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>アルカリ性</strong>：pH上昇で不安定に</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>有機物混入</strong>：激しく反応する場合あり</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 安全な取り扱い */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Droplets size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">安全な取り扱いのポイント</h2>
              </div>
              <Card className="p-6 border-emerald-200 bg-emerald-50/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>保護具</strong>：ゴーグル、耐薬品手袋、保護衣を着用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>換気</strong>：十分な換気のある場所で作業</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>希釈</strong>：必ず水に過酸化水素を加える（逆は危険）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>皮膚付着時</strong>：直ちに大量の水で洗い流す</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>漏洩時</strong>：大量の水で希釈して処理</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* まとめ */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">まとめ</h2>
              <Card className="p-6 border-emerald-200 bg-emerald-50/50">
                <p className="text-slate-700 mb-4">過酸化水素を安全に使用するためのポイント：</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">濃度に応じた適切な<strong>保護具を着用</strong>する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>冷暗所</strong>で通気性のある容器に保管する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>金属容器</strong>や有機物との接触を避ける</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">高濃度品は<strong>可燃物から離して</strong>保管する</span>
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
