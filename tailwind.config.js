const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        '.btn-blue': {
          margin: '.2rem',
          padding: '.2rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-gray': {
          margin: '.2rem',
          borderRadius: '.25rem',
          padding: '.2rem 1rem',
          color: '#4a5568',
          backgroundColor: '#a0aec0',
          '&:hover': {
            backgroundColor: '#1a202c'
          },
        },
        '.btn-red': {
          margin: '.2rem',
          borderRadius: '.25rem',
          padding: '.2rem 1rem',
          color: '#fff',
          backgroundColor: '#e53e3e',
          '&:hover': {
            backgroundColor: '#9b2c2c',
          },
        },
      }

      addComponents(buttons)
    })
  ],
}
