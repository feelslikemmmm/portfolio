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
      backgroundImage: {},
    },
  },
  plugins: [],
};
