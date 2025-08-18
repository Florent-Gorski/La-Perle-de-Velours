import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-perle-warm-gray text-perle-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-perle-honey" />
              <div>
                <h2 className="text-xl font-script font-bold text-perle-honey" style={{ fontFamily: 'Dancing Script, cursive' }}>La Perle de Velours</h2>
                <p className="text-sm font-inter text-perle-ivory/70">L'élégance au naturel, la beauté dans chaque nuance</p>
              </div>
            </Link>
            <p className="text-perle-ivory/80 font-inter mb-4 max-w-md leading-relaxed">
              Découvrez l'excellence des soins de beauté et bien-être dans l'intimité de votre domicile. 
              Une expérience premium personnalisée par une esthéticienne diplômée.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-semibold mb-4 text-perle-honey">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/prestations" className="text-perle-ivory/70 font-inter hover:text-perle-honey transition-colors">Prestations</Link></li>
              <li><Link to="/tarifs" className="text-perle-ivory/70 font-inter hover:text-perle-honey transition-colors">Tarifs</Link></li>
              <li><Link to="/zones" className="text-perle-ivory/70 font-inter hover:text-perle-honey transition-colors">Zones</Link></li>
              <li><Link to="/entreprises" className="text-perle-ivory/70 font-inter hover:text-perle-honey transition-colors">Entreprises</Link></li>
              <li><Link to="/contact" className="text-perle-ivory/70 font-inter hover:text-perle-honey transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold mb-4 text-perle-honey">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-perle-honey" />
                <a href="tel:+41123456789" className="text-perle-ivory/70 font-inter hover:text-perle-honey transition-colors">+41 12 345 67 89</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-perle-honey" />
                <a href="mailto:perledevelours@gmail.com" className="text-perle-ivory/70 font-inter hover:text-perle-honey transition-colors">perledevelours@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-perle-honey" />
                <span className="text-perle-ivory/70 font-inter">Lausanne & Canton de Vaud</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-perle-ivory/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-perle-ivory/60 font-inter text-sm">
            © 2024 La Perle de Velours. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;