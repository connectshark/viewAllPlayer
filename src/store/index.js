import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerList: []
  },
  mutations: {
    setList:(state, data) => state.playerList = data
  },
  actions: {
    initState (context) {
      fetch('https://raw.githubusercontent.com/hexschool/w3hexschool-API/master/data.json').then(res => res.json()).then(json => {
        context.commit('setList', json)
      })
    }
  },
  getters: {
    filterPlayer (state) {
      return state.playerList.find(obj => state.route.params.url === obj.blogUrl)
    }
  },
  modules: {
  }
})
