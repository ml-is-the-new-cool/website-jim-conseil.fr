<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-transparent">
      <div class="hero-head">
        <the-navbar/>
        <the-navbar-bis/>
      </div>
    </section>

    <!-- Contact section -->
    <section class="section is-medium is-transparent">
      <!-- Container -->
      <div class="container">
        <!-- Divider -->
        <div class="divider is-centered"></div>
        <!-- Title & subtitle -->
        <h2 class="title is-light is-semibold has-text-centered is-spaced">Get in Touch</h2>
        <h4 class="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>

        <!-- Content wrapper -->
        <div class="content-wrapper is-large">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <!-- Contact icons -->
              <div class="contact-icons">
                <!-- Phone -->
                <a class="contact-icon" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart">
                  <img class="is-phone" src="assets/images/icons/phone.svg" alt="">
                </a>
                <!-- Mail -->
                <a class="contact-icon" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart">
                  <img class="is-phone" src="assets/images/icons/mail.svg" alt="">
                </a>
                <!-- Telegram -->
                <a class="contact-icon" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart">
                  <img class="is-telegram" src="assets/images/logo/telegram.svg" alt="">
                </a>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-6 is-offset-3">
              <!-- Form -->
              <form class="contact-form">
                <!-- Field -->
                <div class="control-material is-secondary">
                  <input class="material-input " type="text" required>
                  <span class="material-highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
                </div>
                <!-- Field -->
                <div class="control-material is-secondary">
                  <input class="material-input " type="email" required>
                  <span class="material-highlight"></span>
                  <span class="bar"></span>
                  <label>Email</label>
                </div>
                <!-- Field -->
                <div class="control-material is-secondary">
                  <textarea rows="3"></textarea>
                  <span class="material-highlight"></span>
                  <span class="bar"></span>
                  <label>Message </label>
                </div>

                <!-- Submit -->
                <div class="has-text-centered">
                  <button class="button is-button k-button k-primary raised has-gradient is-fat is-bold is-submit">
                    <span class="text">Send message</span>
                    <span class="front-gradient"></span>
                  </button>
                </div>
              </form>
              <!-- /Form -->
            </div>
          </div>


        </div>
        <!-- Content wrapper -->
      </div>
      <!-- Container -->
    </section>
    <!-- Contact section -->
  </div>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar.vue';
    import TheNavbarBis from '@/components/TheNavbarBis.vue';

    export default {
        name: 'contact',

        components: {
            TheNavbar,
            TheNavbarBis
        },

        metaInfo() {
            return {
                title: this.$i18n.t('links.pages.contact'),
            }
        },
    }
</script>
