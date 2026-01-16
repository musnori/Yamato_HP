import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Card from "../../components/Card";
import PrimaryCTA from "../../components/PrimaryCTA";
import SEOHead from "../../components/SEOHead";
import {
  Scale,
  ClipboardCheck,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Beaker,
  FileText,
  Users
} from "lucide-react";

export default function SmallLotManufacturing() {
  return (
    <>
      <SEOHead pageKey="knowledgeSmallLotManufacturing" />

      <div className="bg-slate-50 min-h-screen">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-slate-200">
          <div className="layout-container py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-emerald-600">ホーム</Link>
              <span>/</span>
              <Link to="/knowledge" className="hover:text-emerald-600">薬品の基礎知識</Link>
              <span>/</span>
              <span className="text-slate-900">化学品の小ロット製造における注意点</span>
            </nav>
          </div>
        </div>

        {/* 記事ヘッダー */}
        <section className="bg-white border-b border-slate-200">
          <div className="layout-container py-8 md:py-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800">
                製造・取扱い
              </span>
              <span className="text-sm text-slate-400">実務知識</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              化学品の小ロット製造における注意点
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              少量生産・調合時に発生しやすいリスクと、品質を維持するための管理ポイント、安全対策について解説します。大量生産とは異なる、小ロット特有の課題を把握しましょう。
            </p>
          </div>
        </section>

        {/* 記事本文 */}
        <article className="layout-container py-8 md:py-12">
          <div className="max-w-3xl mx-auto">

            {/* 導入 */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                研究開発用のサンプル、特注品、試作品など、化学品を小ロットで製造・調合するケースは少なくありません。しかし、小ロット製造には大量生産とは異なる難しさがあります。計量誤差の影響が大きくなる、ロットごとのばらつきが出やすいなど、少量だからこその注意点を押さえておきましょう。
              </p>
            </div>

            {/* 小ロット製造の課題 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Scale size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">小ロット製造の課題</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  小ロット製造では、以下のような課題が発生しやすくなります。
                </p>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-slate-800 shrink-0">1.</span>
                      <div>
                        <p className="font-bold text-slate-800">計量誤差の影響が大きい</p>
                        <p className="text-sm text-slate-600 mt-1">
                          大量生産では0.1%の誤差は許容範囲でも、10kgの製造では10gの違いに。小ロットでは相対的な誤差が品質に直結します。
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-slate-800 shrink-0">2.</span>
                      <div>
                        <p className="font-bold text-slate-800">ロット間ばらつきが出やすい</p>
                        <p className="text-sm text-slate-600 mt-1">
                          少量ずつ何回も製造すると、混合条件や環境温度の違いがロットごとの品質差として現れやすくなります。
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-slate-800 shrink-0">3.</span>
                      <div>
                        <p className="font-bold text-slate-800">原料ロスが相対的に大きい</p>
                        <p className="text-sm text-slate-600 mt-1">
                          容器や配管への付着、洗浄残渣など、製造量に対するロス比率が高くなります。
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-slate-800 shrink-0">4.</span>
                      <div>
                        <p className="font-bold text-slate-800">コスト効率が悪い</p>
                        <p className="text-sm text-slate-600 mt-1">
                          段取り替え、洗浄、検査などの固定的な作業が製造量に対して大きな割合を占めます。
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 品質管理のポイント */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <ClipboardCheck size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">品質管理のポイント</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <h3 className="font-bold text-slate-800 mb-3">計量精度の確保</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">製造量に見合った精度のはかりを使用する（例：1kg製造なら0.1g単位）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">計量前にはかりの校正・ゼロ点調整を行う</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">ダブルチェック（二人での確認）を徹底する</span>
                  </li>
                </ul>

                <h3 className="font-bold text-slate-800 mb-3">作業手順の標準化</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">投入順序・混合時間・温度条件を文書化する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">チェックリストを作成し、作業漏れを防ぐ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">作業記録を残し、トレーサビリティを確保する</span>
                  </li>
                </ul>

                <h3 className="font-bold text-slate-800 mb-3">原料管理</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">原料のロット番号を記録し、追跡可能にする</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">開封日・使用期限を明記し、先入れ先出しを徹底</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">使用前に外観・性状の異常がないか確認する</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 安全対策 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">安全対策</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  小ロットでも化学品を扱う以上、安全対策は必須です。「少量だから大丈夫」という油断が事故につながります。
                </p>

                <h3 className="font-bold text-slate-800 mb-3">基本的な安全対策</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">SDS（安全データシート）を事前に確認する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">適切な保護具（手袋・保護メガネ・マスク等）を着用する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">換気の良い場所、または局所排気装置のある場所で作業する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">緊急時の対応（洗眼設備・消火器の位置）を把握しておく</span>
                  </li>
                </ul>

                <h3 className="font-bold text-slate-800 mb-3">混合禁止の確認</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
                      <span className="text-slate-700">酸とアルカリを混合しない（急激な発熱・飛散の危険）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
                      <span className="text-slate-700">塩素系と酸性物質を混合しない（塩素ガス発生）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
                      <span className="text-slate-700">酸化剤と還元剤を混合しない（発火・爆発の危険）</span>
                    </li>
                  </ul>
                </div>
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
                    <p className="font-bold text-slate-800 mb-1">計量単位を間違えた</p>
                    <p className="text-sm text-slate-600">
                      レシピの「g」を「kg」と読み間違えて100倍の量を投入。製品が規格外になりました。単位の確認は必須です。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800 mb-1">前回の洗浄が不十分だった</p>
                    <p className="text-sm text-slate-600">
                      容器に前ロットの残渣があり、混入してしまいました。特に色や性状が似ている場合は気づきにくいので注意が必要です。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800 mb-1">原料の取り違え</p>
                    <p className="text-sm text-slate-600">
                      似た名前・似た外観の原料を間違えて使用。ラベルの確認、保管場所の区分けで防げます。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-800 mb-1">混合条件の逸脱</p>
                    <p className="text-sm text-slate-600">
                      「いつもと同じ感覚」で混合時間を短縮したところ、均一に混ざらず品質不良に。手順書の遵守が重要です。
                    </p>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 文書化の重要性 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">文書化の重要性</h2>
              </div>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  小ロット製造でも、記録を残すことが品質維持の鍵です。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>製造記録</strong>：原料ロット、計量値、作業者、製造日時</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>作業手順書</strong>：投入順序、混合条件、注意事項</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>検査記録</strong>：外観、性状、必要な分析項目</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>逸脱記録</strong>：問題が発生した場合の原因と対策</span>
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
                    <span className="text-slate-700">小ロット製造は<strong>計量誤差・ロット間ばらつき</strong>が課題</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>適切な精度のはかり</strong>と<strong>ダブルチェック</strong>で計量ミスを防ぐ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>作業手順の標準化・文書化</strong>で品質を安定させる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">少量でも<strong>安全対策は必須</strong>。SDSを確認し保護具を着用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700"><strong>記録を残す</strong>ことでトレーサビリティと改善につなげる</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* 関連記事 */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4">関連記事</h2>
              <div className="space-y-3">
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
                <Link
                  to="/knowledge/calcium-chloride-hygroscopic"
                  className="block group"
                >
                  <Card className="p-4 hover:border-emerald-200 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400">関連記事</span>
                        <p className="font-bold text-slate-800 group-hover:text-emerald-700">
                          塩化カルシウムの吸湿性の原因
                        </p>
                      </div>
                      <span className="text-slate-300 group-hover:text-emerald-600">→</span>
                    </div>
                  </Card>
                </Link>
              </div>
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
