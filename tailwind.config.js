/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#ff69b4',
        'soft-pink': '#ffb3d9',
        'rose-gold': '#e8b4a4',
        'cream': '#fff8f0',
        'chocolate-brown': '#8b4513',
        'vanilla-cream': '#faf0e6',
        'golden-yellow': '#ffd700',
        'deep-pink': '#c2185b',
        'charcoal': '#2c2c2c',
        'light-gray': '#f5f5f5',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};