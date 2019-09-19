<template>
  <!-- Static navbar -->
  <div class="hero-head">
    <nav class="navbar is-light">
      <div class="container">

        <!-- Brand -->
        <div class="navbar-brand">
          <router-link :to="$i18nRoute({ name: 'home' })">
            <img :src="logoImage" alt="JIM">
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
        <!-- /Brand -->

        <!-- Menu -->
        <div class="navbar-menu has-text-centered"
             :class="{'is-active': isNavBarActive}">

          <div class="navbar-end">
            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'home' })" exact
                           class="is-centered-responsive">
                {{ $t('links.pages.home') }}
              </router-link>
            </div>

            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'services' })" exact
                           class="is-centered-responsive">
                {{ $t('links.pages.services') }}
              </router-link>
            </div>

            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'about' })" exact
                           class="is-centered-responsive">
                {{ $t('links.pages.about') }}
              </router-link>
            </div>

            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <a :href="'mailto:' + $t('links.mail')"
                 class="is-centered-responsive">
                {{ $t('links.pages.contact') }}
              </a>
            </div>

            <!-- Leaflet button -->
            <div class="navbar-item is-nav-button">
              <a href="./../plaquette.pdf" target="_blank"
                 class="button k-button k-primary raised has-gradient slanted">
                <span class="text">
                  {{ $t('links.pages.leaflet') }}
                </span>
                <span class="front-gradient"></span>
              </a>
            </div>
            <!-- Membership button -->
            <div class="navbar-item is-nav-button">
              <a href="./../adhesion.odt" target="_blank"
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
                logoImage
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
