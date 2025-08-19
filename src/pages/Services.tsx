import * as React from "react";
import PageHero from "../components/PageHero";

const Services: React.FC = () => {
  return (
    <>
      <PageHero
        title="Prestations"
        subtitle="Manucure esthétique & massages à domicile"
        image="/images/services.jpg" // à défaut, utilisez /images/hero-1.jpg
      />
      {/* --- Placez ici le contenu EXISTANT de la page Services --- */}
    </>
  );
};

export default Services;
