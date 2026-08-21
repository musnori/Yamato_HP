import React from "react";

export default function Card({ children, className = "", noPadding = false, ...props }) {
  // 基本スタイル：白背景、細い枠線、控えめな角丸。影はデフォルトで持たせず、フラットに。
  const baseClasses = "bg-white border border-slate-200/70 rounded-xl overflow-hidden transition-colors duration-200";

  // デフォルトのパディング（noPaddingプロパティでオフにできる）
  // PC表示最適化: lg で余白を適度に調整
  const paddingClass = noPadding ? "" : "p-5 md:p-6 lg:p-7";

  // クラスの結合
  // className プロパティで渡されたクラスが優先されるように最後に配置します。
  // これにより、特定のカードだけ背景色を変えたり、ホバー効果を追加したりできます。
  const mergedClasses = `${baseClasses} ${paddingClass} ${className}`.trim();

  return (
    <div className={mergedClasses} {...props}>
      {children}
    </div>
  );
}