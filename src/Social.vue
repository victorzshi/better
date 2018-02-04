<template>
  <div>
    <section class="section">
      <div class="container">

        <div class="section">
          <h1 class="title has-text-centered">
            Current bets in #{{ channelName }}
          </h1>
        </div>

        <div class="column is-half is-offset-one-quarter">
          
          <GoalCard 
            v-for="(user, index) in group"
            v-bind:key="index"
            v-bind="user"
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
      channelName: 'placeholder',
      group: []
    }
  },
  created: function() {
    // // Get group info for social list
    // // let groupId = 'C94JEJZGF'
    console.log(this.$route.params.channel)
    // GET /someUrl
    this.$http.get('https://bigbetter.lib.id/betterdb@dev/getgroup/', {params: {channel: this.$route.params.channel}}).then(response => {
      // get body data
      // this.someData = response.body;
      console.log(response.body)
      this.channelName = response.body.name
      console.log(this.channelName)
      this.group = response.body.users
      console.log("GROUP")
      console.log(this.group)

    }, response => {
      // error callback
      console.log("Social.vue HTTP GET didn't work")
    });

  }
}
</script>

<style>

body {
  background-color: #EDF7ED;
}

</style>

<!--       // group: [
      //   {
      //     id: 1,
      //     profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
      //     name: 'Victor',
      //     goal: 'Wake up early',
      //     betAmount: 10,
      //     deadline: 'Feb 30, 2018',
      //     progress: 5,
      //   },
      //   {
      //     id: 2,
      //     profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
      //     name: 'Jerry',
      //     goal: 'Eat healthy',
      //     betAmount: 5,
      //     deadline: 'Feb 10, 2018',
      //     progress: 60,
      //   },
      //   {
      //     id: 3,
      //     profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
      //     name: 'Clara',
      //     goal: '5k run 3 times/week',
      //     betAmount: 50,
      //     deadline: 'Aug 15, 2018',
      //     progress: 80,
      //   },
      //   {
      //     id: 4,
      //     profilePicture: 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
      //     name: 'Ray',
      //     goal: 'Meal prep every Sunday',
      //     betAmount: 20,
      //     deadline: 'Mar 4, 2018',
      //     progress: 45,
      //   }
      // ], -->