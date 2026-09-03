import React from 'react';
import '../../app/globals.css';
import Image from 'next/image';
import { 
  Sparkles, FileText, Shield, Car, Heart, MessageCircle, 
  ArrowRight, CheckCircle, Play 
} from 'lucide-react';

const ContentSection = () => {
  const services = [
    {
      icon: FileText,
      title: 'E-Rechnung & Finanzautomatisierung',
      description: 'Digitale Rechnungsstellung mit KI-gestützter Erkennung und automatischer Buchhaltung. Reduzieren Sie manuelle Arbeit und minimieren Sie Fehler.',
      image: '/image/e_rechnung.jpeg',
      video: null,
      features: ['Automatische Rechnungserkennung', 'Nahtlose Buchhaltungsintegration']
    },
    {
      icon: Shield,
      title: 'Spam-Email-Erkennung (KI)',
      description: 'Fortschrittliche KI-Algorithmen erkennen und blockieren Phishing- und Spam-Mails in Echtzeit – für maximale Sicherheit.',
      image: '/image/email_detection.jpeg',
      video: null,
      features: ['Echtzeit-Erkennung', 'Phishing-Schutz']
    },
    {
      icon: Car,
      title: 'Park & Control – Parkraumüberwachung',
      description: 'Automatisierte Überwachung und Steuerung von Parkflächen mit intelligenter Sensorik. Optimieren Sie die Auslastung.',
      image: '/image/parking_controller.jpeg',
      video: null,
      features: ['Echtzeit-Belegungsdaten', 'Automatische Kennzeichenerkennung']
    },
    {
      icon: Heart,
      title: 'Medical Image Classifier',
      description: 'KI-gestützte Bildanalyse für medizinische Diagnostik – schnell, präzise, zuverlässig. Unterstützen Sie Ärzte bei der Erkennung von Krankheiten.',
      image: '/image/medical_ai.jpeg',
      video: null,
      features: ['Hohe Erkennungsgenauigkeit', 'Schnelle Analyse']
    },
    {
      icon: MessageCircle,
      title: 'Individueller KI-Chatbot',
      description: 'Maßgeschneiderte Chatbots für Kundenservice, Support und Automatisierung Ihrer Kommunikation – rund um die Uhr verfügbar.',
      image: '/image/chatbot.jpeg',
      video: null,
      features: ['24/7 Verfügbarkeit', 'Lernfähige KI']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50/70">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              <Sparkles className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Warum <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Tech-Solutions</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3 leading-relaxed">
              Von E-Rechnung über KI-gestützte Spam-Erkennung bis hin zu smarter Parkraumüberwachung, 
              medizinischer Bildanalyse und individuellen Chatbots – wir liefern maßgeschneiderte 
              Technologielösungen für Ihre Herausforderungen.
            </p>
          </div>

          {/* Services Grid mit Bildern */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Bild / Video */}
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                    {service.video ? (
                      <video
                        src={service.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <Image
                        src={service.image || '/image/placeholder-service.jpg'}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {/* Play-Button für Video (falls vorhanden) */}
                    {service.video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-blue-600 ml-0.5" />
                        </div>
                      </div>
                    )}
                    {/* Badge oben rechts */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                      KI-gestützt
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-base md:text-lg leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* Features (kleine Liste) */}
                    <ul className="space-y-1.5 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group-hover:gap-3"
                    >
                      Jetzt anfragen
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Zentrierter CTA unter dem Grid */}
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Alle Services entdecken
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;