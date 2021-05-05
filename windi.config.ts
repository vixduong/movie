import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  theme: {
    colors: {
      red: '#FF0E39',
      black: '#000000',
      white: '#D6D6D6',
      gray: '#35353F',
    },
    interFontFeatures: {
      numeric: ['tnum', 'salt', 'ss02'],
    },
    extend: {
      flex: {
        '1/2': '1 1 50%',
        'base-full': '100%',
      },
    },
  },
  plugins: [
    require('tailwindcss-font-inter')({
      importFontFace: false,
    }),
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/scroll-snap'),
  ],
})
