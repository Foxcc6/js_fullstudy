import Vue from 'vue'
import Vuex from './myVuex'
 // vuex = {
 // Store:function() {}
 // }


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1
  },
  mutations: {
    addCount(state,num){
      state.count += num
    },
    reduceCount(state,num){
      state.count -= num
    }
  },
  getters:{
    getCount:state => state.count*100
  },
  actions: {
    getReduceCount(context,num) {
      context.commit('reduceCount',num)
    }
  },
  modules: {
  }
})
