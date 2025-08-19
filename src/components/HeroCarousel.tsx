import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg',
      alt: 'Manucure premium avec plateau en laiton',
      title: 'Manucure Premium',
      subtitle: 'L\'art du détail à domicile'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg',
      alt: 'Massage bien-être dans un cadre lumineux',
      title: 'Massage Bien-être',
      subtitle: 'Détente absolue chez vous'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg',
      alt: 'Soins visage dans une ambiance spa',
      title: 'Soins Visage',
      subtitle: 'Éclat naturel révélé'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[60vh] min-h-[500px] md:h-[75vh] md:min-h-[600px] overflow-hidden">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay - Doré miel */}
      <div className="absolute inset-0 bg-gradient-to-t from-perle-honey/50 via-perle-ivory/20 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-perle-warm-gray/30 via-transparent to-perle-honey/20"></div>

      {/* Motif Moucharabieh subtil */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="moucharabieh" width="60" height="60" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#2A2A2A" strokeWidth="0.5">
                <path d="M30 0 L60 30 L30 60 L0 30 Z" />
                <circle cx="30" cy="30" r="8" />
                <path d="M15 15 L45 15 L45 45 L15 45 Z" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#moucharabieh)" />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full bg-perle-olive/15 backdrop-blur-sm border border-perle-olive/20 mb-4 md:mb-6 animate-slide-in">
            <span className="text-perle-warm-gray text-xs md:text-sm font-inter tracking-wide">
              À domicile · Suisse romande
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-perle-warm-gray mb-4 md:mb-6 leading-tight animate-fade-in-up px-2">
            <span className="block font-script text-perle-honey" style={{ fontFamily: 'Dancing Script, cursive' }}>La Perle de Velours</span>
            <span className="block">Beauté & Bien-être à Domicile</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter font-normal text-perle-warm-gray/80 mt-2">
              Lausanne, Canton de Vaud
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-perle-warm-gray/80 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            L'élégance au naturel, la beauté dans chaque nuance
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            <a
              href="/contact"
              className="group relative overflow-hidden bg-perle-honey text-white px-6 py-4 md:px-8 md:py-4 rounded-full text-base md:text-lg font-inter font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-perle-honey/50 min-h-[48px] flex items-center justify-center"
            >
              <span className="relative z-10">Réserver maintenant</span>
              <div className="absolute inset-0 bg-gradient-to-r from-perle-light-honey to-perle-honey opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="/prestations"
              className="group relative overflow-hidden bg-transparent text-perle-honey px-6 py-4 md:px-8 md:py-4 rounded-full text-base md:text-lg font-inter font-medium border-2 border-perle-honey hover:bg-perle-honey hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-perle-honey/50 min-h-[48px] flex items-center justify-center"
            >
              <span className="relative z-10">Découvrir nos services</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-perle-ivory/80 backdrop-blur-sm text-perle-honey hover:bg-perle-ivory hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-perle-honey/50 min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-perle-ivory/80 backdrop-blur-sm text-perle-honey hover:bg-perle-ivory hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-perle-honey/50 min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-perle-honey/50 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              index === currentSlide
                ? 'bg-perle-honey shadow-lg scale-125'
                : 'bg-perle-ivory/60 hover:bg-perle-ivory'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Info */}
      <div className="absolute bottom-16 md:bottom-20 left-4 md:left-8 z-20 animate-fade-in">
        <div className="bg-perle-ivory/90 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-perle-honey/20 max-w-[200px] md:max-w-none">
          <h3 className="font-playfair font-bold text-perle-warm-gray text-sm md:text-lg">
            {slides[currentSlide].title}
          </h3>
          <p className="font-inter text-perle-warm-gray/70 text-xs md:text-sm">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;