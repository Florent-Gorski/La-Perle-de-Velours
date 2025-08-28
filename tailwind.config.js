/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'perle': {
          // --- NOUVELLE PALETTE DE COULEURS ---
          'ivory': '#F9F6F2',          // Un blanc cassé très clair et doux pour les fonds principaux
          'honey': '#B99286',          // La couleur principale, un bois de rose / terre cuite doux
          'beige': '#EAE2D9',          // Un beige doux pour les fonds secondaires
          'warm-gray': '#4E403B',      // Un marron foncé pour le texte, plus doux que le noir
          'light-honey': '#D1B3A9',    // Une version plus claire de la couleur principale pour les survols (hover)
          'soft-beige': '#F2ECE6',     // Un beige très subtil, proche du fond principal
          'olive': '#A0968C',          // Un gris-vert désaturé pour les accents secondaires
          'terracotta': '#C97A5A',     // Conservé pour d'éventuels accents plus vifs
          'sand': '#E9E1D9'           // Conservé pour les nuances de fond
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'script': ['Dancing Script', 'cursive'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
        'slide-in': 'slideIn 0.7s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(185, 146, 134, 0.3)' }, // Mise à jour de la couleur du halo
          '100%': { boxShadow: '0 0 20px rgba(185, 146, 134, 0.6)' }, // Mise à jour de la couleur du halo
        },
      },
    },
  },
  plugins: [],
};