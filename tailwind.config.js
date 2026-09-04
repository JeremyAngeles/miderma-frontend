/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        miderma: {
          pink: '#F2BDC7',
          dark: '#291840',
          purple: '#615573',
          gray: '#9A92A6',
          light: '#F2F2F2'
        }
      },
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}