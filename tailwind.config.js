/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fff',
        black: '#000',
        black2: '#222',
      },
      margin: {
        auto: '0 auto',
      },
      fontFamily: {
        instrument: ['Instrument Serif', 'serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      flex: {
        auto: '1 1 auto',
      },
      keyframes: {
        textLoop: {
          '0%': { transform: `translate3d(0,0,0)` },
          '100%': { transform: `translate3d(-100%,0,0)` },
        },
      },
      animation: {
        text1: 'textLoop 30s linear infinite',
        text2: 'textLoop 60s linear infinite',
        text3: 'textLoop 20s linear infinite',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
