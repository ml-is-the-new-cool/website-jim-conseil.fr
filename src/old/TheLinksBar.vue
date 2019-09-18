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
          <img :src="logoLinkedIn" :alt="$t('links.linkedin')" >
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import logoAmidex from '@/assets/images/logos/amidex_blanc.png';
  import logoMail from '@/assets/images/logos/mail.png';
  import logoLinkedIn from '@/assets/images/logos/linkedin.png';

    export default {
        data() {
            return {
                logoAmidex,
                logoMail,
                logoLinkedIn
            }
        }
    }
</script>
