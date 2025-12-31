/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0E125",
        secondary: "#267091",
      },
        fontFamily: {
          quantico: ["Quantico", "sans-serif"],
          quicksand: ["Quicksand", "sans-serif"],
        },
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar" : {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }
      };
      addUtilities(newUtilities);
    }
  ],
}
