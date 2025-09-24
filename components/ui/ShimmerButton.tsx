export default function ShimmerButton({ href, children, id }:{
  href:string; children:React.ReactNode; id?:string;
}) {
  return (
    <a id={id} href={href}
       className="group relative inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
       style={{
         background:"linear-gradient(135deg, var(--rc-primary) 0%, var(--rc-accent) 50%, var(--rc-violet) 100%)",
         boxShadow: "0 4px 20px rgba(26, 54, 93, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
       }}>
      {/* Animated background */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-cyan-600 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />
      
      {/* Primary shimmer */}
      <span className="absolute inset-0 rounded-xl opacity-60 [background:linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.8)_50%,transparent_70%)] [background-size:200%_100%] group-hover:[animation:ultra-shine_1.5s_ease-in-out_infinite]" />
      
      {/* Secondary glow */}
      <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 [background:linear-gradient(45deg,rgba(255,255,255,0.3),transparent,rgba(255,255,255,0.3))]" />
      
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">{children}</span>
      
      <style>{`
        @keyframes ultra-shine{
          0%{background-position:-200% 0}
          50%{background-position:0% 0}
          100%{background-position:200% 0}
        }
        @keyframes animate-gradient-x{
          0%,100%{background-position:0% 0}
          50%{background-position:100% 0}
        }
      `}</style>
    </a>
  );
}