/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#D7D7D7",
        red: "#B92626",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "royal-red": "#B92626",
        "pale-red": "#EB8383",
        "light-red": "#FFF6F6",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
    },
    darkMode: "class",
  },
  plugins: [],
};