/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'radial': "radial-gradient(circle, #0066ff, #12244C)"
      }
    },
  },
  important: true,
  plugins: [],
}