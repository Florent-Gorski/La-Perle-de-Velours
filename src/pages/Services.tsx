import React from 'react';
import { Heart, Sparkles, Flower, Zap, Shield, Gem, UserCheck, Phone, CheckCircle, Home, Star } from 'lucide-react';

const Services: React.FC = () =>
{
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-perle-honey" />,
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
      icon: <Sparkles className="w-8 h-8 text-perle-honey" />,
      category: 'Pédicure',
      id: 'pedicure',
      services: [
        { name: 'Pédicure complète à domicile', duration: '75 min', description: 'Soin complet pieds, gommage, massage, vernis premium' },
        { name: 'Pédicure express', duration: '45 min', description: 'Soin rapide et efficace, parfait pour l\'entretien' },
        { name: 'Pose vernis gel pieds', duration: '30 min', description: 'Vernis semi-permanent, tenue parfaite 3 semaines' },
        { name: 'Soin callosités premium', duration: '60 min', description: 'Traitement professionnel des duretés, pieds doux' }
      ]
    },
    {
      icon: <Flower className="w-8 h-8 text-perle-honey" />,
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
      icon: <Zap className="w-8 h-8 text-perle-honey" />,
      category: 'Massage & Bien-être',
      id: 'massage',
      services: [
        { name: 'Massage relaxant à domicile', duration: '60 min', description: 'Détente complète, huiles essentielles, ambiance zen' },
        { name: 'Massage suédois thérapeutique', duration: '75 min', description: 'Massage tonifiant, soulagement tensions musculaires' },
        { name: 'Massage du dos express', duration: '30 min', description: 'Ciblé sur les tensions dorsales, idéal pause déjeuner' },
        { name: 'Réflexologie plantaire Suisse', duration: '45 min', description: 'Stimulation points réflexes, bien-être global' }
      ]
    }
  ];

  const qualityCommitments = [
    { icon: <Shield className="w-8 h-8 text-perle-honey" />, title: "Hygiène Stricte", description: "Matériel stérilisé et protocoles sanitaires rigoureux pour votre sécurité." },
    { icon: <Gem className="w-8 h-8 text-perle-honey" />, title: "Produits Premium", description: "Utilisation exclusive de marques reconnues pour leur efficacité et leur qualité." },
    { icon: <UserCheck className="w-8 h-8 text-perle-honey" />, title: "Expertise Certifiée", description: "Services réalisés par une esthéticienne diplômée avec 20 ans d'expérience." }
  ];

  return (
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/services.jpg)', backgroundPosition: 'center center' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Nos Prestations
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto">
            Découvrez notre gamme complète de soins de beauté et de bien-être, réalisés avec expertise directement à votre domicile.
          </p>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityCommitments.map((commitment, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{commitment.icon}</div>
                <h3 className="text-xl font-playfair font-bold text-perle-warm-gray">{commitment.title}</h3>
                <p className="font-inter text-perle-warm-gray/70 mt-2">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((category, index) => (
              <div key={index} id={category.id}>
                <div className="text-center mb-12">
                  <div className="inline-block p-4 bg-perle-soft-beige rounded-full mb-4">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray">
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-playfair font-bold text-perle-warm-gray">{service.name}</h3>
                        <span className="bg-perle-honey/20 text-perle-honey px-3 py-1 rounded-full text-sm font-inter font-medium flex-shrink-0 ml-4">
                          {service.duration}
                        </span>
                      </div>
                      <p className="text-perle-warm-gray/70 font-inter leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg md:text-xl font-inter text-perle-warm-gray/70">Votre moment de détente en 4 étapes simples.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Phone className="w-8 h-8 text-perle-honey" />, title: '1. Réservez', description: 'Contactez-nous par téléphone ou WhatsApp pour fixer votre rendez-vous.' },
              { icon: <CheckCircle className="w-8 h-8 text-perle-honey" />, title: '2. Confirmez', description: 'Nous validons ensemble le créneau, l\'adresse et les soins choisis.' },
              { icon: <Home className="w-8 h-8 text-perle-honey" />, title: '3. Préparez', description: 'Installez-vous confortablement, nous nous occupons de tout apporter.' },
              { icon: <Star className="w-8 h-8 text-perle-honey" />, title: '4. Profitez', description: 'Détendez-vous et savourez votre soin premium à domicile.' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-playfair font-bold text-perle-warm-gray mb-2">{item.title}</h3>
                <p className="text-perle-warm-gray/70 font-inter">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-perle-honey to-perle-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Prête à vous faire chouchouter ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
            Offrez-vous une pause bien méritée. Réservez votre soin à domicile dès maintenant.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-perle-honey px-8 py-4 rounded-full text-lg font-inter font-medium hover:bg-perle-ivory transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Réserver maintenant
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
