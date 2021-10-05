export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ad system on Nuxt.JS - Welcome!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'You can add any Ads you want' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  serverMiddleware: [
    { path: '/api', handler: '~/api/index.ts' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  router: {
    middleware: ['auth']
  },

  auth: {
    redirect: {
      login: '/signin',
      logout: '/',
      callback: '/signin',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' }
        }
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: "/favicon.ico"
    },
    manifest: {
      lang: "en",
      background_color: "#fafafa",
	    theme_color: "#005dac",
      name: "Habarlau",
      short_name: "Habarlau",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/icon.png",
          type: "image/png",
          sizes: "512x512"
        }
      ]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
