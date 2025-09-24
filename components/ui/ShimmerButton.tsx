"use client";
import { useRef } from "react";

export default function ShimmerButton({ href, children, id }:{
  href:string; children:React.ReactNode; id?:string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e:React.MouseEvent<HTMLAnchorElement>){
    const el = ref.current; if(!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    el.style.transform = `translate(${x*0.05}px, ${y*0.05}px)`;
  }
  function onLeave(){ const el = ref.current; if(el) el.style.transform = "translate(0,0)"; }

  return (
    <a ref={ref} id={id} href={href}
       onMouseMove={onMove} onMouseLeave={onLeave}
       className="relative inline-flex items-center justify-center rounded-2xl px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
       style={{ background:"var(--rc-cta-grad)" }}>
      <span className="absolute inset-0 rounded-2xl opacity-35 [background:linear-gradient(120deg,transparent,white,transparent)] [background-size:200%_100%] hover:[animation:shine_1.2s_linear_infinite]" />
      <span className="relative">{children}</span>
      <style>{`@keyframes shine{0%{background-position:-200% 0}100%{background-position:200% 0}}`}</style>
    </a>
  );
}


