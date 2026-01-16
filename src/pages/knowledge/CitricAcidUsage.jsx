import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Card from "../../components/Card";
import PrimaryCTA from "../../components/PrimaryCTA";
import SEOHead from "../../components/SEOHead";
import {
  Beaker,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Info,
  Sparkles,
  Droplets,
  Leaf
} from "lucide-react";

export default function CitricAcidUsage() {
  return (
    <>
      <SEOHead pageKey="knowledgeCitricAcidUsage" />

      <div className="bg-slate-50 min-h-screen">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-slate-200">
          <div className="layout-container py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-emerald-600">ホーム</Link>
              <span>/</span>
              <Link to="/knowledge" className="hover:text-emerald-600">薬品の基礎知識</Link>
              <span>/</span>
              <span className="text-slate-900">クエン酸の特性と活用法</span>
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
              <span className="text-sm text-slate-400">特性・活用法</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              クエン酸の特性と活用法
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              クエン酸は食品から工業用途まで幅広く使用される有機酸です。その化学的性質と、洗浄・食品・医薬品での活用方法を解説します。
            </p>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="layout-container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">

            {/* 導入 */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                クエン酸（C₆H₈O₇）は柑橘類に多く含まれる天然の有機酸で、安全性が高く環境にも優しい特徴があります。食品添加物から工業用洗浄剤まで、多様な分野で活用されています。
              </p>
            </div>

            {/* 基本的な性質 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Info size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">クエン酸の基本性質</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 text-slate-700 font-medium w-1/3">化学式</td>
                        <td className="p-3 text-slate-600">C₆H₈O₇（クエン酸一水和物：C₆H₈O₇・H₂O）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">外観</td>
                        <td className="p-3 text-slate-600">白色の結晶性粉末</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">味</td>
                        <td className="p-3 text-slate-600">強い酸味</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">溶解性</td>
                        <td className="p-3 text-slate-600">水に非常に溶けやすい（20℃で約73g/100mL）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">pH</td>
                        <td className="p-3 text-slate-600">1%水溶液で約pH 2.2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  クエン酸は3つのカルボキシル基（-COOH）を持つトリカルボン酸で、キレート作用（金属イオンを捕捉する能力）があります。
                </p>
              </Card>
            </section>

            {/* 主な用途 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">主な用途</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Leaf className="text-emerald-500" size={18} />
                      食品分野
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600 ml-6">
                      <li>• 酸味料（清涼飲料水、ジャム、菓子類）</li>
                      <li>• pH調整剤</li>
                      <li>• 酸化防止の補助剤</li>
                      <li>• 発泡性入浴剤の原料</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Droplets className="text-blue-500" size={18} />
                      洗浄・清掃分野
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600 ml-6">
                      <li>• 水垢・石灰スケールの除去</li>
                      <li>• 電気ポット、加湿器の洗浄</li>
                      <li>• 食器洗い機の庫内洗浄</li>
                      <li>• 浴室・トイレの清掃</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Beaker className="text-purple-500" size={18} />
                      工業・医薬品分野
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600 ml-6">
                      <li>• 金属表面処理（不動態化処理）</li>
                      <li>• 医薬品の酸味料・pH調整剤</li>
                      <li>• 化粧品のpH調整</li>
                      <li>• 写真現像用定着液</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            {/* 洗浄効果のメカニズム */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Droplets size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">洗浄効果のメカニズム</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  クエン酸が水垢や石灰質を効果的に除去できる理由は、以下の2つの作用によります。
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">1. 酸による溶解作用</h4>
                    <div className="font-mono text-sm text-slate-700 mb-2">
                      CaCO₃ + 2H⁺ → Ca²⁺ + H₂O + CO₂↑
                    </div>
                    <p className="text-sm text-slate-600">
                      �ite炭酸カルシウム（水垢の主成分）を酸で溶解し、水溶性のカルシウムイオンに変換します。
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">2. キレート作用</h4>
                    <p className="text-sm text-slate-600">
                      クエン酸の3つのカルボキシル基が金属イオン（Ca²⁺、Mg²⁺、Fe³⁺など）を包み込んで安定化し、再付着を防ぎます。
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* 使用上の注意 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">使用上の注意点</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>大理石・御影石</strong>には使用不可（酸で�ite溶解する）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>鉄製品</strong>には長時間接触させない（錆びの原因に）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>塩素系漂白剤</strong>との併用は避ける（有毒ガス発生の可能性）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">高濃度溶液は<strong>皮膚・目に刺激</strong>がある</span>
                  </li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-amber-800 font-medium">
                    掃除に使用する場合は、換気を良くし、使用後は水で十分にすすいでください。
                  </p>
                </div>
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
                    <span className="text-slate-700"><strong>密封容器</strong>に入れて保管（吸湿性があるため）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>冷暗所</strong>で保管（高温多湿を避ける）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">食品用と工業用は<strong>区別して保管</strong></span>
                  </li>
                </ul>
                <p className="text-sm text-slate-500 mt-4">
                  ※ 一般的な保存状態では長期間安定ですが、吸湿すると固まりやすくなります。
                </p>
              </Card>
            </section>

            {/* まとめ */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">まとめ</h2>
              <Card className="p-6 border-emerald-200 bg-emerald-50/50">
                <p className="text-slate-700 mb-4">クエン酸の特徴と活用のポイント：</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>天然由来</strong>で安全性が高く、環境負荷が低い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>水垢除去</strong>に効果的（酸とキレート作用のダブル効果）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">食品・医薬品・工業用途と<strong>幅広く活用</strong>できる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">大理石など<strong>酸に弱い素材</strong>には使用不可</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 関連記事 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">関連記事</h2>
              <Link
                to="/knowledge/hydrochloric-acid-safety"
                className="block group"
              >
                <Card className="p-4 hover:border-emerald-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">関連記事</span>
                      <p className="font-bold text-slate-800 group-hover:text-emerald-700">
                        塩酸の安全な取り扱い方法
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
