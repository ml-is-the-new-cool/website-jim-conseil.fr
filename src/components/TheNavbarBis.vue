<template>
  <!-- Cloned navbar that comes in on scroll -->
  <nav id="navbar-clone" class="navbar is-fixed is-dark">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <a href="index.html" class="navbar-item">
          <img class="rotating" :src="logoImage" alt="">
          <span class="brand-name">Krypton</span>
        </a>
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
            <a class="is-centered-responsive" href="token.html">Token</a>
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
          <div class="navbar-item is-nav-link">
            <a href="#" class="button k-button k-primary raised has-gradient slanted">
              <span class="text">Register</span>
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

        if ($('.navbar-menu').hasClass('is-active')) {
            $('.navbar-menu').removeClass('is-active');
            $('.navbar').removeClass('is-dark-mobile');
        } else {
            $('.navbar-menu').addClass('is-active');
            $('.navbar').addClass('is-dark-mobile');
        }
      });
    }
  });
  console.log('[IN] navbar clone');
</script>
