"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children, delay=0 }:{children:React.ReactNode; delay?:number}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <motion.div ref={ref}
      initial={{opacity:0, y:16}}
      animate={inView ? {opacity:1,y:0} : {}}
      transition={{duration:.5, ease:"easeOut", delay}}
    >{children}</motion.div>
  );
}