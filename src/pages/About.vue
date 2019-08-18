<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-fullheight is-transparent">
      <div class="hero-head">
        <the-navbar></the-navbar>
      </div>
      About
      {{ $t('links.linkedin') }}
    </section>
    <!-- Contact section -->
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
//import TheNavbarBis from '../components/TheNavbarBis.vue';

export default {
  name: 'about',
  components: {
    TheNavbar,
    //TheNavbarBis
  }
}
</script>
