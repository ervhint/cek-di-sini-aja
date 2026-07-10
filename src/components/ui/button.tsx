import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/class-names";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-[#8b7edb] bg-[#8b7edb] text-white hover:border-[#6658b7] hover:bg-[#6658b7]",
  secondary: "border-[#d8d0f0] bg-white text-[#6658b7] hover:border-[#8b7edb] hover:bg-[#f1eeff]",
  ghost: "border-transparent bg-transparent text-[#6658b7] hover:bg-[#f1eeff]"
};

export function buttonStyles({
  className,
  variant = "primary"
}: {
  className?: string;
  variant?: ButtonVariant;
} = {}) {
  return cn(
    "inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors",
    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8b7edb]",
    variantClasses[variant],
    className
  );
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ className, variant })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
