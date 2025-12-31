import React from "react";

export default function Card({ children, className = "", noPadding = false, ...props }) {
  // 基本スタイル：白背景、薄いグレーの枠線、大きめの角丸、控えめな影
  const baseClasses = "bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300";
  
  // デフォルトのパディング（noPaddingプロパティでオフにできる）
  const paddingClass = noPadding ? "" : "p-6 md:p-8";

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