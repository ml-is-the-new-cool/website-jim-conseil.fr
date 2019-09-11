<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-fullheight is-transparent">
      <div class="hero-head">
        <the-navbar></the-navbar>
        <the-navbar-bis></the-navbar-bis>
      </div>
      <!-- Animated particles -->
      <!-- https://vue-particles.netlify.com -->

      <!-- Hero Image and Title -->
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">

            <!-- Landing page Title -->
            <div class="column landing-caption has-text-centered">
              <h1 class="title is-light main-title">
                {{ $t('general.name') }}
              </h1>
              <h2 class="subtitle is-light is-thin">
                {{ $t('general.slogan') }}
              </h2>
              <!-- CTA -->
              <!--p>
                <a href="#start" class="button k-button k-primary raised has-gradient is-fat is-bold">
                  <span class="text"></span>
                  <span class="front-gradient"></span>
                </a>
              </p-->

            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- /Landing page Hero -->

    <!-- Side Features section -->
    <section class="section is-transparent">
      <!-- Container -->
      <div class="container">
        <!-- Divider -->
        <div class="divider is-centered"></div>
        <!-- Title & subtitle -->
        <h2 class="title is-light is-semibold has-text-centered is-spaced">
          {{ $t('about.title') }}
        </h2>
        <div v-for="(paragraph) in $t('about.description')"
             :key="paragraph">
          <h4 class="subtitle is-6 is-light has-text-centered is-compact">
            {{ paragraph }}
          </h4>
          <br/>
        </div>
      </div>
    </section>
    <!-- /Side Features section -->

    <!-- Methodology section -->

    <div class="roadmap-wrapper">
      <section class="main-timeline">
        <div class="container">
          <!-- Divider -->
          <div class="divider is-centered"></div>
          <!-- Title & subtitle -->
          <h2 class="title is-light is-semibold has-text-centered is-spaced">
            {{ $t('methodology.title') }}
          </h2>
          <br/>
        </div>

        <div>
          <ul>
            <li v-for="item in $t('methodology.content')"
                :key="item.step">
              <div>
                <span class="item-title">{{ item.title }}</span>
                <span class="item-content">{{ item.content }}</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <!-- Methodology section -->

    <the-links-bar/>

  </div>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar.vue';
    import TheNavbarBis from '@/components/TheNavbarBis.vue';
    import TheLinksBar from '@/components/TheLinksBar.vue';

    export default {
        name: 'home',
        components: {
            TheNavbar,
            TheNavbarBis,
            TheLinksBar
        },
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
