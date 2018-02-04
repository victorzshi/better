<template>
  <div id="footerDiv">
    <footer>
      <div class="container">
        <div class="columns">
          <div class="column is-3 is-offset-6">
            <div class="content has-text-left">
              <p class="subtitle">
                <a href="#">About</a>
              </p>
              <p class="subtitle">
                <a href="#">Contact</a>
              </p>
            </div>
          </div>
          <div class="column is-3">
            <div class="content has-text-left">
              <p class="subtitle">
                <a href="#">Careers</a>
              </p>
              <p class="subtitle">
                <a href="#">Privacy & Security</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footerDiv',
  data () {
    return {
      websiteLink: 'http://localhost:8080',
      homeLink: '/home',
      socialLink: '/social',
    }
  }
}
</script>

<style>

footer {
  background-color: #74B774;
  padding: 2%;
}

p a {
  color: white;
}

</style>
