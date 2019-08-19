<template>
  <div class="roadmap-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-medium is-transparent">
      <div class="hero-head">
        <the-navbar></the-navbar>
      </div>
      <!--  -->
      <div class="hero-body has-text-centered">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="roadmap-image">
              <img :src="titleImage" alt="">
            </div>
            <h1 class="title is-2 is-light is-semibold is-spaced main-title">
              {{ $t('methodology.title') }}
            </h1>
            <h2 class="subtitle is-5 is-light is-thin">
              {{ $t('methodology.slogan') }}
            </h2>
            <!-- CTA -->
            <p>
              <router-link :to="$i18nRoute({ name: 'contact' })"
                 class="button k-button k-primary raised has-gradient is-fat is-bold">
                <span class="text">{{ $t('general.contact') }}</span>
                <span class="front-gradient"></span>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology section -->
    <section id="roadmap" class="main-timeline">
      <ul>
        <li v-for="item in $i18n.messages[$i18n.fallbackLocale].methodology.content">
          <div>
            <span class="item-title">{{ item.title }}</span>
            <span class="item-content">{{ item.content }}</span>
          </div>
        </li>
      </ul>
    </section>
    <!-- Methodology section -->
  </div>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar.vue'
  import titleImage from '@/assets/images/illustrations/world.svg'

  export default {
    name: 'methodology',
    components: {
      TheNavbar,
    },

    data() {
      return {
        titleImage
      }
    }
  }

  import $ from 'jquery'
  $(document).ready(function(){
    'use strict';
    // define variables
    let items = document.querySelectorAll(".main-timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  });
</script>
