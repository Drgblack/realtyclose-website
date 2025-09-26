"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { ShinyCard } from "@/components/ui/shiny-card";
import Reveal from "@/components/ui/Reveal";

type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export default function FAQPageClient() {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Get all FAQ data from translations
  const faqData: FAQ[] = useMemo(() => {
    const questions = t.raw('faq.questions') as Record<string, { question: string; answer: string; category: string }>;
    return Object.entries(questions).map(([id, data]) => ({
      id,
      question: data.question,
      answer: data.answer,
      category: data.category,
    }));
  }, [t]);

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesSearch = searchQuery === "" || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [faqData, searchQuery, selectedCategory]);

  // Group FAQs by category
  const categorizedFAQs = useMemo(() => {
    const categories = {} as Record<string, FAQ[]>;
    filteredFAQs.forEach(faq => {
      if (!categories[faq.category]) {
        categories[faq.category] = [];
      }
      categories[faq.category].push(faq);
    });
    return categories;
  }, [filteredFAQs]);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const categories = [
    { key: "all", label: t('faq.categories.all') },
    { key: "general", label: t('faq.categories.general') },
    { key: "pricing", label: t('faq.categories.pricing') },
    { key: "technical", label: t('faq.categories.technical') },
    { key: "integration", label: t('faq.categories.integration') },
    { key: "compliance", label: t('faq.categories.compliance') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-700/50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/10" />
          <div className="absolute inset-0" 
               style={{background: "radial-gradient(1200px 600px at 50% -100px, rgba(59,130,246,0.15), transparent)"}} />
        </div>
        
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 pt-20 pb-16 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {t('faq.title')}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-slate-200 mb-8">
              {t('faq.subtitle')}
            </p>
          </Reveal>

          {/* Search */}
          <Reveal delay={0.2}>
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder={t('faq.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-slate-600/50 rounded-xl bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 py-16">
        {/* Category Filter */}
        <Reveal>
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* FAQ Content */}
        {filteredFAQs.length === 0 ? (
          <Reveal>
            <div className="text-center py-16">
              <svg className="mx-auto h-16 w-16 text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.529-.901-6.172-2.379L12 9.5l6.172 3.121z" />
              </svg>
              <p className="text-slate-300 text-lg">{t('faq.noResults')}</p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-blue-400 hover:text-blue-300 underline"
                >
                  {t('faq.clearSearch')}
                </button>
              )}
            </div>
          </Reveal>
        ) : selectedCategory === "all" ? (
          /* Show by category when "all" is selected */
          <div className="space-y-12">
            {Object.entries(categorizedFAQs).map(([categoryKey, faqs], categoryIndex) => (
              <Reveal key={categoryKey} delay={categoryIndex * 0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {t(`faq.categories.${categoryKey}`)}
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <ShinyCard key={faq.id}>
                        <button
                          onClick={() => toggleExpanded(faq.id)}
                          className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-slate-800 pr-4">
                              {faq.question}
                            </h3>
                            <svg
                              className={`h-6 w-6 text-slate-600 transform transition-transform duration-200 flex-shrink-0 ${
                                expandedItems.has(faq.id) ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          {expandedItems.has(faq.id) && (
                            <div className="mt-4 pt-4 border-t border-slate-300/50">
                              <p className="text-slate-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </button>
                      </ShinyCard>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Show single category */
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Reveal key={faq.id} delay={index * 0.05}>
                <ShinyCard>
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-slate-800 pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className={`h-6 w-6 text-slate-600 transform transition-transform duration-200 flex-shrink-0 ${
                          expandedItems.has(faq.id) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {expandedItems.has(faq.id) && (
                      <div className="mt-4 pt-4 border-t border-slate-300/50">
                        <p className="text-slate-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </button>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
        )}

        {/* Contact CTA */}
        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <ShinyCard>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {t('faq.contact.stillHaveQuestions')}
                </h2>
                <p className="text-slate-600 mb-6">
                  {t('faq.contact.cantFind')}
                </p>
                <a
                  href="mailto:help@zazatechnologies.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('faq.contact.contactSupport')}
                </a>
              </div>
            </ShinyCard>
          </div>
        </Reveal>
      </div>
    </div>
  );
}