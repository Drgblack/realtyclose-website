import * as React from "react";

// TODO: Replace with actual import once NPM_TOKEN is configured
// import { Footer } from "@drgblack/shared-ui";

// Social Media Icons (matching lucide-react style)
const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Temporary implementation until @drgblack/shared-ui package can be installed
const Footer = ({ config, locale }: any) => {
  if (!config) return null;
  
  const { brand, columns, bottom } = config;
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                RC
              </div>
              <span className="text-xl font-bold">{brand?.name || "RealtyClose"}</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-sm">
              {brand?.tagline || "RealtyClose simplifies real estate closings with automated communication, reminders, and secure workflows."}
            </p>
            <p className="text-sm text-gray-400 mb-6">
              {brand?.familyNote || "Part of the Zaza Technologies family building trusted, AI-powered tools for professionals."}
            </p>
            
            {/* Social Icons */}
            {brand?.socials && (
              <div className="flex space-x-4">
                {brand.socials.map((social: any, idx: number) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.type}
                  >
                    {social.type === 'tiktok' && <TikTokIcon />}
                    {social.type === 'linkedin' && <LinkedInIcon />}
                    {social.type === 'x' && <XIcon />}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* Column Links */}
          {columns?.map((column: any, idx: number) => (
            <div key={idx}>
              <h4 className="text-sm font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links?.map((link: any, linkIdx: number) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                {bottom?.copyright || "© 2025 RealtyClose. All rights reserved."}
              </p>
              
              {/* Family Links */}
              {bottom?.family && (
                <div className="flex space-x-4 mt-2">
                  {bottom.family.map((link: any, idx: number) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

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
          { label: "Careers", href: "/careers" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookies", href: "/cookies" }
        ]
      }
    ],
    bottom: {
      copyright: "© 2025 RealtyClose. All rights reserved.",
      family: [
        { label: "Zaza Technologies", href: "https://zazatechnologies.com" },
        { label: "Zaza Promptly", href: "https://zaza.ai" }
      ]
    }
  };
  
  return <Footer config={config} locale="en" />;
}
