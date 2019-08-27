import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: ""
  },
  getters: {
    isLogin: state => {
      return Boolean(state.userName);
    }
  },
  mutations: {
    setUserName: (state, userName) => {
      state.userName = userName;
    },
    removeUserName: (state) => {
      state.userName = "";
    }
  },
  actions: {

  }
})
