import React from 'react';
import { Building2, Users, Clock, Gift, Star, Zap } from 'lucide-react';

const Business: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-rosa-honey" />,
      title: 'Bien-être des employés',
      description: 'Offrez des moments de détente qui augmentent la motivation et réduisent le stress'
    },
    {
      icon: <Clock className="w-8 h-8 text-rosa-honey" />,
      title: 'Gain de temps',
      description: 'Pas besoin pour vos employés de quitter le bureau, nous venons directement chez vous'
    },
    {
      icon: <Star className="w-8 h-8 text-rosa-honey" />,
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rosa-honey to-rosa-light-honey py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services pour Entreprises
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Offrez à vos employés et clients des services de beauté et bien-être directement 
            dans vos locaux. Une initiative qui valorise votre image et améliore la satisfaction.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir nos services ?
            </h2>
            <p className="text-xl text-gray-600">
              Des avantages concrets pour votre entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-rosa-soft-beige rounded-2xl hover:bg-rosa-beige transition-colors duration-300"
              >
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Business */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Formules Entreprise
            </h2>
            <p className="text-xl text-gray-600">
              Des prestations adaptées à votre environnement professionnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-rosa-honey to-rosa-light-honey p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{service.category}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">{service.duration}</span>
                    <span className="font-bold">{service.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-rosa-honey rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rosa-soft-beige to-rosa-beige rounded-3xl p-12">
            <div className="text-center mb-12">
              <Gift className="w-16 h-16 text-rosa-honey mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Offres Spéciales Entreprises
              </h2>
              <p className="text-xl text-gray-600">
                Des avantages exclusifs pour nos partenaires professionnels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Zap className="w-8 h-8 text-rosa-honey mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Forfait découverte</h3>
                <p className="text-gray-600 text-sm">-20% sur la première intervention</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Users className="w-8 h-8 text-rosa-honey mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Tarif dégressif</h3>
                <p className="text-gray-600 text-sm">Plus de prestations = plus d'économies</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Clock className="w-8 h-8 text-rosa-honey mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Planning flexible</h3>
                <p className="text-gray-600 text-sm">Intervention pendant ou après les heures de bureau</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Star className="w-8 h-8 text-rosa-honey mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Fidélité récompensée</h3>
                <p className="text-gray-600 text-sm">Avantages cumulés sur les interventions régulières</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Occasions Spéciales
            </h2>
            <p className="text-xl text-gray-600">
              Nous intervenons pour tous vos événements professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Journées portes ouvertes', desc: 'Offrez une expérience unique à vos visiteurs' },
              { title: 'Événements clients', desc: 'Créez un moment privilégié avec vos partenaires' },
              { title: 'Team building', desc: 'Renforcez la cohésion d\'équipe par le bien-être' },
              { title: 'Fêtes d\'entreprise', desc: 'Ajoutez une touche de luxe à vos célébrations' },
              { title: 'Lancements produits', desc: 'Marquez les esprits lors de vos événements' },
              { title: 'Salons professionnels', desc: 'Attirez les visiteurs sur votre stand' }
            ].map((occasion, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{occasion.title}</h3>
                <p className="text-gray-600">{occasion.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">
              Témoignages de nos partenaires professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-rosa-soft-beige p-8 rounded-2xl hover:bg-rosa-beige transition-colors duration-300"
              >
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">{testimonial.company}</h4>
                  <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                </div>
                <p className="text-sm text-gray-500">- {testimonial.person}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rosa-honey to-rosa-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à sublimer votre entreprise ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour établir un devis personnalisé adapté à vos besoins et votre budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-rosa-honey px-8 py-4 rounded-full text-lg font-medium hover:bg-rosa-ivory transition-all duration-300 hover:scale-105"
            >
              Demander un devis
            </a>
            <a
              href="mailto:contact@maisonbeautemobile.ch"
              className="bg-rosa-warm-gray text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rosa-warm-gray/90 transition-all duration-300 hover:scale-105"
            >
              Email professionnel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;