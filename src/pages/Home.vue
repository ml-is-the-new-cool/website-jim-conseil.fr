<template>
  <div class="dark-wrapper">
    <!-- Landing page Hero -->
    <section class="hero is-fullheight landing-background">
      <div class="hero-head">
        <the-navbar/>
        <the-navbar-bis/>
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
        <div class="columns is-multiline">
          <div v-for="(paragraph) in $t('about.description')"
               :key="paragraph" class="column is-offset-2 is-8">
            <h4 class="subtitle is-6 is-light has-text-centered">
              {{ paragraph }}
            </h4>
            <br/>
          </div>
        </div>
      </div>
    </section>
    <!-- /Side Features section -->

    <!-- Key numbers -->
    <div class="divider is-centered"></div>
    <div class="content-wrapper is-large container">
      <div class="columns is-vcentered">
        <!-- Feature -->
        <div v-for="(one_key_number, index) in $t('key_numbers.content')"
             :key="index"
             class="column is-3 has-text-centered">
          <div data-aos="fade-up" :data-aos-delay="200*index"
               data-aos-offset="200" data-aos-easing="ease-out-quart"
               class="feature">
            <h1 class="title is-tight is-light">
              {{ one_key_number.number }}
            </h1>
            <h4 class="title is-6 is-tight is-light">
              {{ one_key_number.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>

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

  </div>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar.vue';
    import TheNavbarBis from '@/components/TheNavbarBis.vue';

    export default {
        name: 'home',

        metaInfo() {
            return {
                title: this.$i18n.t('links.pages.home'),
            }
        },

        components: {
            TheNavbar,
            TheNavbarBis
        },

        methods: {
            isElementInViewport(el) {
                let rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            },

            callbackFunc() {
                for (let i = 0; i < this.items.length; i++) {
                    if(this.isElementInViewport(this.items[i]))
                        this.items[i].classList.add("in-view");
                    else
                        this.items[i].classList.remove("in-view");
                }
            }
        },

        mounted() {
            this.items = document.querySelectorAll(".main-timeline li")
        },

        created() {
            window.addEventListener("scroll", this.callbackFunc);
        },
        destroyed() {
            window.removeEventListener("scroll", this.callbackFunc);
        }
    }
</script>
