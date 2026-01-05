import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PrimaryCTA from "../components/PrimaryCTA";
import Section from "../components/Section";
import SEOHead from "../components/SEOHead";
import { BreadcrumbSchema, FAQPageSchema } from "../components/StructuredData";
import {
  MapPin,
  Truck,
  FileText,
  Phone,
  Clock,
  Package,
  CheckCircle2,
  Building2,
  Beaker
} from "lucide-react";

export default function Hyogo() {
  const faqs = [
    {
      q: "小ロット対応は可能ですか？",
      a: "はい、可能です。お客様のご要望に応じて柔軟に対応いたします。まずはお問い合わせください。"
    },
    {
      q: "見積依頼の方法を教えてください",
      a: "お問い合わせフォーム、またはお電話（079-281-0671）にて承っております。製品名・数量・用途をお知らせください。"
    },
    {
      q: "納期の目安はどれくらいですか？",
      a: "在庫品は最短即日～翌日出荷が可能です。取り寄せ品は1週間前後となります。お急ぎの場合はご相談ください。"
    },
    {
      q: "対応エリアはどこまでですか？",
      a: "兵庫県内を中心に、大阪・岡山・京都など関西エリアへ対応しております。その他の地域もご相談ください。"
    },
    {
      q: "SDS（安全データシート）・MSDSは提供してもらえますか？",
      a: "はい、すべての化学薬品に対してSDS（旧MSDS）を提供しております。製品納品時または事前にご提供可能です。"
    },
    {
      q: "荷姿や梱包の相談はできますか？",
      a: "はい、可能です。ドラム缶、一斗缶、ポリ容器など、ご要望に応じた荷姿でご提供いたします。"
    }
  ];

  const strengths = [
    {
      icon: MapPin,
      title: "兵庫県姫路市を拠点",
      desc: "JR姫路駅から徒歩圏内。兵庫県内および関西エリアへのアクセスに優れた立地です。"
    },
    {
      icon: Package,
      title: "在庫を活かした即応体制",
      desc: "主要な化学薬品・工業薬品を常時在庫。急なご依頼にも迅速に対応します。"
    },
    {
      icon: Truck,
      title: "自社便とメーカー直送を使い分け",
      desc: "納期・コストに応じて最適な配送方法を選択し、効率的な納品を実現します。"
    },
    {
      icon: FileText,
      title: "SDS提供・安全サポート",
      desc: "すべての化学薬品にSDSを添付。保管方法や取り扱い方法もサポートします。"
    }
  ];

  return (
    <>
      <SEOHead pageKey="hyogo" />
      <BreadcrumbSchema items={[{ name: "ホーム", url: "/" }, { name: "兵庫・姫路の化学薬品供給" }]} />
      <FAQPageSchema faqs={faqs} />

      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white border-b border-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
          <div className="relative layout-container py-10 md:py-12 lg:py-14 text-center">
            <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">HYOGO / HIMEJI</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              兵庫県姫路市を拠点とした<br className="md:hidden" />
              化学薬品・工業薬品の供給体制
            </h1>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
              創業90年以上の実績。兵庫県姫路市から関西エリアへ、<br className="hidden md:inline" />
              化学薬品・工業薬品・試薬・溶剤を安定供給しています。
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="layout-container py-12">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] items-start">

            {/* Left Column */}
            <div className="space-y-8">

              {/* 対応エリア */}
              <Card className="p-6 md:p-8 border-slate-200 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600 tracking-wider mb-1">SERVICE AREA</p>
                    <h2 className="text-2xl font-bold text-slate-900">対応エリア</h2>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  兵庫県姫路市を拠点に、兵庫県内全域、大阪府、岡山県、京都府、滋賀県、奈良県、和歌山県など関西エリアへ化学薬品・工業薬品を供給しています。
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {["兵庫県", "大阪府", "岡山県", "京都府", "滋賀県", "奈良県", "和歌山県", "その他地域（要相談）"].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      {area}
                    </div>
                  ))}
                </div>
              </Card>

              {/* 強み */}
              <Card className="p-6 md:p-8 border-slate-200 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0 p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600 tracking-wider mb-1">STRENGTH</p>
                    <h2 className="text-2xl font-bold text-slate-900">大和薬品の供給体制</h2>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {strengths.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="shrink-0 p-2 bg-white text-emerald-600 rounded-lg border border-emerald-100">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* よくある相談（FAQ） */}
              <Card className="p-6 md:p-8 border-slate-200 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0 p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                    <Beaker size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600 tracking-wider mb-1">FAQ</p>
                    <h2 className="text-2xl font-bold text-slate-900">よくある相談</h2>
                  </div>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                      <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-start gap-2">
                        <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Q</span>
                        {faq.q}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed pl-7">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </Card>

            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-8">

              {/* CTAカード */}
              <div className="bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold mb-2">化学薬品のご相談・お見積り</h3>
                <p className="text-sm text-emerald-100 mb-4 leading-relaxed">
                  小ロット対応・納期相談・SDS提供など、お気軽にお問い合わせください。
                </p>
                <PrimaryCTA
                  to="/contact?subject=兵庫エリアからの相談"
                  label="お問い合わせフォーム"
                  className="w-full justify-center bg-white !text-emerald-900 hover:bg-emerald-50 border-transparent mb-3"
                />
                <div className="pt-3 border-t border-emerald-600">
                  <p className="text-xs text-emerald-100 mb-2">お電話でのお問い合わせ</p>
                  <a href="tel:0792810671" className="block text-center text-2xl font-extrabold hover:underline">
                    079-281-0671
                  </a>
                  <div className="flex items-center justify-center gap-1 mt-2 text-xs text-emerald-200">
                    <Clock size={14} />
                    受付時間 9:00〜17:00
                  </div>
                </div>
              </div>

              {/* 関連リンク */}
              <Card className="p-6 border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 mb-4">関連ページ</h3>
                <div className="space-y-2">
                  <Link to="/products" className="block text-sm text-emerald-600 hover:text-emerald-700 hover:underline">
                    → 取扱製品一覧を見る
                  </Link>
                  <Link to="/stock" className="block text-sm text-emerald-600 hover:text-emerald-700 hover:underline">
                    → 主要在庫品を見る
                  </Link>
                  <Link to="/services" className="block text-sm text-emerald-600 hover:text-emerald-700 hover:underline">
                    → サービス内容を見る
                  </Link>
                  <Link to="/company" className="block text-sm text-emerald-600 hover:text-emerald-700 hover:underline">
                    → 会社概要を見る
                  </Link>
                  <Link to="/access" className="block text-sm text-emerald-600 hover:text-emerald-700 hover:underline">
                    → アクセス情報を見る
                  </Link>
                </div>
              </Card>

            </aside>

          </div>
        </div>

      </div>
    </>
  );
}
