import React from "react";

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

const perks = [
  { title: "Bien-être au travail", desc: "Réduit le stress et améliore la satisfaction des employés." },
  { title: "Image de marque", desc: "Valorise votre entreprise auprès des clients et talents." },
  { title: "Sur site", desc: "Interventions directement dans vos locaux, sans déplacement." },
  { title: "Formules flexibles", desc: "Sessions ponctuelles ou récurrentes, selon vos besoins." },
];

const Business: React.FC = () =>
{
  return (
    <div className="min-h-screen bg-rosa-ivory">
      <HeroSection
        title="Services pour Entreprises"
        subtitle="Offrez beauté & bien-être directement dans vos locaux"
        image="https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg?auto=compress&cs=tinysrgb&w=2000&h=900&dpr=1"
      />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow">
                <h3 className="font-playfair text-xl font-bold text-rosa-warm-gray">{p.title}</h3>
                <p className="mt-2 text-rosa-warm-gray/70">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-rosa-soft-beige rounded-3xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray">Exemples d’interventions</h3>
            <ul className="mt-3 grid md:grid-cols-2 gap-3 list-disc list-inside text-rosa-warm-gray/80">
              <li>Journées bien-être (massages assis, soins express)</li>
              <li>Corner beauté lors d’événements internes</li>
              <li>Programme mensuel pour équipes</li>
              <li>Offre VIP pour clients</li>
            </ul>
            <a
              href="/contact?forfait=forfait-premium"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-rosa-honey text-white px-6 py-3 font-medium hover:bg-rosa-light-honey transition"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
