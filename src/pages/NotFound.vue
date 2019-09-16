<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-transparent">
      <div class="hero-head">
        <the-navbar/>
      </div>
    </section>

    <!-- Contact section -->
    <section class="section is-medium is-transparent">
      <!-- Container -->
      <div class="container">
        <!-- Divider -->
        <div class="divider is-centered"></div>
        <!-- Title & subtitle -->
        <h2 class="title is-light is-semibold has-text-centered is-spaced">
          {{ $t('notfound.title') }}
        </h2>
        <h4 class="subtitle is-6 is-light has-text-centered is-compact">
          {{ $t('notfound.text') }}
        </h4>
      </div>
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
