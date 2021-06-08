import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PresentationPeople from '../views/PresentationPeople.vue'
import PresentationPlanet from '../views/PresentationPlanet.vue'
import PresentationVehicle from '../views/PresentationVehicle.vue'
import RocketTakeOf from '../views/RocketTakeOf.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/people',
    name: 'PresentationPeople',
    component: PresentationPeople
  },
  {
    path: '/planets',
    name: 'PresentationPlanet',
    component: PresentationPlanet
  },
  {
    path: '/vehicles',
    name: 'PresentationVehicle',
    component: PresentationVehicle
  },
  {
    path: '/rocket',
    name: 'RocketTakeOf',
    component: RocketTakeOf
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
