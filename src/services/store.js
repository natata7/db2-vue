import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from './api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    status: '',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = 'loading';
    },
    AUTH_SUCCESS: (state, token) => {
      state.status = 'success';
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.status = 'error';
    },
    USER_REQUEST: (state) => {
      state.status = 'loading';
    },
    USER_SUCCESS: (state, resp) => {
      state.status = 'success';
      Vue.set(state, 'profile', resp);
    },
    USER_ERROR: (state) => {
      state.status = 'error';
    },
    AUTH_LOGOUT: (state) => {
      state.profile = {};
    },
  },
  actions: {
    AUTH_REQUEST: ({ commit, dispatch }, user) => new Promise((resolve, reject) => {
      commit(store.AUTH_REQUEST);
      ApiService({ url: 'auth', data: user, method: 'POST' })
        .then((resp) => {
          localStorage.setItem('user-token', resp.token);
          // Here set the header of your ajax library to the token value.
          // example with axios
          // axios.defaults.headers.common['Authorization'] = resp.token
          commit(store.AUTH_SUCCESS, resp);
          dispatch(store.USER_REQUEST);
          resolve(resp);
        })
        .catch((err) => {
          commit(store.AUTH_ERROR, err);
          localStorage.removeItem('user-token');
          reject(err);
        });
    }),
    AUTH_LOGOUT: ({ commit }) => new Promise((resolve) => {
      commit(store.AUTH_LOGOUT);
      localStorage.removeItem('user-token');
      resolve();
    }),
    USER_REQUEST: ({ commit, dispatch }) => {
      commit(store.USER_REQUEST);
      ApiService({ url: 'user/me' })
        .then((resp) => {
          commit(store.USER_SUCCESS, resp);
        })
        .catch(() => {
          commit(store.USER_ERROR);
          // if resp is unauthorized, logout, to
          dispatch(store.AUTH_LOGOUT);
        });
    },
  },
});
console.log(store.state.count);
export default store;
