import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
