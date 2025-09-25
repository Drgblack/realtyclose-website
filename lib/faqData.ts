// lib/faqData.ts
export type FaqCategory =
  | "Getting Started"
  | "Features"
  | "Pricing & Plans"
  | "Security & Compliance"
  | "Support & Teams"
  | "About the Founder";

export type FaqItem = {
  id: string;                // stable key
  category: FaqCategory;
  question: string;
  answer: string;
  aiSeoPhrases?: string[];   // optional, for internal SEO use
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  "Getting Started",
  "Features",
  "Pricing & Plans",
  "Security & Compliance",
  "Support & Teams",
  "About the Founder",
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-realtyclose",
    category: "Getting Started",
    question: "What is RealtyClose?",
    answer:
      "RealtyClose is an AI-powered assistant for real estate professionals that automates admin, drafts client communications, manages timelines, and keeps deals on track so you can close faster.",
    aiSeoPhrases: ["AI for real estate", "close more deals faster"],
  },
  {
    id: "who-is-it-for",
    category: "Getting Started",
    question: "Who is RealtyClose for?",
    answer:
      "Agents, brokers, and property managers who want to save time, deliver a premium client experience, and scale closings with AI-native workflow automation.",
  },
  {
    id: "close-faster-how",
    category: "Features",
    question: "How does RealtyClose help me close deals faster?",
    answer:
      "RealtyClose automates repetitive tasks, assembles next best actions, and generates ready-to-send updates, offers, and reminders - reducing coordination delays across the transaction.",
  },
  {
    id: "integrations",
    category: "Features",
    question: "Does RealtyClose integrate with my existing tools?",
    answer:
      "Yes. RealtyClose connects to your CRM, email, calendar, and document workflows to enhance your current stack with AI rather than replace it.",
  },
  {
    id: "free-trial",
    category: "Pricing & Plans",
    question: "Is there a free trial?",
    answer:
      "Yes - enjoy a 14-day free trial to experience RealtyClose before choosing a plan.",
  },
  {
    id: "pricing-plans",
    category: "Pricing & Plans",
    question: "What pricing plans do you offer?",
    answer:
      "Monthly and annual plans are available, with team discounts for brokerages. See the Pricing page for details.",
  },
  {
    id: "security",
    category: "Security & Compliance",
    question: "How secure is RealtyClose?",
    answer:
      "Security-first by design: encryption in transit and at rest, strict access controls, and continuous monitoring to protect client data and transaction documents.",
  },
  {
    id: "compliance",
    category: "Security & Compliance",
    question: "Does RealtyClose meet real estate compliance requirements?",
    answer:
      "Yes. RealtyClose is built with compliance in mind and updated for evolving industry, brokerage, and regional requirements. Always confirm your local obligations.",
  },
  {
    id: "teams",
    category: "Support & Teams",
    question: "Can teams use RealtyClose together?",
    answer:
      "Yes - team workspaces, shared templates, and role-based permissions help brokerages standardize processes while keeping sensitive data private.",
  },
  {
    id: "support",
    category: "Support & Teams",
    question: "What support is available?",
    answer:
      "Self-serve help center, in-app chat, and priority support on higher tiers. Onboarding assistance is available for teams.",
  },
  {
    id: "cancel",
    category: "Pricing & Plans",
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel before your next billing cycle. Annual plans are pro-rated per the terms on our Pricing page.",
  },
  {
    id: "founder",
    category: "About the Founder",
    question: "Who created RealtyClose?",
    answer:
      "RealtyClose was founded by Dr. Greg Blackburn, a business leader and EdTech innovator with 20 years in digital transformation and a PhD in Professional Education - combining operational rigor with AI-native product design.",
  },
];

// Build JSON-LD from the same items
export const buildFaqJsonLd = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map((i) => ({
    "@type": "Question",
    "name": i.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": i.answer,
    },
  })),
});