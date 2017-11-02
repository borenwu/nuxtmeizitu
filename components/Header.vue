<script>

    export default {

        data () {
            return {
                title: 'header'
            }
        }
    }
</script>

<template>
    <header class="portfolio-header mdl-layout__header mdl-layout__header--waterfall">
        <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
            <div class="mdl-layout__header-row portfolio-logo-row">
                <span class="mdl-layout__title">
                    <div class="portfolio-logo"></div>
                    <span class="mdl-layout__title">Simple portfolio website</span>
                </span>
            </div>
            <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
                <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
                    <a class="mdl-navigation__link">首页</a>
                    <a class="mdl-navigation__link">性感</a>
                    <a class="mdl-navigation__link">美丝</a>
                    <a class="mdl-navigation__link">每日更新</a>
                </nav>
            </div>
        </header>
    </header>
</template>


<style scoped>
    .mdl-navigation__link {
        font-size: larger;
    }

    .nav-title {
        color: #181122;
        font-size: larger;
    }

</style>
