/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.tsx'
  ],
  darkMode: 'class',  //"media" or "class"
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
