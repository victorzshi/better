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
                Due {{ finish_date }}
                <br>
                By {{ finish_time }}
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
      let hour = new Date(this.bet.deadline).getHours()
      if (hour > 12) {
        hour -= 12
        if (hour !== 12) {
          hour += ' pm'
        }
        else {
          hour += ' am'
        }
      }
      else if (hour == 12) {
        hour += ' pm' 
      }
      else {
        hour += ' am'
      }
      return hour
    },
    progress: function () {
      let date1 = new Date(this.bet.deadline)
      let date2 = new Date(this.bet.start_date)
      let current_date = new Date()
      console.log(date1.toDateString())
      console.log(date2.toDateString())

      let totalTimeDiff = Math.abs(date1.getTime() - date2.getTime())
      let totalDaysDiff = Math.ceil(totalTimeDiff / (1000 * 3600 * 24))

      console.log(totalDaysDiff)

      let remainTimeDiff = Math.abs(date1.getTime() - current_date.getTime())
      let remainDaysDiff = Math.ceil(remainTimeDiff / (1000 * 3600 * 24))

      console.log(remainDaysDiff)

      console.log(remainDaysDiff / totalDaysDiff)

      return Math.ceil(remainDaysDiff / totalDaysDiff)
    }
  },
  created: function() {
    this.complete = this.bet.complete
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