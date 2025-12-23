import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, NavLink, useNavigate } from "react-router-dom";

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
        "flex items-center gap-2 px-4 py-2 rounded-full bg-green-700 text-white",
        "shadow-lg shadow-green-900/20 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/60"
      ].join(" ")}
    >
      <span className="text-base leading-none">↑</span>
      <span className="text-sm leading-none tracking-wide">PAGE TOP</span>
    </button>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // メニュー開閉時は背面スクロールを止める
  useEffect(() => {
    document.body.style.overflow = open || searchOpen ? "hidden" : "";
  }, [open, searchOpen]);

  const nav = [
    { label: "製品", path: "/products" },
    { label: "会社概要", path: "/company" },
    { label: "アクセス", path: "/access" },
    { label: "お問い合わせ", path: "/contact" },
  ];

  const submitSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    const qs = new URLSearchParams({ q: searchValue.trim() }).toString();
    navigate(`/products?${qs}`);
    setSearchOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ScrollToTopOnRouteChange />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-green-100">
        <div className="hidden md:block bg-green-900 text-white text-xs">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <p className="tracking-wide">化学品・医薬品の供給で地域を支える</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-300" />
                受付時間 9:00〜17:00
              </span>
              <a href="tel:0792810671" className="font-semibold hover:underline">
                TEL 079-281-0671
              </a>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* ロゴ */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/company-logo.png" alt="大和薬品株式会社 ロゴ" className="h-8 w-auto" />
            <span className="text-green-800 font-bold text-2xl font-kaisho">
              大和薬品株式会社
            </span>
          </Link>

          {/* デスクトップ用ナビ（枠なし・ホバーで下線） */}
          <div className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "text-sm font-semibold text-slate-700 tracking-wide",
                    "hover:text-green-800 hover:underline underline-offset-4 decoration-2",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30 rounded",
                    isActive ? "text-green-800 underline decoration-2 underline-offset-4" : ""
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 transition"
            >
              お問い合わせ
              <span aria-hidden>›</span>
            </Link>
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
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block w-full text-center px-4 py-3 rounded-lg font-semibold bg-green-700 text-white hover:bg-green-800"
          >
            お問い合わせ
          </Link>
        </nav>
      </aside>

      {/* ページ内容 */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ▼ ここで呼び出し */}
      <PageTopButton />

      {/* フッター */}
      <footer className="bg-slate-900 text-slate-200 text-sm mt-10">
        <div className="layout-container py-10 grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/company-logo.png" alt="大和薬品株式会社 ロゴ" className="h-8 w-auto" />
              <span className="font-semibold text-white">大和薬品株式会社</span>
            </div>
            <p className="text-slate-300 text-sm">
              〒670-0935 兵庫県姫路市北条口1丁目59番地<br />
              TEL：<a href="tel:0792810671" className="hover:underline">079-281-0671</a><br />
              受付時間 9:00〜17:00
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">製品カテゴリ</p>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:underline" to="/products?cat=water">水処理用薬品</Link></li>
              <li><Link className="hover:underline" to="/products?cat=reagents">試薬・研究用</Link></li>
              <li><Link className="hover:underline" to="/products?cat=industrial">工業用・医薬品関連</Link></li>
              <li><Link className="hover:underline" to="/products?cat=cleaning">クリーニング関係</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-white font-semibold">お問い合わせ</p>
            <p className="text-slate-300 text-sm">見積・相談はフォームから承っています。</p>
            <Link to="/contact" className="btn-primary w-fit">見積・相談する</Link>
            <Link to="/privacy" className="block text-sm text-slate-300 hover:underline">プライバシーポリシー</Link>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
          © 大和薬品株式会社. All Rights Reserved.
        </div>
      </footer>

      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="閉じる"
            onClick={() => setSearchOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-green-700">製品検索</p>
                <h2 className="text-xl font-bold text-slate-900">キーワードで探す</h2>
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-slate-500 hover:text-slate-700"
                aria-label="閉じる"
              >
                ✕
              </button>
            </div>
            <form onSubmit={submitSearch} className="mt-4 space-y-4">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="製品名・用途・カテゴリ（例：次亜塩素酸、洗浄）"
                className="input-field"
                autoFocus
              />
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "水処理", cat: "water" },
                  { label: "試薬", cat: "reagents" },
                  { label: "工業用", cat: "industrial" },
                  { label: "クリーニング", cat: "cleaning" },
                ].map((item) => (
                  <Link
                    key={item.cat}
                    to={`/products?cat=${item.cat}`}
                    onClick={() => setSearchOpen(false)}
                    className="tag"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <button type="submit" className="btn-primary w-full">
                この条件で探す
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
