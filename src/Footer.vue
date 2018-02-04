<template>
  <div id="footer">
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-3 is-offset-6">
            <div class="content has-text-left">
              <p class="section subtitle">
                <a href="#">About</a>
              </p>
              <p class="section subtitle">
                <a href="#">Contact</a>
              </p>
            </div>
          </div>
          <div class="column is-3">
            <div class="content has-text-left">
              <p class="section subtitle">
                <a href="#">Careers</a>
              </p>
              <p class="section subtitle">
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
  name: 'footer',
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

.footer {
  background-color: #00d1b2;
}

p a {
  color: white;
}

</style>
