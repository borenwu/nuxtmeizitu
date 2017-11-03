<template>
    <div>
        <my-header></my-header>

        <main class="container content">
            <div class="row">
                <div class="col-sm-8 blog-main">
                    <div class="row">
                        <div class="col-xs-6 col-lg-4" v-for="post in posts">
                            <b-card
                                    :title="post.title"
                                    :img-src="post.images[0].url"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem; max-height: 552px;"
                                    class="mb-2">
                                <p class="card-text">
                                    {{post.date.split('T')[0]}}
                                </p>
                                <nuxt-link class="btn btn-outline-secondary" :to="'/posts/'+post._id">
                                    查看更多
                                </nuxt-link>
                            </b-card>
                        </div>
                    </div>
                </div>

                <aside class="col-sm-3 ml-sm-auto blog-sidebar">
                    <div class="list-group">
                    <a href="#" class="list-group-item active">Link</a>
                    <a href="#" class="list-group-item">Link</a>
                    <a href="#" class="list-group-item">Link</a>
                    <a href="#" class="list-group-item">Link</a>
                    <a href="#" class="list-group-item">Link</a>
                    <a href="#" class="list-group-item">Link</a>
                    <a href="#" class="list-group-item">Link</a>
                    <a href="#" class="list-group-item">Link</a>
                    <a href="#" class="list-group-item">Link</a>
                    <a href="#" class="list-group-item">Link</a>
                    </div>
                </aside>
            </div>
        </main><!--/.container-->

        <hr>
        <my-footer></my-footer>
    </div>

</template>

<script>
    import MyHeader from '~/components/Header.vue'
    import MyFooter from '~/components/Footer.vue'
    import axios from '~/plugins/axios'
    import moment from 'moment'

    export default {
        components: {
            MyHeader,
            MyFooter
        },

        async asyncData () {
            let {data} = await axios.get('/api/posts')

            return {posts: data}
        },

        methods: {},

        head () {
            return {
                title: '每日福报'
            }
        },
    }
</script>

<style>
    @media screen and (max-width: 767px) {
        .row-offcanvas {
            position: relative;
            -webkit-transition: all .25s ease-out;
            -o-transition: all .25s ease-out;
            transition: all .25s ease-out;
        }

        .row-offcanvas-right {
            right: 0;
        }

        .row-offcanvas-left {
            left: 0;
        }

        .row-offcanvas-right
        .sidebar-offcanvas {
            right: -50%; /* 6 columns */
        }

        .row-offcanvas-left
        .sidebar-offcanvas {
            left: -50%; /* 6 columns */
        }

        .row-offcanvas-right.active {
            right: 50%; /* 6 columns */
        }

        .row-offcanvas-left.active {
            left: 50%; /* 6 columns */
        }

        .sidebar-offcanvas {
            position: absolute;
            top: 0;
            width: 50%; /* 6 columns */
        }
    }

    .content {
        padding-top: 70px;
    }


    .card-img-top {
        max-height: 320px;
    }
</style>
