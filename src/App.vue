<template>
  <div id="app">
    <main class="app">

      <main-header></main-header>

      <div class="app-content">
        <router-view></router-view>
      </div>

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
