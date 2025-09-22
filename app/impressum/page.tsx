import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Impressum | RealtyClose",
  description: "Legal notice for RealtyClose.",
};

export default function ImpressumPage() {
  return (
    <PageShell title="Impressum">
      {/* Company Information Card */}
      <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 mb-8 not-prose">
        <h2 className="text-blue-300 font-semibold mb-6 text-xl">Angaben gemäß § 5 TMG</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-semibold mb-3">Unternehmen</h3>
            <p className="text-slate-300">
              <strong>Zaza Technologies UG (haftungsbeschränkt)</strong><br />
              Gumbertstraße 150<br />
              40229 Düsseldorf<br />
              Deutschland
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-blue-300 font-semibold mb-2">Handelsregister</h4>
              <p className="text-slate-300 text-sm">[HRB-Nummer eintragen, sobald vorhanden]</p>
            </div>
            <div>
              <h4 className="text-blue-300 font-semibold mb-2">Registergericht</h4>
              <p className="text-slate-300 text-sm">Amtsgericht Düsseldorf</p>
            </div>
          </div>

          <div>
            <h4 className="text-blue-300 font-semibold mb-2">Geschäftsführer</h4>
            <p className="text-slate-300">Dr. Greg Blackburn</p>
          </div>

          <div>
            <h4 className="text-blue-300 font-semibold mb-2">Kontakt</h4>
            <a href="mailto:greg@zazatechnologies.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              greg@zazatechnologies.com
            </a>
          </div>
        </div>
      </div>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        [wird nach Vergabe durch das Finanzamt ergänzt]
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
      <p>
        Dr. Greg Blackburn<br />
        Gumbertstraße 150<br />
        40229 Düsseldorf<br />
        Deutschland
      </p>

      <h2>Haftungsausschluss</h2>

      <h3>Haftung für Inhalte</h3>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>

      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
        verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>

      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
        einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
        Links umgehend entfernen.
      </p>

      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
        Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
        gestattet.
      </p>

      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
        Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
        auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>

      <h2>EU-Streitschlichtung</h2>
      
      {/* EU Dispute Resolution Card */}
      <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-6 mb-8 not-prose">
        <h3 className="text-blue-300 font-semibold mb-4">Online-Streitbeilegung (OS)</h3>
        <p className="text-slate-300 mb-4">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        </p>
        <a 
          href="https://ec.europa.eu/consumers/odr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        <p className="text-slate-400 text-sm mt-3">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
      </div>

      <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
      
      {/* Consumer Dispute Resolution Notice */}
      <div className="bg-amber-600/10 border border-amber-500/20 rounded-lg p-4 mb-8">
        <p className="text-slate-300 text-sm">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </PageShell>
  );
}