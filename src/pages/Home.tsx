import React from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-rosa-ivory">
      {/* Hero avec carrousel optimisé */}
      <HeroCarousel />

      {/* Bande visuelle */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "https://images.pexels.com/photos/3997386/pexels-photo-3997386.webp",
              "https://images.pexels.com/photos/8989725/pexels-photo-8989725.webp",
              "https://images.pexels.com/photos/275768/pexels-photo-275768.webp",
              "https://images.pexels.com/photos/3738347/pexels-photo-3738347.webp",
            ].map((src, i) => (
              <li
                key={i}
                className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-rosa-honey to-rosa-light-honey">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-3">
            Prête pour votre moment beauté ?
          </h2>
          <p className="text-white/90 md:text-lg mb-6">
            Réservez votre service à domicile – réponse rapide
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-rosa-honey px-6 py-3 md:px-8 md:py-4 font-medium hover:bg-rosa-ivory transition"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
