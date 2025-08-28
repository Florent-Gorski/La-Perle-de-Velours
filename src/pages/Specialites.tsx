import React from 'react';
import { Leaf, Droplet, Smile, Eye, MessageSquare, User, Sparkles } from 'lucide-react';

const Specialites: React.FC = () =>
{
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-perle-honey" />,
      title: 'Précision Inégalée',
      description: 'Le fil dessine une ligne parfaite et retire les poils les plus fins pour un résultat impeccable et net.'
    },
    {
      icon: <Droplet className="w-8 h-8 text-perle-honey" />,
      title: '100% Naturel et Hygiénique',
      description: 'Cette méthode n\'utilise aucun produit chimique. Le fil de coton est à usage unique et jeté après chaque utilisation.'
    },
    {
      icon: <Smile className="w-8 h-8 text-perle-honey" />,
      title: 'Idéal Peaux Sensibles',
      description: 'Plus douce que la cire, l\'épilation au fil n\'agresse pas la peau, prévient les irritations et les poils incarnés.'
    }
  ];

  const pricing = [
    { icon: <Eye className="w-6 h-6 text-perle-honey" />, area: "Sourcils", price: "20 CHF" },
    { icon: <MessageSquare className="w-6 h-6 text-perle-honey" />, area: "Lèvre supérieure", price: "15 CHF" },
    { icon: <User className="w-6 h-6 text-perle-honey" />, area: "Menton", price: "15 CHF" },
    { icon: <Smile className="w-6 h-6 text-perle-honey" />, area: "Joues", price: "20 CHF" },
    { icon: <Sparkles className="w-6 h-6 text-perle-honey" />, area: "Visage complet", description: "(sourcils, lèvre, menton, joues)", price: "50 CHF" },
  ];

  return (
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/epilation-fil.jpg)', backgroundPosition: 'center 30%' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Notre Spécialité : L'Épilation au Fil
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Découvrez une méthode ancestrale et naturelle pour une ligne de sourcils parfaite et un visage net.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-perle-warm-gray mb-4">Qu'est-ce que l'épilation au fil (Threading) ?</h2>
            <p className="font-inter text-lg text-perle-warm-gray/80 leading-relaxed">
              L'épilation au fil est une technique d'origine indienne qui consiste à emprisonner les poils entre deux fils de coton torsadés pour les arracher à la racine. Cette méthode permet une grande précision et est idéale pour les zones délicates du visage. Contrairement à la pince à épiler, le fil peut enlever toute une rangée de poils en un seul passage, créant ainsi des lignes nettes et parfaitement définies.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-perle-soft-beige">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Les Avantages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold text-perle-warm-gray mb-4">{benefit.title}</h3>
                <p className="text-perle-warm-gray/70 font-inter">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing and Application Areas Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Zones d'Application & Tarifs
            </h2>
            <p className="text-lg text-perle-warm-gray/70 font-inter">
              Une tarification claire pour un résultat parfait.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-4">
              {pricing.map((item, index) => (
                <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${index < pricing.length - 1 ? 'border-b border-perle-beige' : ''}`}>
                  <div className="flex items-center space-x-4">
                    {item.icon}
                    <div>
                      <span className="font-inter text-lg text-perle-warm-gray">{item.area}</span>
                      {item.description && <span className="text-sm text-perle-warm-gray/60 block">{item.description}</span>}
                    </div>
                  </div>
                  <span className="font-playfair font-bold text-lg text-perle-honey flex-shrink-0 ml-4">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-perle-honey to-perle-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Prête à découvrir la perfection ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
            Offrez à votre visage la précision inégalée de l'épilation au fil.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-perle-honey px-8 py-4 rounded-full text-lg font-inter font-medium hover:bg-perle-ivory transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Réserver votre séance
          </a>
        </div>
      </section>
    </div>
  );
};

export default Specialites;
