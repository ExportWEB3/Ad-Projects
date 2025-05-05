/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        zIndex5: "5",
      },
      screens: {
        xsm: "320px",
      },
    },
  },
  plugins: [],
};
