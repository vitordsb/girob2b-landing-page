/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a192f',
          blue: '#112240',
          lightBlue: '#233554',
          accent: '#12c768',
          cyan: '#64ffda',
        },
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #0b1f16 0%, #103323 50%, #12402a 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0cd46a 0%, #089e55 100%)',
      },
    },
  },
  plugins: [],
}
