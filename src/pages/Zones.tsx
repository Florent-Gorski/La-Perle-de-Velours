import React from 'react';
import { MapPin, Clock, Car, Info } from 'lucide-react';

// --- CORRECTION DE L'ERREUR ---
// Données des zones déplacées ici pour résoudre le problème d'importation.
// Vous pouvez ajuster ces valeurs selon vos besoins.
const zones = [
  { npa: '1000-1018', city: 'Lausanne Centre', fee: 10 },
  { npa: '1020', city: 'Renens', fee: 15 },
  { npa: '1030', city: 'Bussigny', fee: 15 },
  { npa: '1040', city: 'Echallens', fee: 20 },
  { npa: '1110', city: 'Morges', fee: 25 },
  { npa: '1800', city: 'Vevey', fee: 30 },
  { npa: '1820', city: 'Montreux', fee: 35 },
];

// --- CORRECTION DE L'ERREUR ---
// Création d'un composant ZoneTable simple pour résoudre le problème d'importation.
const ZoneTable: React.FC<{ zones: { npa: string; city: string; fee: number }[] }> = ({ zones }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="p-6">
      <h3 className="text-2xl font-playfair font-bold text-perle-warm-gray mb-4 text-center">Grille des Frais de Déplacement</h3>
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
  </div>
);


const Zones: React.FC = () =>
{
  return (
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero (image locale, centré) */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/zones.jpg)', backgroundPosition: 'center center' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Zones Desservies
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Nous intervenons à domicile à Lausanne et dans tout le canton de Vaud : manucure, soins visage/corps et massages bien-être.
            Les frais de déplacement varient selon la distance depuis notre base à Lausanne.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-perle-soft-beige border border-perle-beige rounded-2xl p-8">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-perle-honey mt-1" />
              <div>
                <h2 className="text-xl font-playfair font-bold text-perle-warm-gray mb-3">Informations importantes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-perle-warm-gray font-inter">
                  <div>
                    <h3 className="font-semibold mb-2">Frais de déplacement</h3>
                    <ul className="space-y-1 text-sm text-perle-warm-gray/80">
                      <li>• Calculés selon la distance depuis Lausanne</li>
                      <li>• Appliqués une seule fois par rendez-vous</li>
                      <li>• Réduits pour Lausanne centre</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Conditions</h3>
                    <ul className="space-y-1 text-sm text-perle-warm-gray/80">
                      <li>• Prestation minimum de 45 CHF</li>
                      <li>• Parking gratuit requis</li>
                      <li>• Accès facile au domicile</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones Table */}
      <section className="py-20 bg-perle-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZoneTable zones={zones} />
        </div>
      </section>

      {/* Coverage Map Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Zone de Couverture
            </h2>
            <p className="text-xl text-perle-warm-gray/70 font-inter">
              Nous intervenons dans toute la région Lausannoise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-perle-soft-beige rounded-2xl">
              <MapPin className="w-12 h-12 text-perle-honey mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold text-perle-warm-gray mb-2">Zone Réduite</h3>
              <p className="text-perle-warm-gray/70 font-inter">
                Lausanne centre (1000-1018)
                <br />10 CHF frais de déplacement
              </p>
            </div>

            <div className="text-center p-6 bg-perle-soft-beige rounded-2xl">
              <Clock className="w-12 h-12 text-perle-honey mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold text-perle-warm-gray mb-2">Zone Proche</h3>
              <p className="text-perle-warm-gray/70 font-inter">
                15-25 minutes
                <br />Frais de 10-15 CHF
              </p>
            </div>

            <div className="text-center p-6 bg-perle-soft-beige rounded-2xl">
              <Car className="w-12 h-12 text-perle-honey mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold text-perle-warm-gray mb-2">Zone Élargie</h3>
              <p className="text-perle-warm-gray/70 font-inter">
                30-35 minutes
                <br />Frais de 25-40 CHF
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Request */}
      <section className="py-20 bg-gradient-to-r from-perle-honey to-perle-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Votre zone n'est pas listée ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
            Contactez-nous ! Nous étudions toute demande pour étendre notre zone de couverture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-perle-honey px-8 py-4 rounded-full text-lg font-inter font-medium hover:bg-perle-ivory transition-all duration-300 hover:scale-105"
            >
              Réserver maintenant
            </a>
            <a
              href="https://wa.me/41123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-inter font-medium hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zones;
