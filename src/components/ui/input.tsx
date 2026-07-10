import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "min-h-11 w-full rounded-md border border-[#d8d0f0] bg-white px-4 py-2 text-sm text-[#302d3d] placeholder:text-[#8a8498]",
        "focus-visible:border-[#8b7edb] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#8b7edb]",
        "disabled:cursor-not-allowed disabled:bg-[#f1eeff]/70 disabled:text-[#716d80]",
        className
      )}
      {...props}
    />
  );
}
