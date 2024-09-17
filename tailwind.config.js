/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        darkPurple: '#2E073F',
        justPurple: '#7A1CAC',
        brightPurple: '#AD49E1',
        lightPurple: '#EBD3F8',
        ivory: '#F8F1F1'
      },
      fontFamily: {
        Publicsans: ['Public sans'],
        SUSE: ['SUSE'],
        Mont: ['Montserrat']
      }

    },
  },
  plugins: [],
}