<template>
  <div id="app">
    <theHeader/>
    <router-view/>
    <theFooter/>
  </div>
</template>


<style lang="scss">
  @import "~bulma/sass/utilities/_all";
  $link: #DF7401;
  $link-focus-border: #DF7401;
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    theHeader: Header,
    theFooter: Footer,
  },
};
</script>
