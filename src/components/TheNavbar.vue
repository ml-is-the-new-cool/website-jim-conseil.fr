<template>
  <!-- Static navbar -->
  <div class="hero-head">
    <nav class="navbar is-light">
      <div class="container">
        <!-- Brand -->
        <div class="navbar-brand">
          <router-link :to="$i18nRoute({ name: 'home' })"
                       class="">
            <img class="" :src="logoImage" alt="JIM">
          </router-link>
          <!-- Responsive toggle -->
          <span @click.prevent="activateNavBar"
                :class="{'is-active' : isNavBarActive}"
                class="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
        </span>
        </div>
        <!-- Menu -->
        <div :class="{'is-active' : isNavBarActive}"
             class="navbar-menu has-text-centered">
          <div class="navbar-end">
            <!-- Menu item -->
            <router-link :to="$i18nRoute({ name: 'home' })"
                         exact
                         class="is-centered-responsive">
              <div class="navbar-item is-nav-link">
                {{ $t('links.pages.home') }}
              </div>
            </router-link>

            <!-- Menu item -->
            <router-link :to="$i18nRoute({ name: 'services' })"
                         exact
                         class="is-centered-responsive">
              <div class="navbar-item is-nav-link">
                {{ $t('links.pages.services') }}
              </div>
            </router-link>

            <!-- Menu item -->
            <router-link :to="$i18nRoute({ name: 'about' })"
                         class="is-centered-responsive">
              <div class="navbar-item is-nav-link">
                {{ $t('links.pages.about') }}
              </div>
            </router-link>

            <!-- Menu item -->
            <a :href="'mailto:' + $t('links.mail')"
               class="is-centered-responsive">
              <div class="navbar-item is-nav-link">
                {{ $t('links.pages.contact') }}
              </div>
            </a>

            <!-- Leaflet button -->
            <div class="navbar-item">
              <a @click.prevent="leaflet"
                 class="button k-button k-primary raised has-gradient slanted">
                <span class="text">
                  {{ $t('links.pages.leaflet') }}
                </span>
                <span class="front-gradient"></span>
              </a>
            </div>
            <!-- Membership button -->
            <div class="navbar-item">
              <a @click.prevent="leaflet"
                 class="button k-button k-primary raised has-gradient slanted">
                <span class="text">
                  {{ $t('links.pages.membership') }}
                </span>
                <span class="front-gradient"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- /Static navbar -->
</template>

<script>
    import logoImage from '@/assets/images/logos/logoClair.png'

    export default {
        name: 'the-navbar',

        data() {
            return {
                logoImage,
                leaflet: ''
            }
        },
        computed: {
            isNavBarVisible() {
                return this.$store.state.isNavBarVisible;
            },

            isNavBarActive() {
                return this.$store.state.isNavBarActive;
            }
        },

        methods: {
            activateNavBar() {
                this.$store.commit('activateNavBar', !this.isNavBarActive);
            },

            showNavBar(visible) {
                this.$store.commit('showNavBar', visible);
            }
        }
    }
</script>
