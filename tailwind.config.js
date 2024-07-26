
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
        "2.5/6": "41.67%", // 2.5 / 6 = 41.67%
      },
      colors: {
        check: "rgb(240,240,240)",
        "custom-overlay": "#2513254D", // Custom color with transparency
      },
    },
  },
  variants: {},
  plugins: [],
};
