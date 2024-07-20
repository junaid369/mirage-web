// /** @type {import('tailwindcss').Config} */
// export default {
//   // content: [],
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       height: {
//         128: "52rem", // Example: Adding h-128
//         120: "36rem", // Example: Adding h-144
//         140: "36rem", // Example: Adding h-144
//         160: "38rem", // Example: Adding h-144
//         // Add more custom sizes as needed
//       },
//       colors: {
//         check: "rgb(240,240,240)",
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: "52rem", // Custom height class h-128
        120: "36rem", // Custom height class h-120
        140: "36rem", // Custom height class h-140
        160: "38rem", // Custom height class h-160
      },
      width: {
        "3.5/6": "18.333333%", // 3.5 / 6 = 0.583333 or 58.3333%
        '2.5/6': '41.67%', // 2.5 / 6 = 41.67%
      },
      colors: {
        check: "rgb(240,240,240)",
      },
    },
  },
  variants: {},
  plugins: [],
};
