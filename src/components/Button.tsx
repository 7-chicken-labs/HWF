import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  label: string;
  isPrimary?: boolean;
  borderColor?: "brand" | "white";
  hasArrow?: boolean;
  onClick?: () => void;
  className?: string;
  // New style props
  bgColor?: string;
  textColor?: string;
  hoverBg?: string;
  hoverText?: string;
  padding?: string;
  rounded?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  isPrimary = false,
  borderColor = "brand",
  hasArrow = false,
  onClick,
  className = "",
  bgColor,
  textColor,
  hoverBg,
  hoverText,
  padding = "px-6 py-3",
  rounded = "rounded-full",
}) => {
  const baseStyles = `brand-text group inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none ${padding} ${rounded}`;

  const primaryStyles = bgColor
    ? `bg-[${bgColor}] text-[${textColor || "white"}] hover:bg-[${
        hoverBg || bgColor
      }] hover:text-[${hoverText || "white"}]`
    : "bg-[var(--brand-color)] text-[var(--brand-text)] hover:bg-[var(--brand-hover)]";

  const borderStyles =
    borderColor === "brand"
      ? `border border-[var(--brand-border)] text-[var(--brand-border)] hover:bg-[var(--brand-color)] hover:text-[var(--brand-text)]`
      : "border border-white text-white hover:bg-white hover:text-black";

  const finalStyles = `cursor-pointer ${baseStyles} ${
    isPrimary ? primaryStyles : borderStyles
  } ${className}`;

  return (
    <button
      onClick={onClick}
      className={finalStyles}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <span>{label}</span>
      {hasArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;