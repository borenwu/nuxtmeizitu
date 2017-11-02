<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <my-header></my-header>
        <my-hdrawer></my-hdrawer>
        <main class="mdl-layout__content">
            <div class="mdl-grid portfolio-max-width">
                <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">{{post.title}}</h2>
                    </div>
                    <div class="mdl-card__media">
                        <img class="article-image" src=" " border="0" alt="">
                    </div>
                    <div class="mdl-card__supporting-text main-meta">
                        <span>分类：<a href="http://www.mzitu.com/xinggan/" rel="category tag">{{post.tag}}</a></span>
                        <br>
                        <span>发布于 {{post.date.split('T')[0]}}</span>
                    </div>
                    <div class="mdl-grid portfolio-copy">
                        <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">点赞</h3>
                        <div class="mdl-cell mdl-cell--6-col mdl-card__supporting-text no-padding">
                            <p>
                                觉得不错就点个赞，观众老爷们的赞赏是我更新的动力
                            </p>
                        </div>
                        <div class="mdl-cell mdl-cell--6-col">
                            <img class="article-image" src="~assets/img/dashang1.jpg" border="0" alt="">
                        </div>

                        <div class="main-image" v-for="image in post.images">
                            <img class="article-image" :src='image.url' border="0" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <my-footer></my-footer>
        </main>
        <!--<main class="mdl-layout__content">-->
            <!--<div class="mdl-grid portfolio-max-width">-->
                <!--<h2 class="main-title">诱人小妖安沛蕾一丝不挂全裸上阵让你乖乖就擒</h2>-->

                <!--<div class="main-meta">-->
                    <!--<span>分类：<a href="http://www.mzitu.com/xinggan/" rel="category tag">{{post.tag}}</a></span>-->
                    <!--<br>-->
                    <!--<span>发布于 {{post.date.split('T')[0]}}</span>-->
                <!--</div>-->

                <!--<div>-->
                    <!--<img src="~/assets/img/dashang1.jpg" class="donate-image">-->
                <!--</div>-->


                <!--<div class="main-image" v-for="image in post.images">-->
                    <!--<img :src='image.url' border="0" alt="">-->
                <!--</div>-->

            <!--</div>-->
            <!--<my-footer></my-footer>-->
        <!--</main>-->
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

        asyncData ({ params, error }) {
            return axios.get('/api/posts/' + params.id)
                .then((res) => {
                    return { post: res.data }
                })
                .catch((e) => {
                    error({ statusCode: 404, message: 'User not found' })
                })
        },

        head () {
            return {
                title: this.post.title
            }
        },

        methods:{

        }
    }
</script>

<style>
    .main-title {
        font-size: 25px;
        font-weight: bold;
        float: left;
        height: 24px;
        width: 735px;
        padding-top: 10px;
    }

    .main-meta {
        font-size: 16px;
        color: #151d99;
        float: left;
        height: 38px;
        width: 738px;
    }

    .main-image {
        padding-top: 5px;
    }

</style>
