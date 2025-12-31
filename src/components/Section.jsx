import React from "react";

export default function Section({
  title,
  description,
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
      {/* Header Area */}
      {(title || description || eyebrow || actions) && (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          
          {/* Titles */}
          <div className="flex-1">
            {eyebrow && (
              <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-emerald-600 mb-2 uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-500 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Action Buttons (Right aligned on Desktop) */}
          {actions && (
            <div className="flex-shrink-0 flex flex-wrap gap-3">
              {actions}
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      {children && (
        <div className="animate-fade-in-up">
          {children}
        </div>
      )}
    </>
  );

  return (
    <section 
      id={id} 
      className={`py-12 md:py-20 ${className}`.trim()} // 上下の余白を広げてモダンに
    >
      {withContainer ? (
        // layout-container の代わりに max-w 等を直接指定して安全性を確保（プロジェクト設定に依存しないよう）
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`.trim()}>
          {content}
        </div>
      ) : (
        content
      )}
    </section>
  );
}