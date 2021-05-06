import * as path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
// import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
      importMode: 'async',
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      customLoaderMatcher: id => id.endsWith('.md'),

      // auto import icons
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        // ViteIconsResolver({
        //   componentPrefix: '',
        //   // enabledCollections: ['carbon']
        // }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    // ViteIcons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: 'Movie',
        theme_color: '#ffffff',
        icons: [],
        name: 'Weather: Do I need an umbrella?',
        description: 'The Movie Database (TMDb) is a popular, user editable database for movies and TV shows.',
      },
      base: '/',
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ],
  },
})
