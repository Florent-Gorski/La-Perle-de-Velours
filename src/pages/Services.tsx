import React from "react";

const HeroSection: React.FC<{ image: string; title: string; subtitle?: string }> = ({
  image,
  title,
  subtitle,
}) => (
  <section className="relative h-[320px] md:h-[420px] isolate">
    <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div
      className="absolute inset-0 -z-10"
      style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.15) 100%)" }}
      aria-hidden
    />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
      <div className="text-white text-center w-full">
        <h1 className="font-playfair text-3xl md:text-5xl font-extrabold drop-shadow">{title}</h1>
        {subtitle && <p className="mt-3 text-white/90 md:text-lg">{subtitle}</p>}
      </div>
    </div>
  </section>
);

const Services: React.FC = () =>
{
  return (
    <div className="min-h-screen bg-rosa-ivory">
      <HeroSection
        title="Nos Prestations"
        subtitle="Manucure, esthétique et massages à domicile"
        image="https://images.pexels.com/photos/3997386/pexels-photo-3997386.webp"
      />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Manucure */}
          <div className="bg-white rounded-3xl shadow p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <img
                src="https://images.pexels.com/photos/3997386/pexels-photo-3997386.webp"
                alt="Manucure à domicile"
                className="w-full h-56 md:h-72 object-cover rounded-xl"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray">Manucure</h3>
                <p className="mt-2 text-rosa-warm-gray/70">Soin complet des ongles, vernis premium, cuticules soignées.</p>
              </div>
            </div>
          </div>

          {/* Pédicure */}
          <div className="bg-white rounded-3xl shadow p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <img
                src="https://images.pexels.com/photos/16142834/pexels-photo-16142834.webp"
                alt="Pédicure à domicile"
                className="w-full h-56 md:h-72 object-cover rounded-xl"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray">Pédicure Express Lausanne</h3>
                <p className="mt-2 text-rosa-warm-gray/70">Soin rapide et efficace pour vos pieds, confort à domicile.</p>
              </div>
            </div>
          </div>

          {/* Massage */}
          <div className="bg-white rounded-3xl shadow p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <img
                src="https://images.pexels.com/photos/275768/pexels-photo-275768.webp"
                alt="Massage relaxant"
                className="w-full h-56 md:h-72 object-cover rounded-xl"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray">Massage bien-être</h3>
                <p className="mt-2 text-rosa-warm-gray/70">Relaxation, soulagement des tensions et lâcher-prise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
