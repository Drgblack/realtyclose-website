import * as React from "react";

// Temporary Footer component that matches shared-ui structure
// Will be replaced with actual @drgblack/shared-ui import once NPM_TOKEN is configured
function Footer({ config, locale }: { config: any; locale: string }) {
  const getSocialIcon = (type: string) => {
    switch (type) {
      case "tiktok":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case "x":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">{config.brand.name}</h3>
            <p className="text-gray-300 mb-4">{config.brand.tagline}</p>
            <p className="text-gray-400 text-sm mb-6">{config.brand.familyNote}</p>
            <div className="flex space-x-4">
              {config.brand.socials?.map((social: any, index: number) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(social.type)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {config.columns?.map((column: any, index: number) => (
            <div key={index}>
              <h4 className="font-medium mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links?.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
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
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{config.bottom?.copyright}</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {config.bottom?.family?.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
        { label: "Zaza Promptly", href: "https://zazapromptly.com" }
      ]
    }
  };
  
  return <Footer config={config} locale="en" />;
}
