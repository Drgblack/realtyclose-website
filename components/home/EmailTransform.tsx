"use client";
import { useEffect, useState } from "react";

const messy = "hey just circling back about the docs thing. we should prob update the timeline but not sure. thoughts?";
const clean = "Hi Jamie,\n\nThanks for your note. I reviewed the documents and updated the transaction timeline. Here is the latest status and next step:\n• Appraisal scheduled for Thursday\n• Disclosures delivered and acknowledged\n\nI will follow up Friday with a confirmation.\n\nBest,\nAlex";

export default function EmailTransform(){
  const [t,setT]=useState(""); 
  const [phase,setPhase]=useState<"messy"|"clean">("messy");
  const [isReduced, setIsReduced] = useState(false);
  
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReduced(reduced);
    if (reduced) {
      setT(clean);
      return;
    }
  }, []);

  useEffect(()=>{
    if (isReduced) return;
    let i=0; const target = phase==="messy"? messy : clean;
    const id = setInterval(()=>{ 
      setT(target.slice(0,++i)); 
      if(i>=target.length){ 
        clearInterval(id); 
        setTimeout(()=>setPhase(p=>p==="messy"?"clean":"messy"), 1500);
      } 
    }, 12);
    return ()=>clearInterval(id);
  },[phase, isReduced]);

  return (
    <div className="rounded-2xl border border-[var(--rc-border)] bg-white shadow-[0_20px_60px_rgba(2,6,23,.10)] transition will-change-transform hover:translate-y-[1px]">
      <div className="relative">
        <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-0.5 rounded-t-2xl" style={{background:"var(--rc-cta-grad)"}} />
        <div className="p-6">
          <div className="mb-3 text-xs font-semibold text-[var(--rc-blue-700)]">
            {isReduced ? "Polished draft" : (phase==="messy"?"Raw email":"Polished draft")}
          </div>
          <pre className="rc-holo elevated bg-white p-4 pl-5 border-l-2 whitespace-pre-wrap text-[13.5px] leading-6 text-[var(--rc-text)] min-h-[4rem]"
               style={{ borderImage: 'linear-gradient(180deg,#04b4ff,#7f3dff) 1' }}>
            <code>{t}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}