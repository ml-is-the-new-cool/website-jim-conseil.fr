<template>
  <!-- Cloned navbar that comes in on scroll -->
  <nav id="navbar-clone" class="navbar is-fixed is-dark">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <router-link :to="$i18nRoute({ name: 'home' })"
                     class="navbar-item">
          <img class="rotating" :src="logoImage" alt="JIM">
          <span class="brand-name mobile">
              Junior Informatique <br/> Marseille
            </span>
        </router-link>
        <!-- Responsive toggle -->
        <span class="navbar-burger burger"
              data-target="cloneNavbarMenu">
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
              <span class="text">
                {{ $t('links.pages.leaflet') }}
              </span>
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
    import logoImage from '@/assets/images/logo.png'
    import $ from 'jquery'

    export default {
        name: 'the-navbar-bis',
        data() {
            return {
                logoImage
            }
        },

        computed: {
            isMenuVisible() {
                return this.isBurgerActive;
            }
        },

        methods: {
            toggleMenu() {
                this.isBurgerActive = !this.isBurgerActive;
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

</script>
