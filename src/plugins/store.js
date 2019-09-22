import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  isNavBarVisible: true,
  isNavBarActive: false,

  isNavBarBisVisible: false,
  isNavBarBisActive: false,

  isLoading: true
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  activateNavBar(state, activation) {
    state.isNavBarActive = activation;
  },

  showNavBar(state, visible) {
    state.isNavBarVisible = visible;
  },

  activateNavBarBis(state, activation) {
    state.isNavBarBisActive = activation;
  },

  showNavBarBis(state, visible) {
    state.isNavBarBisVisible = visible;
  },

  changeLoadingStatus(state, status) {
    state.isLoading = status;
  }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  /*
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
  */
};

// getters are functions
const getters = {
  // evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
