import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Card from "../../components/Card";
import PrimaryCTA from "../../components/PrimaryCTA";
import SEOHead from "../../components/SEOHead";
import {
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Info,
  Beaker,
  Droplets,
  ShieldAlert,
  Wind
} from "lucide-react";

export default function HydrochloricAcidSafety() {
  return (
    <>
      <SEOHead pageKey="knowledgeHydrochloricAcidSafety" />

      <div className="bg-slate-50 min-h-screen">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-slate-200">
          <div className="layout-container py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-emerald-600">ホーム</Link>
              <span>/</span>
              <Link to="/knowledge" className="hover:text-emerald-600">薬品の基礎知識</Link>
              <span>/</span>
              <span className="text-slate-900">塩酸の安全な取り扱い方法</span>
            </nav>
          </div>
        </div>

        {/* 記事ヘッダー */}
        <section className="bg-white border-b border-slate-200">
          <div className="layout-container py-8 md:py-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                工業用・医薬品関連
              </span>
              <span className="text-sm text-slate-400">安全管理</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              塩酸の安全な取り扱い方法
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              塩酸（HCl）は金属処理や洗浄など幅広い用途を持つ強酸です。腐食性が強く、取り扱いには十分な注意が必要です。安全管理のポイントを解説します。
            </p>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="layout-container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">

            {/* 導入 */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                塩酸（塩化水素の水溶液）は工業分野で最も使用量の多い酸の一つです。金属の酸洗い、pH調整、化学合成など多岐にわたる用途がありますが、強い腐食性と刺激性のある蒸気を発生するため、適切な取り扱いが必須です。
              </p>
            </div>

            {/* 基本的な性質 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Info size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">塩酸の基本性質</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 text-slate-700 font-medium w-1/3">化学式</td>
                        <td className="p-3 text-slate-600">HCl（塩化水素の水溶液）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">外観</td>
                        <td className="p-3 text-slate-600">無色透明〜淡黄色の液体</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">臭い</td>
                        <td className="p-3 text-slate-600">刺激性（塩化水素ガス）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">市販濃度</td>
                        <td className="p-3 text-slate-600">35%（濃塩酸）、10%（希塩酸）など</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">pH</td>
                        <td className="p-3 text-slate-600 text-red-600 font-medium">強酸性（35%で pH &lt; 0）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">沸点</td>
                        <td className="p-3 text-slate-600">約110℃（35%）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500">
                  ※ 濃塩酸は空気中で白煙（塩化水素ガス）を発生します。
                </p>
              </Card>
            </section>

            {/* 主な用途 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Beaker size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">主な用途</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">金属の酸洗い</span>
                      <p className="text-sm text-slate-600">鋼材表面の酸化スケール除去、メッキ前処理</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">pH調整</span>
                      <p className="text-sm text-slate-600">排水処理、プール水管理、食品工業</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">化学合成</span>
                      <p className="text-sm text-slate-600">塩化物の製造、有機合成の触媒</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">洗浄</span>
                      <p className="text-sm text-slate-600">コンクリートのエフロレッセンス除去、タイル洗浄</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 危険性 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <ShieldAlert size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">危険性と健康被害</h2>
              </div>
              <Card className="p-6 border-red-100 bg-red-50/50">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">皮膚・目への影響</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
                        <span>皮膚に付着すると<strong>化学熱傷</strong>を起こす</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
                        <span>目に入ると<strong>重篤な損傷</strong>の恐れ</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">吸入による影響</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
                        <span>蒸気を吸入すると<strong>気道刺激</strong>、咳、呼吸困難</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
                        <span>高濃度では<strong>肺水腫</strong>の危険</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">材料への影響</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                        <span>金属を腐食し、<strong>水素ガス</strong>を発生</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                        <span>コンクリート、石材を侵食</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-red-100 border border-red-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-red-800 font-medium">
                    塩素系漂白剤（次亜塩素酸ナトリウム）との混合は厳禁。有毒な塩素ガスが発生します。
                  </p>
                </div>
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
                    <span className="text-slate-700"><strong>保護具着用</strong>：耐酸手袋、保護メガネ、防護服を必ず使用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>換気</strong>：必ず換気のよい場所で作業（局所排気推奨）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>希釈時</strong>：水に酸を加える（酸に水を加えない）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>洗眼設備</strong>：作業場所に洗眼器・シャワーを設置</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>中和剤</strong>：炭酸ナトリウム、石灰などを常備</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 蒸気対策 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Wind size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">蒸気（白煙）対策</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  濃塩酸は常温でも塩化水素ガスを発生します。これが空気中の水分と反応して白煙となります。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">開封時は<strong>風上に立つ</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">密閉状態の容器を開ける時は<strong>ゆっくり</strong>開栓</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">使用後は<strong>すぐに密栓</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">長時間作業には<strong>防毒マスク</strong>を使用</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 保存方法 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Beaker size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">保存方法</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>PE・PP製容器</strong>で保管（ガラス瓶も可）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>金属容器は使用不可</strong>（腐食するため）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>密栓</strong>して保管（蒸気漏れ防止）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>アルカリ・酸化剤</strong>から離して保管</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">換気のよい<strong>冷暗所</strong>に保管</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 応急処置 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">応急処置</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">皮膚に付着した場合</h3>
                    <p className="text-sm text-slate-600">
                      直ちに大量の水で15分以上洗い流す。汚染された衣服は脱がせる。重度の場合は医師の診察を受ける。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">目に入った場合</h3>
                    <p className="text-sm text-slate-600">
                      直ちに大量の水で15分以上洗眼する。コンタクトレンズは外す。必ず眼科医の診察を受ける。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">吸入した場合</h3>
                    <p className="text-sm text-slate-600">
                      新鮮な空気の場所に移動させ、安静にする。呼吸困難な場合は医師の診察を受ける。
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* まとめ */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">まとめ</h2>
              <Card className="p-6 border-emerald-200 bg-emerald-50/50">
                <p className="text-slate-700 mb-4">塩酸を安全に取り扱うためのポイント：</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>保護具必須</strong>：手袋、ゴーグル、防護服を着用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>換気を徹底</strong>：蒸気を吸わないよう注意</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>希釈は水に酸</strong>：逆は発熱・飛散の危険</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>塩素系と混ぜない</strong>：有毒ガス発生</span>
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
