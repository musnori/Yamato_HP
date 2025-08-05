import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    img: "/flower-hill.jpg",
    title: "創業90年の信頼と実績",
    subtitle: "大和薬品株式会社",
  },
  {
    img: "/flower2.jpg",
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

  // 5秒ごとにスライド切り替え
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

      {/* ごあいさつ */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-300 inline-block mb-6">ごあいさつ</h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          大和薬品株式会社は、創業以来90年にわたり、医薬品・工業薬品の製造・販売を通じて地域社会の健康と産業発展に貢献してまいりました。<br />
          これまで培ってきた専門知識とネットワークを活かし、お客様のニーズにきめ細やかに対応することで、多くの信頼をお寄せいただいております。<br />
          今後も「顧客第一主義」の精神を堅持し、最新の技術導入や品質管理体制の強化を図ることで、安全・安心な製品とサービスをお届けしてまいります。<br />
          さらに、持続可能な社会の実現に向けて、環境負荷低減や地域連携プロジェクトにも積極的に取り組み、次の100年へ向けた新たな挑戦を続けてまいります。<br />
          何卒、変わらぬご支援とご愛顧を賜りますようお願い申し上げます。
        </p>
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

      
      
   
      {/* お問い合わせ + 社長ブログバナー */}
<section className="bg-green-100 py-10 mt-10">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    {/* お問い合わせ */}
    <div className="text-center">
      <h2 className="text-xl font-bold text-green-900">お問い合わせ</h2>
      <p className="mt-2 text-sm">製品に関するご質問やご相談はお気軽にどうぞ</p>
      <p className="text-2xl font-bold text-green-800 mt-4">079-281-0671</p>
      <Link
        to="/contact"
        className="inline-block mt-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
      >
        お問い合わせフォームへ
      </Link>
    </div>

    {/* 社長ブログバナー */}
    <a
      href="http://blog.yamato-chemi.co.jp/"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-green-300 rounded p-6 hover:shadow-lg transition duration-300 text-center"
    >
      <h3 className="text-lg font-bold text-green-800 mb-2">社長ブログ</h3>
      <p className="text-sm text-gray-700 mb-2">日々の気づきや現場の声をブログで発信中！</p>
      <span className="text-green-600 underline">ブログを見る</span>
    </a>
  </div>
</section>




    </div>
  );
}
