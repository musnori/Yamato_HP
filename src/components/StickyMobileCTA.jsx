import React from "react";
import { Link } from "react-router-dom";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
      <nav className="layout-container py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        <ul className="grid grid-cols-3 gap-2 text-sm font-semibold">
          <li>
            <Link
              to="/contact?subject=見積依頼"
              className="flex items-center justify-center rounded-full bg-green-700 py-3 text-white shadow"
              aria-label="見積を依頼する"
            >
              見積
            </Link>
          </li>
          <li>
            <Link
              to="/contact?subject=相談したい"
              className="flex items-center justify-center rounded-full border border-green-700 py-3 text-green-800"
              aria-label="相談する"
            >
              相談
            </Link>
          </li>
          <li>
            <a
              href="tel:0792810671"
              className="flex items-center justify-center rounded-full border border-slate-300 py-3 text-slate-700"
              aria-label="電話で問い合わせる"
            >
              電話
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
