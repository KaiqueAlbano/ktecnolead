import React from "react";
import "./Button.scss";

const buttonVariants = {
  default:
    "bg-gradient-to-r from-primary to-main text-black font-bold shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] hover:scale-105",
  sbmais: "text-primary hover:underline",
} as const;

const sizeVariants = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-12 rounded-xl px-8 text-base",
  xl: "h-14 rounded-xl px-10 text-lg",
  icon: "h-10 w-10",
  sbmais: "p-0",
} as const;

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof sizeVariants;

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn ${buttonVariants[variant]} ${sizeVariants[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
