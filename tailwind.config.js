/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lp: {
          dark: '#0A4A2E',
          medium: '#15803D',
          light: '#22C55E',
          soft: '#12251D',
          border: '#1E3B2F',
        },
        surface: {
          base: '#000000',
          card: '#060A08',
          hover: '#0D1712',
          border: '#16281E',
          dark: '#000000',
          darkCard: '#040706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(13, 92, 59, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'premium-hover': '0 12px 30px -4px rgba(13, 92, 59, 0.15), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
        'stripe': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
