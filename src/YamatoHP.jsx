import React from "react";

export default function YamatoHP() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* ヘッダー */}
      <header className="bg-gray-100 border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold">大和薬品株式会社</div>
          <div className="text-sm text-right">
            <p>
              TEL <span className="text-green-600 font-bold">079-281-0671</span>
            </p>
            <p className="text-xs">受付: 8:00〜17:00（日祝除く）</p>
          </div>
        </div>
        <nav className="bg-green-700 text-white">
          <ul className="flex justify-center space-x-4 text-sm py-2">
            <li className="hover:bg-green-800 px-4 py-1">ホーム</li>
            <li className="hover:bg-green-800 px-4 py-1">主な取扱品目</li>
            <li className="hover:bg-green-800 px-4 py-1">アクセスマップ</li>
            <li className="hover:bg-green-800 px-4 py-1">会社概要</li>
            <li className="hover:bg-green-800 px-4 py-1">お問い合わせ</li>
          </ul>
        </nav>
      </header>

      {/* メイン画像（写真は public に配置） */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/flower-hill.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold text-center">
            創業８０年の信頼と実績<br />
            <span className="text-xl">Since 1933</span>
          </h1>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* サイドバー */}
        <aside className="md:col-span-1 space-y-4">
          <div className="bg-green-100 p-4">
            <h2 className="text-green-800 font-bold">MENU</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>主な取扱品目</li>
              <li>会社概要</li>
              <li>アクセスマップ</li>
              <li>求人情報</li>
              <li>社長ブログ</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4">
            <p>スマホサイト</p>
            <div className="mt-2 bg-white border p-2 text-center">[QRコード]</div>
          </div>
          <div className="bg-gray-100 p-4 text-xs text-center">更新情報：2025年7月</div>
        </aside>

        {/* 本文 */}
        <section className="md:col-span-3 space-y-6">
          <div>
            <h2 className="text-green-700 font-bold text-xl mb-2">ごあいさつ</h2>
            <p className="text-sm leading-relaxed">
              当社は創業以来、医薬品や工業薬品の輸送を手がけ、様々な分野で信頼を積み重ねてまいりました。
              地域社会に貢献し、顧客第一主義を貫いてまいります。
            </p>
          </div>

          <div className="bg-green-50 p-4">
            <h3 className="font-bold text-green-700">製品に関するお問い合わせ</h3>
            <p className="text-sm">お気軽にお電話ください（平日8:00〜17:00）</p>
            <p className="text-lg text-green-700 font-bold mt-2">079-281-0671</p>
            <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded">お問い合わせフォーム</button>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white text-center text-xs py-4">
        <p>Copyright &copy; 大和薬品株式会社. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
