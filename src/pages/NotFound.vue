<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-fullheight is-transparent">
      <div class="hero-head">
        <the-navbar/>
      </div>
      404 not found
    </section>
    <!-- Contact section -->
  </div>
</template>

<script>
    import TheNavbar from '../components/TheNavbar.vue';

    export default {
        name: 'not-found',

        components: {
            TheNavbar
        },

        metaInfo() {
            return {
                title: this.$i18n.t('links.pages.notFound'),
            }
        },
    }
</script>
