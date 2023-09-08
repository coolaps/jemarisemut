/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'biru': {
        100: '#C2ECF9',
        200: '#47c1e7'
      },
      'merah': {
        100: '#FFDEDA',
        200: '#FF9283'
      },
      'hijau': {
        100: '#F2F7E3',
        200: '#B9DD53'
      },
      'ungu': {
        100: '#ECE3FA',
        200: '#BFA2EF'
      },
      'def': {
        100: '#E0F1F5'
      },
      ...colors,
    },
  },
  plugins: [],
}
