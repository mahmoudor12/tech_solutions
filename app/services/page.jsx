'use client';

import React from 'react';
import Navigation from './../components/Navigation';
import Footer from './../components/footer';
import '../../app/globals.css';
import Image from 'next/image';
import { 
  Sparkles, FileText, Shield, Car, Heart, MessageCircle, 
  ArrowRight, CheckCircle, Play, Pause 
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'einvoice',
      icon: FileText,
      title: 'E-Rechnung & Finanzautomatisierung',
      description: 'Digitale Rechnungsstellung mit KI-gestützter Erkennung und automatischer Buchhaltung. Reduzieren Sie manuelle Arbeit, minimieren Sie Fehler und beschleunigen Sie Ihren Zahlungsprozess.',
      features: ['Automatische Rechnungserkennung', 'Nahtlose Buchhaltungsintegration', 'DSGVO-konforme Datenspeicherung'],
      image: '/images/e_rechnung.jpeg',        // ← DEIN BILD
      video: 'https://www.youtube.com/embed/DEIN_VIDEO_ID', // ← DEIN VIDEO (YouTube embed)
    },
    {
      id: 'spam',
      icon: Shield,
      title: 'Spam-Email-Erkennung (KI)',
      description: 'Fortschrittliche KI-Algorithmen erkennen und blockieren Phishing- und Spam-Mails in Echtzeit. Schützen Sie Ihr Unternehmen vor Cyber-Bedrohungen und steigern Sie die Sicherheit Ihrer Kommunikation.',
      features: ['Echtzeit-Erkennung', 'Phishing-Schutz', 'Automatische Filterung'],
      image: '/images/email_detection.jpeg',
      video: 'https://www.youtube.com/embed/DEIN_VIDEO_ID',
    },
    {
      id: 'parking',
      icon: Car,
      title: 'Park & Control – Parkraumüberwachung',
      description: 'Automatisierte Überwachung und Steuerung von Parkflächen mit intelligenter Sensorik. Optimieren Sie die Auslastung, reduzieren Sie Parksuchverkehr und steigern Sie die Effizienz.',
      features: ['Echtzeit-Belegungsdaten', 'Automatische Kennzeichenerkennung', 'Integrierte Abrechnung'],
      image: '/images/parking_controller.jpeg',
      video: 'https://www.youtube.com/embed/DEIN_VIDEO_ID',
    },
    {
      id: 'medical',
      icon: Heart,
      title: 'Medical Image Classifier (KI)',
      description: 'KI-gestützte Bildanalyse für medizinische Diagnostik – schnell, präzise, zuverlässig. Unterstützen Sie Ärzte bei der Erkennung von Krankheiten und verbessern Sie die Behandlungsqualität.',
      features: ['Hohe Erkennungsgenauigkeit', 'Schnelle Analyse', 'Einfache Integration in bestehende Systeme'],
      image: '/images/medical_ai.jpeg',
      video: 'https://www.youtube.com/embed/DEIN_VIDEO_ID',
    },
    {
      id: 'chatbot',
      icon: MessageCircle,
      title: 'Individueller KI-Chatbot',
      description: 'Maßgeschneiderte Chatbots für Kundenservice, Support und Automatisierung Ihrer Kommunikation. Bieten Sie rund um die Uhr exzellenten Service und entlasten Sie Ihre Teams.',
      features: ['24/7 Verfügbarkeit', 'Lernfähige KI', 'Einfache Anpassung an Ihr Unternehmen'],
      image: '/images/chatbot.jpeg',
      video: 'https://www.youtube.com/embed/DEIN_VIDEO_ID',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/70">
      <Navigation />
      <main className="flex-grow">

        {/* ===== Hero Section ===== */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-repeat" />
          </div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Unsere Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Maßgeschneiderte <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Technologielösungen
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Von E-Rechnung über KI-gestützte Spam-Erkennung bis hin zu smarter Parkraumüberwachung, 
                medizinischer Bildanalyse und individuellen Chatbots – wir liefern innovative Lösungen 
                für Ihre Herausforderungen.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Services mit Bild & Video ===== */}
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          return (
            <section 
              key={service.id}
              className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}`}
            >
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                    
                    {/* Linke Seite: Text */}
                    <div className={!isEven ? 'md:col-start-2' : ''}>
                      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                        <Icon className="w-4 h-4" />
                        Service
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href="/contact" 
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                      >
                        Jetzt anfragen
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Rechte Seite: Bild + Video (nebeneinander) */}
                    <div className={!isEven ? 'md:col-start-1' : ''}>
                      <div className="space-y-4">
                        {/* Bild */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        
                        {/* Video (Embed) */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video">
                          <iframe
                            src={service.video}
                            title={`Video: ${service.title}`}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                          {/* Play-Overlay (optional) */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg">
                              <Play className="w-8 h-8 ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ===== Call to Action ===== */}
        <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
  {/* Dekorativer, weicher Glow im Hintergrund */}
  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-transparent pointer-events-none" />
  
  {/* Dezentes Grid-Muster für den Tech-Look */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

  <div className="relative container mx-auto px-4 md:px-8 text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
      Bereit für die digitale Zukunft?
    </h2>
    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-light">
      Kontaktieren Sie uns – wir entwickeln Ihre maßgeschneiderte Technologielösung.
    </p>
    <a
      href="/contact"
      className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
    >
      <span>Jetzt Tech-Beratung anfragen</span>
      {/* Kleiner Pfeil-Effekt beim Hover */}
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</section>

      </main>
      <Footer />
    </div>
  );
}