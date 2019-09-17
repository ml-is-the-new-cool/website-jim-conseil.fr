<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-fullheight is-transparent">
      <div class="hero-head">
        <the-navbar/>
        <the-navbar-bis/>
      </div>

      <!-- Hero Image and Title -->
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">

            <!-- Landing page Title -->
            <div class="column landing-caption has-text-centered">
              <h1 class="title is-light main-title">
                {{ $t('notfound.title') }}
              </h1>
              <h2 class="subtitle is-light is-thin">
                {{ $t('notfound.text') }}
              </h2>
              <!-- CTA -->
              <!--p>
                <a href="#start" class="button k-button k-primary raised has-gradient is-fat is-bold">
                  <span class="text"></span>
                  <span class="front-gradient"></span>
                </a>
              </p-->

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import TheNavbar from '../components/TheNavbar.vue';
    import TheNavbarBis from '../components/TheNavbarBis.vue';

    export default {
        name: 'not-found',

        components: {
            TheNavbar,
            TheNavbarBis
        },

        metaInfo() {
            return {
                title: this.$i18n.t('links.pages.notFound'),
            }
        },
    }
</script>
