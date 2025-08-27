import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () =>
{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Manucure',
    'Pédicure',
    'Soin du visage',
    'Massage',
    'Forfait beauté',
    'Prestation entreprise',
    'Autre'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) =>
  {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) =>
  {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-rosa-ivory">
      {/* Hero (image locale, centré) */}
      <section
        className="relative py-12 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/contact.jpg)', backgroundPosition: 'center center' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4 md:mb-6">
            Réserver Votre Service Beauté
          </h1>
          <p className="text-base md:text-xl text-white/95 max-w-3xl mx-auto px-4">
            Manucure, esthétique, massage à domicile — Lausanne & Canton de Vaud. Réponse rapide par téléphone .
          </p>
        </div>
      </section>

      {/* Infos + Formulaire */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Infos */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray mb-4 flex items-center gap-3">
                <Phone className="w-5 h-5 text-rosa-honey" />
                Téléphone
              </h2>
              <p className="font-inter text-rosa-warm-gray/80">
                <a href="tel:+41790000000" className="text-rosa-honey hover:underline">+41 79 000 00 00</a>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray mb-4 flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp
              </h2>
              <p className="font-inter text-rosa-warm-gray/80">
                <a
                  href="https://wa.me/41790000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rosa-honey hover:underline"
                >
                  Démarrer une discussion
                </a>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray mb-4 flex items-center gap-3">
                <Mail className="w-5 h-5 text-rosa-honey" />
                Email
              </h2>
              <p className="font-inter text-rosa-warm-gray/80">
                <a href="mailto:laperledevelours@gmail.com" className="text-rosa-honey hover:underline">
                  laperledevelours@gmail.com
                </a>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray mb-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-rosa-honey" />
                Zone
              </h2>
              <p className="font-inter text-rosa-warm-gray/80">
                Lausanne & canton de Vaud
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray mb-4 flex items-center gap-3">
                <Clock className="w-5 h-5 text-rosa-honey" />
                Horaires
              </h2>
              <p className="font-inter text-rosa-warm-gray/80">
                Lun–Ven : 09:00–19:00 · Sam : 10:00–17:00
              </p>
            </div>
          </aside>

          {/* Formulaire */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-playfair font-bold text-rosa-warm-gray mb-6 flex items-center gap-3">
              <Send className="w-5 h-5 text-rosa-honey" />
              Demande de réservation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="font-inter text-sm text-rosa-warm-gray">Nom et prénom</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="rounded-xl border border-rosa-beige/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rosa-honey/40"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-inter text-sm text-rosa-warm-gray">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="rounded-xl border border-rosa-beige/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rosa-honey/40"
                  />
                </label>

                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="font-inter text-sm text-rosa-warm-gray">Téléphone</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-xl border border-rosa-beige/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rosa-honey/40"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="font-inter text-sm text-rosa-warm-gray">Service souhaité</span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="rounded-xl border border-rosa-beige/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rosa-honey/40"
                  >
                    <option value="">— Choisir —</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="font-inter text-sm text-rosa-warm-gray">Date souhaitée</span>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="rounded-xl border border-rosa-beige/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rosa-honey/40"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-inter text-sm text-rosa-warm-gray">Heure</span>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="rounded-xl border border-rosa-beige/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rosa-honey/40"
                    />
                  </label>
                </div>
              </div>

              <label className="flex flex-col gap-2">
                <span className="font-inter text-sm text-rosa-warm-gray">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="rounded-xl border border-rosa-beige/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rosa-honey/40"
                />
              </label>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-rosa-honey text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-rosa-light-honey transition-colors min-h-[44px] disabled:opacity-60"
                >
                  {isSubmitting ? 'Envoi…' : 'Envoyer la demande'}
                </button>

                {submitStatus === 'success' && (
                  <span className="text-green-600 font-inter">Merci ! Nous vous répondons au plus vite.</span>
                )}
                {submitStatus === 'error' && (
                  <span className="text-red-600 font-inter">Oups, une erreur est survenue. Réessaye.</span>
                )}
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
