"use client";
import { useRef } from "react";

export default function ParallaxCard({ children }:{children:React.ReactNode}){
  const ref = useRef<HTMLDivElement>(null);

  function move(e:React.MouseEvent<HTMLDivElement>){
    const el = ref.current; if(!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width/2)) / r.width;
    const y = (e.clientY - (r.top + r.height/2)) / r.height;
    el.style.transform = `rotateX(${(-y*8).toFixed(2)}deg) rotateY(${(x*10).toFixed(2)}deg) translateZ(0)`;
  }
  function leave(){ const el = ref.current; if(el) el.style.transform = "rotateX(0deg) rotateY(0deg)"; }

  return (
    <div ref={ref}
      onMouseMove={move} onMouseLeave={leave}
      className="rounded-2xl border border-[var(--rc-border)] bg-white p-6 shadow-[0_24px_80px_rgba(2,6,23,.15)] will-change-transform transition-transform duration-150 ease-out">
      {children}
    </div>
  );
}
