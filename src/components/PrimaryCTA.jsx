import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

// バリエーションごとのスタイル定義
const variants = {
  // メイン：エメラルドグリーンの背景＋影
  primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-900/10 hover:shadow-lg hover:shadow-emerald-900/20 border-transparent",
  
  // アウトライン：白背景＋枠線（デフォルトのボタン）
  secondary: "bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50 shadow-sm",
  
  // アウトライン（強調）：エメラルドの枠線
  outline: "bg-transparent text-emerald-600 border-emerald-600 hover:bg-emerald-50",
  
  // 白抜き：暗い背景用（ヒーローエリアなど）
  outlineLight: "bg-white/10 text-white border-white/40 hover:bg-white/20 backdrop-blur-sm",
  
  // ゴースト：背景なしテキストのみ
  ghost: "bg-transparent text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50 border-transparent shadow-none px-4",
};

// サイズ定義（必要であれば拡張可）
const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function PrimaryCTA({
  label,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon, // 任意のアイコンを渡せるように追加
  isExternal = false, // 外部リンクフラグ
  ...props
}) {
  // ベースのスタイル
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 border active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none";
  
  // スタイルの結合
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  const classes = `${baseStyles} ${variantClasses} ${sizeClasses} ${className}`.trim();

  // 内部コンテンツ（アイコン＋ラベル）
  const content = (
    <>
      {label}
      {/* Iconが渡されればそれを表示、なければバリエーションに応じて矢印などを自動付与 */}
      {Icon ? (
        <Icon size={18} />
      ) : isExternal ? (
        <ExternalLink size={16} className="opacity-70" />
      ) : (variant === "primary" || variant === "outline") ? (
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      ) : null}
    </>
  );

  // 1. href がある場合（外部リンクまたはアンカーリンク）
  if (href) {
    return (
      <a 
        href={href} 
        className={`${classes} group`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  // 2. to がある場合（内部ルーターリンク）
  if (to) {
    return (
      <Link to={to} className={`${classes} group`} {...props}>
        {content}
      </Link>
    );
  }

  // 3. どちらもない場合（buttonとして振る舞う）
  return (
    <button type="button" className={`${classes} group`} {...props}>
      {content}
    </button>
  );
}