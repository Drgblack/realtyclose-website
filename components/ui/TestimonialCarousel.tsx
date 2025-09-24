"use client";
import { useEffect, useState } from "react";
const items = [
  { q:"I cut weekly client updates from 30 minutes to 5. Gamechanger.", a:"Team Lead" },
  { q:"Our closing rate improved 15 percent in two months.", a:"Brokerage Ops Manager" },
  { q:"Audit prep time cut by 90 percent. Compliance officer loves it.", a:"Broker Owner" },
];
export default function TestimonialCarousel(){
  const [i,setI]=useState(0);
  useEffect(()=>{ const t=setInterval(()=>setI(v=>(v+1)%items.length),6000); return ()=>clearInterval(t); },[]);
  return (
    <div className="relative overflow-hidden rounded-[var(--rc-radius)] border border-[color:var(--rc-border)] bg-white p-6">
      {items.map((it,idx)=>(
        <div key={idx}
          className={`transition-opacity duration-500 ${idx===i?"opacity-100":"opacity-0 absolute inset-0 p-6"}`}>
          <blockquote className="text-[color:var(--rc-text)]">"{it.q}"</blockquote>
          <div className="mt-2 text-xs text-[color:var(--rc-muted)]">— {it.a}</div>
        </div>
      ))}
    </div>
  );
}