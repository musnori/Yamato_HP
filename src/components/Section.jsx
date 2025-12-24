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
      {(title || description || eyebrow || actions) && (
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            {eyebrow && <p className="section-title">{eyebrow}</p>}
            {title && <h2 className="mt-2 text-slate-900">{title}</h2>}
            {description && (
              <p className="mt-2 max-w-2xl text-sm text-slate-600">{description}</p>
            )}
          </div>
          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
        </div>
      )}
      {children && <div className={title || description ? "mt-6" : ""}>{children}</div>}
    </>
  );

  return (
    <section id={id} className={`section ${className}`.trim()}>
      {withContainer ? (
        <div className={`layout-container ${containerClassName}`.trim()}>{content}</div>
      ) : (
        content
      )}
    </section>
  );
}
