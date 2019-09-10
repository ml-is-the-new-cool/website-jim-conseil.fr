<template>
  <div class="roadmap-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-medium">
      <div class="hero-head">
        <the-navbar></the-navbar>
        <the-navbar-bis></the-navbar-bis>
      </div>
    </section>

    <!-- ICO section -->
    <section class="section is-medium is-end">
      <!-- Container -->
      <div class="container">
        <!-- Divider -->
        <div class="divider is-centered"></div>
        <!-- Title & subtitle -->
        <h2 class="title is-light is-semibold has-text-centered is-spaced">
          {{ $t('services.title') }}
        </h2>
        <h4 class="subtitle is-6 is-light has-text-centered is-compact">
          {{ $t('services.description') }}
        </h4>

        <!-- Content wrapper -->
        <div class="content-wrapper is-large">

          <!-- Flying tabs wrapper -->
          <div class="flying-wrapper">
            <!-- Tabs container -->
            <div class="flying-tabs-container">
              <!-- Tabs -->
              <div class="flying-tabs">

                <div v-for="(item, index) in services"
                     :key="index"
                     class="flying-child"
                     :class="selectedServiceIndex === index ? 'is-active' : ''">
                  <a @click="choseService(index)">{{ item.title }}</a>
                </div>

                <div class="slider"></div>
              </div>
            </div>

            <!-- Tabs content wrapper -->
            <div class="flying-tabs-content">

              <div class="tab-content is-active" >
                <div class="columns is-vcentered tab-content-wrapper">
                  <!-- Tab content -->
                  <div class="column is-5 is-offset-1">
                    <div class="text-content">
                      <p class="title is-6 is-light animated preFadeInUp fadeInUp">
                      {{ selectedService.description}}
                      </p>
                    </div>
                  </div>
                  <div class="column is-5 is-offset-1">
                    <div class="text-content">
                      <h4 class="title is-6 is-light animated preFadeInUp fadeInUp">
                        {{ selectedService.objectives }}
                      </h4>
                      <ul class="custom-bullet-list">
                        <li class="animated preFadeInUp fadeInUp">
                          <span>Mots clés</span>
                          <br>
                          <span class="item-content">{{ selectedService.keywords }}</span>
                        </li>
                        <li class="animated preFadeInUp fadeInUp">
                          <span>Exemples d'étude proposée</span>
                          <br>
                          <span class="item-content">{{ selectedService.projects }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
        <!-- Content wrapper -->
      </div>
      <!-- /Container -->
    </section>
    <!-- /ICO section -->

    <the-links-bar/>
  </div>
</template>

<script>
    import TheNavbar from '../components/TheNavbar.vue'
    import TheNavbarBis from '../components/TheNavbarBis.vue'
    import TheLinksBar from '@/components/TheLinksBar.vue';
    import worldImage from '../assets/images/illustrations/world.svg'

    export default {
        name: 'services',
        components: {
            TheNavbar,
            TheNavbarBis,
            TheLinksBar
        },

        data() {
            return {
                worldImage,
                services: this.$i18n.t('services').content,
                selectedServiceIndex: 0,
                selectedService: this.$i18n.t('services').content[0]
            }
        },

        methods: {
            choseService(index) {
                this.selectedServiceIndex = index;
                this.selectedService = this.services[this.selectedServiceIndex];
            }
        },
    }

</script>
