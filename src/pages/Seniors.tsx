import React from 'react';
import { HandHeart, Sparkles, Accessibility, Heart, HelpCircle } from 'lucide-react';

const Seniors: React.FC = () =>
{
  const benefits = [
    {
      icon: <HandHeart className="w-8 h-8 text-perle-honey" />,
      title: 'Bien-être et Estime de soi',
      description: 'Un soin esthétique est un moment de réconfort qui valorise l\'image de soi et améliore le moral.'
    },
    {
      icon: <Accessibility className="w-8 h-8 text-perle-honey" />,
      title: 'Soins Adaptés et Sécurisés',
      description: 'Nous utilisons des protocoles et des produits doux, adaptés aux peaux matures et sensibles.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-perle-honey" />,
      title: 'Un Moment d\'Évasion',
      description: 'Nos visites sont une parenthèse de douceur et de convivialité, un véritable rayon de soleil dans le quotidien.'
    }
  ];

  const services = [
    { icon: <Heart className="w-6 h-6 text-perle-honey" />, name: 'Manucure & Pédicure Douceur', description: 'Soin des ongles adapté, massage des mains et des pieds pour stimuler la circulation.' },
    { icon: <Heart className="w-6 h-6 text-perle-honey" />, name: 'Soins du Visage Hydratants', description: 'Produits hypoallergéniques pour nourrir et apaiser les peaux sensibles.' },
    { icon: <Heart className="w-6 h-6 text-perle-honey" />, name: 'Massages Relaxants', description: 'Effleurages doux des bras, des jambes ou du dos pour une détente profonde.' },
  ];

  const faqs = [
    { q: "Quelle est la durée d'une intervention ?", a: "Les séances durent généralement entre 30 et 45 minutes par résident, pour garantir un soin de qualité sans fatiguer la personne." },
    { q: "Respectez-vous des protocoles d'hygiène stricts ?", a: "Absolument. Tout notre matériel est désinfecté et stérilisé avant chaque utilisation, conformément aux normes les plus exigeantes." },
    { q: "Faut-il une préparation particulière dans la chambre ?", a: "Aucune. Nous nous occupons de tout. Nous avons simplement besoin d'un petit espace près du résident et d'un accès à un point d'eau si possible." }
  ]

  return (
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/senior.jpg)', backgroundPosition: 'center 40%' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Soins pour Seniors en Résidence
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Nous apportons douceur, bien-être et estime de soi à nos aînés directement en EMS et résidences spécialisées.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">Une Approche Bienveillante et Adaptée</h2>
          <p className="font-inter text-lg text-perle-warm-gray/80 leading-relaxed">
            Nous croyons que la beauté et le bien-être n'ont pas d'âge. C'est pourquoi nous avons développé une gamme de services spécialement conçus pour les seniors. Nos interventions sont pensées pour être des moments de plaisir, de douceur et d'échange, réalisés dans le plus grand respect.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Nos Soins Adaptés
            </h2>
          </div>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-perle-soft-beige rounded-lg">
                <div className="flex-shrink-0 mt-1">{service.icon}</div>
                <div>
                  <h3 className="font-playfair font-bold text-perle-warm-gray text-lg">{service.name}</h3>
                  <p className="font-inter text-perle-warm-gray/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Les Bienfaits pour nos Aînés
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white shadow-lg rounded-2xl"
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

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-perle-soft-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-10 h-10 text-perle-honey mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray">
              Vos Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-playfair font-bold text-perle-warm-gray text-lg mb-2">{faq.q}</h3>
                <p className="font-inter text-perle-warm-gray/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-perle-honey to-perle-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Offrez un moment de douceur.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
            Contactez-nous pour organiser une intervention dans votre établissement ou pour un proche.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-perle-honey px-8 py-4 rounded-full text-lg font-inter font-medium hover:bg-perle-ivory transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Demander une offre personnalisée
          </a>
        </div>
      </section>
    </div>
  );
};

export default Seniors;
