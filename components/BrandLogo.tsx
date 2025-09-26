import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogo({ size = 24 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* Use PNG for now; switch to SVG when available */}
      <Image
        src="/brand/z-mark-32.png"
        alt="RealtyClose"
        width={size}
        height={size}
        priority
      />
      <span className="text-base font-semibold text-slate-900">RealtyClose</span>
    </Link>
  );
}