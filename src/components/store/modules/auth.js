import axios from 'axios'

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    }
  },

  actions: {
    async signIn(_, credentials) {
      let response = axios.post('/user/authenticate', credentials)

      this.$store.dispatch('attempt', response.data.token);
    },

    async attempt ({ commit }, token) {
      commit('SET_TOKEN', token);
    }
  }
}





// import axios from "axios";

// const state = {
//   user: null,
// };

// const getters = {
//   isAuthenticated: (state) => !!state.user,
//   StateUser: (state) => state.user,
// };

// const actions = {
//   async Register({dispatch}, form) {
//     await axios.post('register', form)
//     let UserForm = new FormData()
//     UserForm.append('email', form.email)
//     UserForm.append('password', form.password)
//     await dispatch('LogIn', UserForm)
//   },

//   async LogIn({commit}, user) {
//     await axios.post("user/authenticate", user);
//     await commit("setUser", user.get("email"));
//   },

//   async LogOut({ commit }) {
//     let user = null;
//     commit("logout", user);
//   },
// };

// const mutations = {
//   setUser(state, email) {
//     state.user = email;
//   },

//   logout(state, user) {
//     state.user = user;
//   },
// };

// export default {
//   state,
//   getters,
//   actions,
//   mutations,
// };
