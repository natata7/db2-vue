import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
// import Signup from '../views/Signup.vue';

Vue.use(VueRouter);

// eslint-disable-next-line no-unused-vars
const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('signin');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/profile');
};

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Signup,
  //   meta: {
  //     breadcrumb: 'Home',
  //     label: 'home',
  //   },
  //   beforeEnter: ifAuthenticated,
  // },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue'),
  },
  {
    path: '/signup-complete',
    name: 'SignupComplete',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupComplete.vue'),
  },
  {
    path: '/succses',
    name: 'Succses',
    component: () => import(/* webpackChunkName: "succses" */ '../views/Succses.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue'),
    beforeEnter: ifAuthenticated,
    meta: {
      breadcrumb: {
        parent: 'home',
        name: 'search',
      },
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    beforeEnter: ifAuthenticated,
    meta: {
      requiresAuth: true,
      breadcrumb: {
        parent: 'home',
      },
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    // beforeEnter: ifNotAuthenticated,
    meta: {
      requiresAuth: true,
      breadcrumb: {
        label: 'My profile',
        parent: 'home',
      },
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth) && !store.getters.loggedIn) {
//     next({
//       path: '/signin',
//       query: { redirect: to.fullPath },
//     });
//   } else if (to.matched.some((record) => record.meta.auth) && store.getters.loggedIn) {
//     next({
//       name: 'search',
//     });
//   } else {
//     next();
//   }
// });

export default router;
