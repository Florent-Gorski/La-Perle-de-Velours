import React from 'react';
import { MapPin, Clock, Car, Info } from 'lucide-react';
import ZoneTable from '../components/ZoneTable';
import { zones } from '../lib/zones';

const Zones: React.FC = () =>
{
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (image locale + overlay) */}
      <section className="relative py-20 overflow-hidden">
        {/* IMAGE DE FOND */}
        <div className="absolute inset-0 -z-10">
          <picture>
            <source srcSet="/images/zones.avif" type="image/avif" />
            <source srcSet="/images/zones.webp" type="image/webp" />
            <img
              src="/images/zones.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 45%' }}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        {/* OVERLAY demandé */}
        <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true"></div>

        {/* CONTENU TEXTE (inchangé) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zones Desservies
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Nous intervenons à domicile à Lausanne et dans tout le canton de Vaud : manucure, soins visage/corps et massages bien-être.
            Les frais de déplacement varient selon la distance depuis notre base à Lausanne.
          </p>
        </div>
      </section>

      {/* Info Section (inchangé) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-rosa-soft-beige border border-rosa-beige rounded-2xl p-8">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-rosa-honey mt-1" />
              <div>
                <h2 className="text-xl font-bold text-rosa-warm-gray mb-3">Informations importantes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-rosa-warm-gray">
                  <div>
                    <h3 className="font-semibold mb-2">Frais de déplacement</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Calculés selon la distance depuis Genève</li>
                      <li>• Calculés selon la distance depuis Lausanne</li>
                      <li>• Appliqués une seule fois par rendez-vous</li>
                      <li>• Gratuits pour Lausanne centre</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Conditions</h3>
                    <ul className="space-y-1 text-sm">
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

      {/* Zones Table (inchangé) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZoneTable zones={zones} />
        </div>
      </section>

      {/* Coverage Map Info (inchangé) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zone de Couverture
            </h2>
            <p className="text-xl text-gray-600">
              Nous intervenons dans toute la région genevoise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <MapPin className="w-12 h-12 text-rosa-honey mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zone Gratuite</h3>
              <p className="text-gray-600">
                Lausanne centre (1000-1018)
                <br />Aucun frais de déplacement
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Clock className="w-12 h-12 text-rosa-honey mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zone Proche</h3>
              <p className="text-gray-600">
                15-25 minutes
                <br />Frais de 5-10 CHF
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Car className="w-12 h-12 text-rosa-honey mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zone Élargie</h3>
              <p className="text-gray-600">
                30-35 minutes
                <br />Frais de 15-20 CHF
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Request (inchangé) */}
      <section className="py-20 bg-gradient-to-r from-rosa-honey to-rosa-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Votre zone n'est pas listée ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous ! Nous étudions toute demande pour étendre notre zone de couverture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-rosa-honey px-8 py-4 rounded-full text-lg font-medium hover:bg-rosa-ivory transition-all duration-300 hover:scale-105"
            >
              Réserver maintenant
            </a>
            <a
              href="https://wa.me/41123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition-all duration-300 hover:scale-105"
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
