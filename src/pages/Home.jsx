import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* ヒーローセクション */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/flower-hill.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold mb-2">創業90年の信頼と実績</h1>
            <p className="text-lg">大和薬品株式会社</p>
          </div>
        </div>
      </section>

      {/* ごあいさつ */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-300 inline-block mb-6">ごあいさつ</h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          大和薬品株式会社は、創業以来、医薬品・工業薬品を中心に地域社会に密着したサービスを展開してまいりました。<br />
          今後も「顧客第一主義」を貫き、信頼される企業として発展し続けてまいります。
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
