/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          'light': '#eae2b7',
          'primary': '#fcf300',
          'secondary': '#ffd60a',
          'muted': '#f4d58d',
        },
        black: {
          'dark': '#202020',
          'primary': '#003049',
          'muted': '#2b2d42',
          'darkened': '#03BFF8',
          'darker': '#568C83',
          'newdark': '#101214',
          'neutral': '#282E33',
          
        },
        grey: {
          'light': '#F5F5F5',
          'thin': '#F2F2F2' ,
          'accent':'#4A6F94',
          //, For borders or light backgrounds
        },
        red:{
          'darker': '#B75252',
          'thin': '#E3C3C4'
        },
        green:{
          'lightened':'#52B788',
          'thin': '#C3E3D3',
          'dark': '#00B140',
          'darkened': '#008C2D'

        },
        brown:{
          'light': '#E3D8C3',
          'deep' : '#C4AE7E',
          'dirty' : '#94814A',
        },

        blue:{
          'light': '#C3DAE3',

        }
      },
    },
  },
  plugins: [],
}
