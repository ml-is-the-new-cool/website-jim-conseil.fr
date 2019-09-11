<template>
  <div id="app">
    <the-page-loader/>
    <the-content/>
    <the-footer/>
  </div>
</template>

<script>
    import ThePageLoader from './components/ThePageLoader.vue';
    import TheContent from './components/TheContent.vue';
    //import TheLinksBar from './components/TheLinksBar.vue';
    import TheFooter from './components/TheFooter.vue';

    export default {
        name: 'app',

        components: {
            ThePageLoader,
            TheContent,
            //TheLinksBar,
            TheFooter
        },

        metaInfo: {
            title: 'Default',
            titleTemplate: '%s | JIM'
        }
    }
</script>
