import type { HTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

type BadgeTone = "success" | "info" | "warning" | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  success: "border-[#c8e8cd] bg-[#edf8ef] text-[#477251]",
  info: "border-[#d8d0f0] bg-[#f1eeff] text-[#6658b7]",
  warning: "border-[#efd486] bg-[#fff3cf] text-[#8a6818]",
  neutral: "border-[#e6e0f5] bg-[#f7f4ff] text-[#716d80]"
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
