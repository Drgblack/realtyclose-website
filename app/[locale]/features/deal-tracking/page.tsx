import ScaffoldPage from "@/app/_scaffold/PageTemplate";

export const metadata = { 
  robots: { index: false, follow: true }, 
  title: "Deal Tracking - RealtyClose" 
};

export default function Page() {
  return <ScaffoldPage title="Deal Tracking" description="Overview and details are coming soon." />;
}