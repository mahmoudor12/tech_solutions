import React from 'react';
import '../../app/globals.css';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle, Shield, Cpu, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50"
    >
      {/* Dekorative Hintergrund-Elemente (Tech-Thema) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/10 rounded-full blur-2xl" />
        {/* Subtiles Tech-Pattern (optional) */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 bg-repeat" />
        
        {/* Kleine dekorative Tech-Elemente */}
        <div className="absolute top-1/4 right-12 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-12 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-700" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge mit Icon */}
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            Zukunftssichere Technologielösungen
          </span>

          {/* Hauptüberschrift */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Innovative Technologien{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              für Ihr Unternehmen
            </span>
          </h1>

          {/* Untertitel – hier werden ALLE deine 5 Services genannt! */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Von E-Rechnung über KI-gestützte Spam-Erkennung bis hin zu smarter Parkraumüberwachung, 
            medizinischer Bildanalyse und individuellen Chatbots – wir automatisieren und optimieren 
            Ihre Geschäftsprozesse.
          </p>

          {/* Vertrauenssignale – jetzt Tech-relevant */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-500" />
              DSGVO-konform & sicher
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-emerald-500" />
              KI-gestützte Innovation
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-500" />
              Skalierbar & zukunftssicher
            </span>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Kostenloses Tech-Beratungsgespräch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 font-semibold px-8 py-3.5 rounded-full border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              Unsere Leistungen entdecken
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;