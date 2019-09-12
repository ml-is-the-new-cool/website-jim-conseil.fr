<template>
  <section>
    <div class="follow-us">
      <div data-aos="fade-up"
           data-aos-delay="100"
           data-aos-offset="100"
           data-aos-easing="ease-out-quart">
        <a :href="$t('university.link')" target="_blank">
          <img :src="logoAmidex" alt="AMU">
        </a>
      </div>

      <div data-aos="fade-up"
           data-aos-delay="200"
           data-aos-offset="100"
           data-aos-easing="ease-out-quart">
        <router-link :to="$i18nRoute({ name: 'contact' })">
          <img :src="logoMail" :alt="$t('links.pages.contact')" >
        </router-link>
      </div>

      <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="100" data-aos-easing="ease-out-quart">
        <a :href="$t('links.linkedin')" target="_blank">
          <svg aria-labelledby="simpleicons-linkedin-icon"
               role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title id="simpleicons-linkedin-icon">LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import logoAmidex from '@/assets/images/logos/amidex_blanc.png';
  import logoMail from '@/assets/images/logos/mail.png';

    export default {
        data() {
            return {
                logoAmidex,
                logoMail,
                //logoLinkedIn
            }
        }
    }
</script>
