/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#639cd9',
        secondary: '#64748b',
        dark: '#0f172a'

      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

