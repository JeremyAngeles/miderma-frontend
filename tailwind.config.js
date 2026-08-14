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
          pink: '#F2BDC7',    // El rosado tipo piel
          dark: '#291840',    // El morado oscuro
          purple: '#615573',  // El plomo/morado
          gray: '#9A92A6',    // El gris clarito
          light: '#F2F2F2'    // El blanco/hueso del fondo
        }
      }
    },
  },
  plugins: [],
}