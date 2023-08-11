/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, jsx}"],
  theme: {
    extend: {
      colors: {
        'dark': '#293264',
        'gray': '#D6DBF5',
        'lightGray': '#F5F7FB',
        'light': '#DBDEF0',
        'red': '#F8BCBC',
        'green': '#94D7A2',
        'blue': '#4D5B9E',
      },
      margin: {
        '5': '5px',
        '7': '7px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '40': '40px',
      },
      padding: {
        '5': '5px',
        '7': '7px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '40': '40px',
      },
      fontSize: {
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '30': '30px',
      },
      width: {
        '65': '65px',
        '120': '120px',
        '200': '200px',
        '400': '400px',
        '500': '500px',
        'fvw': '100vw',
      },
      height: {
        'fvh': '100vh',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}

