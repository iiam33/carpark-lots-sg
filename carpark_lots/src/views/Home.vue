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
                  {{ store.state.counter.small }}
                </div>
              </div>
              <!-- <br> -->
              <div class="pl-5 is-size-7 ">
                <strong>Updated at:</strong> {{ store.state.timestamp }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-6 has-text-centered">
                  <strong>Medium</strong>
                </div>
                <div class="column is-6 has-text-centered">
                  {{ store.state.counter.medium }}
                </div>
              </div>
              <!-- <br> -->
              <div class="pl-5 is-size-7 ">
                <strong>Updated at:</strong> {{ store.state.timestamp }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-6 has-text-centered">
                  <strong>Big</strong>
                </div>
                <div class="column is-6 has-text-centered">
                  {{ store.state.counter.big }}
                </div>
              </div>
              <!-- <br> -->
              <div class="pl-5 is-size-7 ">
                <strong>Updated at:</strong> {{ store.state.timestamp }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-6 has-text-centered">
                  <strong>Large</strong>
                </div>
                <div class="column is-6 has-text-centered">
                  {{ store.state.counter.large }}
                </div>
              </div>
              <!-- <br> -->
              <div class="pl-5 is-size-7 ">
                <strong>Updated at:</strong> {{ store.state.timestamp }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      carparkAvailability: [],
      timestamp: "",
      timer: null,
    }
  },
  mounted() {
    document.title = ' Carpark Availability in Singapore '
    this.getCarparkAvailability()
    this.timer = setInterval(() => {
      this.getCarparkAvailability()
    }, 60000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  },
  setup() {
    const store = useStore()

    function getCarparkAvailability() {
      store.dispatch('getCarparkAvailability')
    }

    return {
      store,
      getCarparkAvailability
    }
  }
}
</script>
