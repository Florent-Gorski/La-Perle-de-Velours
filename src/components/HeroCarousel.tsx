import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * HeroCarousel
 * - Slides WebP (libres) optimisées
 * - Overlay dégradé pour lisibilité (et header plus lisible sur fonds clairs)
 * - Text shadow sur le titre
 * - Auto-play + navigation manuelle + puces
 * - Mobile-first + accessible
 */

type Slide = {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
};

const SLIDE_INTERVAL_MS = 6000; // auto-play

const HeroCarousel: React.FC = () => {
  const slides: Slide[] = useMemo(
    () => [
      {
        id: 1,
        image: "https://images.pexels.com/photos/3997386/pexels-photo-3997386.webp",
        alt: "Manucure premium avec plateau en laiton",
        title: "Manucure Premium",
        subtitle: "L'art du détail à domicile",
      },
      {
        id: 2,
        image: "https://images.pexels.com/photos/275768/pexels-photo-275768.webp",
        alt: "Massage bien-être dans un cadre lumineux",
        title: "Massage Bien-être",
        subtitle: "Détente absolue chez vous",
      },
      {
        id: 3,
        image: "https://images.pexels.com/photos/8989725/pexels-photo-8989725.webp",
        alt: "Soins visage dans une ambiance spa",
        title: "Soins Visage",
        subtitle: "Éclat naturel révélé",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Auto-play
  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, SLIDE_INTERVAL_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, slides.length]);

  // Keyboard nav (accessibilité)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section
      className="relative h-[420px] md:h-[520px] isolate"
      aria-roledescription="carousel"
      aria-label="Mises en avant des services"
    >
      {/* Slides */}
      {slides.map((s, i) => {
        const active = i === index;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              active ? "opacity-100 z-10" : "opacity-0"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${slides.length}`}
          >
            {/* Image */}
            <img
              src={s.image}
              alt={s.alt}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Overlay dégradé sombre pour lisibilité du header et du texte */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.2) 100%)",
              }}
              aria-hidden
            />
          </div>
        );
      })}

      {/* Contenu centré */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
            >
              {slides[index].title}
            </h1>
            {slides[index].subtitle && (
              <p className="mt-3 md:mt-4 text-white/90 text-base md:text-lg">
                {slides[index].subtitle}
              </p>
            )}

            <div className="mt-5 md:mt-7 flex items-center justify-center gap-3 md:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#CDA434] text-white px-5 py-2.5 md:px-7 md:py-3 font-medium shadow hover:shadow-lg hover:brightness-105 transition-all"
              >
                Réserver
              </Link>
              <Link
                to="/prestations"
                className="inline-flex items-center justify-center rounded-full bg-white/90 text-neutral-800 px-5 py-2.5 md:px-7 md:py-3 font-medium shadow hover:bg-white transition-all"
              >
                Voir Prestations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Flèches */}
      <button
        type="button"
        onClick={prev}
        aria-label="Slide précédent"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/35 hover:bg-black/50 text-white p-2 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Slide suivant"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/35 hover:bg-black/50 text-white p-2 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Puces */}
      <div className="absolute z-30 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Aller au slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                active ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HeroCarousel;
