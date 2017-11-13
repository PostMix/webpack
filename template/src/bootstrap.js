import Vue from 'vue';
/**
 * Configuration for axios lib
 * Allow exec ajax queries to the backend server
 * Registration the prototype into Vue object for getting
 * instance of axios via Vue.$http
 * Setting up mocking the queries to API
 */
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
/**
 * Configuration for routes of application
 * Sync state of application for each routes
 */
import VueRouter from 'vue-router';
import VuexRouterSync from 'vuex-router-sync';

{{#if_eq bootstrapConfig "4"}}
/**
 * Add bootstrap components
 */
import BootstrapVue from 'bootstrap-vue';
{{/if_eq}}
/**
 * Setting up validation package
 */
import VeeValidate from 'vee-validate';
/**
 * Import routes
 */
import routes from '@/routes';
/**
 * Import store modules
 */
import store from '@/store';
/**
 * Configuration for using SCSS styles
 */
import '@/assets/scss/app.scss';

/**
 * Configuration for debug during developing
 *
 * @type {boolean}
 */
Vue.config.debug = process.env.NODE_ENV !== 'production';

if (process.env.NODE_ENV !== 'production') {
  const mock = new MockAdapter(Axios, { delayResponse: 600 });

  /**
   * Mocking login router
   */
  mock.onPost('/oauth/token').reply(({ data }) => {
    const returnData = [];
    const requestData = JSON.parse(data);

    if (requestData.email === 'admin@example.com' &&
        requestData.password === '123') {
      returnData.push(200);
      returnData.push({
        access_token: 'test',
      });
    } else {
      returnData.push(403);
      returnData.push({
        jsonapi: { version: '1.0' },
        errors: [
          {
            code: 403,
            source: { pointer: '/oauth/token' },
            title: 'Unauthenticated.',
            detail: 'Email or password is wrong',
          },
        ],
      });
    }

    return returnData;
  });
}

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/json';
Vue.$http = Axios;
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  },
});

store.dispatch('auth/check');
Vue.use(VueRouter);
export const router = new VueRouter({
  mode: 'history',
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth) && !store.getters['auth/isAuthenticated']) {
    next({
      name: 'auth.login',
    });
  } else if (to.matched.some(m => m.meta.guest) &&
      store.getters['auth/isAuthenticated']) {
    next({
      name: 'dashboard.index',
    });
  } else {
    next();
  }
});
VuexRouterSync.sync(store, router);
Vue.router = router;

{{#if_eq bootstrapConfig "4"}}
Vue.use(BootstrapVue);
{{/if_eq}}
Vue.use(VeeValidate, {
  delay: 500,
  validity: false,
});

export default {
  router,
};
