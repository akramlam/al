import { cn } from "@/lib/utils";
import React from "react";

type Variant = "default" | "navy" | "subtle";

interface Props extends React.ComponentProps<"section"> {
  variant?: Variant;
  overlayGrid?: boolean;
}

export default function Section({
  className,
  variant = "default",
  overlayGrid = false,
  children,
  ...props
}: Props) {
  const base = "relative py-20 md:py-28";
  const variants: Record<Variant, string> = {
    default: "bg-transparent",
    subtle: "bg-gradient-to-b from-slate-900/30 to-slate-900/0",
    navy: "bg-tech-navy",
  };

  return (
    <section className={cn(base, variants[variant], className)} {...props}>
      {overlayGrid && (
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,164,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,164,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"
          aria-hidden
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

