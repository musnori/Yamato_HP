import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, NavLink } from "react-router-dom";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* ▼ 追加：PAGE TOP ボタン */
function PageTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="ページの先頭に戻る"
      className={[
        "fixed right-4 bottom-5 z-50 transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-3",
        // 見た目
        "flex items-center gap-2 px-4 py-2 rounded-md bg-green-700 text-white",
        "shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/60"
      ].join(" ")}
    >
      <span className="text-base leading-none">↑</span>
      <span className="text-sm leading-none tracking-wide">PAGE TOP</span>
    </button>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);

  // メニュー開閉時は背面スクロールを止める
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const nav = [
    { label: "ホーム", path: "/" },
    { label: "主な取扱品目", path: "/products" },
    { label: "アクセスマップ", path: "/access" },
    { label: "会社概要", path: "/company" },
    { label: "お問い合わせ", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ScrollToTopOnRouteChange />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* ロゴ */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/company-logo.png" alt="大和薬品株式会社 ロゴ" className="h-8 w-auto" />
            <span className="text-green-800 font-bold text-2xl font-kaisho">
              大和薬品株式会社
            </span>
          </Link>

          {/* デスクトップ用ナビ */}
          <div className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    "border shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-600/30",
                    isActive
                      ? "bg-gradient-to-b from-green-600 to-green-700 text-white border-green-700 scale-[1.02]"
                      : "bg-white text-green-800 border-green-700 hover:bg-green-50",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* モバイル：ハンバーガー */}
          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-green-700 text-green-800 hover:bg-green-50 transition"
          >
            {/* 3本線 → X にアニメーション */}
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 top-1 block h-[2px] w-5 bg-current transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-[2px] w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-[2px] w-5 bg-current transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* モバイルドロワー */}
      {open && (
        <button
          aria-label="閉じる"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-2xl border-l md:hidden
                    transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <span className="font-bold text-green-800">メニュー</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="閉じる"
          >
            ✕
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "block w-full text-left px-4 py-3 rounded-lg font-medium",
                  "border transition hover:shadow",
                  isActive
                    ? "bg-green-600 text-white border-green-700"
                    : "bg-white text-green-800 border-green-700 hover:bg-green-50",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* ページ内容 */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ▼ ここで呼び出し */}
      <PageTopButton />

      {/* フッター */}
      <footer className="bg-gray-800 text-white text-center text-xs py-4 mt-10">
        <p>© 大和薬品株式会社. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
