"use client";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Parallax({ children, offset=40 }:{children:React.ReactNode; offset?:number}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0,1], [0, offset]);
  return <motion.div style={{ y }}>{children}</motion.div>;
}