/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-perle-honey','bg-perle-ivory','bg-perle-beige','bg-perle-soft-beige',
    'bg-perle-terracotta','text-perle-warm-gray','text-perle-honey','text-perle-olive',
    'text-perle-terracotta','h-16','h-20','py-2','py-4','px-4','px-6'
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
        },
        'rosa': {
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
    },
  },
  plugins: [],
};
