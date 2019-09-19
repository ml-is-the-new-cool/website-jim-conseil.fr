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
        <h2 class="title is-light is-semibold has-text-centered is-spaced">
          {{ $t('services.title') }}
        </h2>
        <h4 v-for="(paragraph) in $t('services.description')"
            class="subtitle is-6 is-light has-text-centered is-compact">
          {{ paragraph }}
        </h4>
        <br/>
        <br/>

        <!-- Services list + service selected-->
        <div class="columns is-multiline is-vcentered is-centered">
          <!-- Team member -->
          <div v-for="(item, index) in services"
               :key="index"
               @click="choseService(index)"
               class="column is-4">
            <div class="team-member-container hover-card">
              <!-- Card -->
              <div class="dark-card" style="background-color: ">
                <!-- Avatar wrapper -->
                <div class="avatar">
                  <img :src="require(`@/assets/images/logos/logoClair.png`)"
                       :alt="item.title">
                </div>
                <!-- Member meta -->
                <div class="member-info">
                  <h4 class="title is-light is-6 is-tight">
                    {{ item.title }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal service selected -->
        <div :class="{'is-active' : showModal}"
             class="modal modal-services">
          <div @click="showModal = false"
               class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <h4 class="title is-light">
                {{ selectedService.title }}
              </h4>
            </header>

            <section class="modal-card-body">
              <div class="text-content">
                <h4 class="title is-6 is-light animated preFadeInUp fadeInUp">
                  {{ selectedService.objectives }}
                </h4>
                <ul class="custom-bullet-list">
                  <li class="animated preFadeInUp fadeInUp">
                    <span>Mots clés</span>
                    <br>
                    <span class="item-content">
                      {{ selectedService.keywords }}
                    </span>
                  </li>
                  <li class="animated preFadeInUp fadeInUp">
                    <span>Exemples d'étude proposée</span>
                    <br>
                    <span class="item-content">
                      {{ selectedService.projects }}
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <!-- Content wrapper -->
      </div>
      <!-- /Container -->
    </section>
    <!-- /ICO section -->
  </div>
</template>

<script>
    import TheNavbar from '../components/TheNavbar.vue'
    import TheNavbarBis from '../components/TheNavbarBis.vue'

    export default {
        name: 'services',

        components: {
            TheNavbar,
            TheNavbarBis
        },

        metaInfo() {
            return {
                title: this.$i18n.t('links.pages.services'),
            }
        },

        data() {
            return {
                showModal: false,
                services: this.$i18n.t('services').content,
                selectedServiceIndex: 0,
                selectedService: this.$i18n.t('services').content[0]
            }
        },

        methods: {
            choseService(index) {
                this.selectedServiceIndex = index;
                this.selectedService = this.services[this.selectedServiceIndex];

                this.showModal = true;
            },

            closeModalOnEchap() {
                document.addEventListener("keydown", (e) => {
                    if(this.showModal && e.keyCode === 27) {
                        this.showModal = false;
                    }
                });
            }
        },

        mounted: function(){
            this.closeModalOnEchap()
        }
    }
</script>
