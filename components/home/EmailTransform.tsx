"use client";
import { useEffect, useState } from "react";

const messy = "hey just circling back about the docs thing. we should prob update the timeline but not sure. thoughts?";
const clean = "Hi Jamie,\n\nThanks for your note. I reviewed the documents and updated the transaction timeline. Here is the latest status and next step:\n• Appraisal scheduled for Thursday\n• Disclosures delivered and acknowledged\n\nI will follow up Friday with a confirmation.\n\nBest,\nAlex";

export default function EmailTransform(){
  const [t,setT]=useState(""); const [phase,setPhase]=useState<"messy"|"clean">("messy");
  useEffect(()=>{
    let i=0; const target = phase==="messy"? messy : clean;
    const id = setInterval(()=>{ setT(target.slice(0,++i)); if(i>=target.length){ clearInterval(id); setTimeout(()=>setPhase(p=>p==="messy"?"clean":"messy"), 1200);} }, 12);
    return ()=>clearInterval(id);
  },[phase]);

  return (
    <div className="rounded-2xl border border-[var(--rc-border)] bg-white p-6 shadow-[0_18px_40px_rgba(2,6,23,.06)]">
      <div className="mb-3 text-xs font-semibold text-slate-500">{phase==="messy"?"Raw email":"Polished draft"}</div>
      <pre className="whitespace-pre-wrap text-sm text-slate-800">{t}</pre>
    </div>
  );
}