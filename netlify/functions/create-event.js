// netlify/functions/create-event.js

// On importe la librairie client de Google
const { google } = require("googleapis");

// Cette fonction est le point d'entrée de notre API
exports.handler = async function (event, context) {
  // 1. On ne traite que les requêtes POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 2. On récupère les données envoyées par le formulaire React
    const data = JSON.parse(event.body);
    const { name, email, phone, service, message, preferredDate, preferredTime } = data;

    // 3. On prépare l'authentification avec Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"), // Important pour Netlify
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // 4. On combine la date et l'heure pour créer une date de début et de fin
    // On part du principe qu'un rendez-vous dure 1 heure.
    const startDateTime = new Date(`${preferredDate}T${preferredTime}`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // Ajoute 1 heure

    // 5. On crée l'objet de l'événement pour l'agenda
    const eventDetails = {
      summary: `Réservation: ${service} pour ${name}`,
      description: `
        Client: ${name}
        Email: ${email}
        Téléphone: ${phone}
        Service demandé: ${service}
        ---
        Message:
        ${message}
      `,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "Europe/Zurich", // Mettez le bon fuseau horaire
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "Europe/Zurich",
      },
      // On ajoute le client comme participant pour qu'il reçoive une invitation
      attendees: [{ email: email }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 }, // Rappel 24h avant
          { method: "popup", minutes: 60 }, // Rappel 1h avant
        ],
      },
    };

    // 6. On insère l'événement dans l'agenda spécifié
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      resource: eventDetails,
      sendNotifications: true, // Pour envoyer l'invitation au client
    });

    // 7. On renvoie une réponse de succès au formulaire React
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Événement créé avec succès!", event: response.data }),
    };
  } catch (error) {
    console.error("Erreur lors de la création de l'événement:", error);
    // 8. En cas d'erreur, on renvoie une réponse d'erreur
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Erreur interne du serveur." }),
    };
  }
};
