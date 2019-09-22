<template>
    <div id="app">
      <the-page-loader/>
      <the-footer/>
      <scroll-up :scroll-duration="1000" :scroll-y="250"/>
    </div>
</template>

<script>
    import ThePageLoader from './components/ThePageLoader.vue';
    import TheFooter from './components/TheFooter.vue';
    import ScrollUp from './components/TheScrollUp.vue';

    export default {
        name: 'app',

        components: {
            ThePageLoader,
            TheFooter,
            ScrollUp
        },

        metaInfo: {
            title: 'Default',
            titleTemplate: '%s | JIM'
        },

        watch: {
            '$route'() {
                this.$store.commit('activateNavBar', false);
                this.$store.commit('activateNavBarBis', false);
            }
        }
    }
</script>
