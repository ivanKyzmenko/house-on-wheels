<template>
  <footer class="app-footer">
    <div class="app-footer__left">
      <div class="app-footer__left-content">
        <h2 class="app-footer__left-content__title">Let’s design together</h2>
        <div class="app-footer__left-content__text">One of the reasons we became interior designers in the first place was because we love collecting and then putting it all together. But when you’re designing your own house, the hardest thing is to finish it, as you’re always adding your next favourite thing, and finally there's no space left.</div>
        <button class="app-footer__left-content__btn">get addison now</button>
      </div>
    </div>
    <div class="app-footer__right">
      <div class="app-footer__right-top">
        <img src="http://addison.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/05/Addison-logo-3.png" alt="">
      </div>
      <div class="app-footer__right-middle">
        <h3 class="app-footer__right-middle__title">Contacts</h3>
        <ul class="app-footer__right-middle__list">
          <li class="app-footer__right-middle__list-item">Phone: <a href="tel:6124707008">(612) 470 -7008</a></li>
          <li class="app-footer__right-middle__list-item">Fax: (612) 746-7622</li>
          <li class="app-footer__right-middle__list-item">Email: <a href="mailto:gandglab7@gmail.com">gandglab7@gmail.com</a></li>
        </ul>
        <button class="app-footer__right-middle__btn">get an estimate</button>
      </div>
      <div class="app-footer__right-bottom">
        <div class="app-footer__right-bottom__menu">
          <router-link
            v-for="(link, i) in nav"
            :to="{ name: link.link }"
            v-bind:key="i"
            class="app-footer__right-bottom__menu-item"
          >
            {{link.title}}
          </router-link>
        </div>
        <div class="app-footer__right-bottom__copyright">Copyright by BOLD THEMES. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script>
import HeaderNav from './helpers/headerNav'

export default {
  name: 'MainFooter',
  data: () => ({
    nav: HeaderNav.NAVIGATION
  })
}
</script>
