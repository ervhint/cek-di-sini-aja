import type { HTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

export function PageContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-5 py-8 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
