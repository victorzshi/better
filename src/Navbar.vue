<template>
  <div id="navbar">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">

      <div class="navbar-brand">
        <a class="navbar-item" :href="getHomeLink">
          <img id="brandLogo" src="./assets/logo.png" alt="Better: a social platform for your personal invesment.">
        </a>
      </div>

      <!-- Left side of navbar -->
      <!-- <div class="navbar-start">
        
      </div> -->

      <!-- Right side of navbar -->
      <div class="navbar-end">
        <a class="navbar-item" :href="getSocialLink">
          <a class="navbar-item">
            <img class="navIcons" src="./assets/social_icon.png">
          </a>
        </a>
        <a class="navbar-item" v-on:click="openModal('help')">
          <a class="navbar-item">
            <img class="navIcons" src="./assets/info_icon.png">
          </a>
        </a>
        <a class="navbar-item" v-on:click="openModal('account')">
          <a class="navbar-item">
            <img class="navIcons" src="./assets/profile_icon.png">
          </a>
        </a>
      </div>
    </nav>

    <!-- The nav modals -->
    <NavHelp :visible="modals.help" v-on:closeModal="closeModal('help')"></NavHelp>
    <NavAccount :visible="modals.account" v-on:closeModal="closeModal('account')"></NavAccount>

  </div>
</template>

<script>
import NavHelp from './NavHelp.vue'
import NavAccount from './NavAccount.vue'

export default {
  name: 'navbar',
  components: {
    NavHelp,
    NavAccount
  },
  data () {
    return {
      websiteLink: 'http://localhost:8080',
      homeLink: '/home',
      socialLink: '/social',
      modals:{
        help: false,
        account: false,
      }
    }
  },
  computed: {
    getHomeLink: function () {
      return this.websiteLink.concat(this.homeLink)
    },
    getSocialLink: function () {
      return this.websiteLink.concat(this.socialLink)
    }
  },
  methods: {
    openModal: function (name) {
      this.modals[name] = true;
    },
    closeModal: function (name) {
      this.modals[name] = false;
    }
  }
}
</script>

<style>

.navbar-item #brandLogo {
    height: 136px;
    width: 240px;
}

.navIcons {
  max-width: 100px;
  max-height: 100px;
}

a.navbar-item:hover {
  background-color: transparent;
}

.navbar-item img {
    max-height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
