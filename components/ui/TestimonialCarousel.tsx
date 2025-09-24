"use client";
import { useEffect, useState } from "react";
const items = [
  { q:"I cut weekly client updates from 30 minutes to 5. Gamechanger.", a:"Sarah M., Team Lead" },
  { q:"Our closing rate improved 15 percent in two months.", a:"Michael R., Brokerage Ops Manager" },
  { q:"Audit prep time cut by 90 percent. Compliance officer loves it.", a:"Jennifer L., Broker Owner" },
];
export default function TestimonialCarousel(){
  const [i,setI]=useState(0);
  useEffect(()=>{ const t=setInterval(()=>setI(v=>(v+1)%items.length),6000); return ()=>clearInterval(t); },[]);
  return (
    <div className="card-3d relative overflow-hidden rounded-[var(--rc-radius)] p-8">
      {items.map((it,idx)=>(
        <div key={idx}
          className={`transition-all duration-500 ${idx===i?"opacity-100":"opacity-0 absolute inset-0 p-8"}`}>
          <blockquote className="text-lg font-medium leading-relaxed text-[color:var(--rc-text)]">"{it.q}"</blockquote>
          <div className="mt-4 text-sm font-semibold text-[color:var(--rc-muted)]">&mdash; {it.a}</div>
        </div>
      ))}
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_,idx)=>(
          <button
            key={idx}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              idx===i
                ? "bg-[var(--rc-primary)] w-6"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            onClick={()=>setI(idx)}
            aria-label={`Go to testimonial ${idx+1}`}
          />
        ))}
      </div>
    </div>
  );
}