import React, { useState } from 'react';

// AMÉLIORATION : Helper function pour obtenir la date d'aujourd'hui au format YYYY-MM-DD
// Cela empêchera les utilisateurs de sélectionner une date passée dans le calendrier.
const getTodaysDate = () =>
{
  const today = new Date();
  // Ajuste pour le fuseau horaire local pour que la date soit correcte
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  return today.toISOString().split('T')[0];
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '2rem auto',
    gap: '1rem',
  },
  label: {
    fontWeight: 500,
    fontSize: '0.9rem',
    color: '#574131' // Une couleur qui s'accorde avec votre thème
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#AD8B73',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
  },
  statusMessage: {
    textAlign: 'center',
    marginTop: '1rem',
    fontWeight: 500,
  }
} as const;


export function BookingForm()
{
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>
  {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ message: '', type: '' });

    const formData = new FormData(event.currentTarget);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzBtdtm2sJU3KZB3Hiqivz12xEpjO2VOQR6EwaH480ZTOsJE8T7tFpgL1f4XWKcGL4Avg/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('La réponse du serveur n\'est pas valide.');
      }

      const data = await response.json();

      if (data.result === 'success') {
        setStatus({ message: 'Merci ! Votre demande a bien été envoyée.', type: 'success' });
        (event.target as HTMLFormElement).reset();

        // AMÉLIORATION : Le message de succès disparaît après 6 secondes.
        setTimeout(() =>
        {
          setStatus({ message: '', type: '' });
        }, 6000);

      } else {
        throw new Error(data.message || 'Une erreur est survenue lors du traitement.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setStatus({ message: `Erreur : ${error.message}`, type: 'error' });
      } else {
        setStatus({ message: 'Une erreur inconnue est survenue.', type: 'error' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} name="booking-form">
      <div>
        <label htmlFor="nom" style={styles.label}>Nom complet *</label>
        <input type="text" id="nom" name="nom" required style={styles.input} />
      </div>
      <div>
        <label htmlFor="email" style={styles.label}>Email *</label>
        <input type="email" id="email" name="email" required style={styles.input} />
      </div>
      <div>
        {/* AMÉLIORATION : Ajout du label pour l'accessibilité */}
        <label htmlFor="date" style={styles.label}>Date souhaitée *</label>
        {/* AMÉLIORATION : Ajout de min={getTodaysDate()} */}
        <input type="date" id="date" name="date" required style={styles.input} min={getTodaysDate()} />
      </div>
      <div>
        {/* AMÉLIORATION : Ajout du label pour l'accessibilité */}
        <label htmlFor="heure" style={styles.label}>Heure souhaitée *</label>
        <input type="time" id="heure" name="heure" required style={styles.input} />
      </div>
      <div>
        <label htmlFor="message" style={styles.label}>Message (adresse, soin désiré...)</label>
        <textarea id="message" name="message" rows={4}
          style={{ ...styles.input, minHeight: '100px' }}></textarea>
      </div>

      <button type="submit" disabled={isLoading} style={{ ...styles.button, opacity: isLoading ? 0.7 : 1 }}>
        {isLoading ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>

      {status.message && (
        <p style={{ ...styles.statusMessage, color: status.type === 'success' ? '#16a34a' : '#dc2626' }}>
          {status.message}
        </p>
      )}
    </form>
  );
}