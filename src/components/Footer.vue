<template>
  <footer class="hero is-small">
    <!-- Part 1 : navigation -->
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <img :src="logoImage" alt="JIM Conseil"/>
          <div class="columns">
            <div class="column">
              <span class="icon">
                <i class="fab fa-linkedin-in"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="column">
          <h1>À PORTÉE DE MAIN</h1>
          <hr style="height: 0.5px">
          <ul>
            <li><router-link to="/services">Prestations</router-link></li>
            <li><router-link to="/methodology">Methodology</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/legals">Mentions légales</router-link></li>
            <li><router-link to="/privacy-policy">Données personnelles</router-link></li>
          </ul>
        </div>
        <div class="column">
          <h1>RESTONS EN CONTACT</h1>
          <hr style="height: 0.5px">
          <p>Junior Informatique Marseille</p>
          <p>163, avenue de Luminy</p>
          <p>13009 Marseille</p>
          <p>contact@jim-conseil.fr</p>
          <b-button tag="router-link"
                    to="/contact"
                    style="width: 100%; ">
            Prendre contact
          </b-button>
        </div>
      </div>
    </div>

    <!-- Part 3 : contact -->
    <div class="hero-foot">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="level">
              <div class="level-left">
                <div class="content has-text-centered-mobile">
                  Copyrigth © 2019 Junior Informatique Marseille | Tous droits réservés.
                </div>
              </div>
              <div class="level-right">
                <div class="content has-text-centered-mobile">
                  Design et développement par JIM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  .hero-body {
    background-color: #585858;
    color: white;
  }
  .hero-foot {
    background-color: black;
    color: white;
    min-height: 50px;
    padding: 15px;
    font-size: 12px;
  }
</style>

<script>
import logoImage from '../assets/logo.png';

export default {
  data() {
    return {
      logoImage,
    };
  },
};
</script>
