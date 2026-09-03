'use client';

import Navigation from './../components/Navigation';
import Footer from './../components/footer';
import '../../app/globals.css';
import Image from 'next/image';
import { Sparkles, Users, Cpu, Award, CheckCircle, Target, Clock, Star, Shield, Zap, Rocket, Server } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/70">
      <Navigation />
      <main className="flex-grow">

        {/* ===== Hero Section ===== */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          {/* Dekorative Hintergrund-Elemente */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-2xl" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-repeat" />
            
            {/* Kleine dekorative Tech-Elemente */}
            <div className="absolute top-1/4 right-12 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 left-12 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Über Tech-Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Innovation. Expertise. <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Zukunft.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Wir sind ein Team von leidenschaftlichen Tech-Experten, die Unternehmen mit maßgeschneiderten 
                KI-Lösungen, Automatisierung und modernster Software in die digitale Zukunft führen.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm px-5 py-2 rounded-full text-gray-700 border border-gray-200">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span>Innovativ & zukunftsorientiert</span>
                </span>
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm px-5 py-2 rounded-full text-gray-700 border border-gray-200">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <span>DSGVO-konform & sicher</span>
                </span>
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm px-5 py-2 rounded-full text-gray-700 border border-gray-200">
                  <Rocket className="w-5 h-5 text-amber-500" />
                  <span>Skalierbare Lösungen</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Mission & Values Cards ===== */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unsere Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unternehmen mit innovativen Technologien zu befähigen, Prozesse zu automatisieren und 
                  nachhaltige Wettbewerbsvorteile zu schaffen.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unser Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tech-Experten mit Leidenschaft für KI, Automatisierung und maßgeschneiderte 
                  Softwarelösungen – wir lieben, was wir tun.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation & Zukunft</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wir entwickeln zukunftssichere Technologien, die Unternehmen heute fit für die 
                  Herausforderungen von morgen machen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Story & Philosophy ===== */}
        <section className="py-16 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Unsere Geschichte</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Von Tech-Enthusiasten <br className="hidden md:block" />
                  für Unternehmen
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Tech-Solutions</strong> wurde von einem Team erfahrener 
                  Softwareentwickler und KI-Spezialisten gegründet, die eine Vision teilten: 
                  Unternehmen den Zugang zu modernster Technologie zu ermöglichen – ohne Komplexität und 
                  ohne überteuerte Investitionen.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Heute bieten wir maßgeschneiderte Lösungen in den Bereichen E-Rechnung, KI-gestützte 
                  Spam-Erkennung, automatisierte Parkraumüberwachung, medizinische Bildanalyse und 
                  individuelle Chatbots. Wir verbinden technologische Exzellenz mit einem tiefen 
                  Verständnis für die Bedürfnisse unserer Kunden.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-gray-900">Modernste KI-Technologien:</strong> Wir nutzen neueste Algorithmen für präzise und zuverlässige Ergebnisse.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-gray-900">Maßgeschneiderte Lösungen:</strong> Jedes Unternehmen ist einzigartig – wir entwickeln passgenaue Technologien.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-gray-900">DSGVO-konform & sicher:</strong> Datenschutz und Sicherheit haben bei uns höchste Priorität.</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-2xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 bg-white">
                  <Image
                    src="/image/tech-team.jpeg"  // ← DEIN NEUES TECH-TEAM-BILD
                    alt="Tech-Solutions Team – Experten für KI und Automatisierung"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Why Us / Values Grid ===== */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Das zeichnet uns aus</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-12">
              Warum <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Tech-Solutions</span>?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">KI-gestützte Innovation</h4>
                <p className="text-sm text-gray-500 mt-1">Wir nutzen neueste KI-Technologien für präzise Lösungen.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Maßgeschneiderte Lösungen</h4>
                <p className="text-sm text-gray-500 mt-1">Individuelle Technologien für Ihre spezifischen Bedürfnisse.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Höchste Sicherheit</h4>
                <p className="text-sm text-gray-500 mt-1">DSGVO-konform und höchste Datenschutzstandards.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Zukunftssicher</h4>
                <p className="text-sm text-gray-500 mt-1">Skalierbare Technologien für die Herausforderungen von morgen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Call to Action ===== */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für die digitale Zukunft?</h2>
            <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
              Kontaktieren Sie uns – wir entwickeln Ihre maßgeschneiderte Technologielösung!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Jetzt Tech-Beratung anfragen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}