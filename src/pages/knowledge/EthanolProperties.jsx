import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import PageHeader from "../../components/PageHeader";
import ContactBand from "../../components/ContactBand";
import SEOHead from "../../components/SEOHead";
import {
  Flame,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Info,
  Beaker,
  Droplets,
  ThermometerSun
} from "lucide-react";

export default function EthanolProperties() {
  return (
    <>
      <SEOHead pageKey="knowledgeEthanolProperties" />

      <div className="bg-white">
        <PageHeader
          title="エタノールの性質と安全管理"
          crumbs={[{ name: "薬品の基礎知識", to: "/knowledge" }, { name: "エタノールの性質と安全管理" }]}
          lead="エタノール（エチルアルコール）は消毒から溶剤まで幅広く使われる基本的な有機溶剤です。引火性への注意点と適切な取り扱い方法を解説します。"
        >
          <div className="mt-3 flex items-center gap-2">
          <span className="border border-slate-400 bg-white px-1.5 py-px text-[11px] font-bold text-slate-700">試薬・研究用</span>
          <span className="text-xs text-slate-600">性質・安全管理</span>
          </div>
        </PageHeader>

        {/* 記事本文 */}
        <article className="layout-container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">

            {/* 導入 */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                エタノール（C₂H₅OH）は、アルコール類の中で最も汎用性が高く、消毒用から工業用溶剤、燃料まで幅広い用途があります。引火性液体であるため、取り扱いと保管には注意が必要です。
              </p>
            </div>

            {/* 基本的な性質 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />エタノールの基本性質</h2>
              <div>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 text-slate-700 font-medium w-1/3">化学式</td>
                        <td className="p-3 text-slate-600">C₂H₅OH（エチルアルコール）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">外観</td>
                        <td className="p-3 text-slate-600">無色透明の液体</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">臭い</td>
                        <td className="p-3 text-slate-600">特有の芳香（アルコール臭）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">沸点</td>
                        <td className="p-3 text-slate-600">78.4℃</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">引火点</td>
                        <td className="p-3 text-slate-600 text-red-600 font-medium">13℃（常温で引火の危険）</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700 font-medium">溶解性</td>
                        <td className="p-3 text-slate-600">水と任意の割合で混和</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 濃度による分類 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />濃度による分類と用途</h2>
              <div>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 font-bold text-slate-700">濃度</th>
                        <th className="text-left p-3 font-bold text-slate-700">名称</th>
                        <th className="text-left p-3 font-bold text-slate-700">主な用途</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 text-slate-700">99.5%以上</td>
                        <td className="p-3 text-slate-600">無水エタノール</td>
                        <td className="p-3 text-slate-600">試薬、電子部品洗浄</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">95%</td>
                        <td className="p-3 text-slate-600">工業用エタノール</td>
                        <td className="p-3 text-slate-600">溶剤、抽出</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">76.9〜81.4%</td>
                        <td className="p-3 text-slate-600">消毒用エタノール</td>
                        <td className="p-3 text-slate-600">手指消毒、器具消毒</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">変性アルコール</td>
                        <td className="p-3 text-slate-600">工業用</td>
                        <td className="p-3 text-slate-600">塗料、インク、燃料</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500">
                  ※ 消毒効果は70〜80%で最も高く、高濃度すぎると揮発が早く効果が低下します。
                </p>
              </div>
            </section>

            {/* 引火性に関する注意 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />引火性に関する注意</h2>
              <div className="border-l-4 border-red-500 bg-red-50 px-4 py-4 md:px-5">
                <p className="text-slate-600 leading-relaxed mb-4">
                  エタノールは引火点が13℃と低く、常温で引火の危険があります。消防法で「危険物第四類 アルコール類」に分類されています。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>火気厳禁</strong>：周囲での火気使用は禁止</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>静電気注意</strong>：静電気による着火の危険</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>蒸気注意</strong>：蒸気は空気より重く低所に滞留</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>換気必須</strong>：密閉空間では爆発の危険</span>
                  </li>
                </ul>
                <div className="bg-red-100 border border-red-200 rounded-sm p-4">
                  <p className="text-sm text-red-800 font-medium">
                    エタノールの炎は青白く見えにくいため、日中の火災は発見が遅れることがあります。
                  </p>
                </div>
              </div>
            </section>

            {/* 保存方法 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />正しい保存方法</h2>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>冷暗所</strong>で保管（直射日光・高温を避ける）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>密栓</strong>して保管（揮発防止）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>火気のない場所</strong>に保管</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>酸化剤</strong>から離して保管</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">指定数量以上は<strong>消防届出</strong>が必要</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-500 mt-4">
                  ※ 消防法上の指定数量：アルコール類 400L
                </p>
              </div>
            </section>

            {/* 安全な取り扱い */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />安全な取り扱いのポイント</h2>
              <div className="border-l-4 border-brand bg-brand-light px-4 py-4 md:px-5">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>換気</strong>：十分な換気のある場所で使用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>保護具</strong>：長時間接触時は手袋、ゴーグル着用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>静電気対策</strong>：接地（アース）を行う</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>漏洩時</strong>：火気を遠ざけ、吸収材で回収</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>消火</strong>：耐アルコール泡、粉末消火器を使用</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* よくある誤解 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />よくある誤解</h2>
              <div>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-slate-800 mb-1">「濃度が高いほど消毒効果が高い」</p>
                    <p className="text-sm text-slate-600">
                      実際は70〜80%が最も効果的です。高濃度（99%以上）は揮発が早く、菌と接触する時間が短いため効果が落ちます。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-1">「エタノールは安全」</p>
                    <p className="text-sm text-slate-600">
                      消毒薬として身近ですが、引火点が低い危険物です。大量使用時は火災リスクを意識してください。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-1">「メタノールと同じ」</p>
                    <p className="text-sm text-slate-600">
                      メタノール（メチルアルコール）は有毒で、誤飲すると失明や死亡の危険があります。用途を混同しないでください。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* まとめ */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />まとめ</h2>
              <div className="border-l-4 border-brand bg-brand-light px-4 py-4 md:px-5">
                <p className="text-slate-700 mb-4">エタノールを安全に使用するためのポイント：</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>引火点13℃</strong>：常温で引火の危険がある</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>火気厳禁</strong>・換気を徹底する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">消毒には<strong>70〜80%</strong>が最適</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">指定数量（400L）以上は<strong>消防届出</strong>が必要</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 関連記事 */}
            <section className="mb-10">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-2 font-serif text-lg md:text-xl font-bold text-slate-900 tracking-normal"><span aria-hidden className="block w-5 h-[2px] bg-brand shrink-0" />関連記事</h2>
              <Link
                to="/knowledge/hydrogen-peroxide-handling"
                className="block group"
              >
                <div className="border border-slate-200 px-4 py-3 hover:border-brand/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">関連記事</span>
                      <p className="font-bold text-slate-800 group-hover:text-brand">
                        過酸化水素の取り扱いと安全管理
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
