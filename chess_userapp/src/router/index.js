import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Tournament from '@/views/Tournament.vue';
import Organiser from '@/views/Organiser.vue';
import Result from '@/views/Result.vue';
import PostResult from "@/views/PostResult.vue";
import UpdateResult from "@/views/UpdateResult.vue";
import SingleTournamentView from '@/views/SingleTournamentView.vue';
import SingleOrganiserView from "@/views/SingleOrganiserView.vue";
import SingleResultView from "@/views/SingleResultView.vue";

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/tournaments',
    name: 'Tournament',
    component: Tournament
  },

  {
    path: '/organisers',
    name: 'Organiser',
    component: Organiser
  },

  {
    path: '/results/:id',
    name: 'ResultList',
    component: Result
  },

  {
    path: '/postresult/:id',
    name: 'PostResult',
    component: PostResult
  },

  {
    path: '/updateresult',
    name: 'UpdateResult',
    component: UpdateResult
  },

  {
    path: '/tournament/:id',
    name: 'SingleTournament',
    component: SingleTournamentView
  },

  {
    path: '/organiser/:id',
    name: 'SingleOrganiser',
    component: SingleOrganiserView
  },

  {
    path: '/result/:id',
    name: 'SingleResult',
    component: SingleResultView
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
