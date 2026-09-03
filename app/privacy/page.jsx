'use client';

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/footer';
import '../../app/globals.css';
import { 
  Shield, CheckCircle, Cookie, Eye, FileText, Lock, 
  Database, Mail, User, Clock, ArrowUp, Info, 
  ChevronRight, ExternalLink 
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DatenschutzPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll-to-Top Button anzeigen/verstecken
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
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-repeat" />
          </div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Shield className="w-4 h-4 text-blue-500" />
                Datenschutz
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                Datenschutzerklärung
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-900">
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Hier erfahren Sie, welche Daten wir erheben, 
                wie wir sie nutzen und welche Rechte Sie haben.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Content Section ===== */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-10">

                {/* 1. Datenschutz auf einen Blick */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      1
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        Datenschutz auf einen Blick
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                          personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene 
                          Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                          Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
                          Text aufgeführten Datenschutzerklärung.
                        </p>
                        <div className="bg-blue-50/80 border border-blue-200/60 rounded-xl p-4 hover:bg-blue-50 transition-colors">
                          <p className="text-sm text-gray-700 flex items-start gap-2">
                            <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>Verantwortliche Stelle:</strong> Tech-Solutions, 
                              Hochstr 146, 66115 Saarbrücken, Deutschland<br />
                              <strong>Kontakt:</strong> Telefon: +49 15906661522, E-Mail: 
                              <a href="mailto:mahmoud.orabi.dev@gmail.com" className="text-blue-600 hover:underline">mahmoud.orabi.dev@gmail.com</a>
                             </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Datenerfassung auf unserer Website */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      2
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Database className="w-5 h-5 text-blue-500" />
                        Datenerfassung auf unserer Website
                      </h2>
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                          Dessen Kontaktdaten können Sie dem <a href="/imprint" className="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1">Impressum <ChevronRight className="w-3 h-3" /></a> entnehmen.
                        </p>

                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">Wie erfassen wir Ihre Daten?</h3>
                          <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                            <li>
                              <strong>Server‑Log‑Dateien:</strong> Der Provider der Seiten erhebt und speichert 
                              automatisch Informationen in so genannten Server‑Log‑Dateien, die Ihr Browser 
                              automatisch an uns übermittelt.
                            </li>
                            <li>
                              <strong>Kontaktformular:</strong> Bei Anfragen über das Kontaktformular werden Ihre 
                              Angaben (Name, E-Mail, Betreff, Nachricht) zweckgebunden zur Bearbeitung gespeichert.
                            </li>
                            <li>
                              <strong>E-Mail-Kommunikation:</strong> Wenn Sie uns per E-Mail kontaktieren, 
                              speichern wir Ihre Angaben zur Bearbeitung der Anfrage.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">Was passiert mit Ihren Daten?</h3>
                          <p>
                            Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage, zur Kontaktaufnahme 
                            und zur Verbesserung unseres Angebots verwendet. Eine Weitergabe an Dritte erfolgt 
                            nur, wenn dies gesetzlich vorgeschrieben ist oder Sie ausdrücklich eingewilligt haben.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Rechtsgrundlage der Verarbeitung */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      3
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-blue-500" />
                        Rechtsgrundlage der Verarbeitung
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Die Verarbeitung Ihrer Daten erfolgt auf Grundlage folgender Rechtsgrundlagen:
                        </p>
                        <ul className="space-y-2 list-disc list-inside marker:text-blue-500">
                          <li>
                            <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – bei Ihrer Einwilligung (z.B. 
                            für die Kontaktaufnahme oder den Newsletter-Versand).
                          </li>
                          <li>
                            <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – zur Erfüllung eines Vertrags oder 
                            zur Durchführung vorvertraglicher Maßnahmen.
                          </li>
                          <li>
                            <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – zur Wahrung berechtigter Interessen 
                            (z.B. Analyse und Optimierung unserer Website).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Dauer der Speicherung */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      4
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5 text-blue-500" />
                        Dauer der Speicherung
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Personenbezogene Daten werden nur so lange gespeichert, wie es für die Erfüllung 
                          des Zwecks erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen 
                          (z.B. handels- oder steuerrechtliche Aufbewahrungspflichten). Nach Wegfall des 
                          Zwecks oder Ablauf der gesetzlichen Fristen werden die Daten gelöscht.
                        </p>
                        <div className="bg-gray-100/70 rounded-xl p-4 space-y-2">
                          <p className="text-sm font-semibold text-gray-700">Konkret bedeutet das:</p>
                          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside marker:text-blue-500">
                            <li>Kontaktanfragen: Löschung nach 6 Monaten, wenn keine weitere Kommunikation erfolgt.</li>
                            <li>Vertragsdaten: Löschung nach Ablauf der gesetzlichen Aufbewahrungspflichten (in der Regel 10 Jahre).</li>
                            <li>Server-Log-Dateien: Löschung nach 7 Tagen.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Empfänger von Daten */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      5
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Mail className="w-5 h-5 text-blue-500" />
                        Empfänger von Daten
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Ihre Daten werden an folgende Dienstleister weitergegeben, die uns bei der 
                          Bereitstellung unserer Website und Dienste unterstützen:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 bg-white/70 rounded-xl p-3 border border-gray-100">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <strong className="text-gray-800">Web3Forms:</strong>
                              <span className="text-gray-600 text-sm block">Zur Verarbeitung von Kontaktanfragen (E-Mail-Versand). Web3Forms verarbeitet Daten nur nach unseren Weisungen und unterliegt der DSGVO.</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-white/70 rounded-xl p-3 border border-gray-100">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Database className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <strong className="text-gray-800">Hosting-Provider:</strong>
                              <span className="text-gray-600 text-sm block">Zur Bereitstellung der Website und Speicherung von Server-Log-Dateien. Alle Daten werden innerhalb der EU verarbeitet.</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Datensicherheit */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      6
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Lock className="w-5 h-5 text-blue-500" />
                        Datensicherheit
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Wir treffen technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten 
                          gegen Manipulation, Verlust, Zerstörung oder Zugriff durch unbefugte Personen zu schützen. 
                          Unsere Website wird durch eine SSL-Verschlüsselung gesichert (erkennbar am 
                          Schloss-Symbol in der Browser-Adressleiste).
                        </p>
                        <div className="bg-amber-50/70 border border-amber-200/50 rounded-xl p-4">
                          <p className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-amber-500 text-lg">⚠️</span>
                            <span>
                              Trotz größter Sorgfalt kann die Datenübertragung im Internet (z.B. bei der Kommunikation 
                              per E-Mail) Sicherheitslücken aufweisen. Ein lückenloser Schutz der Daten vor dem 
                              Zugriff durch Dritte ist nicht möglich.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Cookies */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      7
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Cookie className="w-5 h-5 text-blue-500" />
                        Cookies
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Diese Website verwendet teilweise so genannte Cookies. Cookies richten auf Ihrem 
                          Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot 
                          nutzerfreundlicher, effektiver und sicherer zu machen.
                        </p>
                        <p>
                          Sie können das Speichern von Cookies in Ihren Browser‑Einstellungen einschränken oder 
                          ganz verhindern. Bitte beachten Sie, dass bei Deaktivierung von Cookies die Funktionalität 
                          dieser Website eingeschränkt sein kann.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Ihre Rechte im Detail */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      8
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <User className="w-5 h-5 text-blue-500" />
                        Ihre Rechte im Detail
                      </h2>
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p className="font-medium text-gray-700">
                          Sie haben jederzeit das Recht auf:
                        </p>
                        <div className="grid gap-3">
                          {[
                            { icon: Eye, title: 'Auskunft (Art. 15 DSGVO)', desc: 'Bestätigung, ob wir Sie betreffende personenbezogene Daten verarbeiten.' },
                            { icon: CheckCircle, title: 'Berichtigung (Art. 16 DSGVO)', desc: 'Unrichtige personenbezogene Daten berichtigen zu lassen.' },
                            { icon: CheckCircle, title: 'Löschung (Art. 17 DSGVO)', desc: 'Löschung Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht.' },
                            { icon: CheckCircle, title: 'Einschränkung der Verarbeitung (Art. 18 DSGVO)', desc: 'Einschränkung der Verarbeitung zu verlangen.' },
                            { icon: CheckCircle, title: 'Widerspruch (Art. 21 DSGVO)', desc: 'Aus Gründen Ihrer besonderen Situation gegen die Verarbeitung Widerspruch einzulegen.' },
                            { icon: CheckCircle, title: 'Datenübertragbarkeit (Art. 20 DSGVO)', desc: 'Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.' },
                          ].map((right, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white/70 rounded-xl p-3 border border-gray-100 hover:shadow-sm transition-shadow">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <right.icon className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <strong className="text-gray-800 text-sm">{right.title}</strong>
                                <span className="text-gray-600 text-sm block">{right.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/60 rounded-xl p-5 mt-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Mail className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-800">💡 Kontakt für Ihre Rechte</p>
                              <p className="text-sm text-gray-600">
                                Bei Fragen oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:<br />
                                <a href="mailto:info@tech-solutions.de" className="text-blue-600 hover:text-blue-800 font-medium underline">
                                  info@tech-solutions.de
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9. Beschwerderecht */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      9
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <Shield className="w-5 h-5 text-blue-500" />
                        Beschwerderecht bei der Aufsichtsbehörde
                      </h2>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs 
                          steht Ihnen das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde zu, wenn Sie 
                          der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO 
                          verstößt.
                        </p>
                        <div className="bg-gray-100/80 rounded-xl p-4 border border-gray-200">
                          <p className="text-sm text-gray-700 flex items-start gap-2">
                            <Info className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>Zuständige Aufsichtsbehörde:</strong><br />
                              <span className="text-gray-600">
                                Landesbeauftragte für den Datenschutz und die Informationsfreiheit<br />
                                <span className="text-xs text-gray-400">(Bitte ersetzen Sie dies durch die für Ihr Bundesland zuständige Behörde)</span>
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10. Änderungen dieser Datenschutzerklärung */}
                <div className="group hover:bg-white transition-colors duration-300 rounded-2xl p-4 -mx-4 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                      10
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-blue-500" />
                        Änderungen dieser Datenschutzerklärung
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                        aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                        in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue 
                        Datenschutzerklärung.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Letzte Aktualisierung */}
                <div className="pt-6 border-t border-gray-200 text-center">
                  <div className="inline-flex items-center gap-2 bg-gray-100/80 rounded-full px-5 py-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-500">
                      Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE', { 
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