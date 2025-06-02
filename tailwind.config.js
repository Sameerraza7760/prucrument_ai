/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add more paths if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#93C5FD",
          dark: "#60A5FA",
        }, // <== FLAT string value
      },
    },
  },
  plugins: [],
};
