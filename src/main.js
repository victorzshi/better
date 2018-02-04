import Vue from 'vue'
import Navbar from './Navbar.vue'
import Home from './Home.vue'
import Social from './Social.vue'
import NotFound from './NotFound.vue'

// Basic routing
const notFoundPage = NotFound
const homePage = Home
const socialPage = Social

const routes = {
  '/better-web/': homePage,
  '/better-web/home': homePage,
  '/better-web/social': socialPage
}

// Rendering

new Vue({
  el: '#navbar',
  render: h => h(Navbar)
})

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || notFoundPage
    }
  },
  created: function() {
    console.log("currentRoute: " + window.location.pathname)
  },
  render (h) { return h(this.ViewComponent) }
})
