// Vue dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

// Custom Vue components
import Home from './Home.vue'
import Social from './Social.vue'
import Navbar from './Navbar.vue'
import FooterDiv from './Footer.vue'
// import NotFound from './NotFound.vue'

// Routing
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/social/:channel', component: Social }
  ]
})

// Rendering
new Vue({
  el: '#app',
  router,
  components: {
    Navbar,
    FooterDiv
  },
  template: `
    <div id="app">
      <Navbar></NavBar>
      <router-view></router-view>
      <FooterDiv></FooterDiv>
    </div>
  `
})