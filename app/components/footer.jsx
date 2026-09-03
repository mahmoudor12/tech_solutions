import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { MapPin, Phone, Mail} from 'lucide-react';
import Link from 'next/link';
import '../../app/globals.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Haupt-Footer mit verbesserten Padding-Werten */}
      <div className="container mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          
          {/* Spalte 1: Brand & Kontakt */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white">
                   Tech-Solutions
            </h3>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Zukunftssichere Technologielösungen für Ihr Unternehmen – von E-Rechnung bis KI-gestützte Automatisierung.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Hochstr 146<br />
                  66115 Saarbrücken </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+49 15906661522</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@tech-solutions.de" className="text-gray-400 hover:text-white transition-colors">
                  info@tech-solutions.de
                </a>
              </div>
            </div>
          </div>

          {/* Spalte 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Preise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Rechtliches */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/imprint" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Social Media */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Folgen Sie uns</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/company/DEIN_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech-Solutions auf LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/DEIN_GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech-Solutions auf GitHub"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/DEIN_TWITTER"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech-Solutions auf Twitter/X"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Bleiben Sie auf dem Laufenden – folgen Sie uns für aktuelle Tech-Trends und Innovationen.
            </p>
          </div>
        </div>
      </div>

      {/* Untere Leiste (Copyright) – mit verbesserten Abständen */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Tech-Solutions. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8 text-sm">
            <Link href="/imprint" className="text-gray-500 hover:text-gray-300 transition-colors">
              Impressum
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="text-gray-500 hover:text-gray-300 transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;