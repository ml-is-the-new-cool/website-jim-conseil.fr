<template>
  <!-- Cloned navbar that comes in on scroll -->
  <nav :class="{'is-active': isNavBarBisVisible}"
       class="navbar navbar-clone is-fixed">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <router-link :to="$i18nRoute({ name: 'home' })"
                     class="navbar-item">
          <img class="rotating" :src="logoImage" alt="JIM">
        </router-link>
        <!-- Responsive toggle -->
        <span @click.prevent="activateNavBarBis"
              :class="{'is-active' : isNavBarBisActive}"
              class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <!-- Menu -->
      <div :class="{'is-active' : isNavBarBisActive}"
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
  <!-- /Cloned navbar -->
</template>

<script>
    import logoImage from '@/assets/images/logos/logoSombre.png'

    export default {
        name: 'the-navbar-bis',

        data() {
            return {
                logoImage,
                leaflet: ''
            }
        },
        computed: {
            isNavBarBisVisible() {
                return this.$store.state.isNavBarBisVisible;
            },

            isNavBarBisActive() {
                return this.$store.state.isNavBarBisActive;
            }
        },

        methods: {
            activateNavBarBis() {
                this.$store.commit('activateNavBarBis', !this.isNavBarBisActive);
            },

            showNavBarBis(visible) {
                this.$store.commit('showNavBarBis', visible);
            },

            onScroll() {
                this.showNavBarBis(window.scrollY > 60);
            }
        },

        created() {
            window.addEventListener("scroll", this.onScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.onScroll);
        }
    }
</script>
