import React from "react";
import { Link } from "react-router-dom";

const variantStyles = {
  primary: "btn-primary",
  outline: "btn-outline",
  outlineLight: "btn-outline border-white/60 bg-transparent text-white hover:bg-white/10",
  secondary: "btn-secondary",
};

export default function PrimaryCTA({
  label,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `${variantStyles[variant] || variantStyles.primary} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {label}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} {...props}>
      {label}
    </Link>
  );
}
