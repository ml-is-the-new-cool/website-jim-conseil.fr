<template>
  <transition name="fade"
              :duration="1000"
              enter-active-class="pageloader is-theme infraloader is-active">
    <router-view/>
  </transition>
</template>

<script>
    export default {
        name: 'page-loader',
    }
</script>
