import * as React from "react";

// TODO: Replace with actual import once NPM_TOKEN is configured
// import { Footer } from "@drgblack/shared-ui";

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
            <p className="text-sm text-gray-400 mb-4">
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
                    <span className="text-lg">
                      {social.type === 'tiktok' && '📱'}
                      {social.type === 'linkedin' && '💼'}
                      {social.type === 'x' && '✖️'}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* Column Links */}
          {columns?.map((column: any, idx: number) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links?.map((link: any, linkIdx: number) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {bottom?.copyright || "© 2025 RealtyClose. All rights reserved."}
            </p>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Family Links */}
              {bottom?.family && (
                <div className="flex space-x-4 text-sm">
                  {bottom.family.map((link: any, idx: number) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              
              {/* Policy Links */}
              {bottom?.policies && (
                <div className="flex space-x-4 text-sm">
                  {bottom.policies.map((link: any, idx: number) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
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
