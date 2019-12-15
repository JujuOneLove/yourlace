import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Plan1 from '../views/Plan.vue'
import Motifs from '../views/Motifs'
import Etapes from '../views/Etapes'
import Fin from '../views/Fin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/motifs',
    name: 'motifs',
    component: Motifs
  },
  {
    path: '/plan',
    name: 'plan',
    component: Plan1
  },
  {
    path: '/etapes',
    name: 'etapes',
    component: Etapes
  },
  {
    path: '/fin',
    name: 'fin',
    component: Fin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
