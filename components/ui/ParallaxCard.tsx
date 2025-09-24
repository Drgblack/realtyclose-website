"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ParallaxCard({ children }:{children:React.ReactNode}){
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useTransform(y, [-40,40], [8,-8]);
  const ry = useTransform(x, [-40,40], [-10,10]);

  function move(e:React.MouseEvent<HTMLDivElement>){
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width/2));
    y.set(e.clientY - (r.top + r.height/2));
  }
  function leave(){ x.set(0); y.set(0); }

  return (
    <motion.div onMouseMove={move} onMouseLeave={leave}
      style={{ rotateX:rx, rotateY:ry }}
      className="rounded-2xl border border-[var(--rc-border)] bg-white p-6 shadow-[0_24px_80px_rgba(2,6,23,.15)] will-change-transform transition-shadow duration-300 hover:shadow-[0_32px_100px_rgba(2,6,23,.20)]">
      {children}
    </motion.div>
  );
}