import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogo({ size = 24 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="RealtyClose Home">
      <Image
        src="/logo/favicon-32x32.png"
        alt="RealtyClose"
        width={size}
        height={size}
        priority
      />
      <span className="text-base font-semibold text-slate-900">RealtyClose</span>
    </Link>
  );
}