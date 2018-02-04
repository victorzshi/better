<template>
	<transition name="fade">
	  <div id="navaccount" class="modal is-active" v-if="visible">
	    <div class="modal-background"></div>
	    <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Payout Settings</p>
          <button class="delete" aria-label="close" v-on:click="closeModal"></button>
        </header>
        <section class="modal-card-body">

          <div class="content">
            <p class="subtitle">
              Current settings...
            </p>



            <p class="subtitle">
              New settings...
            </p>
          </div>
        	<div class="columns">

        		<div class="column is-half">
        			<div class="field">
	        			<label class="label">Type:</label>
	        			<div class="control has-icons-left">
	      			    <div class="select is-rounded">
	      			      <select>
	      			        <option selected>To group</option>
	      			        <option>To charity</option>
	      			      </select>
	      			    </div>
	      			    <div class="icon is-small is-left">
	      			      <i class="fas fa-money-bill-alt"></i>
	      			    </div>
	      			  </div>
      			  </div>
        		</div>

        		<div class="column is-half">
        			<div class="field">
	        			<label class="label">Time:</label>
	        			<div class="control has-icons-left">
	      			    <div class="select is-rounded">
	      			      <select>
	      			        <option selected>Daily</option>
	      			        <option>Weekly</option>
	      			        <option>Monthly</option>
	      			      </select>
	      			    </div>
	      			    <div class="icon is-small is-left">
	      			      <i class="fas fa-clock"></i>
	      			    </div>
	      			  </div>
      			  </div>
        		</div>
        		
        	</div>
          
        </section>
        <footer class="modal-card-foot">
          <button id="saveChangesButton" class="button is-success" v-on:click="saveChanges">Save changes</button>
          <button class="button" v-on:click="closeModal">Cancel</button>
        </footer>
      </div>
	  </div>
	</transition>
</template>

<script>
export default {
  name: 'navaccount',
  props: ['visible'],
  methods: {
    closeModal: function () {
      this.$emit('closeModal');
    },
    saveChanges: function () {
    	// Do something...
    	console.log('You have clicked the save changes button...')
    	// Show loading 
    	let d = document.getElementById("saveChangesButton")
    	d.classList.add("is-loading")
    	setTimeout( ()=>{
  	  	this.closeModal() 
    	}, 1000);
    }
  }
}
</script>

<style>

</style>
