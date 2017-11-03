module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '每日福报',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],

        script: [
            // { src: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js' }
        ],


        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            // {rel: 'stylesheet', href: 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'},
            // {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
            // {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            // {rel: 'stylesheet', href: '~/assets/css/material.min.css'},
            // {rel: 'stylesheet', href: '~/assets/css/styles.css'},
        ],
    },

    // modules: [
    //     '@nuxtjs/bootstrap-vue',
    //
    //     // Or if you have custom bootstrap CSS...
    //     // ['@nuxtjs/bootstrap-vue', { css: false }],
    // ],
    /*
     ** plugins
     */
    plugins: ['~plugins/bootstrap-vue'],

    /*
     ** Global CSS
     */
    // css: ['~/assets/css/material.min.css','~/assets/css/styles.css'],
    /*
     ** Add axios globally
     */
    build: {
        vendor: ['axios'],
        /*
         ** Run ESLINT on save
         */
        // extend (config, ctx) {
        //     if (ctx.isClient) {
        //         config.module.rules.push({
        //             enforce: 'pre',
        //             test: /\.(js|vue)$/,
        //             loader: 'eslint-loader',
        //             exclude: /(node_modules)/
        //         })
        //     }
        // }
    }
}
