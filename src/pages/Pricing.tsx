import React from "react";
import { Check, Star, Crown } from "lucide-react";

const HeroSection: React.FC<{ image: string; title: string; subtitle?: string }> = ({ image, title, subtitle }) => (
  <section className="relative h-[320px] md:h-[420px] isolate">
    <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.15) 100%)" }} />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
      <div className="text-white text-center w-full">
        <h1 className="font-playfair text-3xl md:text-5xl font-extrabold drop-shadow">{title}</h1>
        {subtitle && <p className="mt-3 text-white/90 md:text-lg">{subtitle}</p>}
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () =>
{
  const pricingData = [
    {
      category: "Manucure",
      icon: "💅",
      services: [
        { name: "Manucure classique", price: 45, duration: "45 min", description: "Coupe, limage, cuticules, vernis classique" },
        { name: "Manucure française", price: 55, duration: "60 min", description: "French manucure élégante" },
        { name: "Pose de gel couleur", price: 65, duration: "90 min", description: "Renforcement gel avec couleur" },
        { name: "Pose gel french", price: 70, duration: "90 min", description: "French en gel semi-permanent" },
        { name: "Dépose gel", price: 25, duration: "30 min", description: "Retrait sécurisé du gel" },
        { name: "Réparation ongle cassé", price: 15, duration: "15 min", description: "Réparation ponctuelle" },
      ],
    },
    {
      category: "Pédicure",
      icon: "🦶",
      services: [
        { name: "Pédicure complète", price: 65, duration: "75 min", description: "Soin complet avec gommage et massage" },
        { name: "Pédicure Express Lausanne", price: 45, duration: "45 min", description: "Soin rapide et efficace" },
        { name: "Pose vernis gel pieds", price: 35, duration: "30 min", description: "Vernis semi-permanent" },
        { name: "Soin callosités", price: 40, duration: "45 min", description: "Traitement des duretés" },
      ],
    },
    {
      category: "Esthétique",
      icon: "✨",
      services: [
        { name: "Soin visage hydratant", price: 80, duration: "60 min", description: "Nettoyage, gommage, masque, hydratation" },
        { name: "Soin anti-âge", price: 95, duration: "75 min", description: "Soin complet anti-rides" },
        { name: "Nettoyage de peau", price: 70, duration: "45 min", description: "Purification en profondeur" },
        { name: "Épilation sourcils", price: 25, duration: "20 min", description: "Mise en forme précise" },
        { name: "Teinture sourcils/cils", price: 30, duration: "30 min", description: "Coloration naturelle" },
      ],
    },
    {
      category: "Massage",
      icon: "🤲",
      services: [
        { name: "Massage relaxant 60 min", price: 90, duration: "60 min", description: "Détente complète du corps" },
        { name: "Massage relaxant 90 min", price: 120, duration: "90 min", description: "Relaxation prolongée" },
        { name: "Massage du dos", price: 50, duration: "30 min", description: "Soulagement des tensions" },
        { name: "Réflexologie plantaire", price: 65, duration: "45 min", description: "Stimulation des points réflexes" },
      ],
    },
  ];

  const packages = [
    {
      name: "Forfait Beauté",
      slug: "forfait-beaute",
      icon: <Star className="w-8 h-8" />,
      price: 120,
      originalPrice: 140,
      description: "Manucure + Pédicure express",
      features: ["Manucure classique (45 min)", "Pédicure express (45 min)", "Économie de 20 CHF", "Durée totale : 90 min"],
      popular: false,
    },
    {
      name: "Forfait Détente",
      slug: "forfait-detente",
      icon: <Crown className="w-8 h-8" />,
      price: 160,
      originalPrice: 185,
      description: "Soin visage + Massage",
      features: ["Soin visage hydratant (60 min)", "Massage relaxant (60 min)", "Économie de 25 CHF", "Durée totale : 2h"],
      popular: true,
    },
    {
      name: "Forfait Premium",
      slug: "forfait-premium",
      icon: <Crown className="w-8 h-8" />,
      price: 200,
      originalPrice: 240,
      description: "Expérience complète",
      features: ["Manucure gel (90 min)", "Pédicure complète (75 min)", "Soin visage (60 min)", "Économie de 40 CHF"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-rosa-ivory">
      <HeroSection
        title="Tarifs Services Beauté à Domicile"
        subtitle="Prix transparents en CHF TTC. Matériel et produits premium inclus."
        image="https://images.pexels.com/photos/8989725/pexels-photo-8989725.webp"
      />

      {/* Forfaits */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-rosa-warm-gray mb-4">Forfaits Avantageux</h2>
            <p className="text-base md:text-xl font-inter text-rosa-warm-gray/70 px-4">Combinez plusieurs services et économisez</p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {packages.map((pkg, i) => (
              <div key={i} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all ${pkg.popular ? "ring-2 ring-rosa-honey md:scale-105" : ""}`}>
                <img src="https://images.pexels.com/photos/3738347/pexels-photo-3738347.webp" alt="" className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-rosa-honey">{pkg.icon}</div>
                  <h3 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray text-center mb-2">{pkg.name}</h3>
                  <p className="text-rosa-warm-gray/70 font-inter text-center mb-6 text-sm md:text-base">{pkg.description}</p>
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl md:text-4xl font-playfair font-bold text-rosa-warm-gray">{pkg.price}</span>
                      <span className="text-lg md:text-xl text-rosa-warm-gray/70 font-inter">CHF</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mt-1">
                      <span className="text-base md:text-lg text-rosa-warm-gray/40 line-through font-inter">{pkg.originalPrice} CHF</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-inter font-medium">-{pkg.originalPrice - pkg.price} CHF</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                        <span className="text-rosa-warm-gray/70 font-inter text-sm md:text-base">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/contact?forfait=${pkg.slug}`}
                    className={`w-full block text-center py-4 px-6 rounded-full font-inter font-medium transition-colors min-h-[48px] ${pkg.popular ? "bg-rosa-honey text-white hover:bg-rosa-light-honey" : "bg-rosa-soft-beige text-rosa-warm-gray hover:bg-rosa-beige"
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-rosa-warm-gray mb-4">Prestations Individuelles</h2>
            <p className="text-base md:text-xl font-inter text-rosa-warm-gray/70 px-4">Choisissez exactement ce dont vous avez besoin</p>
          </div>

          {pricingData.map((cat, idx) => (
            <div key={idx} className="bg-rosa-soft-beige rounded-3xl overflow-hidden mb-8">
              <div className="relative">
                <img
                  src={
                    cat.category === "Pédicure"
                      ? "https://images.pexels.com/photos/16142834/pexels-photo-16142834.webp"
                      : cat.category === "Massage"
                        ? "https://images.pexels.com/photos/275768/pexels-photo-275768.webp"
                        : "https://images.pexels.com/photos/3997386/pexels-photo-3997386.webp"
                  }
                  alt=""
                  className="w-full h-36 md:h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-playfair font-bold drop-shadow">{cat.category}</h3>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0">
                  {cat.services.map((s, k) => (
                    <div key={k} className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md hover:bg-rosa-ivory/50 transition">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                        <h4 className="font-playfair font-bold text-rosa-warm-gray text-sm md:text-base">{s.name}</h4>
                        <div className="text-left sm:text-right">
                          <div className="text-lg md:text-xl font-playfair font-bold text-rosa-honey">{s.price} CHF</div>
                          <div className="text-xs md:text-sm text-rosa-warm-gray/60 font-inter">{s.duration}</div>
                        </div>
                      </div>
                      <p className="text-rosa-warm-gray/70 font-inter text-xs md:text-sm leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
