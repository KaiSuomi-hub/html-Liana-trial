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
    screens: {
          'md': '1028px',
      // => @media (min-width: 768px) { ... }

            'lg': '1400px',
      // => @media (min-width: 1440px) { ... }
    },'xl': '2556px',
    // => @media (min-width: 2556px) { ... }
    extend: {
      colors: {
        liana: "#4c8930",
        textcolor: "#373a3c",
        bordercolor: "#dddddd"
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
