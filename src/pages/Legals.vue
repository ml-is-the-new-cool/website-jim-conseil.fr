<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-medium is-transparent">
      <div class="hero-head">
        <the-navbar/>
        <the-navbar-bis/>
      </div>
    </section>

    <!-- ICO section -->
    <section class="section is-medium is-transparent">
      <!-- Container -->
      <div class="container">
        <!-- Divider -->
        <div class="divider is-centered"></div>
        <!-- Title & subtitle -->
        <h1 class="title is-light is-semibold has-text-centered is-spaced">
          {{ $t('legals.title') }}
        </h1>
        <br/>

        <p class="subtitle is-6 is-light is-compact">
          {{ $t('legals.description') }}
        </p>

        <br/>
        <div class="divider is-centered"></div>
        <h1 class="title is-light is-semibold has-text-centered is-spaced">
          {{ $t('legals.webhost.title') }}
        </h1>
        <br/>

        <p v-for="(item, index) in $t('legals.webhost.content')"
           v-bind:key="index"
           class="subtitle is-6 is-light is-compact">
          {{ item }}
        <p/>

        <br/>
        <div class="divider is-centered"></div>
        <p class="title is-light is-semibold has-text-centered">
          {{ $t('legals.data_policy.title') }}
        </p>
        <br/>

        <p class="subtitle is-6 is-light is-compact">
          {{ $t('legals.data_policy.content') }}
        </p>
      </div>
    </section>

  </div>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar.vue';
    import TheNavbarBis from '@/components/TheNavbarBis.vue';

    export default {
        name: 'home',

        metaInfo() {
            return {
                title: this.$i18n.t('links.pages.legals'),
            }
        },

        components: {
            TheNavbar,
            TheNavbarBis
        }
    }
</script>
