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
          <span class="navbar-burger burger"
                data-target="navbarMenu">
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
            <!-- Sign up -->
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

    //Mobile menu toggle
    if ($('.navbar-burger').length) {
      $('.navbar-burger').on("click", function () {

        var menu_id = $(this).attr('data-target');
        $(this).toggleClass('is-active');
        $("#" + menu_id).toggleClass('is-active');
        $('.navbar.is-light').toggleClass('is-dark-mobile')
      });
    }

    //Highlight current page navbar menu item
    if ($('.navbar').length) {
      // Get current page URL
      let url = window.location.href;

      // remove # from URL
      url = url.substring(0, (url.indexOf("#") === -1) ? url.length : url.indexOf("#"));

      // remove parameters from URL
      url = url.substring(0, (url.indexOf("?") === -1) ? url.length : url.indexOf("?"));

      // select file name
      url = url.substr(url.lastIndexOf("/") + 1);

      // If file name not available
      if(url === ''){
        url = 'home';
      }

      // Loop all menu items
      $('.navbar .navbar-item a').each(function(){
        // select href
        let href = $(this).attr('href');

        // Check filename
        if(url === href){
          // Add active class
          $(this).addClass('is-active');
        }
      });
    }

    console.log('[IN] thenavbar init')
  });
</script>
