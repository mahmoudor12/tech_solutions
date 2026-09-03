'use client';

import React, { useState } from 'react';
import Navigation from './../components/Navigation';
import Footer from './../components/footer';
import '../../app/globals.css';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles, Building2, Shield, Car, Heart, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    { id: 'einvoice', label: 'E-Rechnung & Finanzautomatisierung' },
    { id: 'spam', label: 'Spam-Email-Erkennung (KI)' },
    { id: 'parking', label: 'Park & Control – Parkraumüberwachung' },
    { id: 'medical', label: 'Medical Image Classifier (KI)' },
    { id: 'chatbot', label: 'Individueller KI-Chatbot' },
    { id: 'other', label: 'Sonstiges – Individuelle Anfrage' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('service', formData.service);
    form.append('message', formData.message);
    form.append('access_key', '903da6fb-9129-406f-b9c9-79990ec78070'); // 🔴 HIER DEINEN EIGENEN KEY EINTRAGEN!

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        alert('Etwas ist schiefgelaufen. Bitte versuchen Sie es später noch einmal.');
      }
    } catch (error) {
      alert('Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.');
    } finally {
      setLoading(false);
    }
  };

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
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200/50 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-blue-500" />
                📞 Kontakt
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Wir sind <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  für Sie da
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Haben Sie Fragen zu unseren Technologielösungen oder möchten Sie ein unverbindliches 
                Tech-Beratungsgespräch? Wir melden uns innerhalb von 24 Stunden bei Ihnen!
              </p>
            </div>
          </div>
        </section>

        {/* ===== Kontaktbereich ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
              {/* Linke Spalte: Kontakt-Infos */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontaktinformationen</h2>
                  <p className="text-gray-600 mb-6">
                    Wir freuen uns auf Ihre Nachricht! Hier erreichen Sie uns:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600 text-sm">DEINE_STRASSE 123<br />12345 DEINE_STADT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefon</h4>
                      <p className="text-gray-600 text-sm">+49 123 4567890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">E-Mail</h4>
                      <p className="text-gray-600 text-sm">info@tech-solutions.de</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Öffnungszeiten</h4>
                      <p className="text-gray-600 text-sm">
                        Mo – Fr: 9:00 – 18:00 Uhr<br />
                        Sa – So: Nach Vereinbarung
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust-Badge */}
                <div className="bg-blue-50/70 border border-blue-200/50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Wir antworten innerhalb von 24 Stunden
                  </p>
                </div>
              </div>

              {/* Rechte Spalte: Formular */}
              <div className="md:col-span-3">
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nachricht senden</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Füllen Sie das Formular aus und wir melden uns umgehend bei Ihnen.
                  </p>

                  {submitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-7 h-7 text-emerald-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Nachricht gesendet!</h4>
                      <p className="text-gray-600 text-sm">
                        Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Neue Nachricht schreiben →
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block font-medium text-gray-700 text-sm mb-1.5">
                          Ihr Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="z.B. Max Mustermann"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white"
                          required
                        />
                      </div>

                      {/* E-Mail */}
                      <div>
                        <label className="block font-medium text-gray-700 text-sm mb-1.5">
                          E-Mail-Adresse <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ihre@email.de"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white"
                          required
                        />
                      </div>

                      {/* Service-Auswahl */}
                      <div>
                        <label className="block font-medium text-gray-700 text-sm mb-1.5">
                          Betreff / Dienstleistung
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white"
                        >
                          <option value="">Bitte wählen Sie eine Lösung...</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.label}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Nachricht */}
                      <div>
                        <label className="block font-medium text-gray-700 text-sm mb-1.5">
                          Ihre Nachricht <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                          rows={4}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white resize-none"
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Nachricht senden
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                        <CheckCircle className="w-3 h-3" />
                        Keine Spam, unverbindliche Beratung
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}