<template>
  <div id="social">
    <section class="section">
      <div class="container">

        <div class="section">
          <h1 class="title has-text-centered">
            Current money in group pool: ${{ currentPoolMoney }}
          </h1>
        </div>

        <div class="column is-half is-offset-one-quarter">
          
          <GoalCard 
            v-for="(bet, index) in group"
            v-bind:key="bet.id"
            v-bind="bet"
          ></GoalCard>
          
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import GoalCard from './GoalCard.vue'

export default {
  name: 'social',
  components: {
    GoalCard
  },
  data () {
    return {
      currentPoolMoney: 50,
      group: [
        {
          id: 1,
          profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
          name: 'Victor',
          goal: 'Wake up early',
          betAmount: 10,
          deadline: 'Feb 30, 2018',
          progress: 5,
        },
        {
          id: 2,
          profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
          name: 'Jerry',
          goal: 'Eat healthy',
          betAmount: 5,
          deadline: 'Feb 10, 2018',
          progress: 60,
        },
        {
          id: 3,
          profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
          name: 'Clara',
          goal: '5k run 3 times/week',
          betAmount: 50,
          deadline: 'Aug 15, 2018',
          progress: 80,
        },
        {
          id: 4,
          profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
          name: 'Ray',
          goal: 'Meal prep every Sunday',
          betAmount: 20,
          deadline: 'Mar 4, 2018',
          progress: 45,
        }
      ],
    }
  },
  created: function() {
    // Set user info
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log("Successful response from StdLib")
        let slackResponse = JSON.parse(xmlhttp.responseText)
        console.log(slackResponse)
      }
      else if (xmlhttp.status == 403 || xmlhttp.status == 404) {
      }
    }
    // Get unique slack id for HTTP GET
    let groupId = window.location.pathname.split('/')
    console.log("Path names: " + groupId)
    groupId = groupId[groupId.length - 1]
    console.log("Social.vue Current group id: " + groupId)

    // Send request
    xmlhttp.open('GET', 'https://bigbetter.lib.id/betterdb@dev/getgroup/' + groupId);
    xmlhttp.send();
  },
}
</script>

<style>

body {
  background-color: lightgreen;
}

</style>
