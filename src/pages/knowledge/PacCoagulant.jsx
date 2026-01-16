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
  Settings,
  Waves
} from "lucide-react";

export default function PacCoagulant() {
  return (
    <>
      <SEOHead pageKey="knowledgePacCoagulant" />

      <div className="bg-slate-50 min-h-screen">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-slate-200">
          <div className="layout-container py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-emerald-600">ホーム</Link>
              <span>/</span>
              <Link to="/knowledge" className="hover:text-emerald-600">薬品の基礎知識</Link>
              <span>/</span>
              <span className="text-slate-900">PAC（ポリ塩化アルミニウム）の特性と使い方</span>
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
              <span className="text-sm text-slate-400">凝集剤</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              PAC（ポリ塩化アルミニウム）の特性と使い方
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              PACは上水道・排水処理で最も広く使われる凝集剤です。効果的な使用方法、適正なpH範囲、保管上の注意点を解説します。
            </p>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="layout-container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">

            {/* 導入 */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                PAC（Poly Aluminum Chloride：ポリ塩化アルミニウム）は、水中の濁り成分や有機物を凝集・沈殿させる無機系凝集剤です。上水道の浄水処理から工場排水の処理まで、幅広く使用されています。
              </p>
            </div>

            {/* 基本的な性質 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Info size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">PACの基本性質</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 text-slate-700 font-medium w-1/3">化学式</td>
                        <td className="p-3 text-slate-600">[Al₂(OH)ₙCl₆₋ₙ]ₘ（n=1〜5）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">外観</td>
                        <td className="p-3 text-slate-600">淡黄色〜黄褐色の液体</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">酸化アルミニウム濃度</td>
                        <td className="p-3 text-slate-600">約10%（Al₂O₃換算）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">pH</td>
                        <td className="p-3 text-slate-600">約3.5〜5.0（酸性）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">比重</td>
                        <td className="p-3 text-slate-600">約1.19〜1.21</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500">
                  ※ 製品により規格が異なります。使用前にSDSを確認してください。
                </p>
              </Card>
            </section>

            {/* 凝集のメカニズム */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Waves size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">凝集のメカニズム</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  PACは水中で以下のメカニズムにより濁質を除去します。
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">1. 電荷中和</h4>
                    <p className="text-sm text-slate-600">
                      水中の濁質粒子は通常マイナスに帯電しています。PACのプラス電荷がこれを中和し、粒子同士が反発しなくなります。
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">2. 架橋凝集</h4>
                    <p className="text-sm text-slate-600">
                      アルミニウムの水酸化物がゲル状のフロックを形成し、細かい粒子を取り込んで大きな塊にします。
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">3. 沈降分離</h4>
                    <p className="text-sm text-slate-600">
                      大きくなったフロックは重力で沈降し、上澄みと分離されます。
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* 硫酸アルミニウムとの違い */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Beaker size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">硫酸アルミニウムとの違い</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  従来使われてきた硫酸アルミニウム（硫酸バンド）と比較したPACの特徴です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 font-bold text-slate-700">項目</th>
                        <th className="text-left p-3 font-bold text-slate-700">PAC</th>
                        <th className="text-left p-3 font-bold text-slate-700">硫酸アルミニウム</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">適正pH範囲</td>
                        <td className="p-3 text-emerald-600">広い（pH 5〜9）</td>
                        <td className="p-3 text-slate-600">狭い（pH 5.5〜7.5）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">低水温時</td>
                        <td className="p-3 text-emerald-600">効果を維持</td>
                        <td className="p-3 text-slate-600">効果低下</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">フロック形成</td>
                        <td className="p-3 text-emerald-600">速い・大きい</td>
                        <td className="p-3 text-slate-600">やや遅い</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">使用量</td>
                        <td className="p-3 text-emerald-600">少なくて済む</td>
                        <td className="p-3 text-slate-600">多め</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">汚泥発生量</td>
                        <td className="p-3 text-emerald-600">少ない</td>
                        <td className="p-3 text-slate-600">多め</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </section>

            {/* 使用上のポイント */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Settings size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">効果的な使用のポイント</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">適正pH範囲を維持</span>
                      <p className="text-sm text-slate-600">pH 6〜8で最も効果的。pHが外れると凝集不良に。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">急速撹拌 → 緩速撹拌</span>
                      <p className="text-sm text-slate-600">最初は速く混ぜて分散させ、その後ゆっくり撹拌してフロックを成長させる。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">適正注入量の確認</span>
                      <p className="text-sm text-slate-600">ジャーテスト（凝集試験）で最適な注入量を決定する。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-800">高分子凝集剤との併用</span>
                      <p className="text-sm text-slate-600">必要に応じてアニオン系高分子凝集剤を併用し、フロックを強化。</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 注意点 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">取り扱い上の注意点</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>酸性液体</strong>のため、皮膚・目に付着すると刺激がある</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>アルカリ</strong>と混合すると水酸化アルミニウムが沈殿</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>金属容器は不可</strong>（腐食するため）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>凍結</strong>すると品質が劣化（5℃以下での保管を避ける）</span>
                  </li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800 font-medium">
                    過剰注入は処理水中のアルミニウム濃度上昇につながります。適正量を守ってください。
                  </p>
                </div>
              </Card>
            </section>

            {/* 保存方法 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Droplets size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">保存方法</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>PE・FRP製タンク</strong>で保管</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>直射日光を避け</strong>、屋内または遮光保管</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>5〜35℃</strong>の範囲で保管（凍結・高温を避ける）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>密閉</strong>して保管（異物混入防止）</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-500 mt-4">
                  ※ 長期保管すると沈殿が生じることがあります。使用前に撹拌してください。
                </p>
              </Card>
            </section>

            {/* まとめ */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">まとめ</h2>
              <Card className="p-6 border-emerald-200 bg-emerald-50/50">
                <p className="text-slate-700 mb-4">PACを効果的に使用するためのポイント：</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>pH 6〜8</strong>で最も効果的に作用する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">硫酸アルミニウムより<strong>適用範囲が広い</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>ジャーテスト</strong>で適正注入量を決定する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>凍結を避けて</strong>5〜35℃で保管する</span>
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
                      <span className="text-xs text-slate-400">関連記事</span>
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
