import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* ナビゲーションバー */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-green-800 font-bold text-lg">
            大和薬品株式会社
          </Link>

          {/* ボタン風ナビゲーション */}
          <div className="space-x-2 hidden md:flex text-sm">
            {[
              { label: "ホーム", path: "/" },
              { label: "主な取扱品目", path: "/products" },
              { label: "アクセスマップ", path: "/access" },
              { label: "会社概要", path: "/company" },
              { label: "お問い合わせ", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="px-4 py-2 rounded-md bg-green-700 text-white font-medium transition duration-200 hover:bg-white hover:text-green-700 hover:scale-105 border border-green-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* ページ内容（動的） */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white text-center text-xs py-4 mt-10">
        <p>© 大和薬品株式会社. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
