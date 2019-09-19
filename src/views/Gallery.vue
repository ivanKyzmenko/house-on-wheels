<template>
  <div class="app-content-gallery">
    <div class="app-content-gallery__carousel">
      <v-carousel height="100%">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <contact-us></contact-us>
  </div>
</template>

<script>
import ContactUs from '../components/ContactUs'

export default {
  name: 'gallery',
  components: {
      ContactUs
  },
  data: () => ({
    items: [
      {
        src: '/../img/gallery/gallery_1.jpg'
      },
      {
        src: '/../img/gallery/gallery_2.jpg'
      },
      {
        src: '/../img/gallery/gallery_3.jpg'
      },
      {
        src: '/../img/gallery/gallery_4.jpg'
      },
      {
        src: '/../img/gallery/gallery_5.jpg'
      },
      {
        src: '/../img/gallery/gallery_6.jpg'
      },
      {
        src: '/../img/gallery/gallery_7.jpg'
      },
      {
        src: '/../img/gallery/gallery_8.jpg'
      },
      {
        src: '/../img/gallery/gallery_9.jpg'
      },
      {
        src: '/../img/gallery/gallery_10.jpg'
      },
      {
        src: '/../img/gallery/gallery_11.jpg'
      },
      {
        src: '/../img/gallery/gallery_12.jpg'
      },
      {
        src: '/../img/gallery/gallery_13.jpg'
      },
      {
        src: '/../img/gallery/gallery_14.jpg'
      },
      {
        src: '/../img/gallery/gallery_15.jpg'
      },
      {
        src: '/../img/gallery/gallery_16.jpg'
      },
      {
        src: '/../img/gallery/gallery_17.jpg'
      },
      {
        src: '/../img/gallery/gallery_18.jpg'
      },
      {
        src: '/../img/gallery/gallery_19.jpg'
      },
      {
        src: '/../img/gallery/gallery_20.jpg'
      },
      {
        src: '/../img/gallery/gallery_21.jpg'
      },
      {
        src: '/../img/gallery/gallery_22.jpg'
      },
      {
        src: '/../img/gallery/gallery_23.jpg'
      },
      {
        src: '/../img/gallery/gallery_24.jpg'
      }
    ]
  })
}
</script>

<style lang="scss">
  .v-window__next {
    right: 0;
  }
</style>
