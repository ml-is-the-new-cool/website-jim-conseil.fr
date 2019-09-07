<template>
  <footer class="krypton-footer">
    <div class="container">
      <!-- Logo -->
      <div class="footer-logo">
        <img class="rotating" :src="gradientImage" alt="">
        <div class="brand-name">{{ $t('general.name') }}</div>
        <div class="brand-subtitle">{{ $t('general.slogan') }}</div>
      </div>

      <!-- Columns -->
      <div class="columns footer-columns is-vcentered">
        <div class="column is-4">
          <!-- Links group -->
          <ul class="footer-links">
            <li>
              <router-link :to="$i18nRoute({ name: 'home' })"
                           class="is-centered-responsive">
                Accueil
              </router-link>
            </li>
            <li>
              <router-link :to="$i18nRoute({ name: 'services' })"
                           class="is-centered-responsive">
                Prestations
              </router-link>
            </li>            <li>
            <router-link :to="$i18nRoute({ name: 'methodology' })"
                         class="is-centered-responsive">
              Methodologie
            </router-link>
          </li>            <li>
            <router-link :to="$i18nRoute({ name: 'about' })"
                         class="is-centered-responsive">
              A propos
            </router-link>
          </li>            <li>
            <router-link :to="$i18nRoute({ name: 'contact' })"
                         class="is-centered-responsive">
              Contact
            </router-link>
          </li>
          </ul>
        </div>
        <!-- Newsletter -->
        <div class="column is-4">
          <google-map />
        </div>
        <!-- Links group -->
        <div class="column is-4">
          <ul class="footer-links">
            <li>
              <a>UFR Sciences<br/>163, avenue de Luminy<br/>13009 Marseille</a>
            </li>
            <br/>
            <li>
              <a>Linkedin</a>
            </li>
            <br/>
            <a class="button k-button k-primary raised has-gradient is-fat is-bold">
              <span class="text">Restons en contact !</span>
              <span class="front-gradient"></span>
            </a>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <p class="k-copyright">© 2019 | Junior Informatique Marseille. All Rights Reserved</p>
      <br>
      <!-- Made by -->
      <p class="coded-by">Designed and Coded by Hippolyte L. Debernardi & Toni Garcia</p>
    </div>
  </footer>
</template>

<script>
    import gradientImage from '@/assets/images/logo.png';
    import GoogleMap from "@/components/GoogleMap.vue";

    export default {
        components: {
            GoogleMap
        },
        data() {
            return {
                gradientImage
            }
        }
    }
</script>
