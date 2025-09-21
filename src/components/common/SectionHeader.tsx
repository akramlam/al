import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("max-w-3xl space-y-4", alignment, className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-3 text-cyan-300/80 tracking-[0.18em] uppercase text-xs">
          <span className="block h-px w-6 bg-cyan-400/40" />
          <span>{eyebrow}</span>
          <span className="block h-px w-6 bg-cyan-400/40" />
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-white/70 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

