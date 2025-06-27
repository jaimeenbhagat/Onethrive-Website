/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'hero': '4rem', // or 5rem for huge hero headings
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      fontFamily: {
        interphase: ['"TT Interphases"', 'sans-serif'],
      },
      colors: {
        neonGreen: "#00FFAB",
        mintGlow: 'rgba(0, 255, 171, 0.15)',
        mintGlowStrong: 'rgba(0, 255, 171, 0.25)',
      },
      keyframes: {
        moveStars: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-50%, -50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        moveStars: "moveStars 100s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: {tailwindcss: {},
    autoprefixer: {},},
};
