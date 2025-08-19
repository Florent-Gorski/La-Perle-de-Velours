import * as React from "react";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Slide = {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
};

const SLIDE_INTERVAL_MS = 6000;

const HeroCarousel = () =>
{
  const slides: Slide[] = useMemo(
    () => [
      {
        id: 1,
        image: "/images/hero-1.jpg",
        alt: "Manucure premium",
        title: "Beauté & Bien-être à Domicile",
        subtitle: "Lausanne, Canton de Vaud",
      },
      {
        id: 2,
        image: "/images/hero-2.jpg",
        alt: "Massage bien-être",
        title: "Massage Bien-être",
        subtitle: "L'élégance au naturel, la beauté dans chaque nuance",
      },
      {
        id: 3,
        image: "/images/hero-3.jpg",
        alt: "Soins visage spa",
        title: "Soins Visage",
        subtitle: "Éclat naturel révélé",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex((i + slides.length) % slides.length),
    [slides.length]
  );

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length]
  );

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  );

  // Auto-play
  useEffect(() =>
  {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, SLIDE_INTERVAL_MS);
    return () =>
    {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [next]);

  // Navigation clavier
  useEffect(() =>
  {
    const onKey = (e: KeyboardEvent) =>
    {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      className="relative h-[480px] md:h-[580px] isolate"
      aria-roledescription="carousel"
      aria-label="Mises en avant des services"
    >
      {/* Slides */}
      {slides.map((s, i) =>
      {
        const active = i === index;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${active ? "opacity-100 z-10" : "opacity-0"
              }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${slides.length}`}
          >
            <img src={s.image} alt={s.alt} className="h-full w-full object-cover" />
            {/* Overlay léger */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 100%)",
              }}
              aria-hidden
            />
          </div>
        );
      })}

      {/* Texte */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-bold leading-tight drop-shadow-lg">
              {slides[index].title}
            </h1>
            {slides[index].subtitle && (
              <p className="mt-3 md:mt-4 text-white/90 text-lg md:text-xl">
                {slides[index].subtitle}
              </p>
            )}

            <div className="mt-6 md:mt-8 flex items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-[#CDA434] text-white px-6 py-3 font-semibold shadow hover:shadow-lg transition-all"
              >
                Réserver maintenant
              </Link>
              <Link
                to="/prestations"
                className="rounded-full bg-white/90 text-neutral-800 px-6 py-3 font-semibold shadow hover:bg-white transition-all"
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
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/80 text-[#CDA434] hover:bg-white p-3 shadow"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Slide suivant"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/80 text-[#CDA434] hover:bg-white p-3 shadow"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Puces */}
      <div className="absolute z-30 bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Aller au slide ${i + 1}`}
            className={`h-3 rounded-full transition-all ${i === index ? "w-7 bg-[#CDA434]" : "w-3 bg-white/70 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
