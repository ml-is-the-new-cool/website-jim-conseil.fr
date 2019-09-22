<template>
  <div>
    <div :class="{'is-active': isLoading}"
         class="pageloader is-theme"></div>
    <div :class="{'is-active': isLoading}"
         class="infraloader"></div>
  </div>
</template>

<script>
    export default {
        name: 'page-loader',

        computed: {
            isLoading() {
                return this.$store.state.isLoading;
            }
        },

        mounted() {
            let pageLoaderTimeout = setTimeout(() => {
                this.$store.commit('changeLoadingStatus', false);
                clearTimeout(pageLoaderTimeout);
            }, 500)
        }
    }

    /*
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
    });*/
</script>
