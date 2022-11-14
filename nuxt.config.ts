// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/global/_colors.scss" as *;'}
      }
    }
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // {src: 'https://awesome-lib.js'}
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // {rel: 'stylesheet', href: 'https://awesome-lib.css'}
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        {children: 'Javascript is required'}
      ]
    }
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file).  'bulma',  // CSS file in the project  '@/assets/style/main.style',  // SCSS file in the project
    '@/assets/style/main.scss',
  ],
  buildDir: 'nuxt-build',
  autoImports: true,
  components: {
    global: true,
    dirs: ['~/components']
  }
})
