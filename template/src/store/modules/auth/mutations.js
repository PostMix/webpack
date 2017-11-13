import Vue from 'vue';
import { CHECK, LOGIN, LOGOUT } from './mutation-types';

const accessTokenKey = 'access_token';

export default {
  /**
   * Check if user logged into system
   * Add Authorization token to headers of axios for every query to server
   *
   * @param state
   */
  [CHECK](state) {
    state.authenticated = !!localStorage.getItem(accessTokenKey);
    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
          accessTokenKey)}`;
    }
  },

  /**
   * Login to system
   * Add token to headers of axios and save it into local storage
   *
   * @param state
   * @param token
   */
  [LOGIN](state, token) {
    state.authenticated = true;
    localStorage.setItem(accessTokenKey, token);
    Vue.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  /**
   * Logout action
   * Remove token from local storage and from headers of axios
   *
   * @param state
   */
  [LOGOUT](state) {
    state.authenticated = false;
    localStorage.removeItem(accessTokenKey);
    Vue.$http.defaults.headers.common.Authorization = '';
  },
};
