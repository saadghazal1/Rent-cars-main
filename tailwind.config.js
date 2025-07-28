const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
        leaguespartan: ["Roboto", "sans-serif"]
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'semibold': 600
      },
      colors: {
        darkcolor: "#1E1E20",
        mineyellow: "#F0CC43",
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}