import * as React from "react";
import PageHero from "../components/PageHero";

const Zones: React.FC = () => {
  return (
    <>
      <PageHero
        title="Zones desservies"
        subtitle="Nous intervenons à Lausanne et dans tout le canton de Vaud"
        image="/images/zones.jpg"
      />
      {/* --- Placez ici le contenu EXISTANT de la page Zones --- */}
    </>
  );
};

export default Zones;
