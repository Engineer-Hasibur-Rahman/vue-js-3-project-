import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../views/backend/dashboard.vue';

import authLayout from '../views/frontend/authLayout.vue';

import login from '../views/frontend/login.vue';
import signup from '../views/frontend/signup.vue';
import portfolio from '../views/frontend/portfolio.vue';
import admin from '../views/backend/admin.vue';
import management from '../views/backend/management.vue';
import student from '../views/backend/student.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
 
 {
    path: '/portfolio',
    name: 'portfolio', 
    component: portfolio
  },

  {
    path: '/admin',
    name: 'admin', 
    component: admin
  },

  {
    path: '/management',
    name: 'management', 
    component: management
  },

  { 
    path: '/auth',
    component: authLayout,
    children: [
      {
        path: '/login',
        name: 'login', 
        component: login
      },
    {
        path: '/signup',
        name: 'signup', 
        component: signup
      },
    ],
  },

  {
    path: '/student',
    name: 'student', 
    component: student
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
