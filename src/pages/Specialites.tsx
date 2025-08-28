import React from 'react';
import { MapPin, Info, Car } from 'lucide-react';

const zones = [
  { npa: '1000-1018', city: 'Lausanne Centre', fee: 10 },
  { npa: '1020', city: 'Renens', fee: 15 },
  { npa: '1030', city: 'Bussigny', fee: 15 },
  { npa: '1040', city: 'Echallens', fee: 20 },
  { npa: '1110', city: 'Morges', fee: 25 },
  { npa: '1800', city: 'Vevey', fee: 30 },
  { npa: '1820', city: 'Montreux', fee: 35 },
];

const ZoneTable: React.FC<{ zones: { npa: string; city: string; fee: number }[] }> = ({ zones }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-left font-inter">
        <thead>
          <tr className="bg-perle-soft-beige">
            <th className="p-4 font-semibold text-perle-warm-gray">NPA</th>
            <th className="p-4 font-semibold text-perle-warm-gray">Ville</th>
            <th className="p-4 font-semibold text-perle-warm-gray text-right">Frais (CHF)</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone, index) => (
            <tr key={index} className="border-b border-perle-beige last:border-b-0">
              <td className="p-4 text-perle-warm-gray/80">{zone.npa}</td>
              <td className="p-4 text-perle-warm-gray/80">{zone.city}</td>
              <td className="p-4 text-perle-warm-gray/80 text-right font-semibold">{zone.fee}.-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Zones: React.FC = () =>
{
  return (
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/zones.jpg)', backgroundPosition: 'center center' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MapPin className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Zones Desservies
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Nous intervenons à domicile à Lausanne et dans une large partie du canton de Vaud.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Notre Zone d'Intervention
            </h2>
            <p className="text-lg text-perle-warm-gray/70 font-inter">
              Une carte interactive pour visualiser nos zones de déplacement.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 h-96 md:h-[500px] flex items-center justify-center">
            {/* This is a placeholder for an interactive map like Google Maps or Mapbox */}
            <img src="/images/map-placeholder.svg" alt="Carte de la zone de service" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Info className="w-10 h-10 text-perle-honey mx-auto mb-4" />
            <h2 className="text-3xl font-playfair font-bold text-perle-warm-gray">Informations Pratiques</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-perle-soft-beige p-6 rounded-lg">
              <h3 className="font-playfair font-bold text-xl text-perle-warm-gray mb-3">Frais de déplacement</h3>
              <ul className="list-disc list-inside space-y-2 font-inter text-perle-warm-gray/80">
                <li>Calculés selon la distance depuis Lausanne.</li>
                <li>Appliqués une seule fois par rendez-vous.</li>
                <li>Détaillés dans le tableau ci-dessous.</li>
              </ul>
            </div>
            <div className="bg-perle-soft-beige p-6 rounded-lg">
              <h3 className="font-playfair font-bold text-xl text-perle-warm-gray mb-3">Conditions requises</h3>
              <ul className="list-disc list-inside space-y-2 font-inter text-perle-warm-gray/80">
                <li>Prestation minimum de 45 CHF (hors déplacement).</li>
                <li>Place de parking gratuite à proximité.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zones Table Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Grille Tarifaire des Déplacements
            </h2>
          </div>
          <ZoneTable zones={zones} />
        </div>
      </section>

      {/* Out of Zone CTA */}
      <section className="py-20 bg-gradient-to-r from-perle-honey to-perle-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Car className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Votre localité n'est pas listée ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
            Contactez-nous ! Nous étudions avec plaisir toute demande spécifique pour étendre notre zone de couverture.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-perle-honey px-8 py-4 rounded-full text-lg font-inter font-medium hover:bg-perle-ivory transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Faire une demande
          </a>
        </div>
      </section>
    </div>
  );
};

export default Zones;
