/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ["font-family: 'Urbanist', sans-serif"]
      },
      colors:{
        'mainColor': "#930000"
      }
    },
  }, daisyui: {
    themes: [
      "light",
      "dark",]},
  plugins: [require("daisyui")],
}