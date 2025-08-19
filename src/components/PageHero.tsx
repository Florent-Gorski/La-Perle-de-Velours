import * as React from "react";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;           // ex: "/images/zones.jpg"
  height?: string;         // ex: "h-[360px]" | "h-[420px]"
  overlay?: string;        // ex: "bg-black/40"
  children?: React.ReactNode;
};

/**
 * PageHero — bandeau image réutilisable pour les pages intérieures.
 * - Image de fond en cover
 * - Overlay doux pour lisibilité
 * - Padding top pour header sticky
 */
const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  image,
  height = "h-[380px] md:h-[460px]",
  overlay = "bg-black/40",
  children,
}) => {
  return (
    <section className={`relative ${height} isolate pt-16 md:pt-20`}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
      />
      <div className={`absolute inset-0 -z-10 ${overlay}`} aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-playfair font-bold">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-white/90 text-lg md:text-xl">{subtitle}</p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
