<template>
  <!-- Static navbar -->
  <div class="hero-head">
    <nav class="navbar is-light is-transparent">
      <div class="container">
        <!-- Brand -->
        <div class="navbar-brand">
          <router-link :to="$i18nRoute({ name: 'home' })"
                       class="navbar-item">
            <img class="" :src="logoImage" alt="JIM">

            <span class="brand-name mobile">
              Junior Informatique <br/> Marseille
            </span>
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
             class="navbar-menu">
          <div class="navbar-end">
            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'services' })"
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
                           class="is-centered-responsive">
                {{ $t('links.pages.contact') }}
              </router-link>
            </div>
            <!-- Leaflet button -->
            <div class="navbar-item">
              <router-link :to="$i18nRoute({ name: 'leaflet' })"
                           class="button k-button k-primary raised has-gradient slanted">
                <span class="text">{{ $t('links.pages.leaflet') }}</span>
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
    import logoImage from '@/assets/images/logo.png'

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
