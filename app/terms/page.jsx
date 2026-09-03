'use client';

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/footer';
import '../../app/globals.css';
import { 
  FileText, CheckCircle, Clock, Shield, AlertCircle, Scale, 
  Cpu, Zap, Lock, Server, ArrowUp, Info, FileCheck, 
  Calendar, Users, Euro, Mail 
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AgbPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/70">
      <Navigation />
      <main className="flex-grow">

        {/* ===== Hero Section ===== */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-repeat" />
          </div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <FileText className="w-4 h-4 text-blue-500" />
                AGB
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                Allgemeine <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Geschäftsbedingungen
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-900">
                Hier finden Sie unsere allgemeinen Geschäftsbedingungen für alle Dienstleistungen 
                von Tech-Solutions. Sie gelten für alle Verträge zwischen uns und unseren Kunden 
                im Bereich Technologie- und Softwarelösungen.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Content Section ===== */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-10">

                {/* 1. Geltungsbereich */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      1
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Scale className="w-5 h-5 text-blue-500" />
                        Geltungsbereich
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Für alle Geschäftsbeziehungen zwischen <strong>Tech-Solutions</strong> (nachfolgend 
                          „Auftragnehmer“) und unseren Kunden (nachfolgend „Auftraggeber“) gelten die 
                          nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der 
                          Bestellung gültigen Fassung.
                        </p>
                        <p>
                          Abweichende Bedingungen des Auftraggebers erkennen wir nicht an, es sei denn, 
                          wir haben ihnen ausdrücklich schriftlich zugestimmt. Diese AGB gelten auch für 
                          alle zukünftigen Geschäftsbeziehungen, ohne dass wir sie erneut vereinbaren müssen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Vertragsgegenstand */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      2
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Cpu className="w-5 h-5 text-blue-500" />
                        Vertragsgegenstand
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Tech-Solutions bietet Dienstleistungen in den Bereichen Softwareentwicklung, 
                          Künstliche Intelligenz (KI), Automatisierung und IT-Beratung an. Im Einzelnen 
                          umfasst dies:
                        </p>
                        <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                          <li><strong>E-Rechnung & Finanzautomatisierung:</strong> Entwicklung und Bereitstellung von Lösungen zur digitalen Rechnungsstellung und Buchhaltungsautomatisierung.</li>
                          <li><strong>Spam-Email-Erkennung (KI):</strong> Implementierung von KI-Algorithmen zur Erkennung und Filterung von Spam- und Phishing-Mails.</li>
                          <li><strong>Park & Control:</strong> Automatisierte Parkraumüberwachung mit intelligenter Sensorik und Kennzeichenerkennung.</li>
                          <li><strong>Medical Image Classifier:</strong> KI-gestützte Bildanalyse für medizinische Diagnostik.</li>
                          <li><strong>Individueller KI-Chatbot:</strong> Entwicklung und Implementierung von Chatbots für Kundenservice und Support.</li>
                        </ul>
                        <p>
                          Der genaue Leistungsumfang, die technischen Spezifikationen und die Liefertermine 
                          werden im jeweiligen Einzelvertrag oder in der Leistungsbeschreibung festgelegt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Vertragsschluss */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      3
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <FileCheck className="w-5 h-5 text-blue-500" />
                        Vertragsschluss
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Die Angebote von Tech-Solutions sind freibleibend. Ein Vertrag kommt erst durch 
                          unsere schriftliche Auftragsbestätigung oder durch die tatsächliche Ausführung 
                          der Dienstleistung zustande.
                        </p>
                        <p>
                          Der Auftraggeber ist verpflichtet, alle für die Durchführung erforderlichen 
                          Informationen, Daten und Zugänge rechtzeitig und vollständig zur Verfügung zu 
                          stellen. Bei Verzögerungen durch den Auftraggeber verschieben sich die Liefertermine 
                          entsprechend.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Leistungen und Preise */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      4
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Euro className="w-5 h-5 text-blue-500" />
                        Leistungen und Preise
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                          <li>Die konkreten Leistungen und Preise werden im Einzelfall schriftlich vereinbart.</li>
                          <li>Alle Preise verstehen sich in Euro zuzüglich der gesetzlichen Mehrwertsteuer.</li>
                          <li>Nachträgliche Änderungen des Leistungsumfangs werden gesondert berechnet.</li>
                          <li>Bei Softwarelösungen gelten zusätzlich die jeweiligen Lizenzbedingungen.</li>
                          <li>Mehrwertsteuer wird gemäß den gesetzlichen Vorschriften ausgewiesen.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Zahlungsbedingungen */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      5
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <AlertCircle className="w-5 h-5 text-blue-500" />
                        Zahlungsbedingungen
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Die Zahlung erfolgt nach Rechnungserstellung innerhalb von 14 Tagen netto ohne Abzug. 
                          Bei Überschreitung des Zahlungsziels behalten wir uns vor, Verzugszinsen in Höhe 
                          von 8 % über dem Basiszinssatz zu berechnen.
                        </p>
                        <p>
                          Aufrechnungs- und Zurückbehaltungsrechte des Auftraggebers sind ausgeschlossen, 
                          es sei denn, die Gegenforderung ist unbestritten oder rechtskräftig festgestellt.
                        </p>
                        <p>
                          Bei Software-Lizenzmodellen gelten die im Einzelvertrag vereinbarten 
                          Zahlungsintervalle (monatlich, quartalsweise oder jährlich).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Verfügbarkeit und Wartung */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      6
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Server className="w-5 h-5 text-blue-500" />
                        Verfügbarkeit und Wartung
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Bei Cloud-basierten Lösungen streben wir eine Verfügbarkeit von 99,5 % an. 
                          Wartungsarbeiten werden in der Regel außerhalb der Geschäftszeiten (zwischen 
                          20:00 und 6:00 Uhr) durchgeführt und rechtzeitig angekündigt.
                        </p>
                        <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                          <li>Geplante Wartungsarbeiten werden mindestens 48 Stunden vorher kommuniziert.</li>
                          <li>Notfall-Wartungen können kurzfristig erforderlich sein und werden umgehend durchgeführt.</li>
                          <li>Der Auftraggeber wird über Unterbrechungen informiert.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Lizenzbedingungen */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      7
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-blue-500" />
                        Lizenzbedingungen
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Die von Tech-Solutions bereitgestellte Software ist urheberrechtlich geschützt. 
                          Der Auftraggeber erhält ein nicht-exklusives, nicht-übertragbares Nutzungsrecht 
                          für die vereinbarte Dauer und den vereinbarten Umfang.
                        </p>
                        <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                          <li>Der Quellcode wird nur bei ausdrücklicher Vereinbarung übergeben.</li>
                          <li>Die Nutzung ist auf die vereinbarte Anzahl von Benutzern und Systemen beschränkt.</li>
                          <li>Weitergabe oder Unterlizenzierung an Dritte ist nicht gestattet.</li>
                          <li>Bei Vertragsende erlischt das Nutzungsrecht; der Auftraggeber hat die Software zu deinstallieren.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Haftung */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      8
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Shield className="w-5 h-5 text-blue-500" />
                        Haftung
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                          <li>Tech-Solutions haftet für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz verursacht wurden.</li>
                          <li>Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht wesentliche Vertragspflichten betroffen sind.</li>
                          <li>Die Haftung auf Schadensersatz ist auf den typischen, vorhersehbaren Schaden begrenzt.</li>
                          <li>Für vom Auftraggeber bereitgestellte Daten und Systeme übernehmen wir keine Haftung, es sei denn, uns ist grobe Fahrlässigkeit nachzuweisen.</li>
                          <li>Bei Datenverlust haftet Tech-Solutions nur, wenn eine ordnungsgemäße Datensicherung unterlassen wurde.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9. Gewährleistung */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      9
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        Gewährleistung
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme der Leistung. Der Auftraggeber 
                          ist verpflichtet, Mängel unverzüglich schriftlich anzuzeigen.
                        </p>
                        <p>
                          Bei berechtigten Mängelrügen kann der Auftraggeber Nacherfüllung verlangen. 
                          Schlägt die Nacherfüllung fehl, kann der Auftraggeber Minderung oder Rücktritt 
                          verlangen.
                        </p>
                        <div className="bg-blue-50/70 border border-blue-200/50 rounded-xl p-4">
                          <p className="text-sm text-gray-700 flex items-start gap-2">
                            <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>Hinweis:</strong> Die Gewährleistung erlischt bei eigenmächtigen 
                              Änderungen oder unsachgemäßer Nutzung der Software durch den Auftraggeber.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10. Datenschutz und Sicherheit */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      10
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Lock className="w-5 h-5 text-blue-500" />
                        Datenschutz und Sicherheit
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Tech-Solutions verarbeitet personenbezogene Daten des Auftraggebers gemäß der 
                          Datenschutz-Grundverordnung (DSGVO) und den gesetzlichen Bestimmungen. Nähere 
                          Informationen finden Sie in unserer <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline font-medium">Datenschutzerklärung</a>.
                        </p>
                        <p>
                          Tech-Solutions trifft angemessene technische und organisatorische Maßnahmen 
                          zum Schutz der Daten des Auftraggebers vor unbefugtem Zugriff, Verlust oder 
                          Zerstörung.
                        </p>
                        <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                          <li>Alle Daten werden verschlüsselt übertragen und gespeichert.</li>
                          <li>Zugang zu Kundendaten ist nur autorisierten Mitarbeitern erlaubt.</li>
                          <li>Bei Cloud-Lösungen erfolgt die Speicherung in zertifizierten Rechenzentren in der EU.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 11. Support */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      11
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-blue-500" />
                        Support
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Tech-Solutions bietet Support für alle bereitgestellten Lösungen. Der Support 
                          umfasst:
                        </p>
                        <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                          <li>E-Mail-Support während der Geschäftszeiten (Mo–Fr, 9–18 Uhr)</li>
                          <li>Telefonischer Support für kritische Anfragen</li>
                          <li>Reaktionszeiten: Innerhalb von 24 Stunden bei Standard-Anfragen</li>
                          <li>Bei kritischen Störungen: Reaktion innerhalb von 4 Stunden</li>
                        </ul>
                        <p>
                          Die Support-Konditionen werden im Einzelvertrag festgelegt. Erweiterte 
                          Support-Optionen (24/7, Vor-Ort-Service) können gesondert vereinbart werden.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12. Schlussbestimmungen */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      12
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Scale className="w-5 h-5 text-blue-500" />
                        Schlussbestimmungen
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                          <li>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</li>
                          <li>Gerichtsstand für alle Streitigkeiten ist der Sitz von Tech-Solutions.</li>
                          <li>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt der übrige Vertrag gültig.</li>
                          <li>Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform.</li>
                          <li>Die Vertragssprache ist Deutsch.</li>
                        </ul>
                        <div className="bg-gray-100/70 rounded-xl p-4 mt-4">
                          <p className="text-sm text-gray-600">
                            <strong>Stand:</strong> {new Date().toLocaleDateString('de-DE', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ===== Call to Action ===== */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für Ihre Lösung?</h2>
            <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
              Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </section>

      </main>
      <Footer />

      {/* ===== Scroll-to-Top Button ===== */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-in fade-in zoom-in duration-300"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}