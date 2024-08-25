import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';
import HabitTracker from '@/views/HabitTracker.vue';
import Login from '@/views/LoginView.vue';
import Home from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/habit-tracker',
    component: HabitTracker,
    beforeEnter: (to, from, next) => {
      const user = Cookies.get('user');
      if (user) {
        next();
      } else {
        next('/login');
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
