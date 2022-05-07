module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: { preflight: false },

  theme: {
    fontSize: {
      sm: ['14px'],
      base: ['16px'],
      lg: ['20px'],
      xl: ['24px'],
    },
    extend: {
      colors: {
        liana: "#4c8930",
      },
    },
  },
  plugins: [
    require('tailwindcss-typography'),
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
