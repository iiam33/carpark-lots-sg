<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
          <p class="title">Welcome to Carpark Availability Checker in Singapore</p>
      </div>
    </section>

    <div class="columns is-multiline mb-6">
      <div class="column is-12">
        <div class="is-size-2 has-text-centered"><strong>Carpark Category</strong></div>
      </div>

      <div class="column is-12 mb-5">
        <div class="is-size-5 has-text-centered">Total Number of Carpark Available: {{ store.getters.totalCarpark }}</div>
      </div>

      <div class="column is-6">
        <div class="cloumns">
          <div class="column is-8 is-pulled-right">
            <div class="card p-5">
              <div class="card-content">
                <div class="content">
                  <div class="columns">
                    <div class="column is-6 has-text-centered is-size-4">
                      <strong>Small</strong>
                    </div>
                    <div class="column is-6 has-text-centered is-size-4">
                      {{ store.getters.totalSmallCarpark }}
                    </div>
                  </div>

                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Highest Lots Available:</strong> {{ carpark.small.max }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 " v-if="!isHidden.small">
                    <strong>Highest Lots Carpark:</strong> {{ carpark.small.maxCarparkNum.map((carparkNum) => carparkNum).join(', ') }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Lowest Lots Available:</strong> {{ carpark.small.min }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 " v-if="!isHidden.small">
                    <strong>Lowest Lots Carpark:</strong> {{ carpark.small.minCarparkNum.map((carparkNum) => carparkNum).join(', ') }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Updated at:</strong> {{ store.state.timestamp }}
                  </div>

                  <div class="mt-4 mr-5 has-text-right">
                    <a class="button is-dark" v-if="!isHidden.small" v-on:click="isHidden.small = !isHidden.small">Hide Details</a>
                  </div>
                  <div class="mt-4 mr-5 has-text-right">
                    <a class="button is-dark" v-if="isHidden.small" v-on:click="isHidden.small = !isHidden.small">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div class="column is-6">
        <div class="cloumns">
          <div class="column is-8 is-pulled-left">
            <div class="card p-5">
              <div class="card-content">
                <div class="content">
                  <div class="columns">
                    <div class="column is-6 has-text-centered is-size-4">
                      <strong>Medium</strong>
                    </div>
                    <div class="column is-6 has-text-centered is-size-4">
                      {{ store.getters.totalMediumCarpark }}
                    </div>
                  </div>

                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Highest Lots Available:</strong> {{ carpark.medium.max }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 " v-if="!isHidden.middle">
                    <strong>Highest Lots Carpark:</strong> {{ carpark.medium.maxCarparkNum.map((carparkNum) => carparkNum).join(', ') }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Lowest Lots Available:</strong> {{ carpark.medium.min }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 " v-if="!isHidden.middle">
                    <strong>Lowest Lots Carpark:</strong> {{ carpark.medium.minCarparkNum.map((carparkNum) => carparkNum).join(', ') }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Updated at:</strong> {{ store.state.timestamp }}
                  </div>

                  <div class="mt-4 mr-5 has-text-right">
                    <a class="button is-dark" v-if="!isHidden.middle" v-on:click="isHidden.middle = !isHidden.middle">Hide Details</a>
                  </div>
                  <div class="mt-4 mr-5 has-text-right">
                    <a class="button is-dark" v-if="isHidden.middle" v-on:click="isHidden.middle = !isHidden.middle">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>

      <div class="column is-6">
        <div class="cloumns">
          <div class="column is-8 is-pulled-right">
            <div class="card p-5">
              <div class="card-content">
                <div class="content">
                  <div class="columns">
                    <div class="column is-6 has-text-centered is-size-4">
                      <strong>Big</strong>
                    </div>
                    <div class="column is-6 has-text-centered is-size-4">
                      {{ store.getters.totalBigCarpark }}
                    </div>
                  </div>

                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Highest Lots Available:</strong> {{ carpark.big.max }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 " v-if="!isHidden.big">
                    <strong>Highest Lots Carpark:</strong> {{ carpark.big.maxCarparkNum.map((carparkNum) => carparkNum).join(', ') }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Lowest Lots Available:</strong> {{ carpark.big.min }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 " v-if="!isHidden.big">
                    <strong>Lowest Lots Carpark:</strong> {{ carpark.big.minCarparkNum.map((carparkNum) => carparkNum).join(', ') }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Updated at:</strong> {{ store.state.timestamp }}
                  </div>

                  <div class="mt-4 mr-5 has-text-right">
                    <a class="button is-dark" v-if="!isHidden.big" v-on:click="isHidden.big = !isHidden.big">Hide Details</a>
                  </div>
                  <div class="mt-4 mr-5 has-text-right">
                    <a class="button is-dark" v-if="isHidden.big" v-on:click="isHidden.big = !isHidden.big">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-6">
        <div class="cloumns">
          <div class="column is-8 is-pulled-left">
            <div class="card p-5">
              <div class="card-content">
                <div class="content">
                  <div class="columns">
                    <div class="column is-6 has-text-centered is-size-4">
                      <strong>Large</strong>
                    </div>
                    <div class="column is-6 has-text-centered is-size-4">
                      {{ store.getters.totalLargeCarpark }}
                    </div>
                  </div>

                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Highest Lots Available:</strong> {{ carpark.large.max }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 " v-if="!isHidden.large">
                    <strong>Highest Lots Carpark:</strong> {{ carpark.large.maxCarparkNum.map((carparkNum) => carparkNum).join(', ') }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Lowest Lots Available:</strong> {{ carpark.large.min }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 "  v-if="!isHidden.large">
                    <strong>Lowest Lots Carpark:</strong> {{ carpark.large.minCarparkNum.map((carparkNum) => carparkNum).join(', ') }}
                  </div>
                  <div class="mt-1 pl-5 is-size-6 ">
                    <strong>Updated At:</strong> {{ store.state.timestamp }}
                  </div>

                  <div class="mt-4 mr-5 has-text-right">
                    <a class="button is-dark" v-if="!isHidden.large" v-on:click="isHidden.large = !isHidden.large">Hide Details</a>
                  </div>
                  <div class="mt-4 mr-5 has-text-right">
                    <a class="button is-dark" v-if="isHidden.large" v-on:click="isHidden.large = !isHidden.large">View Details</a>
                  </div>
                </div>
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
import { computed } from 'vue'

export default {
  name: 'Home',
  data() {
    return {
      timestamp: "",
      timer: null,
      isHidden: {
        small: true, 
        middle: true,
        big: true,
        large: true,
      }
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
    const carpark = computed(() => store.getters.totalMinMaxCarpark)

    function getCarparkAvailability() {
      store.dispatch('getCarparkAvailability')
    }

    return {
      store,
      carpark,
      getCarparkAvailability
    }
  }
}
</script>
