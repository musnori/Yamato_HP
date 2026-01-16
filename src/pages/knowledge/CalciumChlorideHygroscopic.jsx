import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Card from "../../components/Card";
import PrimaryCTA from "../../components/PrimaryCTA";
import SEOHead from "../../components/SEOHead";
import {
  Droplets,
  Snowflake,
  Package,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Atom,
  ThermometerSnowflake
} from "lucide-react";

export default function CalciumChlorideHygroscopic() {
  return (
    <>
      <SEOHead pageKey="knowledgeCalciumChlorideHygroscopic" />

      <div className="bg-slate-50 min-h-screen">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-slate-200">
          <div className="layout-container py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-emerald-600">ホーム</Link>
              <span>/</span>
              <Link to="/knowledge" className="hover:text-emerald-600">薬品の基礎知識</Link>
              <span>/</span>
              <span className="text-slate-900">塩化カルシウムの吸湿性の原因</span>
            </nav>
          </div>
        </div>

        {/* 記事ヘッダー */}
        <section className="bg-white border-b border-slate-200">
          <div className="layout-container py-8 md:py-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                工業用薬品
              </span>
              <span className="text-sm text-slate-400">化学的性質</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              塩化カルシウムの吸湿性の原因
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              塩化カルシウムはなぜ強い吸湿性を持つのか。化学的な原理から、融雪剤・乾燥剤としての活用法、保管時の固結を防ぐコツまで、実務に役立つ情報を解説します。
            </p>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="layout-container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">

            {/* 導入 */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                塩化カルシウム（CaCl₂）は、乾燥剤や融雪剤として広く使用される化学品です。開封後に放置すると、みるみるうちに湿気を吸って溶けてしまった経験をお持ちの方も多いのではないでしょうか。この強力な吸湿性はなぜ生じるのか、原理を理解すれば適切な管理ができるようになります。
              </p>
            </div>

            {/* 吸湿性の化学的原理 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Atom size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">吸湿性の化学的原理</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  塩化カルシウムの吸湿性は、主に以下の化学的特性によるものです。
                </p>

                <h3 className="font-bold text-slate-800 mb-2">1. イオン性結晶と水和反応</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  塩化カルシウムはCa²⁺（カルシウムイオン）とCl⁻（塩化物イオン）からなるイオン性結晶です。これらのイオンは水分子と強く結合（水和）する性質があります。
                </p>

                <div className="bg-slate-50 p-4 rounded-lg mb-4 font-mono text-sm text-slate-700">
                  CaCl₂ + 6H₂O → CaCl₂・6H₂O<br />
                  <span className="text-slate-500">（無水物が水を吸収して六水和物に変化）</span>
                </div>

                <h3 className="font-bold text-slate-800 mb-2">2. 潮解性</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  塩化カルシウムは空気中の水蒸気を吸収し、最終的には自らの水分で溶解してしまう「潮解性」を持ちます。湿度が約30%以上あれば吸湿が始まり、高湿度環境では完全に液状になることもあります。
                </p>

                <h3 className="font-bold text-slate-800 mb-2">3. 発熱反応</h3>
                <p className="text-slate-600 leading-relaxed">
                  水と反応する際に熱を発生します（溶解熱）。この発熱も融雪剤として効果的な理由の一つです。
                </p>
              </Card>
            </section>

            {/* 用途と活用法 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Snowflake size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">吸湿性を活かした用途</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <ThermometerSnowflake size={18} className="text-blue-600" />
                      <h3 className="font-bold text-slate-800">融雪剤・凍結防止剤</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      道路や駐車場の凍結防止に使用されます。水と反応する際の発熱と、塩の凝固点降下効果により、氷点下でも凍結を防ぎます。
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets size={18} className="text-blue-600" />
                      <h3 className="font-bold text-slate-800">乾燥剤・除湿剤</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      押し入れやクローゼットの除湿、工業製品の乾燥保存などに活用されます。吸湿量が自重の3〜4倍に達することも。
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Package size={18} className="text-blue-600" />
                      <h3 className="font-bold text-slate-800">防塵剤</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      グラウンドや未舗装道路に散布し、吸湿性で表面を湿らせることで砂埃の飛散を抑えます。
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Atom size={18} className="text-blue-600" />
                      <h3 className="font-bold text-slate-800">コンクリート硬化促進</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      寒冷期のコンクリート工事で、凝固点を下げて硬化を促進させる目的で添加されることがあります。
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* 保管方法 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Package size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">正しい保管方法</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  塩化カルシウムの強い吸湿性は、裏を返せば保管が難しいことを意味します。固結や潮解を防ぐには、以下の点に注意してください。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-700">密封容器で保管する</span>
                      <p className="text-sm text-slate-500 mt-0.5">
                        開封後は必ず密閉できる容器に移し、空気との接触を最小限に抑えます。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-700">湿度の低い場所で保管する</span>
                      <p className="text-sm text-slate-500 mt-0.5">
                        湿度50%以下の環境が理想的。除湿機のある倉庫や、乾燥した室内が適しています。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-700">使用直前まで開封しない</span>
                      <p className="text-sm text-slate-500 mt-0.5">
                        袋ごとの小分け包装があれば、必要な分だけ開封するのが効果的です。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-medium text-slate-700">直接床に置かない</span>
                      <p className="text-sm text-slate-500 mt-0.5">
                        コンクリート床からの湿気を吸収するため、パレットやすのこの上で保管します。
                      </p>
                    </div>
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
                    <p className="font-bold text-slate-800 mb-1">開封後にそのまま放置した</p>
                    <p className="text-sm text-slate-600">
                      梅雨時期に袋を開けたまま数日置いたら、粒状だったものが液状に。使用できなくなりました。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800 mb-1">シーズンオフの保管を怠った</p>
                    <p className="text-sm text-slate-600">
                      融雪剤として購入した塩化カルシウムを翌シーズンまで放置したところ、袋の中でカチカチに固結。砕くのに苦労しました。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800 mb-1">金属製の容器で保管した</p>
                    <p className="text-sm text-slate-600">
                      吸湿して水溶液化した塩化カルシウムは金属を腐食させます。鉄製の缶で保管したら、缶底に穴が開いてしまいました。
                    </p>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 取り扱い上の注意 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">取り扱い上の注意</h2>
              <Card className="p-6 border-amber-200 bg-amber-50/50">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>皮膚への付着</strong>：長時間の接触で乾燥・刺激を感じることがあります。作業後は手を洗いましょう。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>目への接触</strong>：粉塵が目に入ると刺激があります。保護メガネの着用をお勧めします。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>環境への配慮</strong>：大量散布は植物や水系に影響を与える可能性があります。必要量を守りましょう。</span>
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
                    <span className="text-slate-700">塩化カルシウムの吸湿性は<strong>イオンの水和反応</strong>と<strong>潮解性</strong>による</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">融雪剤・乾燥剤・防塵剤など、<strong>吸湿性を活かした用途</strong>が多数</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">保管は<strong>密封・低湿度</strong>が鉄則</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>金属製容器は避け</strong>、プラスチック製の密閉容器を使用</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 関連記事 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">関連記事</h2>
              <Link
                to="/knowledge/small-lot-manufacturing"
                className="block group"
              >
                <Card className="p-4 hover:border-emerald-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">次に読む</span>
                      <p className="font-bold text-slate-800 group-hover:text-emerald-700">
                        化学品の小ロット製造における注意点
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
