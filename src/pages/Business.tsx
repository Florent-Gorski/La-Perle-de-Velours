import * as React from "react";
import PageHero from "../components/PageHero";

const Business: React.FC = () => {
  return (
    <>
      <PageHero
        title="Services pour entreprises"
        subtitle="Offrez beauté & bien-être directement dans vos locaux"
        image="/images/entreprises.jpg"
      />
      {/* --- Placez ici le contenu EXISTANT de la page Entreprises --- */}
    </>
  );
};

export default Business;
