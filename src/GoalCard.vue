<template>
  <div id="goalcard" class="section">

    <article class="media">
      <figure class="media-left">
        <p id="" class="image is-128x128">
          <img id="profilePicture" :src="profilePicture">
        </p>
        <p class="has-text-centered">
          <strong>{{ name }}</strong>
        </p>                
      </figure>
      <div class="media-content">
        <div class="content">
          <p class="subtitle">
            <strong>{{ goal }}</strong> 
          </p>
          <div class="columns">
            <div class="column is-half">
              <p class="is-size-5">
                Due: {{ deadline }}
                <br>
                12pm
              </p>
              
            </div>
            <div class="column is-3 has-text-centered">
              <p class="is-size-1">
                ${{ betAmount }} 
              </p>
              
            </div>
            <div class="column is-3 has-text-centered">
              <p class="is-size-4">
                Owes ${{ betAmount }} 
              </p>
              
            </div>
          </div>
          <progress class="progress is-success" :value="progress"  max="100"></progress>
        </div>
      </div>
    </article>

  </div>
</template>

<script>
export default {
  name: 'goalcard',
  props: [
    'id', 
    'profilePicture', 
    'name',
    'goal',
    'betAmount',
    'deadline',
    'progress'
  ]
}
</script>

<style>

#profilePicture {
  border-radius: 100%;
  border-style: solid;
  border-color: green;
  border-width: 8px;
}

div .columns {
  max-width: 100%;
}

.section {
    padding: 1rem 0.5rem;
}

.content p:not(:last-child) {
  margin-bottom: 0.5rem;
}

</style>

<!-- Buttons for liking and replying (extra) -->
<!-- 
<nav class="level is-mobile">
  <div class="level-left">
    <a class="level-item">
      <span class="icon is-small"><i class="fas fa-heart"></i></span>
    </a>
    <a class="level-item">
      <span class="icon is-small"><i class="fas fa-reply"></i></span>
    </a>
  </div>
</nav> 
-->