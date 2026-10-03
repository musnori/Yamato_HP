import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import PageHeader from "../../components/PageHeader";
import ContactBand from "../../components/ContactBand";
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

      <div className="bg-white">
        <PageHeader
          title="クエン酸の特性と活用法"
          crumbs={[{ name: "薬品の基礎知識", to: "/knowledge" }, { name: "クエン酸の特性と活用法" }]}
          lead="クエン酸は食品から工業用途まで幅広く使用される有機酸です。その化学的性質と、洗浄・食品・医薬品での活用方法を解説します。"
        >
          <div className="mt-3 flex items-center gap-2">
          <span className="border border-slate-400 bg-white px-1.5 py-px text-[11px] font-bold text-slate-700">工業用・医薬品関連</span>
          <span className="text-xs text-slate-600">特性・活用法</span>
          </div>
        </PageHeader>

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
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />クエン酸の基本性質</h2>
              <div>
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
              </div>
            </section>

            {/* 主な用途 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />主な用途</h2>
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Leaf className="text-brand" size={18} />
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
              </div>
            </section>

            {/* 洗浄効果のメカニズム */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />洗浄効果のメカニズム</h2>
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  クエン酸が水垢や石灰質を効果的に除去できる理由は、以下の2つの作用によります。
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-sm">
                    <h4 className="font-bold text-slate-800 mb-2">1. 酸による溶解作用</h4>
                    <div className="font-mono text-sm text-slate-700 mb-2">
                      CaCO₃ + 2H⁺ → Ca²⁺ + H₂O + CO₂↑
                    </div>
                    <p className="text-sm text-slate-600">
                      �ite炭酸カルシウム（水垢の主成分）を酸で溶解し、水溶性のカルシウムイオンに変換します。
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-sm">
                    <h4 className="font-bold text-slate-800 mb-2">2. キレート作用</h4>
                    <p className="text-sm text-slate-600">
                      クエン酸の3つのカルボキシル基が金属イオン（Ca²⁺、Mg²⁺、Fe³⁺など）を包み込んで安定化し、再付着を防ぎます。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 使用上の注意 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />使用上の注意点</h2>
              <div>
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
                <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 mt-4">
                  <p className="text-sm text-amber-800 font-medium">
                    掃除に使用する場合は、換気を良くし、使用後は水で十分にすすいでください。
                  </p>
                </div>
              </div>
            </section>

            {/* 保存方法 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />保存方法</h2>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>密封容器</strong>に入れて保管（吸湿性があるため）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>冷暗所</strong>で保管（高温多湿を避ける）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">食品用と工業用は<strong>区別して保管</strong></span>
                  </li>
                </ul>
                <p className="text-sm text-slate-500 mt-4">
                  ※ 一般的な保存状態では長期間安定ですが、吸湿すると固まりやすくなります。
                </p>
              </div>
            </section>

            {/* まとめ */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />まとめ</h2>
              <div className="border-l-4 border-brand bg-brand-light px-4 py-4 md:px-5">
                <p className="text-slate-700 mb-4">クエン酸の特徴と活用のポイント：</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>天然由来</strong>で安全性が高く、環境負荷が低い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>水垢除去</strong>に効果的（酸とキレート作用のダブル効果）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">食品・医薬品・工業用途と<strong>幅広く活用</strong>できる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">大理石など<strong>酸に弱い素材</strong>には使用不可</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 関連記事 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />関連記事</h2>
              <Link
                to="/knowledge/hydrochloric-acid-safety"
                className="block group"
              >
                <div className="border border-slate-200 px-4 py-3 hover:border-brand/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">関連記事</span>
                      <p className="font-bold text-slate-800 group-hover:text-brand">
                        塩酸の安全な取り扱い方法
                      </p>
                    </div>
                    <span className="text-slate-300 group-hover:text-brand">→</span>
                  </div>
                </div>
              </Link>
            </section>

            {/* 戻るリンク・お問い合わせ */}
            <div className="pt-5 border-t border-slate-200">
              <Link
                to="/knowledge"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand"
              >
                <ArrowLeft size={16} />
                薬品の基礎知識一覧に戻る
              </Link>
            </div>
          </div>
        </article>
        <ContactBand title="薬品の取り扱いについてのご相談" text="記事の内容や、薬品の選定・保管方法についてもお気軽にお問い合わせください。" />
      </div>
    </>
  );
}
