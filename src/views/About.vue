<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-fullheight is-transparent">
      <div class="hero-head">
        <the-navbar></the-navbar>
      </div>
    </section>
    <!-- Contact section -->
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';

export default {
  name: 'index',
  components: {
    TheNavbar
  }
}
</script>
