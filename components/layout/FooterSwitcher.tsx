"use client";
import { usePathname } from "next/navigation";
import SiteFooter from "./SiteFooter";

export default function FooterSwitcher() {
  const pathname = usePathname();
  const variant = pathname === "/" ? "light" : "dark";
  return <SiteFooter variant={variant} />;
}