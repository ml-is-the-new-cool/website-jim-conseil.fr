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

    <!-- Company section -->
    <section class="section is-medium has-dark-gradient">
      <!-- Container -->
      <div class="container">
        <!-- Divider -->
        <div class="divider is-centered"></div>
        <!-- Title & subtitle -->
        <h2 class="title is-light is-semibold has-text-centered is-spaced">
          {{ $t('team.title') }}
        </h2>
        <h4 class="subtitle is-6 is-light has-text-centered is-compact">
          {{ $t('team.description') }}
        </h4>

        <!-- Content wrapper -->
        <div class="content-wrapper is-large">
          <div class="columns is-vcentered">

            <div class="column is-hidden-mobile"></div>

            <!-- Team member -->
            <div v-for="(member) in $t('team.content')"
                 :key="member.name"
                 class="column is-3">
              <div class="team-member-container">
                <!-- Card -->
                <div class="dark-card">
                  <!-- Avatar wrapper -->
                  <div class="avatar">
                    <img :src="require(`@/assets/images/team/${member.photo}`)"
                         :alt="member.name">
                  </div>
                  <!-- Member meta -->
                  <div class="member-info">
                    <h4 class="title is-light is-6 is-tight">
                      {{ member.name }}
                    </h4>
                    <div class="position">
                      {{ member.position }}
                    </div>
                    <p class="description">
                      <a :href="member.linkedin">
                        Linkedin
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-hidden-mobile"></div>
          </div>

          <!-- Spaced divider -->
          <div class="divider is-centered is-spacer"></div>
          <!-- Title & subtitle -->
          <h2 class="title is-light is-semibold has-text-centered is-spaced">
            {{ $t('university.title') }}
          </h2>
          <h4 class="subtitle is-6 is-light has-text-centered is-compact">
            {{ $t('university.description') }}
          </h4>

          <!-- Content wrapper -->
          <div class="content-wrapper is-large">
            <div class="columns">
              <!-- Media section -->
              <div class="column is-10 is-offset-1">

                <!-- Post -->
                <div class="blog-post">
                  <a :href="$t('university.link')">
                    <!-- Featured image -->
                    <div class="featured-image">
                      <img :src="amuImage" alt="Aix-Marseille Université">
                    </div>
                    <!-- Content -->
                    <div class="content">
                      <div class="post-title">
                        {{ $t('university.name') }}
                      </div>
                      <p>
                        {{ $t('university.description') }}
                      </p>
                    </div>
                  </a>
                </div>
                <!-- /Post -->
              </div>
              <!-- /Media section -->
            </div>
          </div>
          <!-- /Content wrapper -->

        </div>
        <!-- /Content wrapper -->
      </div>
    </section>
    <!-- /Company section -->

  </div>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar.vue';
    import TheNavbarBis from '@/components/TheNavbarBis.vue';

    import amuImage from '../assets/images/logos/amu.jpg';

    export default {
        name: 'about',

        components: {
            TheNavbar,
            TheNavbarBis
        },

        data() {
            return {
                amuImage
            }
        },

        metaInfo() {
            return {
                title: this.$i18n.t('links.pages.about'),
            }
        }
    }
</script>
