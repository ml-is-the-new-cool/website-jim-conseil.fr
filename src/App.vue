<template>
  <div id="app">
    <the-page-loader/>
    <the-content/>
    <the-footer/>
    <scroll-up :scroll-duration="1000" :scroll-y="250"></scroll-up>
  </div>
</template>

<script>
    import ThePageLoader from './components/ThePageLoader.vue';
    import TheContent from './components/TheContent.vue';
    import TheFooter from './components/TheFooter.vue';
    import ScrollUp from './components/TheScrollUp.vue';

    export default {
        name: 'app',

        components: {
            ThePageLoader,
            TheContent,
            TheFooter,
            ScrollUp
        },

        metaInfo: {
            title: 'Default',
            titleTemplate: '%s | JIM'
        }
    }
</script>
