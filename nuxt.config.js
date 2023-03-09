import Prismic from '@prismicio/client'

import sm from './sm.json'

export default async () => {
  const client = await Prismic.getApi(sm.apiEndpoint)
  const locales = client.languages.map(lang => lang.id)
  const defaultLocale = locales[0]

  return {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Prismic + Nuxt i18n example',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Prismic + Nuxt i18n example'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      script: [

    ]

    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxt/postcss8'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxtjs/i18n',
      /* Load Prismic module after i18n module to prevent extend route concurrency */ '@nuxtjs/prismic'
    ],

    build: {
      // See: https://github.com/nuxt/postcss8/issues/24
      loaders: {
        css: {
          modules: false
        }
      },
      postcss: {
        plugins: {
          autoprefixer: {}
        }
      },
      transpile: ['@prismicio/vue']
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/styles/global.css',
      '@/styles/style.scss',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    publicRuntimeConfig: {
      development: process.env.NODE_ENV === 'development'
    },

    i18n: {
      locales,
      defaultLocale
    },

    prismic: {
      endpoint: sm.apiEndpoint,
      modern: true,
      linkResolver: (doc) => {
       const prefix = doc.lang === 'ca' ? '' : `/${doc.lang}`
      // const prefix = doc.lang === 'ca' ? '' : (doc.lang === 'es-es' ? 'es' : `/${doc.lang}`)


        switch (doc.type) {
          case 'page':
            return doc.uid === 'home' ? prefix || '/' : `${prefix}/${doc.uid}`
          default:
            return prefix || '/'
        }
      }
      
    }
  }
}
