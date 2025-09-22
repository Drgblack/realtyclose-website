import LegalLayout from "@/components/LegalLayout";
export const metadata = { title: "Impressum" };

export default function Page() {
  return (
    <LegalLayout title="Impressum">
      <p>RealtyClose • Part of Zaza Technologies</p>
      <p>Registered office: Gumbertstraße 150, 40229 Düsseldorf, Deutschland</p>
      <p>Contact: support@realtyclose.com</p>
    </LegalLayout>
  );
}