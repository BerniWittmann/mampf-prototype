/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

import mealService from '@/services/meal';

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: require('@/pages/home/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: require('@/pages/account/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Meals
  {
    path: '/meals',
    name: 'meals.index',
    component: require('@/pages/meals/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },
  {
    path: '/meals/add',
    name: 'meals.add',
    component: require('@/pages/meals/add.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  {
    path: '/meals/:mealID',
    name: 'meals.single',
    component: require('@/pages/meals/single.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },

    beforeEnter: (to, from, next) => {
      if (!to.params || !to.params.mealID) {
        return next({
          name: 'meals.index',
        });
      }
      return mealService.getByID(to.params.mealID).then(
        () => next(),
        () => next({
          name: 'meals.index',
        }),
      );
    },

    beforeRouteUpdate: (to, from, next) => {
      if (!to.params || !to.params.mealID) {
        return next({
          name: 'meals.index',
        });
      }
      return mealService.getByID(to.params.mealID).then(
        () => next(),
        () => next({
          name: 'meals.index',
        }),
      );
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: require('@/pages/login/index.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: require('@/pages/register/index.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    redirect: '/home',
  },
];
