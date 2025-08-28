import React from 'react';
import { HandHeart, Sparkles, Accessibility } from 'lucide-react';

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
            Nous apportons douceur, bien-être et estime de soi à nos aînés directement en EMS et EHPAD.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm mb-12">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-perle-warm-gray mb-4">Des Soins Adaptés et Bienveillants</h2>
            <p className="font-inter text-perle-warm-gray/80 mb-4">
              Nous croyons que la beauté et le bien-être n'ont pas d'âge. C'est pourquoi nous avons développé une gamme de services spécialement conçus pour les seniors en résidence. Nos interventions sont pensées pour être des moments de plaisir, de douceur et d'échange, réalisés dans le respect et la bienveillance.
            </p>
            <p className="font-inter text-perle-warm-gray/80">
              Nous nous déplaçons au sein de votre établissement (EMS, EHPAD, résidences seniors) avec tout le matériel nécessaire pour recréer une ambiance apaisante, directement dans la chambre du résident ou dans un espace dédié.
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-perle-warm-gray mb-4">
              Les Bienfaits pour nos Aînés
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-perle-soft-beige rounded-2xl hover:bg-perle-beige transition-colors duration-300"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-perle-honey to-perle-light-honey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Vous êtes un établissement ou un proche ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
            Contactez-nous pour discuter d'une intervention et obtenir une offre personnalisée pour vos résidents.
          </p>
          <a
            href="/contact"
            className="bg-white text-perle-honey px-8 py-4 rounded-full text-lg font-inter font-medium hover:bg-perle-ivory transition-all duration-300 hover:scale-105"
          >
            Demander une offre
          </a>
        </div>
      </section>
    </div>
  );
};

export default Seniors;
