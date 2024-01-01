// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // content: ["./src/**/*.{html,jsx}"],
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   theme: {
//     screens: {
//       sm: "640px", // Small screens and up (default)
//       md: "768px", // Medium screens and up
//       lg: "1024px", // Large screens and up
//       xl: "1280px", // Extra large screens and up
//       // Add more breakpoints as needed
//     },
//     // Other theme configurations...
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*/.{js,jsx}", ".src/index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
