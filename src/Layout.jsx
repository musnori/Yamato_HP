import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ScrollToTopOnRouteChange />

      {/* ナビゲーションバー */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* ロゴ＋サイト名 */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/company-logo.png"
              alt="大和薬品株式会社 ロゴ"
              className="h-8 w-auto"
            />
            <span className="text-green-800 font-bold text-lg font-kaisho">
              大和薬品株式会社
            </span>
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
