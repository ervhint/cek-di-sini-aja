import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "min-h-11 w-full rounded-md border border-[#d8cbb8] bg-[#fffdf8] px-4 py-2 text-sm text-[#342f2a] placeholder:text-[#8c8378]",
        "focus-visible:border-[#7aa68e] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#7aa68e]",
        "disabled:cursor-not-allowed disabled:bg-[#efe4d3]/60 disabled:text-[#756d64]",
        className
      )}
      {...props}
    />
  );
}
