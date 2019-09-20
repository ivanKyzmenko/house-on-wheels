<template>
  <div class="app-content-home">

    <div class="app-content-home__about">
      <div class="app-content-home__about-content">
        <h1 class="app-content-home__about-content__title">About us</h1>
        <div class="app-content-home__about-content__text">We are a midwest family owned business that cares about teh customers needs. We are open to build custom trailers by your personal plan</div>
      </div>
    </div>

    <div class="app-content-home__services">
      <div class="app-content-home__services-left">
        <h1 class="app-content-home__services-left__title">List <br> of services </h1>
        <div class="app-content-home__services-left__text">We are a midwest family owned business that cares about teh customers needs. We are open to build custom trailers by your personal plan</div>
      </div>

      <div class="app-content-home__services-right">
        <div class="app-content-home__services-right__item">
          <v-icon class="app-content-home__services-right__item-icon">mdi-caravan</v-icon>
          <h3 class="app-content-home__services-right__item-title">Food Trailer</h3>
        </div>
        <div class="app-content-home__services-right__item">
          <v-icon class="app-content-home__services-right__item-icon">mdi-bus-school</v-icon>
          <h3 class="app-content-home__services-right__item-title">Food Truck</h3>
        </div>
        <div class="app-content-home__services-right__item">
          <v-icon class="app-content-home__services-right__item-icon">mdi-face-agent</v-icon>
          <h3 class="app-content-home__services-right__item-title">Service</h3>
        </div>
      </div>
    </div>

    <contact-us></contact-us>

  </div>
</template>

<script>
import ContactUs from '../components/ContactUs'

export default {
  name: 'footer',
  components: {
    ContactUs
  },
  data: () => ({
  })
}
</script>
