import type { HTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[#eadfce] bg-[#fffdf8] p-5 shadow-[0_14px_35px_rgba(79,117,101,0.10)]",
        className
      )}
      {...props}
    />
  );
}
