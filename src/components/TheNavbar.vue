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
                class="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
        </span>
        </div>
        <!-- Menu -->
        <div v-bind:class="isNavBarActive ? 'is-active' : ''"
             class="navbar-menu has-text-centered"
             >
          <div class="navbar-end">
            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'home' })"
                           exact
                           class="is-centered-responsive">
                {{ $t('links.pages.home') }}
              </router-link>
            </div>
            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'services' })"
                           exact
                           class="is-centered-responsive">
                {{ $t('links.pages.services') }}
              </router-link>
            </div>

            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'about' })"
                           class="is-centered-responsive">
                {{ $t('links.pages.about') }}
              </router-link>
            </div>

            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'contact' })"
                           exact
                           class="is-centered-responsive">
                {{ $t('links.pages.contact') }}
              </router-link>
            </div>
            <!-- Leaflet button -->
            <div class="navbar-item">
              <router-link :to="$i18nRoute({ name: 'leaflet' })"
                           exact
                           class="button k-button k-primary raised has-gradient slanted">
                <span class="text">
                  {{ $t('links.pages.leaflet') }}
                </span>
                <span class="front-gradient"></span>
              </router-link>
            </div>
            <!-- Membership button -->
            <div class="navbar-item">
              <router-link :to="$i18nRoute({ name: 'membership' })"
                           exact
                           class="button k-button k-primary raised has-gradient slanted">
                <span class="text">
                  {{ $t('links.pages.membership') }}
                </span>
                <span class="front-gradient"></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- /Static navbar -->
</template>

<script>
    import logoImage from '@/assets/images/logos/logo.png'

    export default {
        name: 'the-navbar',

        data() {
            return {
                logoImage,
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
