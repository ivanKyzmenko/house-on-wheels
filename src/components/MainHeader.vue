<template>
  <header class="app-header app-header__fixed">
    <div class="app-header__logo" >
      <div class="app-header__logo-inside">
        <div @click="mobileMenu = !mobileMenu" class="app-header__menu-trigger" v-bind:class="{ 'app-header__menu-trigger__active' : !mobileMenu}">
          <span class="app-header__menu-trigger__item"></span>
        </div>
        <img src="http://addison.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/05/Addison-logo-3.png"
             alt="logo" title="addison">
      </div>
    </div>
    <transition name="slide-top">
      <div class="app-header__menu" v-if="mobileMenu && mobileScreen || !mobileScreen" v-bind:class="{'app-header__menu-fixed' : fixedState}">
        <div class="app-header__menu-inside">
          <div v-for="(item, i) in nav" v-bind:key="i" class="app-header__menu-inside__item">
            <router-link
              exact
              :to="{ name: item.link }"
              v-bind:class="{'app-header__menu-inside__item-title__active' : menu === item.id}"
              class="app-header__menu-inside__item-title"
            >
              {{item.title}}
              <div v-if="item.menu" @click.prevent="changeActiveMenu(item.id)" class="app-header__menu-inside__item-title__arrow"></div>
            </router-link>
            <ul v-if="!mobileScreen && item.menu || mobileScreen && item.menu && menu === item.id" class="app-header__menu-inside__item-list">
              <template v-for="(navItem, j) in item.menu">
                <li v-if="!navItem.submenu" v-bind:key="j" class="app-header__menu-inside__item-list__item">
                  <a class="app-header__menu-inside__item-list__item-link" :href="navItem.link">{{navItem.title}}</a>
                </li>

                <li v-if="navItem.submenu" v-bind:key="j" class="app-header__menu-inside__item-list__item app-header__menu-inside__item-list__item-sub">
                  <a
                    :href="navItem.link"
                    v-bind:class="{'app-header__menu-inside__item-list__item-sub__link-active' : subMenu === navItem.id}"
                    class="app-header__menu-inside__item-list__item-sub__link"
                  >
                    <div @click.prevent="changeActiveSubMenu(navItem.id)" class="app-header__menu-inside__item-list__item-sub__link-arrow"></div>
                    {{navItem.title}}
                  </a>

                  <ul v-if="!mobileScreen || mobileScreen && subMenu === navItem.id" class="app-header__menu-inside__item-list__item-sub__list">
                    <li v-for="(navSubItem, k) in navItem.submenuList" v-bind:key="k" class="app-header__menu-inside__item-list__item-sub__list-item">
                      <a href="" class="app-header__menu-inside__item-list__item-sub__list-item__link">{{navSubItem.title}}</a>
                    </li>
                  </ul>

                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import HeaderNav from './helpers/headerNav'

export default {
  name: 'header',
  components: {
  },
  data: () => ({
    nav: HeaderNav.NAVIGATION,
    menu: null,
    subMenu: null,
    mobileMenu: false,
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
      console.log(this.subMenu)
    }
  }
}
</script>
