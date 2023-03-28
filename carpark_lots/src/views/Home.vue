<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
          <p class="title">Welcome to Carpark Lots Counter in Singapore</p>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="is-size-2 has-text-centered">Carpark Category</div>
      </div>

      <!-- <div class="column is-3" v-for="category in carparkCategory" v-bind:key="category"> -->
      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-6 has-text-centered">
                  <strong>Small</strong>
                </div>
                <div class="column is-6 has-text-centered">
                  1
                </div>
              </div>
              <!-- <br> -->
              <div class="pl-5 is-size-7 ">
                Updated at: 11:09 PM - 1 Jan 2016
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <strong>Medium</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <strong>Big</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <strong>Large</strong>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      carparkAvailability: [],
      counter: {
        small: 0, 
        medium:0,
        big: 0,
        large: 0,
      }
    }
  },
  components: {
  },
  mounted() {
    this.getCarparkAvailability()
  },
  methods: {
    getCarparkAvailability() {
      axios
        .get('/v1/transport/carpark-availability')
        .then(response => {
          this.carparkAvailability = response.data.items
          console.log(this.carparkAvailability)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
