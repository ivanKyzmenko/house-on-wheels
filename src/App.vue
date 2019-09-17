<template>
  <div id="app">
    <main class="app">

      <main-header></main-header>

      <router-view class="app-content"></router-view>

      <main-footer></main-footer>

    </main>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'home',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="scss">
  @import 'styles/main.scss';
  * {
    font-family: 'Montserrat Light', sans-serif;
  }
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    &-content {
      padding-top: 178px;
      flex-grow: 2;
      height: 1200px;
      background: lightgrey;
      text-align: center;
    }
  }

  @media all and (max-width: 1200px) {
    .app {
      &-content {
        padding-top: 100px;
      }
    }
  }
</style>
