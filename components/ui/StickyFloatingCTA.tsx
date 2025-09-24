"use client";
import { useEffect, useState } from "react";
import ShimmerButton from "./ShimmerButton";

export default function StickyFloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const footer = document.querySelector('footer');
      const footerTop = footer?.getBoundingClientRect().top || 0;
      const shouldHide = footerTop <= window.innerHeight + 120;
      
      setShow(scrollPercent > 50 && !shouldHide);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="rounded-full border border-[var(--rc-border)] bg-white/85 backdrop-blur p-2 shadow-[0_20px_60px_rgba(2,6,23,.12)]">
        <ShimmerButton href="/install">Start Free - No Credit Card Required</ShimmerButton>
      </div>
    </div>
  );
}