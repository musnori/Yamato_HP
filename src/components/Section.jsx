import React from "react";

// 見出しの左に短い罫線を置くだけの、落ち着いたセクション見出し。
// eyebrow（英字の小見出し）は装飾目的だったため表示しない（既存ページの呼び出し互換のため prop は受け取る）。
export default function Section({
  title,
  description,
  // eslint-disable-next-line no-unused-vars
  eyebrow,
  actions,
  className = "",
  children,
  id,
  withContainer = true,
  containerClassName = "",
}) {
  const content = (
    <>
      {(title || description || actions) && (
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5 md:mb-7">
          <div className="flex-1">
            {title && (
              <h2 className="flex items-center gap-3 font-serif text-xl md:text-2xl font-bold text-slate-900 leading-snug tracking-normal">
                <span aria-hidden className="block w-6 h-[2px] bg-brand shrink-0" />
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-2 max-w-3xl text-sm md:text-[15px] text-slate-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {actions && <div className="flex-shrink-0 flex flex-wrap gap-2">{actions}</div>}
        </div>
      )}

      {children}
    </>
  );

  return (
    <section id={id} className={`py-9 md:py-14 ${className}`.trim()}>
      {withContainer ? (
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`.trim()}>
          {content}
        </div>
      ) : (
        content
      )}
    </section>
  );
}
