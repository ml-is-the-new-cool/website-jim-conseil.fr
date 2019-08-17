<template>
  <!-- Static navbar -->
  <nav class="navbar is-light">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <router-link to="/services" class="navbar-item">
          <img class="rotating" :src="logoImage" alt="">
          <span class="brand-name">JIM Conseil</span>
        </router-link>
        <!-- Responsive toggle -->
        <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
        </span>
      </div>
      <!-- Menu -->
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <!-- Menu item -->
          <div class="navbar-item is-nav-link">
            <router-link to="/services" class="is-centered-responsive">
              Services
            </router-link>
          </div>
          <!-- Menu item -->
          <div class="navbar-item is-nav-link">
            <a class="is-centered-responsive" href="ico.html">Ico</a>
          </div>
          <!-- Menu item -->
          <div class="navbar-item is-nav-link">
            <a class="is-centered-responsive" href="roadmap.html">Roadmap</a>
          </div>
          <!-- Menu item -->
          <div class="navbar-item is-nav-link">
            <a class="is-centered-responsive" href="blog.html">Media</a>
          </div>
          <!-- Menu item -->
          <div class="navbar-item is-nav-link">
            <a class="is-centered-responsive" href="#" target="_blank">
              <img class="telegram" src="assets/images/logo/telegram.svg" alt="">
              Telegram
            </a>
          </div>
          <!-- Sign up -->
          <div class="navbar-item">
            <a href="#" class="button k-button k-primary raised has-gradient slanted">
              <span class="text">Register</span>
              <span class="front-gradient"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- /Static navbar -->
</template>

<script>
  import logoImage from '../assets/images/logo/krypton.svg'

  export default {
    data() {
      return {
        logoImage
      }
    }
  }
</script>
