import React from 'react';
import { Shield, Database, UserCheck, Clock } from 'lucide-react';

const Privacy: React.FC = () =>
{
  return (
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/privacy.jpg)', backgroundPosition: 'center center' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Shield className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Votre confiance est notre priorité. Découvrez comment nous protégeons vos données personnelles.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
            <p className="text-center text-perle-warm-gray/60 font-inter mb-8">Dernière mise à jour : 27 août 2025</p>

            <div className="space-y-8">
              {/* Section 1: Introduction */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-perle-warm-gray mb-4">Introduction</h2>
                <p className="font-inter text-perle-warm-gray/80 leading-relaxed">
                  La présente Politique de Confidentialité décrit comment La Perle de Velours collecte, utilise et protège les informations que vous nous fournissez lorsque vous utilisez notre site web et nos services. Nous nous engageons à garantir la protection de votre vie privée.
                </p>
              </div>

              {/* Section 2: Données Collectées */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-6 h-6 text-perle-honey" />
                  <h2 className="text-2xl font-playfair font-bold text-perle-warm-gray">Données que nous collectons</h2>
                </div>
                <p className="font-inter text-perle-warm-gray/80 leading-relaxed mb-4">
                  Nous pouvons collecter les informations suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 font-inter text-perle-warm-gray/80">
                  <li>Nom et prénom.</li>
                  <li>Coordonnées, y compris adresse e-mail et numéro de téléphone.</li>
                  <li>Adresse postale pour les services à domicile.</li>
                  <li>Informations relatives à vos réservations (type de service, date, heure).</li>
                  <li>Toute autre information que vous choisissez de nous fournir via le formulaire de contact.</li>
                </ul>
              </div>

              {/* Section 3: Utilisation des données */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <UserCheck className="w-6 h-6 text-perle-honey" />
                  <h2 className="text-2xl font-playfair font-bold text-perle-warm-gray">Comment nous utilisons vos données</h2>
                </div>
                <p className="font-inter text-perle-warm-gray/80 leading-relaxed mb-4">
                  Vos données sont essentielles pour nous permettre de vous offrir un service de qualité, et notamment pour les raisons suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 font-inter text-perle-warm-gray/80">
                  <li>Gestion des rendez-vous et de la facturation.</li>
                  <li>Communication concernant votre réservation (confirmation, rappel).</li>
                  <li>Amélioration de nos services et de notre offre.</li>
                  <li>Envoi occasionnel d'offres promotionnelles ou d'informations que nous pensons pertinentes pour vous (uniquement avec votre consentement).</li>
                </ul>
              </div>

              {/* Section 4: Sécurité */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-perle-honey" />
                  <h2 className="text-2xl font-playfair font-bold text-perle-warm-gray">Sécurité de vos données</h2>
                </div>
                <p className="font-inter text-perle-warm-gray/80 leading-relaxed">
                  Nous nous engageons à assurer la sécurité de vos informations. Des mesures de sécurité physiques, électroniques et de gestion appropriées ont été mises en place pour empêcher tout accès ou divulgation non autorisé.
                </p>
              </div>

              {/* Section 5: Durée de conservation */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-perle-honey" />
                  <h2 className="text-2xl font-playfair font-bold text-perle-warm-gray">Durée de conservation</h2>
                </div>
                <p className="font-inter text-perle-warm-gray/80 leading-relaxed">
                  Vos données personnelles sont conservées aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, ainsi que pour nous conformer à nos obligations légales.
                </p>
              </div>

              {/* Section 6: Vos droits */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-perle-warm-gray mb-4">Vos droits</h2>
                <p className="font-inter text-perle-warm-gray/80 leading-relaxed">
                  Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, veuillez nous contacter à l'adresse <a href="mailto:laperledevelours@gmail.com" className="text-perle-honey hover:underline">laperledevelours@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
