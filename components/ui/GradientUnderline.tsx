export default function GradientUnderline({ children }:{children:React.ReactNode}) {
  return (
    <span className="relative">
      <span className="relative z-10">{children}</span>
      <span aria-hidden className="absolute -bottom-1 left-0 h-2 w-full rounded-md opacity-90"
        style={{background:"linear-gradient(90deg,var(--rc-primary),var(--rc-violet),var(--rc-pink))"}} />
    </span>
  );
}