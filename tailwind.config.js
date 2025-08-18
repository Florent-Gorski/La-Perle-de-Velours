/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-perle-honey',
    'bg-perle-ivory',
    'bg-perle-beige',
    'bg-perle-soft-beige',
    'bg-perle-terracotta',
    'text-perle-warm-gray',
    'text-perle-honey',
    'text-perle-olive',
    'text-perle-terracotta',
    'h-16', 'h-20', 'py-2', 'py-4', 'px-4', 'px-6'
  ],
  theme: {
    extend: {
      colors: {
        'perle': {
          'ivory': '#FDFBF7',
          'honey': '#D4AF37',
          'beige': '#F0EDE6',
          'warm-gray': '#2C2C2C',
          'light-honey': '#E6C547',
          'soft-beige': '#F7F4ED',
          'olive': '#8A8F6A',
          'terracotta': '#C97A5A',
          'sand': '#E9E1D9'
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
          '0%': { boxShadow: '0 0 5px rgba(201, 166, 107, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(201, 166, 107, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
