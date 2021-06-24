/* eslint-disable no-shadow */
import Vue from 'vue';
import apiService from '../../services/api';
import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from '../actions/user';
import { AUTH_LOGOUT } from '../actions/auth';

const state = {
  status: '',
  account: {
    fname: '',
    lname: '',
    username: '',
    email: '',
  },
};

const getters = {
  getProfile: (state) => state.auth,
  isProfileLoaded: (state) => !!state.account.email,
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }) => {
    commit(USER_REQUEST);
    apiService.get('profile', {
      headers: {
        Authorization: `JWT ${state.auth.tokens.accessToken}`,
      },
    })
      .then((resp) => {
        commit(USER_SUCCESS, resp);
      })
      .catch(() => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT);
      });
  },
};

const mutations = {
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
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
