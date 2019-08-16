<template>
  <div class="animated fadeIn">
    about

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.7338794502816!2d5.437637143270699!3d43.230232617000475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b9ac4de888d7%3A0x35aa62955b153ea2!2sBiblioth%C3%A8que+universitaire+Hexagone+de+Luminy!5e0!3m2!1sfr!2sfr!4v1565800078954!5m2!1sfr!2sfr"
            width="800"
            height="600"
            frameborder="0"
            style="border:0"
            allowfullscreen>
    </iframe>
  </div>
</template>

<style>
  .googlemap {
        position: relative;
        padding-bottom: 75%; /* 4:3 ratio*/
        height: 0;
        overflow: hidden;
}

.googlemap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'about',
  components: {
    // HelloWorld,
  },
};
</script>
