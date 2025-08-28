import React, { useState } from "react";

// Helper pour la date min (pas de date passée)
const getTodaysDate = () =>
{
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  return today.toISOString().split("T")[0];
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    margin: "2rem auto",
    gap: "1rem",
  },
  label: {
    fontWeight: 500,
    fontSize: "0.9rem",
    color: "#574131",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#AD8B73",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
  },
  statusMessage: {
    textAlign: "center",
    marginTop: "1rem",
    fontWeight: 500,
  },
} as const;

export function BookingForm()
{
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: "success" | "error" | "" }>({
    message: "",
    type: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>
  {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ message: "", type: "" });

    const formData = new FormData(event.currentTarget);
    const scriptURL = (import.meta.env.VITE_GAS_URL ?? "").trim();

    if (!scriptURL) {
      setStatus({
        message: "Erreur : aucune URL configurée (VITE_GAS_URL manquant).",
        type: "error",
      });
      setIsLoading(false);
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // indispensable pour Apps Script
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // On suppose succès si pas d’erreur réseau
      setStatus({ message: "Merci ! Votre demande a bien été envoyée.", type: "success" });
      (event.target as HTMLFormElement).reset();

      setTimeout(() =>
      {
        setStatus({ message: "", type: "" });
      }, 6000);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          setStatus({ message: "La requête a pris trop de temps. Réessayez.", type: "error" });
        } else {
          setStatus({ message: `Erreur : ${error.message}`, type: "error" });
        }
      } else {
        setStatus({ message: "Erreur inconnue.", type: "error" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} name="booking-form">
      <div>
        <label htmlFor="nom" style={styles.label}>
          Nom complet *
        </label>
        <input type="text" id="nom" name="nom" required style={styles.input} />
      </div>
      <div>
        <label htmlFor="email" style={styles.label}>
          Email *
        </label>
        <input type="email" id="email" name="email" required style={styles.input} />
      </div>
      <div>
        <label htmlFor="date" style={styles.label}>
          Date souhaitée *
        </label>
        <input type="date" id="date" name="date" required style={styles.input} min={getTodaysDate()} />
      </div>
      <div>
        <label htmlFor="heure" style={styles.label}>
          Heure souhaitée *
        </label>
        <input type="time" id="heure" name="heure" required style={styles.input} />
      </div>
      <div>
        <label htmlFor="message" style={styles.label}>
          Message (adresse, soin désiré...)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          style={{ ...styles.input, minHeight: "100px" }}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        style={{ ...styles.button, opacity: isLoading ? 0.7 : 1 }}
      >
        {isLoading ? "Envoi en cours..." : "Envoyer la demande"}
      </button>

      {status.message && (
        <p
          style={{
            ...styles.statusMessage,
            color: status.type === "success" ? "#16a34a" : "#dc2626",
          }}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
