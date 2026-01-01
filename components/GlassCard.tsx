import { cx } from "@/lib/utils";
import { ReactNode } from "react";

export function GlassCard({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("glass rounded-2xl p-6", className)}>{children}</div>
  );
}
