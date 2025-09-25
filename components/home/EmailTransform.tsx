"use client";
import { useEffect, useState } from "react";

const messy = "hey just circling back about the docs thing. we should prob update the timeline but not sure. thoughts?";
const clean = "Hi Jamie,\n\nThanks for your note. I reviewed the documents and updated the transaction timeline. Here is the latest status and next step:\n• Appraisal scheduled for Thursday\n• Disclosures delivered and acknowledged\n\nI will follow up Friday with a confirmation.\n\nBest,\nAlex";

export default function EmailTransform(){
  const [t,setT]=useState(""); 
  const [phase,setPhase]=useState<"messy"|"clean">("messy");
  const [isReduced, setIsReduced] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t);
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
    <div className="rc-holo elevated overflow-hidden">
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
            Before
          </button>
          <button 
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              isReduced || phase === "clean" 
                ? "bg-blue-100 text-blue-700 border border-blue-200" 
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => !isReduced && setPhase("clean")}
          >
            After
          </button>
        </div>
        <button
          onClick={copyEmail}
          className="rc-holo text-xs px-2 py-1 font-medium text-gray-600 hover:text-gray-800 transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 pl-5 border-l-2 whitespace-pre-wrap font-mono text-[13.5px] leading-6 text-slate-800 min-h-[4rem] bg-white"
           style={{ borderImage: 'linear-gradient(180deg,#04b4ff,#7f3dff) 1' }}>
        <code>{t}</code>
      </pre>
    </div>
  );
}