/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1290px",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        defaultEllipsis: "#BBC0FF",
        blue: "hsl(246, 80%, 60%)",
        workLightRed: "hsl(15, 100%, 70%)",
        playSoftBlue: "hsl(195, 74%, 62%)",
        studyLightRed: "hsl(348, 100%, 68%)",
        exerciseLimeGreen: "hsl(145, 58%, 55%)",
        socialViolet: "hsl(264, 64%, 52%)",
        selfCareSoftOrange: "hsl(43, 84%, 65%)",
        veryDarkBlue: "hsl(226, 43%, 10%)",
        darkBlue: "hsl(235, 46%, 20%)",
        desaturatedBlue: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
