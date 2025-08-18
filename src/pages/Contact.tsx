import React, { useEffect, useMemo, useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel"; // ✅ bon import

/**
 * Slugs de forfaits -> libellés affichés
 */
const FORFAIT_LABELS: Record<string, string> = {
  detente: "Forfait Détente",
  "forfait-detente": "Forfait Détente",
  beaute: "Forfait Beauté",
  "forfait-beaute": "Forfait Beauté",
  premium: "Forfait Premium",
  "forfait-premium": "Forfait Premium",
};

/** Format YYYY-MM-DD local (évite décalage UTC) */
function todayLocalISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

const Contact: React.FC = () => {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const forfaitParam = (params.get("forfait") || "").toLowerCase().trim();
  const forfaitLabelInitial = FORFAIT_LABELS[forfaitParam] || "";

  const [selectedForfait, setSelectedForfait] = useState<string>(forfaitLabelInitial);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const services = [
    "Manucure",
    "Pédicure",
    "Soin du visage",
    "Massage",
    "Forfait Beauté",
    "Forfait Détente",
    "Forfait Premium",
    "Prestation entreprise",
    "Autre",
  ];

  /** Préremplissage si on arrive avec ?forfait=... */
  useEffect(() => {
    if (!selectedForfait) return;
    setFormData((prev) => {
      const nextService = prev.service || selectedForfait;
      const line = `Forfait choisi : ${selectedForfait}`;
      const hasLine = prev.message.includes(line);
      return {
        ...prev,
        service: nextService,
        message: hasLine ? prev.message : (prev.message ? `${prev.message}\n${line}` : line),
      };
    });
  }, [selectedForfait]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const clearForfait = () => {
    setSelectedForfait("");
    setFormData((p) => ({
      ...p,
      message: p.message.replace(/(^|\n)Forfait choisi : .+(\n|$)/, "\n").trim(),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // ➜ ici tu peux appeler ton backend /api/book (Google Agenda)
      await new Promise((r) => setTimeout(r, 800));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        preferredDate: "",
        preferredTime: "",
      });
      setSelectedForfait("");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-rosa-ivory">
      {/* ✅ On utilise le HeroCarousel (pas <Hero …/>) */}
      <HeroCarousel />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
        <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:space-y-0">
          {/* Infos de contact (garde ce bloc si tu le veux) */}
          <div>
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-rosa-warm-gray mb-6 md:mb-8">
              Contact Direct
            </h2>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-rosa-honey mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-rosa-warm-gray mb-2">Téléphone</h3>
                  <a
                    href="tel:+41123456789"
                    className="text-rosa-warm-gray/70 hover:text-rosa-honey transition-colors font-inter text-lg font-medium"
                  >
                    +41 12 345 67 89
                  </a>
                  <p className="text-sm text-rosa-warm-gray/60 font-inter mt-1">Lun–Sam 8h–20h, Dim 10h–18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-rosa-honey mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-rosa-warm-gray mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/41123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rosa-warm-gray/70 hover:text-rosa-honey transition-colors font-inter text-lg font-medium"
                  >
                    +41 12 345 67 89
                  </a>
                  <p className="text-sm text-rosa-warm-gray/60 font-inter mt-1">Réponse rapide garantie</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-rosa-honey mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-rosa-warm-gray mb-2">Email</h3>
                  <a
                    href="mailto:laperledevelours@gmail.com"
                    className="text-rosa-warm-gray/70 hover:text-rosa-honey transition-colors font-inter"
                  >
                    laperledevelours@gmail.com
                  </a>
                  <p className="text-sm text-rosa-warm-gray/60 font-inter mt-1">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-rosa-honey mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-rosa-warm-gray mb-2">Zone d'intervention</h3>
                  <p className="text-rosa-warm-gray/70 font-inter">Lausanne et canton de Vaud</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-rosa-honey mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-rosa-warm-gray mb-2">Horaires</h3>
                  <div className="text-rosa-warm-gray/70 font-inter space-y-1 text-sm md:text-base">
                    <p>Lun–Ven : 8h00 – 20h00</p>
                    <p>Samedi : 9h00 – 19h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-rosa-warm-gray mb-4 md:mb-6">
                Demande de Réservation
              </h2>

              {/* Badge Forfait */}
              {selectedForfait && (
                <div className="mb-4 flex items-center justify-between rounded-xl border border-rosa-beige/60 bg-rosa-soft-beige/60 px-4 py-3">
                  <p className="font-inter text-sm md:text-base text-rosa-warm-gray">
                    <span className="font-medium">Forfait choisi :</span> {selectedForfait}
                  </p>
                  <button
                    type="button"
                    onClick={clearForfait}
                    className="inline-flex items-center gap-1 text-rosa-warm-gray/70 hover:text-rosa-honey transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span className="text-sm">Retirer</span>
                  </button>
                </div>
              )}

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 font-inter">
                    Merci ! Votre message a été envoyé. Nous vous recontacterons rapidement.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 font-inter">
                    Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                  <div>
                    <label htmlFor="name" className="block text-sm font-inter font-medium text-rosa-warm-gray mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-rosa-beige/50 rounded-xl focus:ring-2 focus:ring-rosa-honey/50 focus:border-rosa-honey transition-colors font-inter min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-inter font-medium text-rosa-warm-gray mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-rosa-beige/50 rounded-xl focus:ring-2 focus:ring-rosa-honey/50 focus:border-rosa-honey transition-colors font-inter min-h-[48px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-medium text-rosa-warm-gray mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-rosa-beige/50 rounded-xl focus:ring-2 focus:ring-rosa-honey/50 focus:border-rosa-honey transition-colors font-inter min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-inter font-medium text-rosa-warm-gray mb-2">
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-rosa-beige/50 rounded-xl focus:ring-2 focus:ring-rosa-honey/50 focus:border-rosa-honey transition-colors font-inter min-h-[48px]"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-inter font-medium text-rosa-warm-gray mb-2">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={todayLocalISO()}
                      className="w-full px-4 py-4 border border-rosa-beige/50 rounded-xl focus:ring-2 focus:ring-rosa-honey/50 focus:border-rosa-honey transition-colors font-inter min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-inter font-medium text-rosa-warm-gray mb-2">
                      Heure souhaitée
                    </label>
                    <input
                      type="time"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-rosa-beige/50 rounded-xl focus:ring-2 focus:ring-rosa-honey/50 focus:border-rosa-honey transition-colors font-inter min-h-[48px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-inter font-medium text-rosa-warm-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Adresse exacte, besoins particuliers, questions…"
                    className="w-full px-4 py-4 border border-rosa-beige/50 rounded-xl focus:ring-2 focus:ring-rosa-honey/50 focus:border-rosa-honey transition-colors font-inter resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-rosa-honey text-white py-4 px-6 rounded-xl font-inter font-medium hover:bg-rosa-light-honey focus:ring-2 focus:ring-rosa-honey/50 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-h-[48px]"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-rosa-warm-gray/60 font-inter text-center">
                  En soumettant ce formulaire, vous acceptez notre{" "}
                  <a href="/privacy" className="text-rosa-honey hover:text-rosa-light-honey">
                    politique de confidentialité
                  </a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
