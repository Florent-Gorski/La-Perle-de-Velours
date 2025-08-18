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

const Zones: React.FC = () =>
{
  const infos = [
    { label: "Frais de déplacement", value: "Calculés selon la distance depuis Lausanne" },
    { label: "Minimum de prestation", value: "45 CHF" },
    { label: "Parking", value: "Gratuit requis" },
    { label: "Accès", value: "Accès facile au domicile" },
  ];

  const zones = [
    "Lausanne", "Pully", "Renens", "Préverenges", "Morges", "Prilly", "Ecublens", "Crissier",
    "Lutry", "Epalinges", "Chavannes-près-Renens", "Bussigny", "Saint-Sulpice", "Vevey", "Montreux"
  ];

  return (
    <div className="min-h-screen bg-rosa-ivory">
      <HeroSection
        title="Zones Desservies"
        subtitle="Nous intervenons à Lausanne et dans tout le canton de Vaud"
        image="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=2000&h=900&dpr=1"
      />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray mb-6">Informations importantes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {infos.map((i, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-rosa-soft-beige">
                  <p className="font-inter font-semibold text-rosa-warm-gray">{i.label}</p>
                  <p className="text-rosa-warm-gray/70">{i.value}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-lg md:text-xl font-playfair font-bold text-rosa-warm-gray">Communes principales</h3>
            <ul className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
              {zones.map((z, i) => (
                <li key={i} className="px-3 py-2 rounded-lg bg-white border border-rosa-beige/60 text-rosa-warm-gray/80">{z}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zones;
