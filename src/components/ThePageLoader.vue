<template>
  <div>
    <div class="pageloader is-theme"></div>
    <div class="infraloader is-active"></div>
  </div>
</template>

<script>
  import $ from 'jquery'

  $(document).ready(function() {
    "use strict";
    //Page loader
    if ($('.pageloader').length) {
      $('.pageloader').toggleClass('is-active');

      $(window).on('load', function() {
        let pageloaderTimeout = setTimeout( function() {
          $('.pageloader').toggleClass('is-active');
          $('.infraloader').toggleClass('is-active');
          clearTimeout( pageloaderTimeout );
        }, 500 );
      })
    }
  });

  export default {
    name: 'page-loader'
  }
</script>
