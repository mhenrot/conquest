import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NewGame from '../views/new-game.vue';
import Start from '../views/start.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'NewGame',
    component: NewGame
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
