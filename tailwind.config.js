/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-main": "#011627",
        "theme-main-gradient": "#011627D6",
        "accent-color": "#607B96",
        "accent-sub": "#4D5BCE",
        "accent-url": "#E99287",
        "accent-variable": "#43D9AD",
        "accent-underline": "#FEA55F",

        // text color
        "white-gradient-01": "#E5E9F0",
        "gray-gradient-01": "#607B96",
      },
    },
  },
  plugins: [],
};
