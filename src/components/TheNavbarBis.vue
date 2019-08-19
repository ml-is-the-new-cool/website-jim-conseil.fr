<template>
  <!-- Cloned navbar that comes in on scroll -->
  <nav id="navbar-clone" class="navbar is-fixed is-dark">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <router-link :to="$i18nRoute({ name: 'home' })"
                     class="navbar-item">
          <img class="rotating" :src="logoImage" alt="JIM Conseil">
          <span class="brand-name">JIM Conseil</span>
        </router-link>
        <!-- Responsive toggle -->
        <span class="navbar-burger burger" data-target="cloneNavbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <!-- Menu -->
      <div id="cloneNavbarMenu" class="navbar-menu">
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
  <!-- /Cloned navbar -->
</template>

<script>
  import logoImage from '@/assets/images/logo/krypton.svg'
  import $ from 'jquery'

  export default {
    data() {
      return {
        logoImage
      }
    }
  }

  $(document).ready(function() {
    "use strict";
    //Navbar Clone
    if ($('#navbar-clone').length) {
      $(window).scroll(function () {    // this will work when your window scrolled.
        let height = $(window).scrollTop();  //getting the scrolling height of window
        if (height > 50) {
          $("#navbar-clone").addClass('is-active');
        } else {
          $("#navbar-clone").removeClass('is-active');
        }
      });
    }

    //Mobile menu toggle
    if ($('.navbar-burger').length) {
      $('.navbar-burger').on("click", function () {

        var menu_id = $(this).attr('data-target');
        $(this).toggleClass('is-active');
        $("#" + menu_id).toggleClass('is-active');
        $('.navbar.is-light').toggleClass('is-dark-mobile')
      });
    }
  });
  console.log('[IN] navbar clone');
</script>
