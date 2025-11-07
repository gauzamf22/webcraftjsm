/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'javasoul': ['JavaSoul', 'sans-serif'],
      },
    },
  },
  plugins: [],
}