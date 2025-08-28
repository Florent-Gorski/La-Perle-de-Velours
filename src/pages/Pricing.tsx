import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Crown } from 'lucide-react';

const Pricing: React.FC = () =>
{
  const navigate = useNavigate();

  const handleReservePackage = (packageName: string) =>
  {
    // Navigate to contact page and pass package name in state
    navigate('/contact', { state: { selectedForfait: packageName } });
  };

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
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero */}
      <section
        className="relative py-12 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/tarifs.jpg)', backgroundPosition: 'center center' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">
            Tarifs & Forfaits
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto">
            Découvrez nos prix transparents pour des services premium à domicile.
          </p>
        </div>
      </section>

      {/* Forfaits */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Forfaits Avantageux
            </h2>
            <p className="text-lg md:text-xl font-inter text-perle-warm-gray/70">
              Combinez plusieurs services et économisez.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${pkg.popular ? 'ring-2 ring-perle-honey md:scale-105' : 'hover:shadow-xl'
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-perle-honey text-white px-4 py-1 rounded-b-lg text-sm font-inter font-medium z-10">
                    Populaire
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-perle-honey">
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-playfair font-bold text-perle-warm-gray text-center mb-2">{pkg.name}</h3>
                  <p className="text-perle-warm-gray/70 font-inter text-center mb-6 text-sm md:text-base">{pkg.description}</p>

                  <div className="text-center mb-6">
                    <span className="text-4xl font-playfair font-bold text-perle-warm-gray">{pkg.price} CHF</span>
                    <span className="text-lg text-perle-warm-gray/50 line-through font-inter ml-2">{pkg.originalPrice} CHF</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-perle-warm-gray/80 font-inter text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleReservePackage(pkg.name)}
                    className={`w-full flex items-center justify-center text-center py-3 px-6 rounded-full font-inter font-medium transition-all duration-300 ${pkg.popular
                      ? 'bg-perle-honey text-white hover:bg-perle-light-honey shadow-lg hover:shadow-xl'
                      : 'bg-perle-soft-beige text-perle-warm-gray hover:bg-perle-beige'
                      }`}
                  >
                    Réserver ce forfait
                  </button>
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
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Prestations à la Carte
            </h2>
            <p className="text-lg md:text-xl font-inter text-perle-warm-gray/70">
              Choisissez exactement ce dont vous avez besoin.
            </p>
          </div>

          <div className="space-y-12">
            {pricingData.map((category, index) => (
              <div key={index}>
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-perle-warm-gray">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-perle-ivory/60 rounded-xl p-4 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-playfair font-bold text-perle-warm-gray">{service.name}</h4>
                          <p className="text-perle-warm-gray/70 font-inter text-sm mt-1">{service.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <div className="text-lg font-playfair font-bold text-perle-honey">{service.price} CHF</div>
                          <div className="text-sm text-perle-warm-gray/60 font-inter">{service.duration}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
