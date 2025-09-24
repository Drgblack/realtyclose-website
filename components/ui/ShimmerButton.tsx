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
    el.style.transform = `translate(${x*0.05}px, ${y*0.05}px) scale(1.02)`;
  }
  function onLeave(){ const el = ref.current; if(el) el.style.transform = "translate(0,0) scale(1)"; }

  return (
    <a ref={ref} id={id} href={href}
       onMouseMove={onMove} onMouseLeave={onLeave}
       className="relative inline-flex items-center justify-center rounded-2xl px-7 py-3 text-sm font-semibold text-white transition-transform duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-[0_18px_38px_rgba(59,130,246,.40)]"
       style={{ background:"var(--rc-cta-grad)" }}>
      <span className="absolute inset-0 rounded-2xl opacity-35 [background:linear-gradient(120deg,transparent,white,transparent)] [background-size:200%_100%] hover:[animation:shine_1.1s_linear_infinite]" />
      <span className="absolute -inset-2 -z-10 rounded-3xl blur-xl opacity-50"
            style={{background:"var(--rc-cta-grad)"}} />
      <span className="relative">{children}</span>
      <style>{`@keyframes shine{0%{background-position:-200% 0}100%{background-position:200% 0}}`}</style>
    </a>
  );
}
