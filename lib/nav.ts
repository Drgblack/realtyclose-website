// lib/nav.ts
export const primaryNav = [
  { label: "How It Works", href: "#how-it-works" },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "Features", href: "/features" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const ctaNav = { label: "Start Free", href: "/install" };

export type NavItem = {
  label: string;
  href: string;
  items?: NavItem[];
};