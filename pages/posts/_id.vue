<template>
    <div>
        <my-header></my-header>
        <main class="container content">
            <div class="row">
                <div class="col-sm-8 blog-main">
                    <div class="card">
                        <h4 class="card-header">{{post.title}}</h4>
                        <div class="card-body">
                            <span class="card-text">分类：<a href="http://www.mzitu.com/xinggan/"
                                                          rel="category tag">{{post.tag}}</a></span>
                            <p class="card-text">发布于 {{post.date.split('T')[0]}}</p>


                            <img class="main-image" v-for="image in post.images" :src='image.url' border="0" alt="">

                        </div>
                    </div>
                </div>

                <aside class="col-sm-3 ml-sm-auto blog-sidebar">
                    <div class="">
                        <h3 class="">点赞</h3>
                        <div class="">
                            <p>
                                觉得不错就点个赞，观众老爷们的赞赏是我更新的动力
                            </p>
                        </div>
                        <div class="">
                            <img class="donate-image" src="~assets/img/dashang1.jpg" border="0" alt="">
                        </div>
                    </div>
                </aside>
            </div>
            <!--<div class="row">-->
            <!--<div class="mdl-cell mdl-cell&#45;&#45;12-col mdl-card mdl-shadow&#45;&#45;4dp">-->
            <!--<div class="mdl-card__title">-->
            <!--<h2 class="mdl-card__title-text">{{post.title}}</h2>-->
            <!--</div>-->
            <!--<div class="mdl-card__media">-->
            <!--<img class="article-image" src=" " border="0" alt="">-->
            <!--</div>-->
            <!--<div class="mdl-card__supporting-text main-meta">-->
            <!--<span>分类：<a href="http://www.mzitu.com/xinggan/" rel="category tag">{{post.tag}}</a></span>-->
            <!--<br>-->
            <!--<span>发布于 {{post.date.split('T')[0]}}</span>-->
            <!--</div>-->


            <!--<div class="main-image" v-for="image in post.images">-->
            <!--<img class="article-image" :src='image.url' border="0" alt="">-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

        </main>
    </div>
</template>

<script>
    import MyHeader from '~/components/Header.vue'
    import MyFooter from '~/components/Footer.vue'
    import axios from '~/plugins/axios'

    export default {
        components: {
            MyHeader,
            MyFooter
        },

        asyncData ({params, error}) {
            return axios.get('/api/posts/' + params.id)
                .then((res) => {
                    return {post: res.data}
                })
                .catch((e) => {
                    error({statusCode: 404, message: 'User not found'})
                })
        },

        head () {
            return {
                title: this.post.title
            }
        },

        methods: {}
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
        width: 100%;
        padding-top: 5px;
    }

    .content {
        padding-top: 30px;
    }

    .donate-image {
        width: 250px;
        height: 250px;
    }

</style>
