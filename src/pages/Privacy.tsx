import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <picture>
            <source srcSet="/images/privacy.avif" type="image/avif" />
            <source srcSet="/images/privacy.webp" type="image/webp" />
            <img
              src="/images/privacy.jpg"
              alt="Politique de confidentialité"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 40%' }}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Shield className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Votre vie privée est importante pour nous. Cette politique explique
            comment nous collectons, utilisons et protégeons vos informations
            personnelles.
          </p>
        </div>
      </section>


      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Quick Summary */}
          <div className="bg-pink-50 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 text-pink-600 mr-2" />
              En résumé
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ce que nous collectons :</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Nom, téléphone, email</li>
                  <li>• Adresse de prestation</li>
                  <li>• Préférences de services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Utilisation :</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Prise de rendez-vous</li>
                  <li>• Communication sur nos services</li>
                  <li>• Amélioration de notre service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 text-pink-600 mr-2" />
                1. Responsable du traitement
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>La Perle de Velours</strong><br />
                  Services de beauté à domicile<br />
                  Lausanne, Canton de Vaud, Suisse<br />
                  Email: perledevelours@gmail.com<br />
                  Téléphone: +41 12 345 67 89
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Données collectées</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Données personnelles</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Nom et prénom</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse email</li>
                    <li>Adresse de prestation</li>
                    <li>Préférences de services et horaires</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Données techniques</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées sur notre site</li>
                    <li>Date et heure de visite</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Finalités du traitement</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Gestion des rendez-vous</h3>
                  <p className="text-gray-700">
                    Nous utilisons vos données pour planifier, confirmer et effectuer vos prestations de beauté à domicile.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                  <p className="text-gray-700">
                    Nous vous contactons pour confirmer vos rendez-vous, vous informer de nos nouveaux services ou répondre à vos questions.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Amélioration des services</h3>
                  <p className="text-gray-700">
                    Vos retours nous aident à améliorer la qualité de nos prestations et à adapter nos services à vos besoins.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-6 h-6 text-pink-600 mr-2" />
                4. Base légale du traitement
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Exécution du contrat :</strong> Le traitement de vos données est nécessaire pour l'exécution des prestations de services que vous avez demandées.
                </p>
                <p>
                  <strong>Consentement :</strong> Pour l'envoi d'informations marketing, nous nous basons sur votre consentement explicite que vous pouvez retirer à tout moment.
                </p>
                <p>
                  <strong>Intérêt légitime :</strong> Pour l'amélioration de nos services et la gestion de notre clientèle.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Conservation des données</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Données clients actifs :</strong> Conservées pendant la durée de la relation commerciale</li>
                  <li><strong>Données comptables :</strong> 10 ans selon la législation suisse</li>
                  <li><strong>Données marketing :</strong> Jusqu'à retrait du consentement</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Partage des données</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter une obligation légale</li>
                  <li>Avec nos prestataires techniques (hébergement, maintenance) sous contrat de confidentialité</li>
                  <li>En cas de fusion, acquisition ou cession d'activité</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Vos droits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit d'accès</h3>
                    <p className="text-sm text-gray-600">Obtenir une copie des données que nous détenons sur vous</p>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit de rectification</h3>
                    <p className="text-sm text-gray-600">Corriger les données inexactes ou incomplètes</p>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit à l'effacement</h3>
                    <p className="text-sm text-gray-600">Demander la suppression de vos données personnelles</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit à la portabilité</h3>
                    <p className="text-sm text-gray-600">Récupérer vos données dans un format structuré</p>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit d'opposition</h3>
                    <p className="text-sm text-gray-600">Vous opposer au traitement de vos données</p>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit de limitation</h3>
                    <p className="text-sm text-gray-600">Limiter le traitement de vos données</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Comment exercer vos droits ?</h3>
                <p className="text-gray-700 mb-3">
                  Pour exercer vos droits, contactez-nous par email à{' '}
                  <a href="mailto:contact@maisonbeautemobile.ch" className="text-pink-600 hover:text-pink-700">
                    contact@maisonbeautemobile.ch
                  </a>
                  {' '}ou par téléphone au{' '}
                  <a href="tel:+41123456789" className="text-pink-600 hover:text-pink-700">
                    +41 12 345 67 89
                  </a>.
                </p>
                <p className="text-sm text-gray-600">
                  Nous répondrons à votre demande dans un délai de 30 jours maximum.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Sécurité des données</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chiffrement des données sensibles</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Formation du personnel à la protection des données</li>
                  <li>Sauvegarde régulière des données</li>
                  <li>Mise à jour régulière des systèmes de sécurité</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Cookies et technologies similaires</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Notre site web utilise des cookies pour améliorer votre expérience de navigation :
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div>
                      <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site
                    </div>
                    <div>
                      <strong>Cookies analytiques :</strong> Pour comprendre l'utilisation du site (avec votre consentement)
                    </div>
                    <div>
                      <strong>Cookies de préférence :</strong> Pour mémoriser vos choix de navigation
                    </div>
                  </div>
                </div>
                <p>
                  Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Modifications de cette politique</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  Cette politique de confidentialité peut être mise à jour occasionnellement. Les modifications importantes vous seront communiquées par email ou via notre site web. La date de dernière mise à jour est indiquée en bas de cette page.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact et réclamations</h2>
              <div className="bg-pink-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pour toute question</h3>
                    <p className="text-gray-700">
                      Email: <a href="mailto:perledevelours@gmail.com" className="text-pink-600 hover:text-pink-700">perledevelours@gmail.com</a><br />
                      Téléphone: <a href="tel:+41123456789" className="text-pink-600 hover:text-pink-700">+41 12 345 67 89</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Autorité de contrôle</h3>
                    <p className="text-gray-700">
                      En cas de désaccord, vous pouvez porter réclamation auprès du Préposé fédéral à la protection des données et à la transparence (PFPDT) :
                      <br />
                      <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                        www.edoeb.admin.ch
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-CH')}</p>
            <p className="mt-2">Version 1.0 - Conforme RGPD et LPD (Suisse)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;