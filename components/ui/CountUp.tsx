"use client";
import { useEffect, useRef, useState } from "react";
export default function CountUp({ to, suffix="" }:{to:number; suffix?:string}) {
  const [n,setN]=useState(0); const ref=useRef<HTMLSpanElement>(null);
  useEffect(()=>{ if(!ref.current) return;
    const io=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){
        const s=performance.now(), d=800, f=0;
        const tick=(t:number)=>{const p=Math.min(1,(t-s)/d); setN(Math.round(f+(to-f)*p)); if(p<1) requestAnimationFrame(tick);};
        requestAnimationFrame(tick); io.disconnect();
      }
    },{threshold:.5}); io.observe(ref.current); return ()=>io.disconnect();
  },[to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}