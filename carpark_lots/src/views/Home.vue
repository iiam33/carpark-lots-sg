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
                  {{ this.counter.small }}
                </div>
              </div>
              <!-- <br> -->
              <div class="pl-5 is-size-7 ">
                <strong>Updated at:</strong> {{ this.timestamp }}
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
                  {{ this.counter.medium }}
                </div>
              </div>
              <!-- <br> -->
              <div class="pl-5 is-size-7 ">
                <strong>Updated at:</strong> {{ this.timestamp }}
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
                  {{ this.counter.big }}
                </div>
              </div>
              <!-- <br> -->
              <div class="pl-5 is-size-7 ">
                <strong>Updated at:</strong> {{ this.timestamp }}
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
                  {{ this.counter.large }}
                </div>
              </div>
              <!-- <br> -->
              <div class="pl-5 is-size-7 ">
                <strong>Updated at:</strong> {{ this.timestamp }}
              </div>
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
      carparkData: [],
      timestamp: "",
      counter: {
        total: 0,
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
          var oldTimestamp = this.carparkAvailability[0].timestamp
          var datetime = new Date(oldTimestamp)
          this.timestamp = datetime.toString()
          this.carparkData = this.carparkAvailability[0].carpark_data
          if (this.carparkData) {
            this.carparkData.filter(
              (data) => data.carpark_info.filter(
                (info) => {
                  if (parseInt(info.total_lots) >= 0 && parseInt(info.total_lots) < 100) {
                    this.counter.small += 1
                  }
                  if (parseInt(info.total_lots) >= 100 && parseInt(info.total_lots) < 300) {
                    this.counter.medium += 1
                  }
                  if (parseInt(info.total_lots) >= 300 && parseInt(info.total_lots) < 400) {
                    this.counter.big += 1
                  }
                  if (parseInt(info.total_lots) >= 400) {
                    this.counter.large += 1
                  }
                  if (parseInt(info.total_lots) >= 0) {
                    this.counter.total += 1
                  }
                }
                ).length
            )
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
