<template>
  <div id="app">

    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand to="/">Rezultati šahovskih turnira</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Početna stranica</b-nav-item>
            <b-nav-item-dropdown text="Sekcije">
              <b-nav-item to="/tournaments">Turniri</b-nav-item>
              <b-nav-item to="/organisers">Organizatori</b-nav-item>
              <b-nav-item to="/results">Rezultati</b-nav-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!token" to="/register">Registracija</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Prijava</b-nav-item>
            <b-nav-item v-else @click="logout()">Odjava</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view class="stranica" />
  </div>
</template>

<script>

  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'App',

    data() {
      return {
        searchQuery: ''
      }
    },

    computed: {
      ...mapState([
        'token'
      ])
    },

    mounted() {
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
    },

    methods: {
      ...mapMutations([
        'setToken',
        'removeToken'
      ]),

      search(e) {
        e.preventDefault();
      },

      logout() {
        this.removeToken();
      }
    },
    /*  
    sockets: {
      error(err) {
        alert(err);
      }
    } */
  }

</script>

<style>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 10px;
  }

  .stranica {
    width: 80%;
    margin-left: 10%;
  }
  
</style>
