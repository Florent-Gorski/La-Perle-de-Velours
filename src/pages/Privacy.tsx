import React from 'react';
import { Shield } from 'lucide-react';

const Privacy: React.FC = () =>
{
  return (
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero (image locale, centré) */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <picture>
            <source srcSet="/images/privacy.avif" type="image/avif" />
            <source srcSet="/images/privacy.webp" type="image/webp" />
            <img
              src="/images/privacy.jpg"
              alt="Politique de confidentialité"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center center' }}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Shield className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Votre vie privée est importante pour nous. Cette politique explique
            comment nous collectons, utilisons et protégeons vos informations
            personnelles.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-6 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-perle-warm-gray mb-4">Collecte des données</h2>
          <p className="font-inter text-perle-warm-gray/80 mb-6">
            Nous collectons uniquement les informations nécessaires à la fourniture de nos services. Ces informations ne sont ni vendues ni partagées à des tiers hors des obligations légales.
          </p>

          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-perle-warm-gray mb-4">Utilisation</h2>
          <p className="font-inter text-perle-warm-gray/80 mb-6">
            Vos données sont utilisées pour la gestion des réservations, la communication et l’amélioration de nos prestations.
          </p>

          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-perle-warm-gray mb-4">Sécurité</h2>
          <p className="font-inter text-perle-warm-gray/80">
            Nous mettons en place des mesures raisonnables pour protéger vos informations contre l’accès non autorisé, l’altération ou la divulgation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
