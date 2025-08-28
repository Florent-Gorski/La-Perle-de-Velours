import React from 'react';
import { Building2, Users, Clock, Star, PartyPopper, Handshake, CalendarDays, Rocket, Award } from 'lucide-react';

const Business: React.FC = () =>
{
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-perle-honey" />,
      title: 'Bien-être des employés',
      description: 'Offrez des moments de détente qui augmentent la motivation et réduisent le stress'
    },
    {
      icon: <Clock className="w-8 h-8 text-perle-honey" />,
      title: 'Gain de temps',
      description: 'Pas besoin pour vos employés de quitter le bureau, nous venons directement chez vous'
    },
    {
      icon: <Star className="w-8 h-8 text-perle-honey" />,
      title: 'Image de marque',
      description: 'Montrez que vous vous souciez du bien-être de vos équipes'
    }
  ];

  const services = [
    {
      category: 'Prestations Express',
      duration: '15-20 min',
      services: [
        'Manucure express',
        'Massage des mains et bras',
        'Soin express du visage',
        'Massage du dos (assis)'
      ],
      price: 'dès 25 CHF'
    },
    {
      category: 'Prestations Confort',
      duration: '30-45 min',
      services: [
        'Manucure complète',
        'Massage relaxant',
        'Soin du visage',
        'Réflexologie plantaire'
      ],
      price: 'dès 45 CHF'
    },
    {
      category: 'Forfaits Groupe',
      duration: 'Sur mesure',
      services: [
        'Ateliers bien-être',
        'Journées détente',
        'Team building beauté',
        'Événements sur mesure'
      ],
      price: 'Tarif dégressif'
    }
  ];

  // --- AMÉLIORATION : Ajout d'icônes pour un impact visuel accru ---
  const useCases = [
    { icon: <CalendarDays className="w-8 h-8 text-perle-honey" />, title: 'Journées portes ouvertes', desc: 'Offrez une expérience unique à vos visiteurs' },
    { icon: <Handshake className="w-8 h-8 text-perle-honey" />, title: 'Événements clients', desc: 'Créez un moment privilégié avec vos partenaires' },
    { icon: <Users className="w-8 h-8 text-perle-honey" />, title: 'Team building', desc: 'Renforcez la cohésion d\'équipe par le bien-être' },
    { icon: <PartyPopper className="w-8 h-8 text-perle-honey" />, title: 'Fêtes d\'entreprise', desc: 'Ajoutez une touche de luxe à vos célébrations' },
    { icon: <Rocket className="w-8 h-8 text-perle-honey" />, title: 'Lancements produits', desc: 'Marquez les esprits lors de vos événements' },
    { icon: <Award className="w-8 h-8 text-perle-honey" />, title: 'Salons professionnels', desc: 'Attirez les visiteurs sur votre stand' }
  ];

  const testimonials = [
    {
      company: 'Tech Solutions SA',
      testimonial: 'Nos employées ont adoré cette initiative ! Un vrai boost de moral en période de stress.',
      person: 'Marie Dubois, RH'
    },
    {
      company: 'Cabinet d\'Avocats Lemaire',
      testimonial: 'Service professionnel et discret. Parfait pour notre clientèle exigeante.',
      person: 'Jean-Pierre Lemaire, Associé'
    },
    {
      company: 'Clinique Esthétique Genève',
      testimonial: 'Excellente collaboration, nous recommandons leurs services à nos patientes.',
      person: 'Dr. Sophie Martin'
    }
  ];

  return (
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/entreprises.jpg)', backgroundPosition: 'center center' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Building2 className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Services pour Entreprises
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Offrez à vos employés et clients des services de beauté et bien-être directement
            dans vos locaux.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lg md:text-xl text-perle-warm-gray/70">
              Des avantages concrets pour votre entreprise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-perle-soft-beige rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-playfair font-bold text-perle-warm-gray mb-4">{benefit.title}</h3>
                <p className="text-perle-warm-gray/70 font-inter">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Business */}
      <section className="py-12 md:py-20 bg-perle-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Nos Formules Entreprise
            </h2>
            <p className="text-lg md:text-xl text-perle-warm-gray/70">
              Des prestations adaptées à votre environnement professionnel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="bg-gradient-to-r from-perle-honey to-perle-light-honey p-6 text-white">
                  <h3 className="text-xl font-playfair font-bold mb-2">{service.category}</h3>
                  <div className="flex justify-between items-center font-inter">
                    <span className="text-white/80">{service.duration}</span>
                    <span className="font-bold">{service.price}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3 font-inter">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-perle-honey rounded-full flex-shrink-0"></div>
                        <span className="text-perle-warm-gray/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases --- SECTION AMÉLIORÉE --- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Idéal pour Vos Événements
            </h2>
            <p className="text-lg md:text-xl text-perle-warm-gray/70">
              Nous intervenons pour toutes vos occasions professionnelles
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((occasion, index) => (
              <div
                key={index}
                className="bg-perle-soft-beige p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex items-start space-x-4"
              >
                <div className="flex-shrink-0 mt-1">{occasion.icon}</div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-perle-warm-gray mb-2">{occasion.title}</h3>
                  <p className="text-perle-warm-gray/70 font-inter text-sm">{occasion.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-perle-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Ils nous font confiance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <p className="text-perle-warm-gray/80 italic font-inter mb-6">"{testimonial.testimonial}"</p>
                <div>
                  <h4 className="font-playfair font-bold text-perle-warm-gray">{testimonial.company}</h4>
                  <p className="text-sm text-perle-warm-gray/60 font-inter">- {testimonial.person}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-perle-honey to-perle-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Prêt à sublimer votre entreprise ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
            Contactez-nous pour un devis personnalisé adapté à vos besoins.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-perle-honey px-8 py-4 rounded-full text-lg font-inter font-medium hover:bg-perle-ivory transition-all duration-300 hover:scale-105"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  );
};

export default Business;
