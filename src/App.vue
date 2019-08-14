<template>
  <div id="app">
    <theHeader/>
    <router-view/>
    <theFooter/>
  </div>
</template>


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
