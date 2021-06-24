/* eslint-disable no-shadow */
import Vue from 'vue';
import apiService from 'axios';
import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  USER_REQUEST,
  USER_ERROR,
  USER_SUCCESS,
} from '../actions/auth';
// import { USER_REQUEST } from '../actions/user';

const state = {
  token: localStorage.getItem('accessToken') || '',
  tokens: {
    accessToken: localStorage.getItem('accessToken') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
  },
  status: '',
  hasLoadedOnce: false,
};

const getters = {
  isAuthenticated: (state) => !!state.tokens.accessToken,
  authStatus: (state) => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => new Promise((resolve, reject) => {
    commit(AUTH_REQUEST);
    apiService.post('auth', user)
      .then((resp) => {
        // localStorage.setItem('user-token', resp.tokens);
        // Here set the header of your ajax library to the token value.
        // example with axios
        // apiCall.defaults.headers.common['Authorization'] = resp.token;

        localStorage.setItem('accessToken', resp.data.tokens.accessToken);
        localStorage.setItem('refreshToken', resp.data.tokens.refreshToken);
        commit('setTokens', resp.data.tokens);
        commit('pushErrors', []);
        console.log(resp);
        console.log(resp.data.email);
        // if (resp.data) commit('updateAccountInfo', resp.data);

        // apiCall.defaults.headers.common.Authorization = resp.token.accessToken;
        // const { token } = resp.data;
        // localStorage.setItem('user-token', token);
        commit(AUTH_SUCCESS, resp);
        dispatch(USER_REQUEST);
        resolve(resp);
      })
      .catch((err) => {
        // eslint-disable-next-line no-undef
        console.log(err);
        commit(AUTH_ERROR, err);
        localStorage.removeItem('accessToken');
        reject(err);
      });
  }),
  [AUTH_LOGOUT]: ({ commit }) => new Promise((resolve) => {
    commit(AUTH_LOGOUT);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    resolve();
  }),
  // eslint-disable-next-line no-unused-vars
  [USER_REQUEST]: async ({ commit, dispatch }) => {
    commit(USER_REQUEST);
    // apiService.defaults.headers.common.Authorization = state.tokens.accessToken;
    await apiService.get('profile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${state.tokens.accessToken}`,
      },
    })
      .then((resp) => {
        commit(USER_SUCCESS, resp);
        console.log(resp);
      })
      .catch((err) => {
        // commit(USER_ERROR);
        console.log(err);
        // dispatch(AUTH_LOGOUT);
      });
  },
};

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success';
    state.tokens = resp.data.tokens;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: (state) => {
    state.tokens = '';
  },
  updateAccountInfo(state, payload) {
    state.account = Object.assign(payload);
  },
  setTokens(state, payload) {
    state.tokens = Object.assign(payload);
  },
  pushErrors(state, payload) {
    state.errors = [...payload];
  },
  [USER_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = 'success';
    Vue.set(state, 'account', resp);
  },
  [USER_ERROR]: (state) => {
    state.status = 'error';
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {};
    state.tokens = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
