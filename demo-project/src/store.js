import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

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

  },
  plugins: [createPersistedState({
    key: 'demo-project',
    storage: window.sessionStorage
  })]
})
