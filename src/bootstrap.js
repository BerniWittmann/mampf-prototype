/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application.
 */


/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */
import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';


/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */
import Axios from 'axios';
import authService from '@/services/auth';

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/json';
Axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      authService.logout();
    }
  });

Vue.$http = Axios;
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  },
});


/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */
import VuexRouterSync from 'vuex-router-sync';
import store from './store';

store.dispatch('auth/check');


/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
    /*
     * If the user is not authenticated and visits
     * a page that requires authentication, redirect to the login page
     */
    next({
      name: 'login.index',
    });
  } else if (to.matched.some(m => m.meta.guest) && store.state.auth.authenticated) {
    /*
     * If the user is authenticated and visits
     * an guest page, redirect to the dashboard page
     */
    next({
      name: 'home.index',
    });
  } else {
    next();
  }
});
VuexRouterSync.sync(store, router);

Vue.router = router;


/* ============
 * Vue i18n
 * ============
 *
 * Internationalization plugin of Vue.js.
 *
 * https://kazupon.github.io/vue-i18n/
 */
import VueI18n from 'vue-i18n';
import messages from './locale';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages,
});

import moment from 'moment';

moment.locale('de');

/* ============
 * jQuery
 * ============
 *
 * Require jQuery
 *
 * http://jquery.com/
 */
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;


/* ============
 * Normalize.cc
 * ============
 *
 * Require Normalize
 *
 * http://necolas.github.io/normalize.css/
 */

import 'normalize.css';

/* ============
 * Element UI
 * ============
 *
 * Require UI Suite.
 *
 * http://element.eleme.io
 */
import ElementUI from 'element-ui';
import './assets/theme/index.css';

Vue.use(ElementUI, {
  i18n: key => i18n.t(key),
});

/* ============
 * Money Directive
 * ============
 *
 * Register Directive for handling money inputs
 *
 * https://github.com/vuejs-tips/v-money
 */
import money from 'v-money';

// register directive v-money and component <money>
Vue.use(money);

/* ============
 * Waypoint Component
 * ============
 *
 * Register Waypoint
 *
 * https://github.com/scaccogatto/vue-waypoint
 */
import VueWaypoint from 'vue-waypoint';

Vue.use(VueWaypoint);

/* ============
 * ScrollTo directive
 * ============
 *
 * Register ScrolLToDirective
 *
 * https://github.com/rigor789/vue-scrollto
 */
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

/* ============
 * Font Awesome
 * ============
 *
 * Require font-awesome.
 *
 * http://http://fontawesome.io/
 */
require('font-awesome/less/font-awesome.less');

/* ============
 * Animate.css
 * ============
 *
 * Require Animate.css.
 *
 * https://daneden.github.io/animate.css/
 */
require('animate.css');


/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 * Stylus is used for this boilerplate.
 *
 * If you don't want to use Stylus, that's fine!
 * Replace the stylus directory with the CSS preprocessor you want.
 * Require the entry point here & install the webpack loader.
 *
 * It's that easy...
 *
 * http://stylus-lang.com/
 */
require('./assets/style/app.scss');


export default {
  router,
  i18n,
};
