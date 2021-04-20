import axios from 'axios'

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('user-token') || '',
    user: null,
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    }
  },

  actions: {
    async signIn({ dispatch }, credentials) {
       const response  = await axios.post('/user/authenticate', credentials, {
        withCredentials: false
      })
      const {token}  = response.data
        // console.log();
        dispatch('attempt', token);
        localStorage.setItem('user-token', token);
    },

    async attempt ({ commit }, token) {
      commit('SET_TOKEN', token);
    }
  },

    getters: {
      /* Partially Implemented not for production use */
      loggedIn: state => !!state.token
      
  },
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
