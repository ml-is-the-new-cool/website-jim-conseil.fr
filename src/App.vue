<template>
  <div id="app">
    <the-page-loader/>
    <the-root/>
    <the-footer/>
  </div>
</template>

<script>
import TheRoot from './components/TheRoot.vue';
import ThePageLoader from './components/ThePageLoader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'app',
  components: {
    ThePageLoader,
    TheFooter,
    TheRoot
  }
}
</script>
