/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Ini penting agar Tailwind membaca file App.jsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}