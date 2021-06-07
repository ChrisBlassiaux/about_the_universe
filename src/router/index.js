import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PresentationPeople from '../views/PresentationPeople.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/people',
    name: 'PresentationPeople',
    component: PresentationPeople
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
