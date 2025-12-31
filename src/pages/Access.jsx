import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryCTA from "../components/PrimaryCTA";
// アイコン (lucide-react)
import { 
  MapPin, 
  Phone, 
  Printer, 
  Clock, 
  Train, 
  Navigation, 
  Building2, 
  Warehouse, 
  AlertTriangle,
  ArrowRight
} from "lucide-react";

export default function Access() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("hq");

  const tabs = [
    { id: "hq", label: "本社", icon: Building2 },
    { id: "abo", label: "阿保倉庫", icon: Warehouse },
    { id: "shikito", label: "飾東倉庫", icon: Warehouse },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* =======================
          Header Section
      ======================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="relative layout-container py-12 md:py-16 text-center">
          <p className="text-sm font-bold tracking-widest text-emerald-600 mb-2">ACCESS</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            アクセス
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            本社および各倉庫の所在地をご案内します。<br className="hidden md:inline" />
            ご来社・搬入の際は、事前にお電話にてご連絡いただけますとスムーズです。
          </p>
        </div>
      </section>

      {/* =======================
          Tab Navigation
      ======================== */}
      <div className="layout-container -mt-8 relative z-10">
        <div className="bg-white p-2 rounded-2xl shadow-lg shadow-emerald-900/5 border border-slate-100 flex flex-wrap sm:flex-nowrap gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20 transform scale-[1.02]"
                    : "bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                <tab.icon size={18} className={isActive ? "text-emerald-100" : "text-slate-400"} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* =======================
          Main Content
      ======================== */}
      <div className="layout-container py-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[500px]">
          
          {/* --- 本社パネル --- */}
          {activeTab === "hq" && (
            <div className="grid lg:grid-cols-2 animate-fade-in">
              {/* 情報エリア */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-6 w-fit">
                  <Building2 size={14} /> HEAD OFFICE
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">本社所在地</h2>
                
                <div className="space-y-6">
                  <InfoRow icon={MapPin} label="住所">
                    〒670-0935 <br />
                    兵庫県姫路市北条口1丁目59番地
                  </InfoRow>
                  <InfoRow icon={Phone} label="電話番号">
                    <a href="tel:0792810671" className="text-xl font-bold text-emerald-700 hover:underline">
                      079-281-0671
                    </a>
                  </InfoRow>
                  <InfoRow icon={Printer} label="FAX">
                    079-224-1870
                  </InfoRow>
                  <InfoRow icon={Clock} label="営業時間">
                    9:00 〜 17:00（土日祝除く）
                  </InfoRow>
                  <InfoRow icon={Train} label="アクセス">
                    JR「姫路駅」より徒歩約6分
                  </InfoRow>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <PrimaryCTA 
                    to="tel:0792810671" 
                    label="電話をかける" 
                    className="flex-1 justify-center bg-emerald-600 text-white shadow-lg shadow-emerald-900/10" 
                    isExternal
                  />
                  <PrimaryCTA 
                    to="/contact" 
                    label="メールで連絡" 
                    variant="outline" 
                    className="flex-1 justify-center" 
                  />
                </div>
              </div>

              {/* 地図エリア */}
              <div className="bg-slate-100 relative h-64 lg:h-auto min-h-[400px]">
                <iframe
                  title="本社マップ"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7891.642052379018!2d134.694193800397!3d34.831643363447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e00c018022b1%3A0xfc3278ab139d6de1!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-!5e1!3m2!1sja!2sjp!4v1767060545045!5m2!1sja!2sjp"
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  allowFullScreen=""
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <a 
                    href="https://maps.app.goo.gl/f8UGyDSMmE4ZavJ56"
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/90 backdrop-blur border border-white/50 rounded-xl shadow-lg text-sm font-bold text-slate-800 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  >
                    <Navigation size={16} /> Googleマップでルート案内
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* --- 阿保倉庫パネル --- */}
          {activeTab === "abo" && (
            <div className="grid lg:grid-cols-2 animate-fade-in">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 mb-6 w-fit">
                  <Warehouse size={14} /> WAREHOUSE
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">阿保倉庫</h2>
                
                <div className="space-y-6">
                  <InfoRow icon={MapPin} label="住所">
                    〒670-0972（目安） <br />
                    兵庫県姫路市阿保甲403番地
                  </InfoRow>
                  <InfoRow icon={Phone} label="電話番号">
                    <a href="tel:0792820164" className="text-xl font-bold text-emerald-700 hover:underline">
                      079-282-0164
                    </a>
                  </InfoRow>
                </div>

                <div className="mt-8 p-5 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                  <div className="text-sm text-amber-900">
                    <p className="font-bold mb-1">搬入・引取り時のご注意</p>
                    <p className="opacity-80">
                      スタッフが常駐していない時間帯がございます。ご来訪の際は、必ず事前にお電話にて受付状況をご確認ください。
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100">
                    <img src="/warehouses/abo1.jpg" alt="阿保倉庫外観1" className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100">
                    <img src="/warehouses/abo2.jpg" alt="阿保倉庫外観2" className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 relative h-64 lg:h-auto min-h-[400px]">
                <iframe 
                  title="阿保倉庫マップ" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.42293346531!2d134.6999285!3d34.82045739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e10ab00b1439%3A0x77e89a4abedc50ff!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-IOmYv-S_neWAieW6qw!5e0!3m2!1sja!2sjp!4v1755605585317!5m2!1sja!2sjp" 
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
                  loading="lazy" 
                />
                 <div className="absolute bottom-6 left-6 right-6">
                  <a 
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.42293346531!2d134.6999285!3d34.82045739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e10ab00b1439%3A0x77e89a4abedc50ff!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-IOmYv-S_neWAieW6qw!5e0!3m2!1sja!2sjp!4v1755605585317!5m2!1sja!2sjp"
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/90 backdrop-blur border border-white/50 rounded-xl shadow-lg text-sm font-bold text-slate-800 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  >
                    <Navigation size={16} /> Googleマップでルート案内
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* --- 飾東倉庫パネル --- */}
          {activeTab === "shikito" && (
            <div className="grid lg:grid-cols-2 animate-fade-in">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 mb-6 w-fit">
                  <Warehouse size={14} /> WAREHOUSE
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">飾東倉庫</h2>
                
                <div className="space-y-6">
                  <InfoRow icon={MapPin} label="住所">
                    〒671-0218 <br />
                    兵庫県姫路市飾東町庄191-1
                  </InfoRow>
                </div>

                <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    飾東倉庫への搬入・配送に関するお問い合わせは、本社にて承っております。以下のフォームまたはお電話にてご連絡ください。
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                  >
                    お問い合わせフォームへ <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="bg-slate-100 relative h-64 lg:h-auto min-h-[400px]">
                <iframe 
                  title="飾東倉庫マップ" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6549.32900903482!2d134.7315798!3d34.839526899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355520668d29c701%3A0x1f64a0abadb91e57!2z44CSNjcxLTAyMTgg5YW15bqr55yM5aer6Lev5biC6aO-5p2x55S65bqE77yR77yZ77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1755605599771!5m2!1sja!2sjp" 
                  className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
                  loading="lazy" 
                />
                 <div className="absolute bottom-6 left-6 right-6">
                  <a 
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6549.32900903482!2d134.7315798!3d34.839526899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355520668d29c701%3A0x1f64a0abadb91e57!2z44CSNjcxLTAyMTgg5YW15bqr55yM5aer6Lev5biC6aO-5p2x55S65bqE77yR77yZ77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1755605599771!5m2!1sja!2sjp"
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/90 backdrop-blur border border-white/50 rounded-xl shadow-lg text-sm font-bold text-slate-800 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  >
                    <Navigation size={16} /> Googleマップでルート案内
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================
   Helper Components
========================================= */

const InfoRow = ({ icon: Icon, label, children }) => (
  <div className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-slate-50 text-emerald-600 rounded-lg">
      <Icon size={20} />
    </div>
    <div className="flex-grow">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
      <div className="text-slate-800 font-medium leading-relaxed">{children}</div>
    </div>
  </div>
);