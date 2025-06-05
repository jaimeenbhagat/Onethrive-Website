// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-x': 'scrollX 30s linear infinite',
      },
    },
  },
};
