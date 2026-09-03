"use client";
import React, { useState } from 'react';
import '../../app/globals.css';
import { Mail, Send, CheckCircle, Sparkles } from 'lucide-react';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "903da6fb-9129-406f-b9c9-79990ec78070"); // 🔴 HIER DEINEN EIGENEN KEY EINTRAGEN!

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setEmail('');
      } else {
        alert("Etwas ist schiefgelaufen. Bitte versuchen Sie es später noch einmal.");
      }
    } catch (error) {
      alert("Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-700 to-blue-800">
      {/* Dekorative Hintergrund-Elemente */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/5 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-repeat" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Card-Container */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Jetzt durchstarten
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Bereit für <span className="text-yellow-300">echte Innovation</span>?
            </h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
              Fordern Sie jetzt Ihr unverbindliches Tech-Beratungsgespräch an. 
              Wir melden uns innerhalb von 24 Stunden bei Ihnen!
            </p>

            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-xl p-6 text-white flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CheckCircle className="w-12 h-12 text-emerald-300" />
                <p className="text-lg font-medium">Vielen Dank!</p>
                <p className="text-emerald-100 text-sm">Wir haben Ihre Anfrage erhalten und melden uns in Kürze für Ihr Tech-Beratungsgespräch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Tech-Beratung anfragen
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Trust-Badge */}
            <p className="text-white/50 text-xs mt-6 flex items-center justify-center gap-1.5">
              <CheckCircle className="w-3 h-3" />
              Keine Spam, unverbindliche Beratung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;