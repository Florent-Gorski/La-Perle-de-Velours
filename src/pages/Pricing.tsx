import React from 'react';
import { Check, Star, Crown } from 'lucide-react';

const Pricing: React.FC = () =>
{
  const pricingData = [
    {
      category: 'Manucure',
      icon: '💅',
      services: [
        { name: 'Manucure classique', price: 45, duration: '45 min', description: 'Coupe, limage, cuticules, vernis classique' },
        { name: 'Manucure française', price: 55, duration: '60 min', description: 'French manucure élégante' },
        { name: 'Pose de gel couleur', price: 65, duration: '90 min', description: 'Renforcement gel avec couleur' },
        { name: 'Pose gel french', price: 70, duration: '90 min', description: 'French en gel semi-permanent' },
        { name: 'Dépose gel', price: 25, duration: '30 min', description: 'Retrait sécurisé du gel' },
        { name: 'Réparation ongle cassé', price: 15, duration: '15 min', description: 'Réparation ponctuelle' }
      ]
    },
    {
      category: 'Pédicure',
      icon: '🦶',
      services: [
        { name: 'Pédicure complète', price: 65, duration: '75 min', description: 'Soin complet avec gommage et massage' },
        { name: 'Pédicure express', price: 45, duration: '45 min', description: 'Soin rapide et efficace' },
        { name: 'Pose vernis gel pieds', price: 35, duration: '30 min', description: 'Vernis semi-permanent' },
        { name: 'Soin callosités', price: 40, duration: '45 min', description: 'Traitement des duretés' }
      ]
    },
    {
      category: 'Esthétique',
      icon: '✨',
      services: [
        { name: 'Soin visage hydratant', price: 80, duration: '60 min', description: 'Nettoyage, gommage, masque, hydratation' },
        { name: 'Soin anti-âge', price: 95, duration: '75 min', description: 'Soin complet anti-rides' },
        { name: 'Nettoyage de peau', price: 70, duration: '45 min', description: 'Purification en profondeur' },
        { name: 'Épilation sourcils', price: 25, duration: '20 min', description: 'Mise en forme précise' },
        { name: 'Teinture sourcils/cils', price: 30, duration: '30 min', description: 'Coloration naturelle' }
      ]
    },
    {
      category: 'Massage',
      icon: '🤲',
      services: [
        { name: 'Massage relaxant 60 min', price: 90, duration: '60 min', description: 'Détente complète du corps' },
        { name: 'Massage relaxant 90 min', price: 120, duration: '90 min', description: 'Relaxation prolongée' },
        { name: 'Massage du dos', price: 50, duration: '30 min', description: 'Soulagement des tensions' },
        { name: 'Réflexologie plantaire', price: 65, duration: '45 min', description: 'Stimulation des points réflexes' }
      ]
    }
  ];

  const packages = [
    {
      name: 'Forfait Beauté',
      icon: <Star className="w-8 h-8" />,
      price: 120,
      originalPrice: 140,
      description: 'Manucure + Pédicure express',
      features: [
        'Manucure classique (45 min)',
        'Pédicure express (45 min)',
        'Économie de 20 CHF',
        'Durée totale : 90 min'
      ],
      popular: false
    },
    {
      name: 'Forfait Détente',
      icon: <Crown className="w-8 h-8" />,
      price: 160,
      originalPrice: 185,
      description: 'Soin visage + Massage',
      features: [
        'Soin visage hydratant (60 min)',
        'Massage relaxant (60 min)',
        'Économie de 25 CHF',
        'Durée totale : 2h'
      ],
      popular: true
    },
    {
      name: 'Forfait Premium',
      icon: <Crown className="w-8 h-8" />,
      price: 200,
      originalPrice: 240,
      description: 'Expérience complète',
      features: [
        'Manucure gel (90 min)',
        'Pédicure complète (75 min)',
        'Soin visage (60 min)',
        'Économie de 40 CHF'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-rosa-ivory">
      {/* Hero (image locale) */}
      <section
        className="relative py-12 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/tarifs.jpg)' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4 md:mb-6">
            Tarifs Services Beauté à Domicile
          </h1>
          <p className="text-base md:text-xl text-white/95 max-w-3xl mx-auto px-4">
            Prix transparents en CHF TTC. Matériel et produits premium inclus.
            Paiement Twint, carte ou espèces.
          </p>
        </div>
      </section>

      {/* Informations Tarifs */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-rosa-soft-beige rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray mb-4 text-center">Informations Tarifs</h2>
            <div className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0 text-center">
              <div>
                <h3 className="font-inter font-semibold text-rosa-warm-gray mb-2">Frais de déplacement</h3>
                <p className="text-rosa-warm-gray/70 font-inter text-sm">Variables selon zone Genève (voir Zones)</p>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-rosa-warm-gray mb-2">Paiement accepté</h3>
                <p className="text-rosa-warm-gray/70 font-inter text-sm">Twint, carte bancaire, espèces</p>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-rosa-warm-gray mb-2">Annulation</h3>
                <p className="text-rosa-warm-gray/70 font-inter text-sm">Gratuite jusqu'à 24h avant RDV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:3xl lg:text-4xl font-playfair font-bold text-rosa-warm-gray mb-4">
              Forfaits Avantageux
            </h2>
            <p className="text-base md:text-xl font-inter text-rosa-warm-gray/70 px-4">
              Combinez plusieurs services et économisez
            </p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${pkg.popular ? 'ring-2 ring-rosa-honey md:scale-105' : ''
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-rosa-honey text-white px-4 py-2 rounded-b-lg text-sm font-inter font-medium">
                    Le plus populaire
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-rosa-honey">
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray text-center mb-2">{pkg.name}</h3>
                  <p className="text-rosa-warm-gray/70 font-inter text-center mb-6 text-sm md:text-base">{pkg.description}</p>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl md:text-4xl font-playfair font-bold text-rosa-warm-gray">{pkg.price}</span>
                      <span className="text-lg md:text-xl text-rosa-warm-gray/70 font-inter">CHF</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mt-1">
                      <span className="text-base md:text-lg text-rosa-warm-gray/40 line-through font-inter">{pkg.originalPrice} CHF</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-inter font-medium">
                        -{pkg.originalPrice - pkg.price} CHF
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                        <span className="text-rosa-warm-gray/70 font-inter text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full flex items-center justify-center text-center py-4 px-6 rounded-full font-inter font-medium transition-colors min-h-[48px] ${pkg.popular
                        ? 'bg-rosa-honey text-white hover:bg-rosa-light-honey'
                        : 'bg-rosa-soft-beige text-rosa-warm-gray hover:bg-rosa-beige'
                      }`}
                  >
                    Réserver
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations individuelles */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-rosa-warm-gray mb-4">
              Prestations Individuelles
            </h2>
            <p className="text-base md:text-xl font-inter text-rosa-warm-gray/70 px-4">
              Choisissez exactement ce dont vous avez besoin
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {pricingData.map((category, index) => (
              <div key={index} className="bg-rosa-soft-beige rounded-3xl overflow-hidden">
                <div className="bg-gradient-to-r from-rosa-honey to-rosa-light-honey p-4 md:p-6">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl md:text-3xl">{category.icon}</span>
                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-white">{category.category}</h3>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md hover:bg-rosa-ivory/50 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                          <h4 className="font-playfair font-bold text-rosa-warm-gray text-sm md:text-base">{service.name}</h4>
                          <div className="text-left sm:text-right">
                            <div className="text-lg md:text-xl font-playfair font-bold text-rosa-honey">{service.price} CHF</div>
                            <div className="text-xs md:text-sm text-rosa-warm-gray/60 font-inter">{service.duration}</div>
                          </div>
                        </div>
                        <p className="text-rosa-warm-gray/70 font-inter text-xs md:text-sm leading-relaxed">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-rosa-honey to-rosa-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-white mb-4 md:mb-6">
            Prête pour votre moment beauté ?
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 px-4">
            Réservez votre service beauté à domicile Genève et région
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

export default Pricing;
