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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10 lg:mb-12">

          {/* Titles */}
          <div className="flex-1">
            {eyebrow && (
              <p className="mb-3 text-[11px] font-medium tracking-[0.25em] text-slate-400 uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-slate-900 tracking-tight leading-[1.25]">
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
      className={`py-12 md:py-16 lg:py-20 ${className}`.trim()}
    >
      {withContainer ? (
        // PC表示最適化: max-w-6xl (1152px) でコンテンツ幅を適切に制限
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`.trim()}>
          {content}
        </div>
      ) : (
        content
      )}
    </section>
  );
}