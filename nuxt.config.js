module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '清和',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0,user-scalable=0,minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

  },
  plugins: [
    /*
    ** 这样引入的js会照成html肉眼能看到的重绘，直接在模版引入
    */
    {src: '~plugins/flexible.js',ssr: false},
    {src: '~plugins/mint-ui',ssr: false},
  ],
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~assets/sass/base.sass',
      lang: 'sass?indentedSyntax=true'
    },
    {
      src: 'mint-ui/lib/style.css'
    },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#036EB8' },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      "axios"
    ],
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {

    }
  }
}
