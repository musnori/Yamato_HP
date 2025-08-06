import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    img: "/asa.jpg",
    title: "創業90年の信頼と実績",
    subtitle: "大和薬品株式会社",
  },
  {
    img: "/yuu.jpg",
    title: "地域とともに歩む",
    subtitle: "大和薬品株式会社",
  },
  {
    img: "/flower3.jpg",
    title: "未来を見据えて挑戦",
    subtitle: "大和薬品株式会社",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // 3秒ごとにスライド切り替え
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* 自作スライダー */}
      <section
        className="relative h-[60vh] overflow-hidden"
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 bg-cover bg-center flex items-center justify-center text-white
              transition-opacity duration-1000 ease-in-out
              ${i === current ? "opacity-100" : "opacity-0"}
            `}
            style={{ backgroundImage: `url('${s.img}')` }}
          >
            <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-4xl font-bold mb-2">{s.title}</h1>
                <p className="text-lg">{s.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ===== ごあいさつ ===== */}
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          {/* 左：イメージ */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="d.jpg"
              alt="大和薬品イメージ"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* 右：テキスト */}
          <div>
            <h2 className="text-3xl font-bold text-brand-green-700 mb-4 relative inline-block">
              ごあいさつ
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-brand-green-300 rounded-full" />
            </h2>
            <div className="prose prose-lg prose-brand text-gray-700 leading-relaxed">
              <p>
                大和薬品株式会社は、創業以来90年にわたり、医薬品・工業薬品の製造・販売を通じて
                地域社会の健康と産業発展に貢献してまいりました。
              </p>
              <p>
                これまで培ってきた専門知識とネットワークを活かし、お客様のニーズにきめ細やかに
                対応することで、多くの信頼をお寄せいただいております。
              </p>
              <p>
                今後も「顧客第一主義」の精神を堅持し、最新の技術導入や品質管理体制の強化を図ることで、
                安全・安心な製品とサービスをお届けしてまいります。
              </p>
              <p>
                さらに、持続可能な社会の実現に向けて、環境負荷低減や地域連携プロジェクトにも積極的に
                取り組み、次の100年へ向けた新たな挑戦を続けてまいります。
              </p>
              <p>
                何卒、変わらぬご支援とご愛顧を賜りますようお願い申し上げます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 取扱品目カードリンク */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-300 inline-block mb-8">主な事業案内</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/products"
              className="bg-white border hover:shadow-lg p-6 rounded transition duration-300"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-2">主な取扱品目</h3>
              <p className="text-sm text-gray-600">化学品・医薬品などの豊富な取扱製品をご紹介</p>
            </Link>
            <Link
              to="/company"
              className="bg-white border hover:shadow-lg p-6 rounded transition duration-300"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-2">会社概要</h3>
              <p className="text-sm text-gray-600">会社の基本情報や沿革を掲載しています</p>
            </Link>
            <Link
              to="/access"
              className="bg-white border hover:shadow-lg p-6 rounded transition duration-300"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-2">アクセスマップ</h3>
              <p className="text-sm text-gray-600">本社所在地・周辺地図はこちらをご確認ください</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== お問い合わせ ＋ 社長ブログ ===== */}
      <section className="bg-green-50 py-16">
  <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2">
    {/* お問い合わせ */}
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 border-t-4 border-brand-green-500">
      <svg
        className="w-8 h-8 text-brand-green-500 mb-3"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.06-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.06l-2.2 2.2z" />
      </svg>
      <h3 className="text-2xl font-semibold text-gray-800 mb-1">お問い合わせ</h3>
      <p className="text-gray-600 mb-3 text-center leading-relaxed">
        製品に関するご質問やご相談を<br className="md:hidden" />
        お気軽にどうぞ
      </p>
      <p className="text-3xl font-bold text-brand-green-600 mb-4">079-281-0671</p>
      <Link
        to="/contact"
        className="inline-block bg-brand-green-600 hover:bg-brand-green-700 text-white font-medium py-2 px-6 rounded transition"
      >
        フォームへ
      </Link>
    </div>

    {/* 社長ブログ */}
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 border-t-4 border-brand-green-500">
      <svg
        className="w-8 h-8 text-brand-green-500 mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
        />
      </svg>
      <h3 className="text-2xl font-semibold text-gray-800 mb-1">社長ブログ</h3>
      <p className="text-gray-600 mb-4 text-center leading-relaxed">
        日々の気づきや現場の声を<br className="md:hidden" />
        ブログで発信中！
      </p>
      <a
        href="http://blog.yamato-chemi.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-brand-green-600 font-medium underline"
      >
        ブログを見る →
      </a>
    </div>
  </div>
</section>


  



   
    </div>
  );
}
