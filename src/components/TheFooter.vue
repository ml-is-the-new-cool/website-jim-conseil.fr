<template>
  <footer class="krypton-footer">
    <div class="container">
      <!-- Logo -->
      <div class="footer-logo">
        <img class="" :src="gradientImage" alt="">
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
            </li>
            <li>
              <router-link :to="$i18nRoute({ name: 'methodology' })"
                           class="is-centered-responsive">
                Methodologie
              </router-link>
            </li>
            <li>
              <router-link :to="$i18nRoute({ name: 'about' })"
                           class="is-centered-responsive">
                A propos
              </router-link>
            </li>
            <li>
              <router-link :to="$i18nRoute({ name: 'contact' })"
                           class="is-centered-responsive">
                Contact
              </router-link>
            </li>
            <br/>
            <li>
              <router-link :to="$i18nRoute({ name: 'legals' })"
                           class="is-centered-responsive">
                Mentions légales
              </router-link>
            </li>
          </ul>
        </div>
        <!-- Newsletter -->
        <div class="column is-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.958302723137!2d5.4368435157849575!3d43.23133387913804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b90075c160ef%3A0xdbf867e33fcc86a0!2s163%20Avenue%20de%20Luminy%2C%2013009%20Marseille!5e0!3m2!1sfr!2sfr!4v1567862380822!5m2!1sfr!2sfr" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
