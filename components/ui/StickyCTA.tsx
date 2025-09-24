"use client";
import { useEffect, useState } from "react";
import ShimmerButton from "./ShimmerButton";

export default function StickyCTA(){
  const [show,setShow]=useState(false);
  useEffect(()=>{
    const onScroll=()=>setShow(window.scrollY > window.innerHeight*0.5);
    onScroll(); window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);
  if(!show) return null;
  return (
    <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full border border-[color:var(--rc-border)] bg-white/90 p-2 shadow-lg backdrop-blur">
      <ShimmerButton href="/install" id="cta-sticky">Start Free with Gmail Extension</ShimmerButton>
    </div>
  );
}