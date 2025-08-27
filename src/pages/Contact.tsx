import { useState } from "react";

export default function Contact()
{
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simule l’envoi
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Demande envoyée avec succès !");
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue, merci de réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-rosa-ivory pb-28">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-playfair font-bold text-center text-perle-night mb-10">
          Demande de réservation
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom et prénom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-perle-night mb-2"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                className="w-full border border-rosa-honey/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rosa-honey focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="prenom"
                className="block text-sm font-medium text-perle-night mb-2"
              >
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                required
                className="w-full border border-rosa-honey/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rosa-honey focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-perle-night mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-rosa-honey/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rosa-honey focus:outline-none"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-perle-night mb-2"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className="w-full border border-rosa-honey/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rosa-honey focus:outline-none"
            />
          </div>

          {/* Date de réservation */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-perle-night mb-2"
            >
              Date souhaitée
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="w-full border border-rosa-honey/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rosa-honey focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-perle-night mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border border-rosa-honey/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rosa-honey focus:outline-none"
            ></textarea>
          </div>

          {/* Bouton d’envoi */}
          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-rosa-honey text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-rosa-light-honey transition-colors min-h-[44px] disabled:opacity-60"
            >
              {isSubmitting ? "Envoi…" : "Envoyer la demande"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
