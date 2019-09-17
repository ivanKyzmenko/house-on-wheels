<template>
  <header class="app-header app-header__fixed">
    <div class="app-header__logo" >
      <div class="app-header__logo-inside">
        <img src="http://addison.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/05/Addison-logo-3.png"
             alt="logo" title="addison">
      </div>
    </div>
    <div class="app-header__menu" v-bind:class="{'app-header__menu-fixed' : fixedState}">
      <div class="app-header__menu-inside">
        <div class="app-header__menu-inside__item">
          <h3 class="app-header__menu-inside__item-title">Home</h3>
          <ul class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
            <li class="app-header__menu-inside__item-list__item app-header__menu-inside__item-list__item-sub">
              <h3 class="app-header__menu-inside__item-list__item-sub__link">Sub menu</h3>

              <ul class="app-header__menu-inside__item-list__item-sub__list">
                <li class="app-header__menu-inside__item-list__item-sub__list-item">
                  <a href="" class="app-header__menu-inside__item-list__item-sub__list-item__link">sub menu link #1</a>
                </li>
                <li class="app-header__menu-inside__item-list__item-sub__list-item">
                  <a href="" class="app-header__menu-inside__item-list__item-sub__list-item__link">sub menu link #2</a>
                </li>
              </ul>

            </li>
          </ul>
        </div>
        <div class="app-header__menu-inside__item">
          <a class="app-header__menu-inside__item-title">Gallery</a>
          <ul class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
          </ul>
        </div>
        <div class="app-header__menu-inside__item">
          <a class="app-header__menu-inside__item-title">Plans</a>
          <ul class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
          </ul>
        </div>
        <div class="app-header__menu-inside__item">
          <a class="app-header__menu-inside__item-title">Financing</a>
          <ul class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
          </ul>
        </div>
        <div class="app-header__menu-inside__item">
          <a class="app-header__menu-inside__item-title">Invertory</a>
          <ul class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
          </ul>
        </div>
        <div class="app-header__menu-inside__item">
          <a class="app-header__menu-inside__item-title">FAQ</a>
          <ul class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  components: {
  },
  data: () => ({
    menu: null,
    submenu: null,
    fixedState: false
  }),
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollHandler () {
      this.fixedState = window.scrollY > 96
    }
  }
}
</script>
