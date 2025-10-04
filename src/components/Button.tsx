import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  label: string;
  isPrimary?: boolean;
  borderColor?: "brand" | "white";
  hasArrow?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  isPrimary = false,
  borderColor = "brand",
  hasArrow = false,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-200 focus:outline-none";

  const primaryStyles =
    "bg-[var(--brand-color)] text-[var(--brand-text)] hover:bg-[var(--brand-hover)]";

  const borderStyles =
    borderColor === "brand"
      ? "border border-[var(--brand-border)] text-[var(--brand-border)] hover:bg-[var(--brand-color)] hover:text-[var(--brand-text)]"
      : "border border-white text-white hover:bg-white hover:text-black";

  const finalStyles = `cursor-pointer ${baseStyles} ${
    isPrimary ? primaryStyles : borderStyles
  } ${className}`;

  return (
    <button onClick={onClick} className={finalStyles}>
      <span>{label}</span>
      {hasArrow && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default Button;
