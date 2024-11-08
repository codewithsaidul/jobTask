/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',             // Path to your HTML file (in the same directory)
    './src/**/*.{html,js}',     // Scans HTML files inside the 'src' folder as well (if needed)
  ],
  theme: {
    extend: {
      backgroundColor: {
        backgroundColor: "linear-gradient(90deg, #F5BD4D 0.36%, #F89222 99.88%)"
      },
      colors: {
        primary: "#F5BD4D",
        seconday: "#F89222"
      },
      fontFamily: {
        dmSans: '"DM Sans", sans-serif'
      }
    },
  },
  plugins: [],
}
