<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
          <p class="title">Welcome to Carpark Availability Checker in Singapore</p>
      </div>
    </section>

    <div class="columns is-multiline mb-6">
      <div class="column is-12">
        <div class="is-size-2 has-text-centered">Carpark Category</div>
      </div>

      <div class="column is-12 mb-5">
        <div class="is-size-5 has-text-centered">Total Number of Carpark Available: {{ store.getters.totalCarpark }}</div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-6 has-text-centered">
                  <strong>Small</strong>
                </div>
                <div class="column is-6 has-text-centered">
                  {{ store.getters.totalSmallCarpark }}
                </div>
              </div>

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
                  {{ store.getters.totalMediumCarpark }}
                </div>
              </div>

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
                  {{ store.getters.totalBigCarpark }}
                </div>
              </div>

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
                  {{ store.getters.totalLargeCarpark }}
                </div>
              </div>

              <div class="pl-5 is-size-7 ">
                <strong>Updated at:</strong> {{ store.state.timestamp }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <div class="columns is-multiline mb-6">
      <div class="column is-12">
        <div class="is-size-2 has-text-centered">Carpark Category</div>
      </div>

      <div class="column is-12 mb-5">
        <div class="is-size-7 has-text-centered">Total Number of Small Carpark Available: {{ smallCarpark.max }} </div>
        <div class="is-size-7 has-text-centered">Total Number of Medium Carpark Available: {{ mediumCarpark.max }} </div>
        <div class="is-size-7 has-text-centered">Total Number of Big Carpark Available: {{ bigCarpark.max }} </div>
        <div class="is-size-7 has-text-centered">Total Number of Large Carpark Available: {{ largeCarpark.max }} </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Home',
  data() {
    return {
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

    const smallCarpark = computed(() => store.getters.totalMinMaxSmallCarpark)
    const mediumCarpark = computed(() => store.getters.totalMinMaxMediumCarpark)
    const bigCarpark = computed(() => store.getters.totalMinMaxBigCarpark)
    const largeCarpark = computed(() => store.getters.totalMinMaxLargeCarpark)

    function getCarparkAvailability() {
      store.dispatch('getCarparkAvailability')
    }

    return {
      store,
      smallCarpark,
      mediumCarpark,
      bigCarpark,
      largeCarpark,
      getCarparkAvailability
    }
  }
}
</script>
