<template>

  <div id="app">
    <Header :subtitle="subtitle"/>
    <TournamentList />
  </div>

</template>

<script>

  import Header from '@/components/Header.vue';
  import TournamentList from '@/components/TournamentList.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Tournament',
    
    components: {
      Header,
      TournamentList
    },

    data() {
        return {
            subtitle: 'Turniri',
        }
    },

    mounted() {
        this.fetchTournaments();
    },

    methods: {
      ...mapActions([
        'fetchTournaments'
      ])
    }
  }

</script>

<style scoped>

</style>
