<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-fullheight is-transparent">
      <div class="hero-head">
        <the-navbar></the-navbar>
        <the-navbar-bis></the-navbar-bis>
      </div>
      <!-- Animated particles -->
      <!-- https://vue-particles.netlify.com -->

      <!-- Hero Image and Title -->
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">

            <!-- Landing page Title -->
            <div class="column landing-caption has-text-centered">
              <h1 class="title is-light main-title">{{ $t('general.name') }}</h1>
              <h2 class="subtitle is-light is-thin">
                {{ $t('general.slogan') }}
              </h2>
              <!-- CTA -->
              <p>
                <a href="#start" class="button k-button k-primary raised has-gradient is-fat is-bold">
                  <span class="text">Get Started</span>
                  <span class="front-gradient"></span>
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- /Landing page Hero -->

    <!-- Icon Features section -->
    <section id="start" class="section is-transparent is-relative">
      <!-- Container -->
      <div class="container">

        <div class="columns is-vcentered">

          <!-- Landing page Title -->
          <div class="column is-offset-2-touch is-8-touch landing-caption has-text-centered">
            <h1 class="title is-light main-title">
              {{ $t('home.who_are_we') }}
            </h1>
            <p>
              {{ $t('home.description') }}
            </p>

          </div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- /Container -->
    </section>
    <!-- /Icon Features section -->

    <!-- Side Features section -->
    <section id="big-gradient" class="section is-transparent">
      <!-- Container -->
      <div class="container">
        <!-- Divider -->
        <div class="divider is-centered"></div>
        <!-- Title & subtitle -->
        <h2 class="title is-light is-semibold has-text-centered is-spaced">Decentralized Exchange</h2>
        <h4 class="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>

        <!-- Content wrapper -->
        <div class="content-wrapper is-large">
          <div class="columns is-vcentered">

            <!-- Feature content -->
            <div class="column is-5 is-offset-1">
              <div class="side-feature-content">

                <h3 class="title is-4 is-light"><img src="assets/images/icons/ico/bitbanner.svg" alt=""> <span>Token Building</span></h3>
                <div class="divider is-long"></div>
                <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                <div class="cta-wrapper">
                  <a href="token.html" class="button k-button k-primary raised has-gradient is-bold">
                    <span class="text">Learn More</span>
                    <span class="front-gradient"></span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Feature image -->
            <div class="column is-7">
              <img class="side-feature" src="assets/images/illustrations/token.svg" alt="">
            </div>
          </div>

          <div class="columns is-vcentered">
            <!-- Feature image desktop -->
            <div class="column is-7 is-hidden-mobile">
              <img class="side-feature" src="assets/images/illustrations/blockchain-blocks.svg" alt="">
            </div>

            <!-- Feature content -->
            <div class="column is-5">
              <div class="side-feature-content">

                <h3 class="title is-4 is-light"><img src="assets/images/icons/ico/bitnetwork.svg" alt=""> <span>Cascading Blockchain</span></h3>
                <div class="divider is-long"></div>
                <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                <div class="cta-wrapper">
                  <a href="#" class="button k-button k-primary raised has-gradient is-bold">
                    <span class="text">Whitepaper</span>
                    <span class="front-gradient"></span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Feature image only for mobile -->
            <div class="column is-7 is-hidden-desktop is-hidden-tablet">
              <img class="side-feature" src="assets/images/illustrations/blockchain-blocks.svg" alt="">
            </div>
          </div>

          <div class="columns is-vcentered">
            <!-- Feature content -->
            <div class="column is-5 is-offset-1">
              <div class="side-feature-content">

                <h3 class="title is-4 is-light"><img src="assets/images/icons/ico/bitmining.svg" alt=""> <span>Crypto Farming</span></h3>
                <div class="divider is-long"></div>
                <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                <div class="cta-wrapper">
                  <a href="#" class="button k-button k-primary raised has-gradient is-bold">
                    <span class="text">Join the ICO</span>
                    <span class="front-gradient"></span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Feature image -->
            <div class="column is-7">
              <img class="side-feature" src="assets/images/illustrations/crypto-mining.svg" alt="">
            </div>
          </div>
        </div>
        <!-- /Content wrapper -->
      </div>
      <!-- /Container -->
    </section>
    <!-- /Side Features section -->
  </div>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar.vue';
  import TheNavbarBis from '@/components/TheNavbarBis.vue';

  export default {
    name: 'home',
    components: {
      TheNavbar,
      TheNavbarBis
    }
  }
</script>
