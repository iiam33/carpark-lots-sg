import store from "@/store"
import mockData from "../mockData"

describe('mutations', () => {
  it('Should correctly set carparkDetail', () => {
    store.commit("setCarparkDetail", mockData.carparkDetail)
    
    expect(store.state.carparkDetail).toStrictEqual(mockData.carparkDetail)
  }),
  it('Should correctly set timestamp', () => {
    store.commit("setTimestamp", mockData.timestamp)
    
    expect(store.state.timestamp).toStrictEqual(mockData.timestamp)
  })
})

describe('getters', () => {
  it('Should correctly get totalSmallCarpark', () => {    
    expect(store.getters.totalSmallCarpark).toBe(2)
  }),
  it('Should correctly get totalMediumCarpark', () => {    
    expect(store.getters.totalMediumCarpark).toBe(1)
  }),
  it('Should correctly get totalBigCarpark', () => {    
    expect(store.getters.totalBigCarpark).toBe(3)
  }),
  it('Should correctly get totalLargeCarpark', () => {    
    expect(store.getters.totalLargeCarpark).toBe(1)
  }),
  it('Should correctly get totalMinMaxSmallCarpark', () => {    
    expect(store.getters.totalMinMaxSmallCarpark).toStrictEqual(mockData.totalMinMaxCarpark.small)
  }),
  it('Should correctly get totalMinMaxMediumCarpark', () => {    
    expect(store.getters.totalMinMaxMediumCarpark).toStrictEqual(mockData.totalMinMaxCarpark.medium)
  }),
  it('Should correctly get totalMinMaxBigCarpark', () => {    
    expect(store.getters.totalMinMaxBigCarpark).toStrictEqual(mockData.totalMinMaxCarpark.big)
  }),
  it('Should correctly get totalMinMaxLargeCarpark', () => {    
    expect(store.getters.totalMinMaxLargeCarpark).toStrictEqual(mockData.totalMinMaxCarpark.large)
  })
})
