import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PrimaryCTA from "../components/PrimaryCTA";
// アイコン (lucide-react)
import { 
  Building2, 
  MapPin, 
  Phone, 
  History, 
  ShieldCheck, 
  Briefcase, 
  Users, 
  Award,
  CalendarDays,
  FileText
} from "lucide-react";

export default function Company() {
  // 沿革データ
  const history = [
    { date: "1933年（昭和8年）4月", text: "現在地にて初代 田路栄一が「大和薬房」の名称で開設" },
    { date: "1945年（昭和20年）6月", text: "戦災により焼失" },
    { date: "1946年（昭和21年）1月", text: "再度「大和薬房」を設立" },
    { date: "1950年（昭和25年）10月", text: "資本金100万円にて「大和薬品株式会社」を設立" },
    { date: "1965年（昭和40年）5月", text: "大和薬品株式会社 薬局部を設立" },
    { date: "1974年（昭和49年）4月", text: "資本金200万円に増資" },
    { date: "1976年（昭和51年）10月", text: "本社倉庫新築" },
    { date: "1989年（平成元年）3月", text: "田路栄一 会長に就任 / 田路享三 代表取締役に就任" },
    { date: "1989年（平成元年）4月", text: "資本金800万円に増資" },
    { date: "1989年（平成2年）4月", text: "資本金1,000万円に増資" },
    { date: "1999年（平成11年）4月", text: "神屋倉庫 区画整理のため解体後、月極駐車場へ" },
    { date: "2001年（平成13年）1月", text: "32台収容タワーパーキング完成" },
    { date: "2006年（平成18年）4月", text: "阿保倉庫改築" },
    { date: "2009年（平成21年）10月", text: "阿保倉庫 毒劇物倉庫新築" },
    { date: "2017年（平成29年）10月", text: "田路享三 代表取締役会長 / 田路裕之 代表取締役社長に就任" },
  ];

  // 事業領域
  const domains = [
    "化学合成工場", "医薬品製造所", "上下水道施設", "排水処理施設", "水産工場",
    "食肉工場", "食品工場", "精密機器工場", "皮革工場", "衣料クリーニング・リネン工場",
    "ガラス表面処理工場", "水質分析研究機関", "大学研究所", "学校関係のプール・温水プール",
    "スポーツクラブ", "銭湯", "鍍金・金属表面処理工場", "運動場整備用品",
    "衛生処理施設", "土壌処理施設", "ハウスクリーニング関係",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* =======================
          Header Section
      ======================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="relative layout-container py-12 md:py-16 text-center">
          <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">COMPANY</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            会社概要
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            創業90年を超える歴史と信頼。<br className="hidden md:inline" />
            地域に根ざした化学品供給のプロフェッショナルとして、お客様の事業を支えます。
          </p>
        </div>
      </section>

      {/* =======================
          Main Content
      ======================== */}
      <div className="layout-container py-12 grid gap-8 lg:grid-cols-[2fr_1fr] items-start">
        
        {/* Main Column */}
        <section className="space-y-8">
          
          {/* 会社概要テーブル */}
          <Card className="overflow-hidden border-slate-200 shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2">
              <Building2 className="text-emerald-600" size={20} />
              <h2 className="text-lg font-bold text-slate-900">会社概要</h2>
            </div>
            <div className="p-0">
              <table className="min-w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    { icon: Building2, label: "会社名", value: "大和薬品株式会社" },
                    { icon: Users, label: "代表者", value: "代表取締役社長：田路 裕之\n代表取締役会長：田路 享三" },
                    { icon: MapPin, label: "所在地", value: "〒670-0935 兵庫県姫路市北条口1丁目59番地" },
                    { icon: Phone, label: "連絡先", value: "TEL：079-281-0671 / FAX：079-224-1870" },
                    { icon: CalendarDays, label: "創業", value: "1933年（昭和8年）4月10日" },
                    { icon: FileText, label: "資本金", value: "1,000万円" },
                    { icon: Users, label: "従業員", value: "11名（男子7名・女子4名）" },
                    { icon: Award, label: "許認可", value: "毒物劇物一般販売業登録\n薬剤師：田路 享三、田路 裕之\n登録販売者：田路 富士子" },
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                      <th className="w-40 px-6 py-4 text-left align-top bg-white">
                        <div className="flex items-center gap-2 text-slate-500 font-semibold text-xs md:text-sm">
                          <row.icon size={16} className="text-emerald-500/70" />
                          {row.label}
                        </div>
                      </th>
                      <td className="px-6 py-4 text-slate-800 whitespace-pre-wrap leading-relaxed">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* 品質・安全への取り組み */}
          <Card className="p-8 border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30">
            <div className="flex items-start gap-4">
              <div className="shrink-0 p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-600 tracking-wider mb-1">QUALITY & SAFETY</p>
                <h2 className="text-xl font-bold text-slate-900 mb-3">品質・安全への取り組み</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  化学薬品を取り扱う企業として、法令順守を徹底しています。保管・輸送・提供の各工程において厳格な安全管理を実施し、SDS（安全データシート）の提供や取り扱い説明を通じて、お客様の安全な使用をサポートします。
                </p>
              </div>
            </div>
          </Card>

          {/* 事業内容 */}
          <Card className="border-slate-200 shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2">
              <Briefcase className="text-emerald-600" size={20} />
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h2 className="text-lg font-bold text-slate-900">事業内容</h2>
                <p className="text-xs text-slate-500">化学薬品・医薬品の販売、環境関連薬品の供給、不動産賃貸業 他</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                主な納入先・対応業種
              </p>
              <ul className="flex flex-wrap gap-2">
                {domains.map((d) => (
                  <li key={d} className="text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors cursor-default">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* 沿革 */}
          <Card className="border-slate-200 shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2">
              <History className="text-emerald-600" size={20} />
              <h2 className="text-lg font-bold text-slate-900">沿革</h2>
            </div>
            <div className="p-6 md:p-8">
              <ol className="relative border-l-2 border-slate-100 ml-3 space-y-8">
                {history.map((h, i) => (
                  <li key={i} className="pl-6 md:pl-8 relative">
                    {/* タイムラインの丸 */}
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-emerald-400 ring-4 ring-slate-50" />
                    
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
                      <span className="text-sm font-bold text-emerald-700 shrink-0 w-40">
                        {h.date}
                      </span>
                      <span className="text-sm text-slate-700 leading-relaxed font-medium">
                        {h.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Card>
        </section>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-8">
          
          {/* お問い合わせカード */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg shadow-emerald-900/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Phone size={80} className="text-emerald-900" />
            </div>
            <h3 className="text-sm font-bold text-emerald-600 mb-1 flex items-center gap-2">
              <Phone size={16} /> CONTACT
            </h3>
            <p className="text-lg font-bold text-slate-900 mb-4">お問い合わせ</p>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              製品の在庫確認やお取引のご相談など、お気軽にご連絡ください。
            </p>
            <a href="tel:0792810671" className="block w-full bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-xl py-3 text-center transition-colors mb-3">
              <span className="text-2xl font-extrabold text-slate-800">079-281-0671</span>
            </a>
            <div className="grid gap-2">
              <PrimaryCTA to="/contact?subject=見積依頼" label="見積・相談フォーム" className="w-full justify-center" />
            </div>
          </div>

          {/* アクセスカード */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-emerald-500" /> アクセス
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              〒670-0935<br/>
              兵庫県姫路市北条口1丁目59番地
            </p>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 mb-4 relative bg-slate-100">
               <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.635811776823!2d134.69324831518345!3d34.83226998039869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e20101735555%3A0x1122334455667788!2z5aSn5ZKM6IOc5ZOB5qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Link to="/access" className="block text-center text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
              詳しいアクセス情報を見る →
            </Link>
          </div>

        </aside>
      </div>
    </div>
  );
}