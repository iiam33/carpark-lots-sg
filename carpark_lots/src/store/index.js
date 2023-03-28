import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    counter: {
      total: 0,
      small: 0, 
      medium:0,
      big: 0,
      large: 0,
    },
    timestamp: "",
  },
  getters: {
  },
  mutations: {
    setCounter(state, counter) {
      console.log(counter)
      state.counter = counter
    },
    setTimestamp(state, timestamp) {
      state.timestamp = timestamp
    }
  },
  actions: {
    async getCarparkAvailability({ commit }) {
      axios
        .get('/v1/transport/carpark-availability')
        .then((response) => {
          var new_counter = {
            total: 0,
            small: 0, 
            medium:0,
            big: 0,
            large: 0,
          }
          var oldTimestamp = response.data.items[0].timestamp
          var datetime = new Date(oldTimestamp)
          commit("setTimestamp", datetime.toString())
          this.carparkData = response.data.items[0].carpark_data
          if (this.carparkData) {
            this.carparkData.filter(
              (data) => data.carpark_info.filter(
                (info) => {
                  if (parseInt(info.total_lots) >= 0 && parseInt(info.total_lots) < 100) {
                    new_counter.small += 1
                  }
                  if (parseInt(info.total_lots) >= 100 && parseInt(info.total_lots) < 300) {
                    new_counter.medium += 1
                  }
                  if (parseInt(info.total_lots) >= 300 && parseInt(info.total_lots) < 400) {
                    new_counter.big += 1
                  }
                  if (parseInt(info.total_lots) >= 400) {
                    new_counter.large += 1
                  }
                  if (parseInt(info.total_lots) >= 0) {
                    new_counter.total += 1
                  }
                }
                ).length
            )
          }
          commit("setCounter", new_counter)
        })
        .catch(error => {
          console.log(error)
        })
      
    }
  },
  modules: {
  }
})

export default store
