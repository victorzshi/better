import Vue from 'vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import Home from './Home.vue'
import Social from './Social.vue'
import NotFound from './NotFound.vue'

// Basic routing
const notFoundPage = NotFound
const homePage = Home
const socialPage = Social

const routes = {
  '/': homePage,
  '/home': homePage,
  '/social': socialPage
}

// Rendering

new Vue({
  el: '#navbar',
  render: h => h(Navbar)
})

new Vue({
  el: '#footer',
  render: h => h(Footer)
})

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      // Seperate group id and get correct page
      this.currentRoute = this.currentRoute.split('/')
      this.currentRoute = '/' + this.currentRoute[1] 
      return routes[this.currentRoute] || notFoundPage
    }
  },
  render (h) { return h(this.ViewComponent) }
})
