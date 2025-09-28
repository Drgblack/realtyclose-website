import ScaffoldPage from "@/app/_scaffold/PageTemplate";

export const metadata = { 
  robots: { index: false, follow: true }, 
  title: "Smart Templates - RealtyClose" 
};

export default function Page() {
  return <ScaffoldPage title="Smart Templates" description="Overview and details are coming soon." />;
}