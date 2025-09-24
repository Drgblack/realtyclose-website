"use client";
import { motion } from "framer-motion";

export default function GradientUnderline({ children }:{children:React.ReactNode}) {
  return (
    <span className="relative">
      <span className="relative z-10">{children}</span>
      <motion.span 
        aria-hidden 
        className="absolute -bottom-1 left-0 h-2 w-full rounded-md opacity-90"
        style={{
          background:"var(--rc-cta-grad)",
          transformOrigin: "left"
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      />
    </span>
  );
}