'use client';

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/footer';
import '../../app/globals.css';
import { Sparkles, MapPin, Phone, Mail, User, FileText, Shield } from 'lucide-react';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/70">
      <Navigation />
      <main className="flex-grow">

        {/* ===== Hero Section ===== */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-repeat" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-6">
                <FileText className="w-4 h-4 text-blue-500" />
                Rechtliches
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Impressum
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Angaben gemäß § 5 TMG und § 55 RStV
              </p>
            </div>
          </div>
        </section>

        {/* ===== Impressum Content ===== */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto space-y-8">

              {/* § 5 TMG */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Tech-Solutions</strong><br />
                    Hochstr 146<br />
                    66115 Saarbrücken
                  </p>
                  <p>
                    <strong>Vertreten durch:</strong><br />
                    [Mahmoud Orabi]
                  </p>
                  <p>
                    <strong>Kontakt:</strong><br />
                    Telefon: +49 15906661522<br />
                    E-Mail: mahmoud.orabi.dev@gmail.com
                  </p>
                  <p>
                    <strong>Umsatzsteuer-Identifikationsnummer:</strong><br />
                    DEXXXXXXXXX
                  </p>
                  <p>
                    <strong>Handelsregister:</strong><br />
                    Amtsgericht DEINE_STADT, HRB XXXX
                  </p>
                </div>
              </div>

              {/* § 55 RStV */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Angaben gemäß § 55 RStV
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Verantwortlich für den Inhalt:</strong><br />
                    [Mahmoud Orabi]<br />
                    Hochstr 146<br />
                    66115 Saarbrücken
                  </p>
                </div>
              </div>

              {/* Haftungsausschluss */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Haftungsausschluss
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
                    <p className="text-sm leading-relaxed">
                      Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                      Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                      nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                      Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                      Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                      Tätigkeit hinweisen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Haftung für Links</h3>
                    <p className="text-sm leading-relaxed">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                      Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                      Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                      der Seiten verantwortlich.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Urheberrecht</h3>
                    <p className="text-sm leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                      dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                      der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                      Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Datenschutz-Hinweis */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Datenschutz
                </h2>
                <div className="text-gray-700">
                  <p className="text-sm leading-relaxed">
                    Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                    Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder 
                    E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. 
                    Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                  </p>
                  <p className="text-sm leading-relaxed mt-3">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation 
                    per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem 
                    Zugriff durch Dritte ist nicht möglich.
                  </p>
                  <p className="text-sm leading-relaxed mt-3">
                    <strong>Hinweis zur Verantwortlichen Stelle:</strong><br />
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="text-sm mt-2">
                    Tech-Solutions<br />
                    DEINE_STRASSE 123<br />
                    12345 DEINE_STADT
                  </p>
                  <p className="text-sm leading-relaxed mt-3">
                    <strong>Widerspruch Werbe-Mails:</strong><br />
                    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur 
                    Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien 
                    wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche 
                    Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                  </p>
                </div>
              </div>

              {/* Streitschlichtung */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Streitschlichtung
                </h2>
                <div className="text-gray-700">
                  <p className="text-sm leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline ml-1"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="text-sm leading-relaxed mt-3">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>

              {/* Letzte Aktualisierung */}
              <div className="text-center text-sm text-gray-400 pt-4">
                <p>Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}