<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleOrganiser v-if="tournament" :tournament="tournament"/>
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
    
    methods: {
      ...mapState([
        'tournament'
      ]),

      ...mapActions([
        'fetchTournamentById'
      ])
    },

    mounted() {
      this.fetchTournamentById(this.$route.params.id);
    }
  }

</script>