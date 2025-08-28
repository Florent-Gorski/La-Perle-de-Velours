import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Shield, Heart, Gem, Award } from 'lucide-react'; // Ajout de l'icône Award
import HeroCarousel from '../components/HeroCarousel';

const Home: React.FC = () =>
{
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-perle-honey" />,
      title: 'Proximité & Confort',
      description: 'Des soins personnalisés dans l\'intimité de votre domicile'
    },
    {
      icon: <Shield className="w-8 h-8 text-perle-honey" />,
      title: 'Hygiène Irréprochable',
      description: 'Matériel stérilisé et protocoles sanitaires stricts'
    },
    {
      icon: <Gem className="w-8 h-8 text-perle-honey" />,
      title: 'Expérience Premium',
      description: 'Produits haut de gamme et savoir-faire d\'exception'
    }
  ];

  const testimonials = [
    {
      name: 'Marie L.',
      rating: 5,
      comment: 'Service exceptionnel ! Très professionnelle et à l\'écoute. Je recommande vivement.'
    },
    {
      name: 'Sophie M.',
      rating: 5,
      comment: 'Enfin un service de qualité à domicile. Ponctuelle et très soigneuse dans son travail.'
    },
    {
      name: 'Christine B.',
      rating: 5,
      comment: 'Parfait pour les mamans comme moi qui n\'ont pas le temps de se déplacer.'
    }
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-perle-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4 md:mb-6">
              Pourquoi choisir nos services ?
            </h2>
            <p className="text-base md:text-xl font-inter text-perle-warm-gray/70 max-w-2xl mx-auto px-4">
              L'excellence du soin à domicile dans une approche premium et personnalisée
            </p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 md:p-8 rounded-2xl bg-perle-soft-beige hover:bg-perle-beige hover:shadow-lg transition-all duration-300 md:hover:scale-105"
              >
                <div className="flex justify-center mb-4 md:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-playfair font-bold text-perle-warm-gray mb-3 md:mb-4">{feature.title}</h3>
                <p className="font-inter text-perle-warm-gray/70 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOUVELLE SECTION : EXPERTISE --- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12 lg:items-center">
            <div className="lg:col-span-1 text-center lg:text-left mb-8 lg:mb-0">
              <div className="inline-flex flex-col items-center lg:items-start p-6 rounded-2xl bg-perle-soft-beige">
                <Award className="w-12 h-12 text-perle-honey mb-3" />
                <p className="text-4xl md:text-5xl font-playfair font-bold text-perle-warm-gray leading-none">20 Ans</p>
                <p className="text-lg font-inter text-perle-warm-gray/80">d'Expérience Internationale</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-perle-warm-gray mb-4">
                Un Savoir-Faire d'Exception à Votre Service
              </h2>
              <p className="font-inter text-perle-warm-gray/70 leading-relaxed">
                Forte de <strong>20 ans d'expérience</strong> acquise à l'international dans les plus grands instituts de beauté,
                je mets aujourd'hui ma passion et mon expertise au service de votre bien-être, directement à votre domicile.
                Chaque soin est le fruit d'un savoir-faire unique, vous garantissant un résultat impeccable et un moment de pure détente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-perle-beige to-perle-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4 md:mb-6">
              Nos Prestations Premium
            </h2>
            <p className="text-base md:text-xl font-inter text-perle-warm-gray/70 max-w-2xl mx-auto px-4">
              Une gamme complète de soins premium pour sublimer votre beauté naturelle
            </p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
            {[
              {
                name: 'Manucure Premium à Domicile',
                image: '/images/hero-1.jpg',
                price: 'dès 65 CHF',
                description: 'Manucure gel, vernis semi-permanent, soins cuticules. Service à domicile Genève et région.',
                link: '/prestations#manucure'
              },
              {
                name: 'Soins Visage Premium à Domicile',
                image: '/images/hero-3.jpg',
                price: 'dès 95 CHF',
                description: 'Nettoyage de peau, hydratation, anti-âge. Produits haut de gamme, service à domicile.',
                link: '/prestations#soins-visage'
              },
              {
                name: 'Massage Bien-être à Domicile',
                image: '/images/hero-2.jpg',
                price: 'dès 120 CHF',
                description: 'Massage relaxant, suédois, réflexologie. Détente absolue dans votre domicile.',
                link: '/prestations#massage'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-perle-ivory rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 md:hover:scale-105 group"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-playfair font-bold text-perle-warm-gray mb-2">{service.name}</h3>
                  <p className="font-inter text-perle-warm-gray/70 text-sm mb-3 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-perle-honey font-inter font-semibold text-base md:text-lg">{service.price}</p>
                    <Link
                      to={service.link}
                      className="text-perle-honey hover:text-perle-light-honey font-inter text-sm font-medium transition-colors"
                    >
                      Voir plus →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/prestations"
              className="inline-flex items-center space-x-2 bg-perle-honey text-white px-6 py-4 md:px-8 md:py-4 rounded-full text-base md:text-lg font-inter font-medium hover:bg-perle-light-honey hover:shadow-xl transition-all duration-300 md:hover:scale-105 min-h-[48px]"
            >
              <span>Découvrir toutes nos prestations</span>
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-perle-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4 md:mb-6">
              Témoignages Clients
            </h2>
            <p className="text-base md:text-xl font-inter text-perle-warm-gray/70 px-4">L'avis de nos clientes sur leur expérience premium</p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-perle-soft-beige p-6 md:p-8 rounded-2xl hover:bg-perle-beige hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-perle-honey fill-current" />
                  ))}
                </div>
                <p className="font-inter text-perle-warm-gray/80 mb-4 italic leading-relaxed text-sm md:text-base">"{testimonial.comment}"</p>
                <p className="font-playfair font-semibold text-perle-warm-gray text-sm md:text-base">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-perle-honey to-perle-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-white mb-4 md:mb-6">
            Prête pour votre moment privilégié ?
          </h2>
          <p className="text-base md:text-xl font-inter text-white/90 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Réservez votre service beauté à domicile en Suisse romande
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-perle-honey px-6 py-4 md:px-8 md:py-4 rounded-full text-base md:text-lg font-inter font-medium hover:bg-perle-ivory hover:shadow-xl transition-all duration-300 md:hover:scale-105 min-h-[48px] flex items-center justify-center"
            >
              Réserver maintenant
            </Link>
            <a
              href="https://wa.me/41123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-4 md:px-8 md:py-4 rounded-full text-base md:text-lg font-inter font-medium hover:bg-green-600 hover:shadow-xl transition-all duration-300 md:hover:scale-105 min-h-[48px] flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
