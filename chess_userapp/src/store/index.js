import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    tournament: null,
    tournaments: [],
    organiser: null,
    organisers: [],
    result: null,
    results: [],
    resultData: {
      id: '',
      userId: '',
      loggedUserId: '', // Potencijalno nepotrebno
      tournamentId: '',
      ranking: '',
      prize: '',
      country_represented: '',
      elo_change: '',
      coach: '',
    }
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

    setLoggedUserId(state, userId){ // Potencijalno nepotrebno
      state.loggedUserId = userId;
    },

    setResultData(state, result){
      state.resultData.id = result.id,
      state.resultData.userId = result.userId,
      state.resultData.tournamentId = result.tournamentId,
      state.resultData.ranking = result.ranking,
      state.resultData.prize = result.prize,
      state.resultData.country_represented = result.country_represented,
      state.resultData.elo_change = result.elo_change,
      state.resultData.coach = result.coach
    },

    setTournaments(state, tournaments) {
      state.tournaments = tournaments;
    },

    setOrganisers(state, organisers) {
      state.organisers = organisers;
    },

    setResults(state, results) {
      state.results = results;
    },

    /*
    setResultById(state, result) {
      state.result = result;
    },
    */

    addResult(state, result) {
      state.result = result;
    },

    addSingleResult(state, result){
      state.results.push(result);
    },

    setSelectedResult(state, result){
      state.result = result;
    },

    setOrganiserById(state, organiser) {
      state.organiser = organiser;
    },

    setTournamentById(state, tournament) {
      state.tournament = tournament;
    },

    setTournamentByOrganiserId(state, orgId) {
      state.tournament = ''
      state.tournaments.forEach(tournament => {
        if (tournament.organiserId === orgId){
          state.tournament = tournament;
        }
      });
    },
  },

  actions: {

    register({ commit }, obj) {
      fetch('http://127.0.0.1:9000/auth_register', { //TODO mozda promeniti rutu u api_register
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
      fetch('http://127.0.0.1:9000/auth_login', { //TODO mozda promeniti rutu u api_login
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
          .then( res => commit('addResult', res) );
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

    fetchTournamentByOrganiserId({ commit }, orgId){
      fetch('http://127.0.0.1:8500/admin/tournaments',{
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        }
      })
          .then( obj => obj.json() )
          .then( res => commit('setTournaments', res));

      commit('setTournamentByOrganiserId', orgId);
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
    },

    updateResult(obj){
      fetch('http://127.0.0.1:8500/admin/results/' + obj.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' ,
          'authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( el => {
            if (el.msg) {
              alert(el.msg, 'Došlo je do greške kod izmene podataka o rezultatu.');
            }
          });
    }
  },

  modules: {

  }
})
