import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, NavLink, useNavigate } from "react-router-dom";
import PrimaryCTA from "./components/PrimaryCTA";
import StickyMobileCTA from "./components/StickyMobileCTA";
import { ArrowUp, ChevronRight, Phone } from "lucide-react";

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
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
        "hidden md:flex fixed right-5 bottom-5 z-40 w-10 h-10 items-center justify-center transition-opacity duration-200",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
        "rounded bg-white/95 border border-slate-300 text-slate-600 hover:text-brand hover:border-brand",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      ].join(" ")}
    >
      <ArrowUp size={18} />
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

  // ▼▼▼ 修正: 「地域活動」を削除しました ▼▼▼
  const nav = [
    { label: "製品", path: "/products" },
    { label: "サービス", path: "/services" },
    { label: "基礎知識", path: "/knowledge" },
    { label: "会社", path: "/company" },
    // { label: "地域活動", path: "/community" }, // 削除
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
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="hidden md:block bg-brand text-white text-xs">
          <div className="layout-container py-2 flex items-center justify-between">
            <p className="text-white/90 tracking-wide">昭和8年創業{"\u3000"}姫路市の化学薬品・工業薬品・試薬の専門商社</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                受付時間 9:00〜17:00
              </span>
              <a href="tel:0792810671" className="font-semibold hover:underline">
                TEL 079-281-0671
              </a>
            </div>
          </div>
        </div>
        <nav className="layout-container py-2.5 md:py-3 flex items-center justify-between gap-4">
          {/* ロゴ */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/company-logo.png" alt="大和薬品株式会社 ロゴ" className="h-8 md:h-9 w-auto" />
            <span className="text-brand font-bold text-[1.4rem] md:text-2xl font-kaisho">
              大和薬品株式会社
            </span>
          </Link>

          {/* デスクトップ用ナビ（枠なし・ホバーで下線） */}
          <div className="hidden lg:flex items-center gap-6">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "text-sm font-semibold text-slate-700 tracking-wide",
                    "hover:text-brand hover:underline underline-offset-[6px] decoration-2",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30 rounded",
                    isActive ? "text-brand underline decoration-2 underline-offset-[6px]" : ""
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setSearchValue("");
                setSearchOpen(true);
              }}
              className="inline-flex items-center justify-center rounded border border-slate-200 bg-white w-9 h-9 text-slate-600 hover:text-brand hover:border-brand transition"
              aria-label="製品を検索"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </button>
            <PrimaryCTA to="/contact?subject=見積依頼" label="見積依頼" size="sm" className="px-5 py-2.5" />
          </div>


          {/* モバイル：ハンバーガー */}
          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden -mr-1 inline-flex flex-col items-center justify-center w-12 h-11 text-brand"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 top-0.5 block h-[2px] w-6 bg-current transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] block h-[2px] w-6 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[17px] block h-[2px] w-6 bg-current transition-transform ${
                  open ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </div>
            <span className="mt-1 text-[10px] font-bold leading-none tracking-wider">{open ? "閉じる" : "メニュー"}</span>
          </button>
        </nav>
      </header>

      {/* モバイルドロワー */}
      {open && (
        <button
          aria-label="閉じる"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[80vw] max-w-xs bg-white shadow-xl border-l overflow-y-auto lg:hidden
                    transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <span className="font-bold text-brand">メニュー</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="閉じる"
          >
            ✕
          </button>
        </div>
        <nav>
          <ul className="border-b border-slate-200">
            {[{ label: "トップ", path: "/" }, ...nav].map((item) => (
              <li key={item.path} className="border-t border-slate-200 first:border-t-0">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "flex items-center justify-between px-5 py-3.5 font-medium",
                      isActive ? "text-brand bg-brand-light" : "text-slate-800 hover:bg-slate-50",
                    ].join(" ")
                  }
                >
                  {item.label}
                  <ChevronRight size={16} className="text-slate-400" />
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="p-5 space-y-2">
            <button
              type="button"
              onClick={() => {
                setSearchValue("");
                setSearchOpen(true);
                setOpen(false);
              }}
              className="w-full text-center px-4 py-3 rounded font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              製品を検索
            </button>
            <Link
              to="/contact?subject=見積依頼"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-4 py-3 rounded font-semibold bg-brand text-white hover:bg-brand-dark"
            >
              見積依頼・お問い合わせ
            </Link>
            <a href="tel:0792810671" className="flex items-center justify-center gap-2 pt-2 text-brand font-bold">
              <Phone size={16} />
              079-281-0671
            </a>
            <p className="text-center text-xs text-slate-500">受付時間 9:00〜17:00</p>
          </div>
        </nav>
      </aside>

      {/* ページ内容 */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ▼ ここで呼び出し */}
      <PageTopButton />

      {/* フッター */}
      <footer className="bg-navy text-slate-300 text-sm pb-12 md:pb-0">
        <div className="layout-container py-8 md:py-10 grid gap-8 md:grid-cols-[1.4fr_1fr_1.1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <img src="/company-logo.png" alt="大和薬品株式会社 ロゴ" className="h-8 w-auto bg-white rounded-sm p-0.5" />
              <span className="font-kaisho text-xl text-white">大和薬品株式会社</span>
            </Link>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              〒670-0935 兵庫県姫路市北条口1丁目59番地<br />
              TEL <a href="tel:0792810671" className="hover:underline">079-281-0671</a>{"\u3000"}FAX 079-224-1870<br />
              受付時間 9:00〜17:00
            </p>
          </div>
          <div>
            <p className="text-white font-bold mb-2">サイトマップ</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              <li><Link className="hover:text-white hover:underline" to="/products">取扱製品</Link></li>
              <li><Link className="hover:text-white hover:underline" to="/services">サービス</Link></li>
              <li><Link className="hover:text-white hover:underline" to="/knowledge">薬品の基礎知識</Link></li>
              <li><Link className="hover:text-white hover:underline" to="/company">会社概要</Link></li>
              <li><Link className="hover:text-white hover:underline" to="/access">アクセス</Link></li>
              <li><Link className="hover:text-white hover:underline" to="/contact">お問い合わせ</Link></li>
              <li className="col-span-2"><Link className="hover:text-white hover:underline" to="/privacy">プライバシーポリシー</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold mb-2">お問い合わせ</p>
            <p className="hidden md:block text-slate-300 text-sm">お見積り・ご相談はフォームまたはお電話で承ります。</p>
            <div className="md:mt-3 grid grid-cols-2 gap-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded px-3 py-2.5 text-sm font-bold bg-white text-navy hover:bg-slate-100"
              >
                お問い合わせ
              </Link>
              <Link
                to="/contact?subject=見積依頼"
                className="inline-flex items-center justify-center rounded px-3 py-2.5 text-sm font-bold bg-brand text-white hover:bg-brand-dark"
              >
                見積依頼
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-3 text-center text-xs text-slate-400">
          © 大和薬品株式会社
        </div>
      </footer>

      <StickyMobileCTA />

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