import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Tournament from '@/views/Tournament.vue';
import Organiser from '@/views/Organiser.vue';
import Result from '@/views/Result.vue';
import AddResult from "@/views/AddResult.vue";
import UpdateResult from "@/views/UpdateResult.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/tournaments',
    name: 'Tournament',
    component: Tournament
  },
  {
    path: '/organiser',
    name: 'Organiser',
    component: Organiser
  },
  {
    path: '/results/:id',
    name: 'Result',
    component: Result
  },
  {
    path: '/addresult/:id',
    name: 'AddResult',
    component: AddResult
  },
  {
    path: '/updateresult',
    name: 'UpdateResult',
    component: UpdateResult
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
