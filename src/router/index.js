import Vue from 'vue';
import VueRouter from 'vue-router';
import Signup from '../views/Signup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Signup,
    meta: {
      breadcrumb: 'Home',
      label: 'home',
    },
  },
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
    component: () => import(/* webpackChunkName: "admin" */ '../views/Succses.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue'),
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
    component: () => import(/* webpackChunkName: "admin" */ '../views/Profile.vue'),
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

export default router;
