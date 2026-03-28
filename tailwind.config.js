/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A0A0A',
          light: '#1F1F1F',
        },
        accent: {
          emerald: '#10B981',
          gold: '#FBBF24',
        },
        card: '#2B2B2B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
    },
  },
  plugins: [],
};