import * as React from "react";
import { Footer } from "@drgblack/shared-ui";

export default function SiteFooter() {
  const config = {
    productId: "realtyclose",
    productName: "RealtyClose",
    productKey: "realtyclose",
    locales: ["en"],
    brand: {
      name: "RealtyClose",
      tagline:
        "RealtyClose simplifies real estate closings with automated communication, reminders, and secure workflows.",
      familyNote:
        "Part of the Zaza Technologies family building trusted, AI-powered tools for professionals.",
      socials: [
        { type: "tiktok", href: "https://www.tiktok.com/@zazatechnologies" },
        { type: "linkedin", href: "https://www.linkedin.com/company/zaza-tech" },
        { type: "x", href: "https://twitter.com/zazatech" }
      ]
    },
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/#features" },
          { label: "Pricing", href: "/#pricing" },
          { label: "Install Extension", href: "/#install" },
          { label: "Demo", href: "/#demo" }
        ]
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Guides", href: "/guides" },
          { label: "Support", href: "/support" }
        ]
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Legal", href: "/legal" }
        ]
      }
    ],
    bottom: {
      copyright: "© 2025 RealtyClose. All rights reserved.",
      family: [
        { label: "Zaza Technologies", href: "https://zazatechnologies.com" },
        { label: "Zaza Promptly", href: "https://zaza.ai" }
      ],
      policies: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Cookies", href: "/cookies" }
      ]
    }
  };
  
  return <Footer config={config} locale="en" />;
}
