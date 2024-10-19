/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      roboto:["Roboto", "sans-serif"],
      martel:["Martel", "serif"],
      inter:["Inter", "sans-serif"],
      montserrat:["Montserrat", "sans-serif"],
      jakarta:["Plus Jakarta Sans", "sans-serif"],
      dmSans:["DM Sans", "sans-serif"]
    }
    },
  },
  plugins: [],
}