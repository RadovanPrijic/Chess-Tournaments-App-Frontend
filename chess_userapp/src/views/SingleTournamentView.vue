<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleTournament v-if="tournament" :tournament="tournament"/>
  </div>

</template>

<script>

  import {mapActions, mapState} from "vuex";
  import Header from '@/components/Header.vue';
  import SingleTournament from "@/components/SingleTournament.vue";

  export default {
    name: 'SingleTournamentView',

    components: {
      Header,
      SingleTournament
    },

    data() {
      return {
        subtitle: 'Turnir'
      }
    },

    computed: {
      ...mapState([
        'tournament'
      ])
    },
    
    methods: {
      ...mapActions([
        'fetchTournamentById'
      ])
    },

    mounted() {
      this.fetchTournamentById(this.$route.params.id);
    }
  }

</script>

<style scoped>

</style>