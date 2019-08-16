<template>
  <b-navbar class="is-black">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img :src="logoImage" alt="Junior Informatique Marseille"/>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" to="/about">
        About
      </b-navbar-item>

      <b-navbar-item tag="router-link" to="/services">
        Services
      </b-navbar-item>

      <b-navbar-item tag="router-link" to="/contact">
        Contact
      </b-navbar-item>
    </template>
  </b-navbar>
</template>


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
