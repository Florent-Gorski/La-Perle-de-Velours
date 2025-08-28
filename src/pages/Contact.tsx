import React, { useEffect, useState } from "react";
// Les icônes sont déclarées ici...
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

// La fonction est déclarée ici...
function todayLocalISO(): string
{
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split('T')[0];
}

const countryCodes = [
  { value: "+41", label: "🇨🇭 +41" },
  { value: "+33", label: "🇫🇷 +33" },
  { value: "+49", label: "🇩🇪 +49" },
  { value: "+39", label: "🇮🇹 +39" },
  { value: "+32", label: "🇧🇪 +32" },
  { value: "+44", label: "🇬🇧 +44" },
];

const Contact: React.FC = () =>
{
  // selectedForfait est bien utilisé dans useEffect
  const [selectedForfait, setSelectedForfait] = useState<string>("");
  // isSubmitting et submitStatus sont déclarés ici...
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+41",
    phone: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  // La variable services est déclarée ici...
  const services = [
    "Manucure", "Pédicure", "Soin du visage", "Massage", "Forfait Beauté",
    "Forfait Détente", "Forfait Premium", "Prestation entreprise", "Autre",
  ];

  useEffect(() =>
  {
    // Note: location.state n'est pas dans votre code original, je le retire pour éviter des erreurs.
    // Si vous l'utilisez avec useNavigate, il faudra l'ajouter.
    if (!selectedForfait) return;
    setFormData((prev) =>
    {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
  {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) =>
  {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const fullPhoneNumber = `${formData.phoneCode} ${formData.phone}`;
      console.log("Données envoyées:", { ...formData, phone: fullPhoneNumber });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");

      setFormData({ name: "", email: "", phoneCode: "+41", phone: "", service: "", message: "", preferredDate: "", preferredTime: "" });
      setSelectedForfait("");

    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-perle-ivory">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/contact.jpg)', backgroundPosition: 'center 30%' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Contact & Réservation
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Réservez votre moment de bien-être ou contactez-nous pour toute question. Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12">
            {/* Contact Info Column */}
            <div className="lg:col-span-2 mb-12 lg:mb-0">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-perle-warm-gray mb-6">
                Informations
              </h2>
              <div className="space-y-6">
                {/* ... ET LES ICÔNES SONT UTILISÉES ICI */}
                {[
                  { icon: <Phone className="w-6 h-6 text-perle-honey" />, title: "Téléphone", value: "+41 12 345 67 89", href: "tel:+41123456789", desc: "Lun–Sam 8h–20h" },
                  { icon: <MessageCircle className="w-6 h-6 text-perle-honey" />, title: "WhatsApp", value: "+41 12 345 67 89", href: "https://wa.me/41123456789", desc: "Réponse rapide" },
                  { icon: <Mail className="w-6 h-6 text-perle-honey" />, title: "Email", value: "laperledevelours@gmail.com", href: "mailto:laperledevelours@gmail.com", desc: "Réponse sous 24h" },
                  { icon: <MapPin className="w-6 h-6 text-perle-honey" />, title: "Zone d'intervention", value: "Lausanne & Canton de Vaud", desc: "Directement chez vous" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-inter font-semibold text-perle-warm-gray">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-perle-warm-gray/80 hover:text-perle-honey transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-perle-warm-gray/80">{item.value}</p>
                      )}
                      <p className="text-sm text-perle-warm-gray/60 font-inter">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-perle-warm-gray mb-6">Demande de Réservation</h2>

                {/* ... ET 'submitStatus' EST UTILISÉ ICI */}
                {submitStatus === "success" && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"><p className="text-green-800 font-inter">Merci ! Votre message a été envoyé. Nous vous recontacterons rapidement.</p></div>}
                {submitStatus === "error" && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"><p className="text-red-800 font-inter">Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.</p></div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-inter font-medium text-perle-warm-gray mb-2">Nom complet *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-perle-beige/50 rounded-xl focus:ring-2 focus:ring-perle-honey/50 focus:border-perle-honey transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-inter font-medium text-perle-warm-gray mb-2">Téléphone *</label>
                      <div className="flex">
                        <select name="phoneCode" value={formData.phoneCode} onChange={handleInputChange} className="px-3 py-3 border border-r-0 border-perle-beige/50 rounded-l-xl bg-gray-50 focus:ring-2 focus:ring-perle-honey/50 focus:border-perle-honey transition-colors" aria-label="Indicatif téléphonique">
                          {countryCodes.map(code => (<option key={code.value} value={code.value}>{code.label}</option>))}
                        </select>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="79 123 45 67" className="w-full px-4 py-3 border border-perle-beige/50 rounded-r-xl focus:ring-2 focus:ring-perle-honey/50 focus:border-perle-honey transition-colors" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-inter font-medium text-perle-warm-gray mb-2">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-perle-beige/50 rounded-xl focus:ring-2 focus:ring-perle-honey/50 focus:border-perle-honey transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-inter font-medium text-perle-warm-gray mb-2">Service souhaité *</label>
                    {/* ... ET LA LISTE 'services' EST UTILISÉE ICI */}
                    <select id="service" name="service" value={formData.service} onChange={handleInputChange} required className="w-full px-4 py-3 border border-perle-beige/50 rounded-xl focus:ring-2 focus:ring-perle-honey/50 focus:border-perle-honey transition-colors">
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, idx) => (<option key={idx} value={service}>{service}</option>))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-inter font-medium text-perle-warm-gray mb-2">Date souhaitée</label>
                      {/* ... ET 'todayLocalISO' EST UTILISÉE ICI */}
                      <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} min={todayLocalISO()} className="w-full px-4 py-3 border border-perle-beige/50 rounded-xl focus:ring-2 focus:ring-perle-honey/50 focus:border-perle-honey transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-inter font-medium text-perle-warm-gray mb-2">Heure souhaitée</label>
                      <input type="time" id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} className="w-full px-4 py-3 border border-perle-beige/50 rounded-xl focus:ring-2 focus:ring-perle-honey/50 focus:border-perle-honey transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-inter font-medium text-perle-warm-gray mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Adresse exacte, besoins particuliers, questions…" className="w-full px-4 py-3 border border-perle-beige/50 rounded-xl focus:ring-2 focus:ring-perle-honey/50 focus:border-perle-honey transition-colors resize-y" />
                  </div>
                  {/* ... ET 'isSubmitting' EST UTILISÉ ICI */}
                  <button type="submit" disabled={isSubmitting} className="w-full bg-perle-honey text-white py-3 px-6 rounded-xl font-inter font-medium hover:bg-perle-light-honey focus:outline-none focus:ring-2 focus:ring-perle-honey/50 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                    {isSubmitting ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" /> : <><Send className="w-4 h-4" /><span>Envoyer la demande</span></>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;