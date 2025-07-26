import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import LoginView from './components/LoginView.vue'
import UserProfile from './components/UserProfile.vue'
import PostList from './components/PostList.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/me', component: UserProfile }, 
  { path: '/posts', component: PostList }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
