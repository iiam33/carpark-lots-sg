import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    carparkDetail: {
      total: [],
      small: [], 
      medium:[],
      big: [],
      large: [],
    },
    timestamp: "",
  },
  getters: {
    totalSmallCarpark(state) {
      return state.carparkDetail.small.length
    },
    totalMediumCarpark(state) {
      return state.carparkDetail.medium.length
    },
    totalBigCarpark(state) {
      return state.carparkDetail.big.length
    },
    totalLargeCarpark(state) {
      return state.carparkDetail.large.length
    },
    totalCarpark(state) {
      return state.carparkDetail.total.length
    },
    totalMinMaxCarpark(state) {
      var carparkDetail = {
        total: {
          minCarparkNum: [],
          maxCarparkNum: []
        },
        small: {
          minCarparkNum: [],
          maxCarparkNum: []
        }, 
        medium: {
          minCarparkNum: [],
          maxCarparkNum: []
        },
        big: {
          minCarparkNum: [],
          maxCarparkNum: []
        },
        large: {
          minCarparkNum: [],
          maxCarparkNum: []
        },
      }

      for (const [key, value] of Object.entries(state.carparkDetail)) {
        var max = value.reduce(
          (prev, curr) => prev.cumulative_available_lots > curr.cumulative_available_lots ? prev : curr, 0
        )

        var min = value.reduce(
          (prev, curr) => prev.cumulative_available_lots < curr.cumulative_available_lots ? prev : curr, 0
        )
        carparkDetail[key].max = max.cumulative_available_lots
        carparkDetail[key].min = min.cumulative_available_lots

        value.filter((carpark) => {
            if (carpark.cumulative_available_lots >= max.cumulative_available_lots) 
              carparkDetail[key].maxCarparkNum.push(carpark.carpark_number)
            
            if (carpark.cumulative_available_lots <= min.cumulative_available_lots)
              carparkDetail[key].minCarparkNum.push(carpark.carpark_number)
              
          })
      }
      return carparkDetail
    },
  },
  mutations: {
    setCarparkDetail(state, carparkDetail) {
      console.log('carparkDetail', carparkDetail)
      state.carparkDetail = carparkDetail
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
          var newCarparkDetail = {
            total: [],
            small: [], 
            medium:[],
            big: [],
            large: [],
          }

          var oldTimestamp = response.data.items[0].timestamp
          var datetime = new Date(oldTimestamp)
          commit("setTimestamp", datetime.toString())
          var carparkData = response.data.items[0].carpark_data
          if (carparkData) {
            carparkData.filter(
              (data) => {
                data.carpark_info.reduce((cumulativeLot, info) => {
                  info.cumulative_total_lots = parseInt(cumulativeLot) + (parseInt(info["total_lots"]) || 0)
                  return info.cumulative_total_lots
                }, 0)

                data.carpark_info.reduce((cumulativeAvailable, info) => {
                  info.cumulative_available_lots = parseInt(cumulativeAvailable) + (parseInt(info["lots_available"]) || 0)
                  return info.cumulative_available_lots
                }, 0)
                
                data.carpark_info.filter(
                (info) => {
                  if (info == data.carpark_info.at(-1)) {
                    if (parseInt(info.cumulative_total_lots) >= 0 && parseInt(info.cumulative_total_lots) < 100) {
                      info.carpark_number = data.carpark_number
                      newCarparkDetail.small.push(info)
                    }
                    if (parseInt(info.cumulative_total_lots) >= 100 && parseInt(info.cumulative_total_lots) < 300) {
                      info.carpark_number = data.carpark_number
                      newCarparkDetail.medium.push(info)
                    }
                    if (parseInt(info.cumulative_total_lots) >= 300 && parseInt(info.cumulative_total_lots) < 400) {
                      info.carpark_number = data.carpark_number
                      newCarparkDetail.big.push(info)
                    }
                    if (parseInt(info.cumulative_total_lots) >= 400) {
                      info.carpark_number = data.carpark_number
                      newCarparkDetail.large.push(info)
                    }
                    if (parseInt(info.cumulative_total_lots) >= 0) {
                      info.carpark_number = data.carpark_number
                      newCarparkDetail.total.push(info)
                    }
                  }
                  
                }
                ).length
              }
            )
          }

          commit("setCarparkDetail", newCarparkDetail)
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
