import Vue from 'vue';
/**
 * Configuration of Vuex storage package
 */
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import auth from './modules/auth';

/**
 * If the current environment is not prod
 *
 * @type {boolean}
 */
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);
export default new Vuex.Store({
  /**
   * Modules in Vuex stor
   */
  modules: {
    auth,
  },

  strict: debug,

  plugins: debug ? [createLogger] : [],
});
