const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: { 
      content: {
        'buildImage': "url('./src/Components/images/build_momentum.jpg')",
      },
      colors: {
        black3:"rgb(59, 53, 53)",
        black2:"rgb(31, 30, 30)",
        red1:"rgb(255, 224, 224)"
      },
      boxShadow: {
        'fixedShadow': "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      },

      fontFamily: {
      RedHat: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
      Roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      Inter: ['Inter', ...defaultTheme.fontFamily.sans]

    }
    ,
  },
  },
  plugins: [],
}