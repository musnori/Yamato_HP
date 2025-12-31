import React from "react";
import { Link } from "react-router-dom";
// アイコン (lucide-react)
import { 
  FileText, 
  MessageCircle, 
  Phone 
} from "lucide-react";

export default function StickyMobileCTA() {
  return (
    // 背景に透過とぼかし(backdrop-blur)を入れてモダンなフロート感を演出
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/80 bg-white/90 backdrop-blur-lg md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-300">
      <nav className="layout-container py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <ul className="grid grid-cols-3 gap-3">
          
          {/* 1. 見積依頼 (Primary Action) */}
          <li>
            <Link
              to="/contact?subject=見積依頼"
              className="group flex flex-col items-center justify-center h-full w-full rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 active:scale-95 transition-all py-2"
              aria-label="見積を依頼する"
            >
              <FileText size={20} className="mb-0.5" />
              <span className="text-[10px] font-bold leading-none">見積依頼</span>
            </Link>
          </li>

          {/* 2. 相談する (Secondary Action) */}
          <li>
            <Link
              to="/contact?subject=相談したい"
              className="group flex flex-col items-center justify-center h-full w-full rounded-xl bg-emerald-50 text-emerald-700 active:bg-emerald-100 active:scale-95 transition-all py-2 border border-emerald-100"
              aria-label="相談する"
            >
              <MessageCircle size={20} className="mb-0.5" />
              <span className="text-[10px] font-bold leading-none">相談する</span>
            </Link>
          </li>

          {/* 3. 電話 (Tertiary Action) */}
          <li>
            <a
              href="tel:0792810671"
              className="group flex flex-col items-center justify-center h-full w-full rounded-xl bg-white border border-slate-200 text-slate-600 active:bg-slate-50 active:scale-95 transition-all py-2"
              aria-label="電話で問い合わせる"
            >
              <Phone size={20} className="mb-0.5" />
              <span className="text-[10px] font-bold leading-none">電話</span>
            </a>
          </li>

        </ul>
      </nav>
    </div>
  );
}