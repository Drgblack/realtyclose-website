"use client";

import { useState, useMemo } from "react";
import { FAQ_CATEGORIES, FAQ_ITEMS, type FaqCategory } from "@/lib/faqData";
import Reveal from "@/components/ui/Reveal";

export default function FAQPageClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "All">("All");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_ITEMS.filter((item) => {
      const inCategory = activeCategory === "All" || item.category === activeCategory;
      if (!q) return inCategory;
      return (
        inCategory &&
        (item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q))
      );
    });
  }, [query, activeCategory]);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with subtle gradient */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-white via-white to-gray-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--rc-text)]">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-[var(--rc-muted)] max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about RealtyClose – clear, simple, and designed for professionals who want to close deals faster.
            </p>
          </Reveal>

          {/* Sticky search bar */}
          <Reveal delay={0.1}>
            <div className="sticky top-4 z-10 mt-8">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search FAQs…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-12 px-4 pr-10 rounded-2xl border border-[var(--rc-border)] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--rc-blue)] focus:border-transparent transition-all duration-200 text-[var(--rc-text)]"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--rc-muted)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Category filters */}
          <Reveal delay={0.2}>
            <div className="mt-6">
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setActiveCategory("All")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === "All"
                      ? "bg-[var(--rc-blue)] text-white shadow-md"
                      : "bg-white text-[var(--rc-muted)] border border-[var(--rc-border)] hover:border-[var(--rc-blue)] hover:text-[var(--rc-blue)]"
                  }`}
                >
                  All
                </button>
                {FAQ_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? "bg-[var(--rc-blue)] text-white shadow-md"
                        : "bg-white text-[var(--rc-muted)] border border-[var(--rc-border)] hover:border-[var(--rc-blue)] hover:text-[var(--rc-blue)]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <div className="rc-holo elevated bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-[var(--rc-blue)] focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg font-semibold text-[var(--rc-text)] group-hover:text-[var(--rc-blue)] transition-colors duration-200">
                          {item.question}
                        </h3>
                        <div className="mt-1 text-xs text-[var(--rc-muted)] font-medium">
                          {item.category}
                        </div>
                      </div>
                      <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                        openItems.has(item.id) ? "rotate-180" : ""
                      }`}>
                        <svg className="w-5 h-5 text-[var(--rc-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${
                    openItems.has(item.id) ? "max-h-96 pb-5" : "max-h-0"
                  }`}>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-[var(--rc-muted)] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <Reveal>
              <div className="text-center py-12">
                <div className="text-[var(--rc-muted)] text-lg">
                  No FAQs found matching your search.
                </div>
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-4 px-6 py-2 bg-[var(--rc-blue)] text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
                >
                  Clear filters
                </button>
              </div>
            </Reveal>
          )}

          {/* Bottom CTA */}
          <Reveal delay={0.3}>
            <div className="mt-16 rc-holo elevated bg-white rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-[var(--rc-text)] mb-2">
                Didn't find what you're looking for?
              </h3>
              <p className="text-[var(--rc-muted)] mb-4">
                Our team is here to help with any questions about RealtyClose.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[var(--rc-blue)] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--rc-blue)] focus:ring-offset-2"
              >
                Contact us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}