import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import FindView from '../views/FindView.vue';
import RankingView from '../views/RankingView.vue';
import MovieDetailView from '../views/MovieDetailView.vue';

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: HomeView,
    meta: { title: 'Movie' }
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: RankingView,
    meta: { title: 'Ranking' }
  },
  {
    path: '/find',
    name: 'find',
    component: FindView,
    meta: { title: 'Find' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { title: 'Profile' }
  },
  { 
    path: '/movie/:id',
    name: 'movieDetail',
    component: MovieDetailView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
