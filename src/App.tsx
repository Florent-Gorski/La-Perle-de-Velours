import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, Sparkles, Mail } from 'lucide-react';

// --- IMPORTATION DES COMPOSANTS DE PAGE ---
// Chaque page est importée depuis son propre fichier.
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Zones from './pages/Zones';
import Business from './pages/Business';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Specialites from './pages/Specialites';
import Seniors from './pages/Seniors';

// --- COMPOSANTS PARTAGÉS (Header, Footer, etc.) ---
// Ces composants sont utilisés sur plusieurs pages et peuvent rester ici ou être déplacés
// dans leur propre dossier "components" pour une meilleure organisation.

const Header: React.FC = () =>
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() =>
  {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
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
          {/* Assurez-vous que le logo est dans le dossier public */}
          <img src="/logo-PV.png" alt="PV – Perle de Velours" className="h-8 w-auto md:h-10" />
          <span className="font-playfair tracking-wide text-perle-honey text-[18px] md:text-[24px]">La Perle de Velours</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href} className={({ isActive }) => `relative text-sm font-inter font-medium transition-colors hover:text-perle-honey ${isActive ? 'text-perle-honey' : 'text-perle-warm-gray'}`}>
              {({ isActive }) => (<>{item.name}{isActive && (<div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-perle-honey rounded-full"></div>)}</>)}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
          <Link to="/contact" className="group bg-perle-honey text-white px-6 py-3 rounded-full text-sm font-inter font-medium transition-all duration-300 hover:shadow-lg">
            <span className="relative z-10 flex items-center space-x-1"><Phone className="w-4 h-4" /><span>Réserver</span></span>
          </Link>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-perle-warm-gray" aria-label="Ouvrir le menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-perle-ivory/95">
          <div className="px-4 py-6">
            <nav className="flex flex-col gap-3 mb-6">
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `block py-3 px-4 text-lg font-inter font-medium rounded-lg ${isActive ? 'text-perle-honey bg-perle-honey/10' : 'text-perle-warm-gray hover:text-perle-honey'}`}>
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-perle-warm-gray text-perle-ivory">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-perle-honey" />
            <div>
              <h2 className="text-xl font-script font-bold text-perle-honey" style={{ fontFamily: 'Dancing Script, cursive' }}>La Perle de Velours</h2>
              <p className="text-sm font-inter text-perle-ivory/70">L'élégance au naturel</p>
            </div>
          </Link>
        </div>
        <div>
          <h3 className="font-playfair font-semibold mb-4 text-perle-honey">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/prestations" className="text-perle-ivory/70 font-inter hover:text-perle-honey">Prestations</Link></li>
            <li><Link to="/tarifs" className="text-perle-ivory/70 font-inter hover:text-perle-honey">Tarifs</Link></li>
            <li><Link to="/zones" className="text-perle-ivory/70 font-inter hover:text-perle-honey">Zones</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-playfair font-semibold mb-4 text-perle-honey">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2"><Phone className="w-4 h-4 text-perle-honey" /><a href="tel:+41123456789" className="text-perle-ivory/70 font-inter hover:text-perle-honey">+41 00 000 00 00</a></li>
            <li className="flex items-center space-x-2"><Mail className="w-4 h-4 text-perle-honey" /><a href="mailto:perledevelours@gmail.com" className="text-perle-ivory/70 font-inter hover:text-perle-honey">laperledevelours@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-perle-ivory/20 mt-8 pt-8 text-center">
        <p className="text-perle-ivory/60 font-inter text-sm">© 2024 La Perle de Velours</p>
        <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Politique de confidentialité</Link>
      </div>
    </div>
  </footer>
);

const CTASticky = () => (<Link to="/contact" className="fixed bottom-5 right-5 bg-perle-honey text-white p-3 rounded-full shadow-lg z-50">Réserver</Link>);


// --- COMPOSANT APP PRINCIPAL ---
// Ce composant est le chef d'orchestre. Il affiche les éléments communs
// (Header, Footer) et utilise le routeur pour afficher la bonne page.
function App()
{
  return (
    <Router>
      <div className="min-h-screen bg-perle-ivory font-inter">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prestations" element={<Services />} />
            <Route path="/tarifs" element={<Pricing />} />
            <Route path="/zones" element={<Zones />} />
            <Route path="/entreprises" element={<Business />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/specialites" element={<Specialites />} />
            <Route path="/seniors" element={<Seniors />} />
            {/* Vous pouvez ajouter une route "catch-all" pour les pages non trouvées */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        <Footer />
        <CTASticky />
      </div>
    </Router>
  );
}

export default App;
