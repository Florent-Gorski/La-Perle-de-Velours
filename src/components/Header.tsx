import { NavLink, Link } from "react-router-dom";
import { Phone } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import React = require("react");

export default function Header()
{
  const links = [
    { to: "/", label: "Accueil" },
    { to: "/prestations", label: "Prestations" },
    { to: "/tarifs", label: "Tarifs" },
    { to: "/zones", label: "Zones" },
    { to: "/entreprises", label: "Entreprises" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/90 backdrop-blur
        border-b border-black/10
        shadow-sm
      "
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="La Perle de Velours"
              className="h-8 w-8 rounded-full ring-1 ring-black/10"
            />
            <span className="font-playfair text-xl font-semibold text-neutral-900">
              La Perle de Velours
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-medium tracking-wide transition-colors
                   text-neutral-800 hover:text-[#CDA434]
                   ${isActive ? "text-[#CDA434] underline decoration-[#CDA434] decoration-2 underline-offset-8" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center gap-2 rounded-xl px-4 py-2.5
                         bg-[#CDA434] text-white font-semibold
                         shadow hover:shadow-md transition-all"
            >
              <Phone className="h-4 w-4" />
              Réserver
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg
                       border border-black/10 hover:bg-black/[0.05]"
            aria-label="Ouvrir le menu"
            onClick={() => alert("Menu mobile à brancher si besoin")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
