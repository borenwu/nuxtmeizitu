<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <my-header></my-header>
        <my-hdrawer></my-hdrawer>
        <main class="android-content mdl-layout__content">
            <div class="mdl-grid portfolio-max-width">
                <div v-for="(post, index) in posts" :key="index"  class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" :src='post.images[0].url' border="0" alt="">
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">{{post.title}}</h2>
                    </div>
                    <!--<div class="mdl-card__supporting-text">-->
                        <!--{{blog.shortContent}}-->
                    <!--</div>-->
                    <div class="mdl-card__actions mdl-card--border">
                        <nuxt-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" :to="'/posts/'+index">
                            Read more
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <my-footer></my-footer>
        </main>
    </div>

</template>

<script>
    import MyHeader from '~/components/Header.vue'
    import MyHdrawer from '~/components/Hdrawer.vue'
    import MyFooter from '~/components/Footer.vue'
    import axios from '~/plugins/axios'

    export default {
        components: {
            MyHeader,
            MyHdrawer,
            MyFooter
        },

        async asyncData () {
            let { data } = await axios.get('/api/posts')
            return { posts: data }
        },

        methods:{

        }
    }
</script>
