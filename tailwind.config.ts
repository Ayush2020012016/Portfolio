const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
      RedHat: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
      Roboto: ['Roboto', ...defaultTheme.fontFamily.sans]

    }},
  },
  plugins: [],
}