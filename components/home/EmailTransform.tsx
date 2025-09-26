"use client";
import { useEffect, useState } from "react";
import { ShinyCard, glowBtn } from "@/components/ui/shiny-card";
import { useTranslations } from 'next-intl';

export default function EmailTransform(){
  const tr = useTranslations();
  const [displayText, setDisplayText] = useState(""); 
  const [phase,setPhase]=useState<"messy"|"clean">("messy");
  const [isReduced, setIsReduced] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(displayText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Copy failed');
    }
  };
  
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReduced(reduced);
    if (reduced) {
      setDisplayText(tr('emailTransform.cleanEmail'));
      return;
    }
  }, [tr]);

  useEffect(()=>{
    if (isReduced) return;
    let i=0; 
    const target = phase==="messy" ? tr('emailTransform.messyEmail') : tr('emailTransform.cleanEmail');
    const id = setInterval(()=>{ 
      setDisplayText(target.slice(0,++i)); 
      if(i>=target.length){ 
        clearInterval(id); 
        setTimeout(()=>setPhase(p=>p==="messy"?"clean":"messy"), 1500);
      } 
    }, 12);
    return ()=>clearInterval(id);
  },[phase, isReduced, tr]);

  return (
    <ShinyCard padding="none" gradient="brand">
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <button 
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              !isReduced && phase === "messy" 
                ? "bg-orange-100 text-orange-700 border border-orange-200" 
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => !isReduced && setPhase("messy")}
          >
            {tr('emailTransform.before')}
          </button>
          <button 
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              isReduced || phase === "clean" 
                ? "bg-blue-100 text-blue-700 border border-blue-200" 
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => !isReduced && setPhase("clean")}
          >
            {tr('emailTransform.after')}
          </button>
        </div>
        <button
          onClick={copyEmail}
          className={`text-xs px-2 py-1 font-medium text-gray-600 hover:text-gray-800 transition-all duration-200 rounded-md ${
            copied ? 'shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)]' : 'hover:shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)]'
          }`}
        >
          {copied ? tr('common.copied') : tr('common.copy')}
        </button>
      </div>
      <pre className="p-4 pl-5 border-l-2 whitespace-pre-wrap font-mono text-[13.5px] leading-6 text-slate-800 min-h-[4rem] bg-white"
           style={{ borderImage: 'linear-gradient(180deg,#04b4ff,#7f3dff) 1' }}>
        <code>{displayText}</code>
      </pre>
    </ShinyCard>
  );
}