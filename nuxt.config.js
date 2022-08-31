export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OtherPlane Labs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#0094a8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: 'OtherPlane Labs',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Building products and apps for the Witnet ecosystem',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'OtherPlane Labs',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Building products and apps for the Witnet ecosystem',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://otherplane.com/social-image.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'OtherPlane Labs',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'OtherPlane Labs',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Building products and apps for the Witnet ecosystem',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://otherplane.com/social-image.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://otherplane.com/social-image.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'OtherPlane Labs',
      },
      {
        hid: 'msapplication-TileColor',
        property: 'msapplication-TileColor',
        content: '#da532c',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/colors.scss', '~/assets/styles/main.scss'],
  // You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ['~/assets/styles/main.scss', '~/assets/styles/colors.scss'],
  },
  // ...
  modules: ['@nuxtjs/style-resources', '@nuxtjs/i18n'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-gsap-module',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  i18n: {
    // add SEO attributes in layout head for better performance
    seo: false,
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        isCatchallLocale: true,
      },
    ],
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      alwaysRedirect: true,
    },
    defaultLocale: 'en',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
