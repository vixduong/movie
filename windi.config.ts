import { defineConfig } from 'vite-plugin-windicss';
import plugin from 'windicss/plugin';

export default defineConfig({
  darkMode: 'class',
  theme: {
    colors: {
      red: '#FF0E39',
      black: '#000000',
      white: '#D6D6D6',
      gray: '#35353F',
    },
    interFontFeatures: {
      numeric: ['tnum', 'salt', 'ss02']
    },
    fontFamily: {
      //sans: 'ui-sans-serif, system-ui, -apple-system, Montserrat, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    },
    extend: {
      flex: {
        '1/2': '1 1 50%',
        'base-full': '100%',
      },
    }
  },
  plugins: [
    require('tailwindcss-font-inter')(),
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/scroll-snap'),
    plugin(({ addUtilities }) => {
      const utilities = {
        '.with-w': {
          width: 'var(--with-w, auto)',
        },
        '.with-h': {
          height: 'var(--with-h, auto)',
        },
      };

      addUtilities(utilities);
    }),
    plugin(({ addComponents }) => {
      const components = {
      };

      addComponents(components);
    }),
  ],
});