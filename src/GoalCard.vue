<template>
  <div id="goalcard" class="section">

    <article class="media">
      <figure class="media-left">
        <p id="" class="image is-128x128">
          <img id="pic" :src="pic">
        </p>
        <p class="has-text-centered">
          <strong>{{ name }}</strong>
        </p>                
      </figure>
      <div class="media-content">
        <div class="content">
          <p class="subtitle">
            <strong>{{ bet.description }}</strong> 
          </p>
          <div class="columns">
            <div class="column is-half">
              <p class="is-size-5">
                Due: {{ finish_date }}
                <br>
                {{ finish_time }}
              </p>
              
            </div>
            <div class="column is-3 has-text-centered">
              <p class="is-size-1">
                ${{ bet.amount }} 
              </p>
              
            </div>
            <div class="column is-3 has-text-centered">
              <p class="is-size-4">
                Owes ${{ owing }} 
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
    'bet',
    'name',
    'owing',
    'pic', 
  ],
  data () {
    return {
    }
  },
  computed: {
    finish_date : function () {
      let date = new Date(this.bet.deadline)
      return date.toDateString()
    },
    finish_time: function () {
      let date = new Date(this.bet.deadline)
      return date.toTimeString()
    },
    progress: function () {

    },
    // progress: function () {
    //   let current_date = new Date()
    //   this.finish_date = new Date(this.deadline)
    //   this.start_date = new Date(this.start_date)
    //   // this.finish_time = this.finish_date.toTimeString()
    //   console.log("Current date: " + current_date)
    //   console.log("Finish date:  " + this.finish_date.toDateString())
    //   console.log("Start date " + this.start_date.toDateString())

    //   let totalTimeDiff = Math.abs(this.finish_date.getTime() - this.start_date.getTime())
    //   let totalDaysDiff = Math.ceil(totalTimeDiff / (1000 * 3600 * 24))

    //   console.log("TOTAL DAYS: " + totalDaysDiff)

    //   let remainTimeDiff = Math.abs(this.finish_date.getTime() - current_date.getTime())
    //   let remainDaysDiff = Math.ceil(remainTimeDiff / (1000 * 3600 * 24))
    //   console.log("REMAIN DAYS: " + remainDaysDiff)

    //   console.log(Math.ceil(remainDaysDiff / totalDaysDiff * 100))

    //   return Math.ceil(remainDaysDiff / totalDaysDiff)
    // },
    // finish_date: function () {
    //   this.finish_date = new Date(this.deadline)
    //   return this.finish_date.getTime()
    // },
    // finish_time: function () {
    //   this.finish_date = new Date(this.deadline)
    //   return this.finish_date.toTimeString()
    // }
  },
  created: function() {
    this.amount = this.bet.amount
    this.complete = this.bet.complete
    this.deadline = this.bet.deadline
    this.description = this.bet.description
    this.start_date = this.bet.start_date
  }
}
</script>

<style>

progress .is-primary {
  background-color: red;
  color: red;
}

#pic {
  border-radius: 100%;
  border-style: solid;
  border-color: #88EA88;
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