import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/class-names";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-[#7aa68e] bg-[#7aa68e] text-white hover:border-[#4f7565] hover:bg-[#4f7565]",
  secondary: "border-[#d8cbb8] bg-[#fffdf8] text-[#4f7565] hover:border-[#7aa68e] hover:bg-[#e2f0e7]",
  ghost: "border-transparent bg-transparent text-[#4f7565] hover:bg-[#efe4d3]"
};

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
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors",
        "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#7aa68e]",
        variantClasses[variant],
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
