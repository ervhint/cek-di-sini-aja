import type { HTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[#e6e0f5] bg-white p-5 shadow-[0_14px_35px_rgba(102,88,183,0.08)]",
        className
      )}
      {...props}
    />
  );
}
