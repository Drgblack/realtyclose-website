import ScaffoldPage from "@/app/_scaffold/PageTemplate";

export const metadata = { 
  robots: { index: false, follow: true }, 
  title: "FAQ - RealtyClose" 
};

export default function Page() {
  return <ScaffoldPage title="Frequently Asked Questions" description="Questions and answers are coming soon." />;
}