'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';
import '../../app/globals.css';
import { Sparkles, Building2, Shield, Car, Heart, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

export default function CalculatorPage() {
  const [companyName, setCompanyName] = useState('');
  const [serviceType, setServiceType] = useState('einvoice');
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 'einvoice', label: 'E-Rechnung & Finanzautomatisierung', icon: Building2 },
    { id: 'spam', label: 'Spam-Email-Erkennung (KI)', icon: Shield },
    { id: 'parking', label: 'Park & Control – Parkraumüberwachung', icon: Car },
    { id: 'medical', label: 'Medical Image Classifier (KI)', icon: Heart },
    { id: 'chatbot', label: 'Individueller KI-Chatbot', icon: MessageCircle },
    { id: 'other', label: 'Sonstiges – Individuelle Anfrage', icon: Sparkles },
  ];

  const selectedService = services.find(s => s.id === serviceType);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !serviceType) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/70">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center py-16 md:py-24 px-4 md:px-8">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              <Sparkles className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
              Tech-Solutions Konfigurator
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Finden Sie die passende <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Technologielösung
              </span>
            </h1>
            <p className="text-gray-600 mt-3 max-w-md mx-auto">
              Wählen Sie Ihre gewünschte Lösung und wir erstellen Ihnen ein maßgeschneidertes Angebot.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10">
            {submitted ? (
              // Erfolgsmeldung
              <div className="text-center py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vielen Dank für Ihre Anfrage!</h3>
                <p className="text-gray-600 mb-2">
                  Sie haben Interesse an: <strong className="text-blue-600">{selectedService?.label}</strong>
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  für <strong>{companyName}</strong>. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                  >
                    Jetzt Beratung buchen
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-300"
                  >
                    Neue Anfrage
                  </button>
                </div>
              </div>
            ) : (
              // Formular
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Unternehmensname */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Ihr Unternehmen <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="z.B. Mustermann GmbH"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                    required
                  />
                </div>

                {/* Service-Auswahl */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Gewünschte Lösung <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => {
                      const Icon = service.icon;
                      const isSelected = serviceType === service.id;
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setServiceType(service.id)}
                          className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all duration-300 ${
                            isSelected
                              ? 'border-blue-500 bg-blue-50 shadow-sm'
                              : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                          }`}
                        >
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className={`text-sm font-medium ${
                            isSelected ? 'text-blue-700' : 'text-gray-700'
                          }`}>
                            {service.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Zusammenfassung der Auswahl (Live) */}
                {companyName && serviceType && (
                  <div className="bg-blue-50/70 border border-blue-200/50 rounded-xl p-4 text-sm text-gray-600 animate-in fade-in duration-300">
                    <p>
                      <strong>Ihre Auswahl:</strong> {selectedService?.label} für <strong>{companyName}</strong>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Wir erstellen Ihnen ein individuelles Angebot.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Angebot anfordern
                </button>

                {/* Trust-Badge */}
                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                  <CheckCircle className="w-3 h-3" />
                  Keine Spam, unverbindliche Beratung
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}