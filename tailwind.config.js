const { default: zIndex } = require("@mui/material/styles/zIndex");

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all relevant files are scanned
  ],
  theme: {
    extend: {
      screens:{
        'xs':"550px",
        'xxs':"450px",
        'xxxs':'350px',
        'xxxxs':'250px',
      },
      colors: {
        textColor: 'var(--textColor)',
        background: 'var(--background)',
        primaryAmber: 'var(--primaryAmber)',
        black: 'var(--black)',
        secondary2: 'var(--secondary2)',
        lightGrey:'var(--lightGrey)',    /* Light grey color */
        background2:'var(--background2)',
        navColor:'var(--navColor)',
        greyColor:'#3C3D37',

        yellow: {
          500: '#e6b904', // Custom yellow color
        },
      },
      height: {
        '15': '3.75rem', // 15 * 0.25rem = 3.75rem (60px)
        '90': '22.5rem', // 90 * 0.25rem = 22.5rem (360px)
      },
      width: {
        '180': '45rem', // 180 * 0.25rem = 45rem (720px)
      },
      transitionDuration: {
        '900': '900ms', // Custom transition duration
      },
      zIndex:{
        '-1':'-1',
        '-10':'-10',

      },
      
      
      keyframes: {
        moveFlag: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '10%': { transform: 'translateY(0)', opacity: '1' },
          '90%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Move by 50% to ensure a continuous loop
        }
      },
      animation: {
        flag: 'moveFlag 3s ease-in-out',
        marquee: 'marquee 20s linear infinite', // Adjust the duration as needed
      },
    },
  },
  plugins: [],

}
