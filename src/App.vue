<template>
  <div id="app">
    <the-page-loader/>
    <router-view/>
    <the-footer/>
  </div>
</template>

<script>
  import ThePageLoader from './components/ThePageLoader.vue';
  import TheFooter from './components/TheFooter.vue';

  export default {
    components: {
      ThePageLoader,
      TheFooter
    }
  }
</script>
