<template>
  <footer class="krypton-footer">
    <div class="container">
      <!-- Logo -->
      <div class="footer-logo">
          <img class="rotating" :src="gradientImage" alt="">
          <div class="brand-name">JIM Conseil</div>
          <div class="brand-subtitle">Beaugossitude brought to another level</div>
      </div>

      <!-- Columns -->
      <div class="columns footer-columns is-vcentered">
        <div class="column is-4">
          <!-- Links group -->
          <ul class="footer-links">
            <li>
              <a href="#">Token</a>
            </li>

            <li>
              <a href="#">ICO</a>
            </li>

            <li>
              <a href="#">Roadmap</a>
            </li>
          </ul>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
        </div>
        <!-- Newsletter -->
        <div class="column is-4">
          <div class="subscribe-block">
            <form>
              <!-- Field -->
              <div class="control">
                <!-- Special input -->
                <input class="krypton-subscribe-input" type="email" name="email" placeholder="">
                <button class="subscribe-button">
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Links group -->
        <div class="column is-4">
          <ul class="footer-links">
            <li>
              <a href="#">Register</a>
            </li>

            <li>
              <a href="#">Media</a>
            </li>

            <li>
              <a href="#">Telegram</a>
            </li>
          </ul>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
          <p>fais voir bg</p>
        </div>
      </div>
      <!-- Copyright -->
      <p class="k-copyright">© 2019 | JIM Conseil. All Rights Reserved</p>
      <br>
      <!-- Made by -->
      <p class="coded-by">Designed and Coded by Hippolyte L. Debernardi & Toni Garcia</p>
    </div>
  </footer>
</template>

<script>
  import gradientImage from '@/assets/images/logo/krypton-gradient.svg';

  export default {
    data() {
      return {
        gradientImage
      }
    }
  }
</script>
