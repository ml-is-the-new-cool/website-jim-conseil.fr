<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-transparent">
      <div class="hero-head">
        <the-navbar/>
        <the-navbar-bis/>
        <the-links-bar/>
      </div>
    </section>
  </div>
</template>

<script>
    import TheNavbar from '../components/TheNavbar.vue';
    import TheNavbarBis from '../components/TheNavbarBis.vue';
    import TheLinksBar from '../components/TheLinksBar.vue';

    export default {
        name: 'contact',

        components: {
            TheNavbar,
            TheNavbarBis,
            TheLinksBar
        },

        metaInfo() {
            return {
                title: this.$i18n.t('links.pages.legals'),
            }
        },
    }
</script>
