<template>
  <div v-if="gallery" class="photo-gallery">
    <v-icon class="photo-gallery__close" @click="closeGallery">mdi-close</v-icon>

    <div @click="prevImg" class="photo-gallery__arrow photo-gallery__arrow-left">
      <v-icon class="photo-gallery__arrow-icon">mdi-chevron-left</v-icon>
    </div>

    <div @click="nextImg" class="photo-gallery__arrow photo-gallery__arrow-right">
      <v-icon class="photo-gallery__arrow-icon">mdi-chevron-right</v-icon>
    </div>

    <div class="photo-gallery__item"
         v-bind:class="{ 'photo-gallery__item-to-left' : activeClass === 'left',  'photo-gallery__item-to-right' : activeClass === 'right'}"
    >
        <img class="photo-gallery__item-img" :src="gallery.items[activeImg]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  props: ['gallery'],
  data: () => ({
    activeImg: null,
    activeClass: null
  }),
  mounted () {
    this.activeImg = this.gallery.index
  },
  methods: {
    closeGallery () {
      this.$emit('emitCloseGallery')
    },
    prevImg () {
      let vm = this
      this.activeClass = 'left'
      this.activeImg = this.activeImg === 0 ? this.gallery.items.length - 1 : --this.activeImg

      setTimeout(function () {
        vm.activeClass = null
      }, 300)
    },
    nextImg () {
      let vm = this
      this.activeClass = 'right'
      this.activeImg = this.gallery.items.length - 1 === this.activeImg ? 0 : ++this.activeImg
      setTimeout(function () {
        vm.activeClass = null
      }, 300)
    }
  }
}
</script>
