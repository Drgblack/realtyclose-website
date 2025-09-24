export default function ShimmerButton({ href, children, id }:{
  href:string; children:React.ReactNode; id?:string;
}) {
  return (
    <a id={id} href={href}
       className="relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(29,78,216,.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
       style={{ background: "var(--rc-cta-grad)" }}>
      <span className="absolute inset-0 rounded-2xl opacity-35 [background:linear-gradient(120deg,transparent,white,transparent)] [background-size:200%_100%] hover:[animation:shine_1.2s_linear_infinite]" />
      <span className="relative">{children}</span>
      <style>{`@keyframes shine{0%{background-position:-200% 0}100%{background-position:200% 0}}`}</style>
    </a>
  );
}