import { createStore } from 'vuex'
import axios from 'axios'

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
    totalMinMaxSmallCarpark(state) {
      var carparkDetail = {
        minCarparkNum: [],
        maxCarparkNum: []
      }
      var max = state.carparkDetail.small.reduce(
        (prev, curr) => prev.lots_available > curr.lots_available ? prev : curr, 0
      )
      var min = state.carparkDetail.small.reduce(
        (prev, curr) => prev.lots_available < curr.lots_available ? prev : curr, 0
      )
      state.carparkDetail.small.filter((carpark) => {
        if (carpark.lots_available >= max.lots_available) 
          carparkDetail.maxCarparkNum.push(carpark.carpark_number)
        
        if (carpark.lots_available <= min.lots_available)
          carparkDetail.minCarparkNum.push(carpark.carpark_number)
          
      })
      carparkDetail.max = max.lots_available
      carparkDetail.min = min.lots_available
      console.log('small carpark', carparkDetail)

      return carparkDetail
    },
    totalMinMaxMediumCarpark(state) {
      var carparkDetail = {
        minCarparkNum: [],
        maxCarparkNum: []
      }
      var max = state.carparkDetail.medium.reduce(
        (prev, curr) => prev.lots_available > curr.lots_available ? prev : curr, 0
      )
      var min = state.carparkDetail.medium.reduce(
        (prev, curr) => prev.lots_available < curr.lots_available ? prev : curr, 0
      )
      state.carparkDetail.medium.filter((carpark) => {
        if (carpark.lots_available >= max.lots_available) 
          carparkDetail.maxCarparkNum.push(carpark.carpark_number)
        
        if (carpark.lots_available <= min.lots_available)
          carparkDetail.minCarparkNum.push(carpark.carpark_number)
          
      })
      carparkDetail.max = max.lots_available
      carparkDetail.min = min.lots_available
      console.log('medium carpark', carparkDetail)

      return carparkDetail
    },
    totalMinMaxBigCarpark(state) {
      var carparkDetail = {
        minCarparkNum: [],
        maxCarparkNum: []
      }
      var max = state.carparkDetail.big.reduce(
        (prev, curr) => prev.lots_available > curr.lots_available ? prev : curr, 0
      )
      var min = state.carparkDetail.big.reduce(
        (prev, curr) => prev.lots_available < curr.lots_available ? prev : curr, 0
      )
      state.carparkDetail.big.filter((carpark) => {
        if (carpark.lots_available >= max.lots_available) 
          carparkDetail.maxCarparkNum.push(carpark.carpark_number)
        
        if (carpark.lots_available <= min.lots_available)
          carparkDetail.minCarparkNum.push(carpark.carpark_number)
          
      })
      carparkDetail.max = max.lots_available
      carparkDetail.min = min.lots_available
      console.log('big carpark', carparkDetail)

      return carparkDetail
    },
    totalMinMaxLargeCarpark(state) {
      var carparkDetail = {
        minCarparkNum: [],
        maxCarparkNum: []
      }
      var max = state.carparkDetail.large.reduce(
        (prev, curr) => prev.lots_available > curr.lots_available ? prev : curr, 0
      )
      var min = state.carparkDetail.large.reduce(
        (prev, curr) => prev.lots_available < curr.lots_available ? prev : curr, 0
      )
      state.carparkDetail.large.filter((carpark) => {
        if (carpark.lots_available >= max.lots_available) 
          carparkDetail.maxCarparkNum.push(carpark.carpark_number)
        
        if (carpark.lots_available <= min.lots_available)
          carparkDetail.minCarparkNum.push(carpark.carpark_number)
          
      })
      carparkDetail.max = max.lots_available
      carparkDetail.min = min.lots_available
      console.log('large carpark', carparkDetail)

      return carparkDetail
    },
    
  },
  mutations: {
    setCarparkDetail(state, carparkDetail) {
      console.log(carparkDetail)
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
              (data) => data.carpark_info.filter(
                (info) => {
                  if (parseInt(info.total_lots) >= 0 && parseInt(info.total_lots) < 100) {
                    info.carpark_number = data.carpark_number
                    newCarparkDetail.small.push(info)
                  }
                  if (parseInt(info.total_lots) >= 100 && parseInt(info.total_lots) < 300) {
                    info.carpark_number = data.carpark_number
                    newCarparkDetail.medium.push(info)
                  }
                  if (parseInt(info.total_lots) >= 300 && parseInt(info.total_lots) < 400) {
                    info.carpark_number = data.carpark_number
                    newCarparkDetail.big.push(info)
                  }
                  if (parseInt(info.total_lots) >= 400) {
                    info.carpark_number = data.carpark_number
                    newCarparkDetail.large.push(info)
                  }
                  if (parseInt(info.total_lots) >= 0) {
                    info.carpark_number = data.carpark_number
                    newCarparkDetail.total.push(info)
                  }
                }
                ).length
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
