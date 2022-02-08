import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    loggedUserId: '',
    tournament: null,
    tournaments: [],
    organiser: null,
    organisers: [],
    result: null,
    results: [],
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    setLoggedUserId(state, userId){
      state.loggedUserId = userId;
    },

    setTournaments(state, tournaments) {
      state.tournaments = tournaments;
    },

    setTournamentById(state, tournament) {
      state.tournament = tournament;
    },

    setOrganisers(state, organisers) {
      state.organisers = organisers;
    },

    setOrganiserById(state, organiser) {
      state.organiser = organiser;
    },

    setResults(state, results) {
      state.results = results;
    },

    postResult(state, result) {
      state.result = result;
    },

    /*
    addSingleResult(state, result){
      state.results.push(result);
    }, */
  },

  actions: {

    register({ commit }, obj) {
      fetch('http://127.0.0.1:9000/auth_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
        .then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              commit('setToken', tkn.token)
            }
          });
    },

    login({ commit }, obj) {
      fetch('http://127.0.0.1:9000/auth_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
        .then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              commit('setToken', tkn.token)
              commit('setLoggedUserId', tkn.userId)
            }
          });
    },

    fetchTournaments({ commit }){
      fetch('http://127.0.0.1:8500/admin/tournaments',{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.token}`
        },
    })
        .then( obj => obj.json() )
        .then( res => commit('setTournaments', res));
    },

    fetchTournamentById({ commit }, id){
      fetch('http://127.0.0.1:8500/admin/tournaments/' + id,{
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
      })
          .then( obj => obj.json() )
          .then( res => commit('setTournamentById', res) );
    },

    fetchOrganisers({ commit }){
      fetch('http://127.0.0.1:8500/admin/organisers',{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.token}`
        },
    })
        .then( obj => obj.json() )
        .then( res => commit('setOrganisers', res));
    },

    fetchOrganiserById({ commit }, id){
      fetch('http://127.0.0.1:8500/admin/organisers/' + id,{
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
      })
          .then( obj => obj.json() )
          .then( res => commit('setOrganiserById', res) );
    },

    fetchResults({ commit }){
      fetch('http://127.0.0.1:8500/admin/results',{
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
      })
          .then( obj => obj.json() )
          .then( res => commit('setResults', res));
    },

    fetchResultById({ commit }, id){
      fetch('http://127.0.0.1:8500/admin/results/' + id,{
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
      })
          .then( obj => obj.json() )
          .then( res => commit('postResult', res) );
    },

    postResult(obj){
        fetch('http://127.0.0.1:8500/admin/results', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' ,
            'authorization': `Bearer ${localStorage.token}`
          },
          body: JSON.stringify(obj)
        }).then( res => res.json() )
            .then( el => {
              if (el.msg) {
                alert(el.msg, 'Došlo je do greško kod dodavanja novog rezultata.');
              }
            });
    }
  },

  modules: {

  }
})
