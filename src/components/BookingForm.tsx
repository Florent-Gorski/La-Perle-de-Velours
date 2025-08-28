import React, { useState } from 'react';

// Un peu de style basique pour le formulaire. Vous pouvez mettre ça dans votre fichier CSS.
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '2rem auto',
    gap: '1rem',
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
    backgroundColor: '#AD8B73', // Une couleur qui pourrait aller avec "La Perle de Velours"
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  statusMessage: {
    textAlign: 'center',
    marginTop: '1rem',
    fontWeight: 500,
  }
} as const; // CHANGEMENT 2: Ajout de "as const" pour rendre les types de style stricts et compatibles avec React.


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

    // IMPORTANT: Remplacez cette URL par l'URL de VOTRE Web App Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyn37K2nyTbCmUyf2rhmhjmKfAP3VggGs_EP9PDb9WBN-m5uQBk2Hm8Lp4qBv3bu2xWjg/exec';

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
      } else {
        throw new Error(data.message || 'Une erreur est survenue lors du traitement.');
      }
    } catch (error) { // CHANGEMENT 1: On retire ": any"
      // On vérifie que l'erreur est bien un objet de type Error avant d'accéder à .message
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
      <input type="text" name="nom" placeholder="Votre nom complet" required style={styles.input} />
      <input type="email" name="email" placeholder="Votre adresse email" required style={styles.input} />
      <input type="date" name="date" required style={styles.input} aria-label="Date souhaitée" />
      <input type="time" name="heure" required style={styles.input} aria-label="Heure souhaitée" />
      <textarea name="message" placeholder="Un message ? (Précisez le lieu du RDV, le soin désiré...)" style={{ ...styles.input, minHeight: '100px' }}></textarea>

      <button type="submit" disabled={isLoading} style={styles.button}>
        {isLoading ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>

      {status.message && (
        <p style={{ ...styles.statusMessage, color: status.type === 'success' ? 'green' : 'red' }}>
          {status.message}
        </p>
      )}
    </form>
  );
}