import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const GRADIENTS = {
  brand: "from-indigo-400 via-sky-400 to-fuchsia-500",
  indigo: "from-indigo-500 via-violet-500 to-fuchsia-500",
  blue: "from-sky-400 via-cyan-400 to-indigo-500",
  emerald: "from-emerald-400 via-teal-400 to-cyan-400",
} as const;

const PADDING = {
  none: "",
  sm: "p-3 md:p-4",
  md: "p-5 md:p-6",
  lg: "p-6 md:p-8",
} as const;

type ShinyCardProps = {
  children: ReactNode;
  /** Optional link – turns the card into a clickable block */
  href?: string;
  /** Gradient preset (Tailwind-safe classes) */
  gradient?: keyof typeof GRADIENTS;
  /** Card padding size */
  padding?: keyof typeof PADDING;
  /** Slight lift on hover */
  hoverLift?: boolean;
  /** Outer wrapper classes */
  className?: string;
  /** Inner container classes */
  innerClassName?: string;
};

export function ShinyCard({
  children,
  href,
  gradient = "brand",
  padding = "md",
  hoverLift = true,
  className,
  innerClassName,
}: ShinyCardProps) {
  const Wrapper: any = href ? Link : "div";

  return (
    <div
      className={cn(
        "group relative rounded-2xl p-[1px] bg-gradient-to-r",
        GRADIENTS[gradient],
        className
      )}
    >
      <Wrapper
        href={href || ""}
        className={cn(
          "relative block rounded-2xl transition-transform duration-300",
          hoverLift && "group-hover:-translate-y-0.5",
          // dark surface with good contrast for white text
          "bg-slate-800/90 backdrop-blur-[2px]",
          "shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)]"
        )}
      >
        {/* soft shine overlay (non-interactive) */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 rounded-2xl",
            "[mask-image:radial-gradient(120%_80%_at_50%_-20%,#000_30%,transparent_60%)]",
            "bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(99,102,241,0.10),transparent_40%)]",
            "group-hover:bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(99,102,241,0.16),transparent_42%)]"
          )}
        />
        <div className={cn("relative", PADDING[padding], innerClassName)}>
          {children}
        </div>
      </Wrapper>
    </div>
  );
}

// Button glow helper
export const glowBtn =
  "shadow-[0_10px_30px_-10px_rgba(88,101,242,0.35)] hover:shadow-[0_16px_40px_-12px_rgba(88,101,242,0.45)]";