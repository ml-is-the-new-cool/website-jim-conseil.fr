<template>
  <footer class="custom-footer">
    <div class="container">
      <!-- Logo -->
      <div class="footer-logo">
        <div class="brand-name">{{ $t('general.name') }}</div>
        <div class="brand-subtitle">{{ $t('general.slogan') }}</div>
      </div>

      <!-- Columns -->
      <div class="columns footer-columns is-vcentered">
        <div class="column is-4">
          <!-- Nav links group -->
          <ul class="footer-links">
            <li>
              <router-link :to="$i18nRoute({ name: 'home' })">
                {{ $t('links.pages.home') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$i18nRoute({ name: 'services' })">
                {{ $t('links.pages.services') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$i18nRoute({ name: 'about' })">
                {{ $t('links.pages.about') }}
              </router-link>
            </li>
            <li>
              <a :href="'mailto:' + $t('links.mail') + '?subject=[website] Prise de contact'">
                {{ $t('links.pages.contact') }}
              </a>
            </li>
            <li>
              <router-link :to="$i18nRoute({ name: 'legals' })">
                {{ $t('links.pages.legals') }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="column is-4">
          <p v-for="(paragraph, index) in $t('links.address')"
             v-bind:key="index">
            {{ paragraph }}
          </p>
          <br/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.958302723137!2d5.4368435157849575!3d43.23133387913804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b90075c160ef%3A0xdbf867e33fcc86a0!2s163%20Avenue%20de%20Luminy%2C%2013009%20Marseille!5e0!3m2!1sfr!2sfr!4v1567862380822!5m2!1sfr!2sfr"
                  width="800" height="800" allowfullscreen title="GoogleMaps"
                  rel=dns-prefetch>
          </iframe>
        </div>

        <!-- Social media links group -->
        <div class="column is-4">
          <ul class="footer-links">
            <li>
              <a :href="$t('links.linkedin')"
                 target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <a :href="$t('university.link')"
                 target="_blank" rel="noreferrer">
                {{ $t('university.title') }}
              </a>
            </li>
            <li>
              <a href="https://avis-situation-sirene.insee.fr/"
                 target="_blank" rel="noreferrer">
                SIREN : {{ $t('links.siren') }}
              </a>
            </li>
            <li>
              <a href="./../plaquette.pdf" target="_blank"
                 class="button k-button k-primary has-gradient is-fat">
                <span class="text">
                  {{ $t('links.pages.leaflet') }}
                </span>
                <span class="front-gradient"></span>
              </a>
            </li>
            <li>
              <a href="./../adhesion.pdf" target="_blank"
                 class="button k-button k-primary has-gradient is-fat">
                <span class="text">
                  {{ $t('links.pages.membership') }}
                </span>
                <span class="front-gradient"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <p class="copyright">{{ $t('links.copyrights') }}</p>
    </div>
  </footer>
</template>

<script>
    export default {
        name: 'the-footer'
    }
</script>
