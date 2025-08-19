import React from 'react';
import { Heart, Sparkles, Flower, Zap } from 'lucide-react';

const Services: React.FC = () =>
{
  const services = [
    {
      icon: <Heart className="w-8 h-8 md:w-12 md:h-12 text-rosa-honey" />,
      category: 'Manucure',
      id: 'manucure',
      services: [
        { name: 'Manucure classique à domicile', duration: '45 min', description: 'Soin complet des ongles avec vernis premium, cuticules soignées' },
        { name: 'Manucure française premium', duration: '60 min', description: 'French manucure élégante et intemporelle, finition parfaite' },
        { name: 'Pose de gel semi-permanent', duration: '90 min', description: 'Renforcement gel, tenue 3 semaines, couleurs tendance' },
        { name: 'Nail art personnalisé', duration: '30 min', description: 'Décorations artistiques sur mesure, motifs uniques' }
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-rosa-honey" />,
      category: 'Pédicure',
      id: 'pedicure',
      services: [
        { name: 'Pédicure complète à domicile', duration: '75 min', description: 'Soin complet pieds, gommage, massage, vernis premium' },
        { name: 'Pédicure express Genève', duration: '45 min', description: 'Soin rapide et efficace, parfait pour l\'entretien' },
        { name: 'Pose vernis gel pieds', duration: '30 min', description: 'Vernis semi-permanent, tenue parfaite 3 semaines' },
        { name: 'Soin callosités premium', duration: '60 min', description: 'Traitement professionnel des duretés, pieds doux' }
      ]
    },
    {
      icon: <Flower className="w-8 h-8 md:w-12 md:h-12 text-rosa-honey" />,
      category: 'Esthétique',
      id: 'soins-visage',
      services: [
        { name: 'Soin visage hydratant à domicile', duration: '60 min', description: 'Nettoyage, gommage, masque hydratant, produits premium' },
        { name: 'Soin anti-âge premium Suisse', duration: '75 min', description: 'Traitement raffermissant, sérum anti-rides, massage facial' },
        { name: 'Nettoyage de peau professionnel', duration: '45 min', description: 'Purification en profondeur, extraction points noirs' },
        { name: 'Épilation sourcils à domicile', duration: '20 min', description: 'Mise en forme précise, teinture si souhaité' }
      ]
    },
    {
      icon: <Zap className="w-8 h-8 md:w-12 md:h-12 text-rosa-honey" />,
      category: 'Massage & Bien-être',
      id: 'massage',
      services: [
        { name: 'Massage relaxant à domicile Genève', duration: '60 min', description: 'Détente complète, huiles essentielles, ambiance zen' },
        { name: 'Massage suédois thérapeutique', duration: '75 min', description: 'Massage tonifiant, soulagement tensions musculaires' },
        { name: 'Massage du dos express', duration: '30 min', description: 'Ciblé sur les tensions dorsales, idéal pause déjeuner' },
        { name: 'Réflexologie plantaire Suisse', duration: '45 min', description: 'Stimulation points réflexes, bien-être global' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-rosa-ivory">
      {/* Hero (image locale) */}
      <section
        className="relative py-12 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/services.jpg)' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4 md:mb-6">
            Nos Prestations
          </h1>
          <p className="text-base md:text-xl text-white/95 max-w-3xl mx-auto px-4">
            Manucure, esthétique et massages à domicile en Suisse romande.
            Services premium par esthéticienne diplômée, dans le confort de votre domicile.
          </p>
        </div>
      </section>

      {/* … tout le reste du fichier est inchangé … */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-20">
            {services.map((category, index) => (
              <div key={index} id={category.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-rosa-soft-beige to-rosa-beige p-6 md:p-8">
                  <div className="flex items-center justify-center mb-4 md:mb-6">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-rosa-warm-gray text-center mb-2 md:mb-4">
                    {category.category}
                  </h2>
                </div>

                <div className="p-4 md:p-8">
                  <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="border border-rosa-beige/50 rounded-xl p-4 md:p-6 hover:shadow-lg hover:border-rosa-honey/30 hover:bg-rosa-soft-beige/50 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                          <h3 className="text-base md:text-lg font-playfair font-bold text-rosa-warm-gray">{service.name}</h3>
                          <span className="bg-rosa-honey/20 text-rosa-honey px-3 py-1 rounded-full text-sm font-inter font-medium self-start">
                            {service.duration}
                          </span>
                        </div>
                        <p className="text-rosa-warm-gray/70 font-inter text-sm md:text-base leading-relaxed">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-rosa-warm-gray mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-base md:text-xl font-inter text-rosa-warm-gray/70">Réservation simple en 4 étapes</p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
            {[
              { step: '1', title: 'Réservation', description: 'Appelez ou WhatsApp pour réserver votre créneau' },
              { step: '2', title: 'Confirmation', description: 'Confirmation RDV + détails service + adresse' },
              { step: '3', title: 'Préparation', description: 'Préparez un espace calme et confortable' },
              { step: '4', title: 'Service Premium', description: 'Profitez de votre moment beauté à domicile' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 md:p-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-rosa-honey text-white rounded-full flex items-center justify-center text-lg md:text-2xl font-playfair font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-playfair font-bold text-rosa-warm-gray mb-2">{item.title}</h3>
                <p className="text-rosa-warm-gray/70 font-inter text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-rosa-honey to-rosa-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-white mb-4 md:mb-6">
            Prête à vous faire chouchouter ?
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 px-4">
            Réservez votre service beauté à domicile en Suisse romande
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-rosa-honey px-6 py-4 md:px-8 md:py-4 rounded-full text-base md:text-lg font-inter font-medium hover:bg-rosa-ivory transition-all duration-300 md:hover:scale-105 min-h-[48px] flex items-center justify-center"
            >
              Réserver maintenant
            </a>
            <a
              href="https://wa.me/41123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-4 md:px-8 md:py-4 rounded-full text-base md:text-lg font-inter font-medium hover:bg-green-600 transition-all duration-300 md:hover:scale-105 min-h-[48px] flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
