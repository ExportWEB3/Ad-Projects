/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        zIndex5: "5",
      },
      width: {
        w95: "95%",
        w90: "90%",
        w40: "40%",
        w35: "35%",
      },
      height: {
        h95: "95%",
        h90: "90%",
        h85: "85%",
      },
      screens: {
        xsm: "320px",
      },
    },
  },
  plugins: [],
};
