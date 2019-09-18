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
          <h3
            @click="changeActiveMenu('home')"
            v-bind:class="{'app-header__menu-inside__item-title__active' : menu === 'home'}"
            class="app-header__menu-inside__item-title"
          >
            Home
          </h3>
          <ul v-if="!mobileScreen || mobileScreen && menu === 'home'" class="app-header__menu-inside__item-list">
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
              <h3
                @click="changeActiveSubMenu('sub')"
                v-bind:class="{'app-header__menu-inside__item-list__item-sub__link-active' : menu === 'sub'}"
                class="app-header__menu-inside__item-list__item-sub__link"
              >
                Sub
              </h3>

              <ul v-if="!mobileScreen || mobileScreen && subMenu === 'sub'" class="app-header__menu-inside__item-list__item-sub__list">
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
          <h3
            @click="changeActiveMenu('gallery')"
            v-bind:class="{'app-header__menu-inside__item-title__active' : menu === 'gallery'}"
            class="app-header__menu-inside__item-title"
          >
            Gallery
          </h3>
          <ul v-if="!mobileScreen || mobileScreen && menu === 'gallery'" class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
          </ul>
        </div>
        <div class="app-header__menu-inside__item">
          <h3
            @click="changeActiveMenu('plans')"
            v-bind:class="{'app-header__menu-inside__item-title__active' : menu === 'plans'}"
            class="app-header__menu-inside__item-title"
          >
            Plans
          </h3>
          <ul v-if="!mobileScreen || mobileScreen && menu === 'plans'" class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
          </ul>
        </div>
        <div class="app-header__menu-inside__item">
          <h3
            @click="changeActiveMenu('financing')"
            v-bind:class="{'app-header__menu-inside__item-title__active' : menu === 'financing'}"
            class="app-header__menu-inside__item-title"
          >
            Financing
          </h3>
          <ul v-if="!mobileScreen || mobileScreen && menu === 'financing'" class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
          </ul>
        </div>
        <div class="app-header__menu-inside__item">
          <h3
            @click="changeActiveMenu('inventory')"
            v-bind:class="{'app-header__menu-inside__item-title__active' : menu === 'inventory'}"
            class="app-header__menu-inside__item-title"
          >
            Invertory
          </h3>
          <ul v-if="!mobileScreen || mobileScreen && menu === 'inventory'" class="app-header__menu-inside__item-list">
            <li class="app-header__menu-inside__item-list__item">
              <a class="app-header__menu-inside__item-list__item-link" href="">regular menu</a>
            </li>
          </ul>
        </div>
        <div class="app-header__menu-inside__item">
          <h3
            @click="changeActiveMenu('faq')"
            v-bind:class="{'app-header__menu-inside__item-title__active' : menu === 'faq'}"
            class="app-header__menu-inside__item-title"
          >
            FAQ
          </h3>
          <ul v-if="!mobileScreen || mobileScreen && menu === 'faq'" class="app-header__menu-inside__item-list">
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
    subMenu: null,
    fixedState: false,
    mobileScreen: false
  }),
  mounted () {
    this.initMobileScreen()
    window.addEventListener('resize', this.initMobileScreen)
    window.addEventListener('scroll', this.scrollHandler)
  },
  methods: {
    initMobileScreen () {
      this.mobileScreen = window.innerWidth < 1200
    },
    scrollHandler () {
      this.fixedState = window.scrollY > 96
    },
    changeActiveMenu (menu) {
      this.menu = this.menu === menu ? null : menu
      this.subMenu = null
    },
    changeActiveSubMenu (subMenu) {
      this.subMenu = this.subMenu === subMenu ? null : subMenu
    }
  }
}
</script>
