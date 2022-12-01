/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shuffleSlide: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        animation: {
          shuffleSlide: "shuffleSlide 1s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [],
};
