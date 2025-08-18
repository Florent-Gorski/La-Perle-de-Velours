import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Prestations', href: '/prestations' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Zones', href: '/zones' },
    { name: 'Entreprises', href: '/entreprises' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur shadow-sm border-b border-[#D4AF37]/10">
      <div className="mx-auto max-w-7xl px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Bloc logo */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 shrink-0 group">
          <img 
            src="/logo-PV.png"
            alt="PV – Perle de Velours"
            className="h-8 w-auto md:h-10 select-none transition-all duration-300 group-hover:scale-110"
          />
          <span
            className="whitespace-nowrap select-none align-middle font-playfair tracking-wide
                       text-[18px] md:text-[24px] lg:text-[26px] leading-none transition-all duration-300 group-hover:scale-105"
            style={{ color: "#D4AF37" }}
            aria-label="La Perle de Velours"
          >
            La Perle de Velours
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6 text-[#2C2C2C]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-inter font-medium transition-all duration-300 hover:text-[#D4AF37] ${
                  isActive(item.href)
                    ? 'text-[#D4AF37]'
                    : 'text-[#2C2C2C]'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"></div>
                )}
              </Link>
            ))}
        </nav>

        {/* CTA Button desktop */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className="group relative overflow-hidden bg-[#D4AF37] text-white px-6 py-3 rounded-full text-sm font-inter font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
          >
            <span className="relative z-10 flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>Réserver</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E6C547] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-[#2C2C2C] hover:text-[#D4AF37] hover:bg-[#F7F4ED] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Ouvrir le menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/98 backdrop-blur">
          <div className="py-4 space-y-1 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-4 px-4 text-base font-inter font-medium rounded-lg transition-all duration-300 min-h-[44px] flex items-center ${
                  isActive(item.href)
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                    : 'text-[#2C2C2C] hover:text-[#D4AF37] hover:bg-[#F7F4ED]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 bg-[#D4AF37] text-white px-6 py-4 rounded-full text-center font-inter font-medium hover:bg-[#E6C547] transition-all duration-300 min-h-[44px] flex items-center justify-center"
            >
            <h2 className="text-xl font-script font-bold text-perle-honey" style={{ fontFamily: 'Dancing Script, cursive' }}>La Perle de Velours</h2>
            </a>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;