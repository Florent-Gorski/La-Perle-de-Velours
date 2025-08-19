import * as React from "react";
import PageHero from "../components/PageHero";

const Pricing: React.FC = () => {
  return (
    <>
      <PageHero
        title="Tarifs"
        subtitle="Transparents, en francs TTC — matériel & produits premium inclus"
        image="/images/tarifs.jpg"
      />
      {/* --- Placez ici le contenu EXISTANT de la page Tarifs/Pricing --- */}
    </>
  );
};

export default Pricing;
