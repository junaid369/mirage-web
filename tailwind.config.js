// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: "52rem", // Custom height class h-128
        120: "36rem", // Custom height class h-120
        140: "36rem", // Custom height class h-140
        160: "38rem", // Custom height class h-160
        "md-800": "700px",
      },
      width: {
        "3.5/6": "18.333333%", // 3.5 / 6 = 0.583333 or 58.3333%
        "2.5/6": "41.67%", // 2.5 / 6 = 41.67%
      },
      colors: {
        check: "rgb(240,240,240)",
        "custom-overlay": "#2513254D", // Custom color with transparency
      },
      borderRadius: {
        '4xl': '2rem', // Example custom size
        '5xl': '3rem', // Example custom size
        '6xl': '4rem', // Example custom size
        '7xl': '6rem', // Example custom size
        '8xl': '8rem', // Example custom size
        '9xl': '10rem', // Example custom size
        '10xl': '12rem', // Example custom size
        '11xl': '14rem', // Example custom size
        '12xl': '14rem', // Example custom size
      },
    },
  },
  variants: {},
  plugins: [],
};

// "homepage": "https://junaid369.github.io/mirage-web",

// "type": "module",
