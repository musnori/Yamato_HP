import React from "react";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";
import Card from "../components/Card";
// アイコン (lucide-react)
import { 
  Trash2, 
  Search, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ClipboardList,
  Truck
} from "lucide-react";

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* =======================
          Hero Section
      ======================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        
        <div className="relative layout-container py-12 md:py-20 text-center">
          <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">SERVICES</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            サービス案内
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            薬品の販売だけでなく、不要になった薬品の回収・処分や、<br className="hidden md:inline" />
            現場の課題に合わせた選定サポートまで、ワンストップで対応いたします。
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryCTA 
              to="/contact?subject=サービスの相談" 
              label="見積・相談する" 
              className="shadow-lg shadow-emerald-900/10"
            />
            <PrimaryCTA to="/products" label="製品を探す" variant="outline" />
          </div>
        </div>
      </section>

      {/* =======================
          RECOVERY & DISPOSAL
      ======================== */}
      <Section
        eyebrow="RECOVERY & DISPOSAL"
        title="回収・処分のご相談"
        description="「これ、どう処分すればいい？」にお応えします。"
      >
        <Card className="p-8 md:p-10 border-slate-200 overflow-hidden relative">
          {/* 背景装飾 */}
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <Trash2 size={200} />
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* 左：画像レイアウト */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                    <img
                      src="/images/haiki1.jpg"
                      alt="薬品回収の様子"
                      className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                    <img
                      src="/images/haiki2.jpg"
                      alt="混在した薬品"
                      className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              {/* キャプション */}
              <div className="absolute -bottom-6 md:-bottom-8 left-0 right-0 text-center">
                <p className="inline-block bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] text-slate-500 border border-slate-200 shadow-sm">
                  ※写真はイメージです。法令遵守の手順をご案内します。
                </p>
              </div>
            </div>

            {/* 右：テキストコンテンツ */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-6">
                <Truck size={14} /> 回収・処分サービス
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                ラベル不明や長期保管品も<br />
                <span className="text-emerald-600">安全・確実</span>に処理します。
              </h2>

              <p className="text-slate-600 leading-relaxed mb-8">
                「中身が何かわからない」「固まってしまっている」といった状態でもご相談ください。
                専門スタッフが現地確認を行い、マニフェスト発行を含めた適正な処理フローをご提案します。
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "ラベル不明・混載状態でも対応可能",
                  "事前の現地確認・安全確認を実施",
                  "マニフェスト伝票の発行・管理を支援",
                  "法令（廃棄物処理法）に準拠したフロー提案",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <PrimaryCTA
                  to={`/contact?subject=${encodeURIComponent("薬品の回収・処分の相談")}`}
                  label="回収・処分について相談する"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/10"
                />
                <PrimaryCTA to="/contact" label="まずは問い合わせ" variant="outline" />
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* =======================
          SUPPORT (Steps)
      ======================== */}
      <Section
        eyebrow="SUPPORT"
        title="用途相談・技術サポート"
        description="目的の薬品が見つからない場合も、用途や課題を共有いただければ最適な提案を行います。"
        className="bg-white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { 
              step: "01",
              icon: Search,
              title: "用途を整理", 
              text: "現場の条件、対象物、解決したい課題などをヒアリングします。「何を使えばいいかわからない」段階からサポートします。" 
            },
            { 
              step: "02",
              icon: FileText,
              title: "最適な選定", 
              text: "安全性・コスト・納期・法規制を踏まえ、最適な薬品をご提案。必要に応じてSDS（安全データシート）も提供します。" 
            },
            { 
              step: "03",
              icon: ClipboardList,
              title: "見積・導入", 
              text: "選定した製品のお見積りと、納品までのスケジュールをご案内。継続的な供給体制も構築します。" 
            },
          ].map((item, index) => (
            <div key={item.title} className="relative group">
              {/* 矢印（PCのみ） */}
              {index < 2 && (
                <div className="hidden md:block absolute top-12 -right-3 z-10 text-slate-200">
                  <ArrowRight size={24} />
                </div>
              )}
              
              <Card className="h-full p-6 border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  {/* ▼▼▼ 修正: 文字色を text-slate-100 から text-emerald-200 に変更して視認性を向上 ▼▼▼ */}
                  <span className="text-4xl font-black text-emerald-200 group-hover:text-emerald-600 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <PrimaryCTA to="/contact?subject=用途相談" label="技術スタッフに相談する" variant="outline" />
        </div>
      </Section>
    </div>
  );
}