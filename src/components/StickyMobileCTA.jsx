import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Phone, ArrowUp } from "lucide-react";

// スマホ下部の固定バー。ファーストビューでは出さず、少しスクロールしてから表示する。
// PAGE TOP もこのバーの中に置き、本文に重ならないようにしている。
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // フォームページでは同じページへのボタンになるため出さない
  if (pathname.startsWith("/contact")) return null;

  return (
    <div
      className={[
        "fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-slate-300 transition-transform duration-200",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
      aria-hidden={!visible}
    >
      <nav className="flex h-12 items-stretch text-[13px] font-bold">
        <a
          href="tel:0792810671"
          className="flex flex-1 items-center justify-center gap-1.5 text-brand border-r border-slate-200 active:bg-slate-50"
          tabIndex={visible ? 0 : -1}
        >
          <Phone size={16} />
          電話する
        </a>
        <Link
          to="/contact?subject=見積依頼"
          className="flex flex-1 items-center justify-center gap-1.5 bg-brand text-white active:bg-brand-dark"
          tabIndex={visible ? 0 : -1}
        >
          <FileText size={16} />
          見積・お問い合わせ
        </Link>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex w-12 items-center justify-center text-slate-600 active:bg-slate-50"
          aria-label="ページの先頭に戻る"
          tabIndex={visible ? 0 : -1}
        >
          <ArrowUp size={18} />
        </button>
      </nav>
    </div>
  );
}
