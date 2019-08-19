<template>
  <!-- Static navbar -->
  <div class="hero-head">
    <nav class="navbar is-light is-transparent">
      <div class="container">
        <!-- Brand -->
        <div class="navbar-brand">
          <router-link :to="$i18nRoute({ name: 'home' })"
                       class="navbar-item">
            <img class="rotating" :src="logoImage" alt="JIM Conseil">
            <span class="brand-name">JIM Conseil</span>
          </router-link>
          <!-- Responsive toggle -->
          <span @click="activateBurger"
                  v-bind:class="{ 'is-active': isBurgerActive }"
                  class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
        </span>
        </div>
        <!-- Menu -->
        <div id="navbarMenu" class="navbar-menu"
             v-bind:class="{'is-active' : isBurgerActive }">
          <div class="navbar-end">
            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'services' })"
                           class="is-centered-responsive">
                Services
              </router-link>
            </div>
            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'methodology' })"
                           class="is-centered-responsive">
                Methodology
              </router-link>
            </div>
            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'about' })"
                           class="is-centered-responsive">
                About
              </router-link>
            </div>
            <!-- Menu item -->
            <div class="navbar-item is-nav-link">
              <router-link :to="$i18nRoute({ name: 'contact' })"
                           class="is-centered-responsive">
                Contact
              </router-link>
            </div>
            <!-- Leaflet button -->
            <div class="navbar-item">
              <router-link :to="$i18nRoute({ name: 'leaflet' })"
                           class="button k-button k-primary raised has-gradient slanted">
                <span class="text">Leaflet</span>
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
  import logoImage from '@/assets/images/logo/krypton.svg'

  export default {
    name: 'navbar',
    data() {
      return {
        logoImage,
        isBurgerActive: false
      }
    },
    methods: {
      activateBurger() {
        this.isBurgerActive = !this.isBurgerActive;
        return this.isBurgerActive
      }
    }
  }
</script>
