'use client';

import Link from 'next/link';

type Props = {
  href: string;
  label: string;
  sublabel?: string;
  className?: string;
  track?: string; // optional analytics key
};

export default function CTA({ href, label, sublabel, className, track }: Props) {
  const handleClick = () => {
    if (track && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('track', { detail: { event: 'cta_click', track, href } }));
    }
  };

  const isExternal = href.startsWith('http');
  const content = (
    <span className="inline-flex items-center gap-2">
      <span>{label}</span>
      {sublabel ? <em className="opacity-70 not-italic text-sm">{sublabel}</em> : null}
    </span>
  );

  return isExternal ? (
    <a href={href} onClick={handleClick} className={className ?? 'btn btn-primary'}>
      {content}
    </a>
  ) : (
    <Link href={href} onClick={handleClick} className={className ?? 'btn btn-primary'}>
      {content}
    </Link>
  );
}