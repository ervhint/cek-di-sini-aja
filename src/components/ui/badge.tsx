import type { HTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

type BadgeTone = "success" | "info" | "warning" | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  success: "border-[#bad8c5] bg-[#e2f0e7] text-[#4f7565]",
  info: "border-[#bcd2cf] bg-[#dfecea] text-[#4f7565]",
  warning: "border-[#e6b99f] bg-[#f4dfd4] text-[#7a4c36]",
  neutral: "border-[#eadfce] bg-[#efe4d3] text-[#756d64]"
};

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-md border px-3 py-1 text-xs font-semibold",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
