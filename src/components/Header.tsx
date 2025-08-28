import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () =>
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() =>
  {
    const prev = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }
    return () =>
    {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Prestations', href: '/prestations' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Zones', href: '/zones' },
    { name: 'Entreprises', href: '/entreprises' },
    { name: 'Spécialités', href: '/specialites' },
    { name: 'Seniors', href: '/seniors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-perle-ivory/95 backdrop-blur shadow-sm border-b border-perle-honey/10">
      <div className="mx-auto max-w-7xl px-4 h-16 md:h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 md:gap-4 shrink-0 group">
          <img
            src="/logo-PV.png"
            alt="PV – Perle de Velours"
            className="h-8 w-auto md:h-10 select-none transition-all duration-300 group-hover:scale-110"
          />
          <span
            className="whitespace-nowrap select-none align-middle font-playfair tracking-wide text-perle-honey text-[18px] md:text-[24px] lg:text-[26px] leading-none transition-all duration-300 group-hover:scale-105"
            aria-label="La Perle de Velours"
          >
            La Perle de Velours
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `relative text-sm font-inter font-medium transition-all duration-300 hover:text-perle-honey ${isActive ? 'text-perle-honey' : 'text-perle-warm-gray'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-perle-honey rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className="group relative overflow-hidden bg-perle-honey text-white px-6 py-3 rounded-full text-sm font-inter font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-perle-honey/50"
          >
            <span className="relative z-10 flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>Réserver</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-perle-light-honey to-perle-honey opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-perle-warm-gray hover:text-perle-honey hover:bg-perle-soft-beige transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Ouvrir le menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-perle-ivory/95 backdrop-blur-lg border-b border-perle-honey/20 shadow-lg">
          <div className="px-4 py-6">
            <nav className="flex flex-col gap-3 mb-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 text-lg font-inter font-medium rounded-lg transition-all duration-300 min-h-[48px] items-center ${isActive
                      ? 'text-perle-honey bg-perle-honey/10'
                      : 'text-perle-warm-gray hover:text-perle-honey hover:bg-perle-soft-beige'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <div className="pt-4 border-t border-perle-honey/10">
              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-perle-honey text-white px-6 py-3 rounded-full text-lg font-inter font-medium hover:bg-perle-light-honey transition-all duration-300 text-center min-h-[48px] items-center justify-center"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
