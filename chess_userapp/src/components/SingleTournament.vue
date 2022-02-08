<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>Ime turnira: {{ tournament.name }}</li>
            <li>Grad: {{ tournament.city }}</li>
            <li>Država: {{ tournament.country }}</li>
            <li>Datum početka: {{ tournament.start_date }}</li>
            <li>Datum završetka: {{ tournament.end_date }}</li>
            <li>Format: {{ tournament.format }}</li>
        </ul>
        <button v-on:click="accessTrnmtResults()">Rezultati turnira</button>
        </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SingleTournament",

  props: {
    tournament: Object
  },

  methods: {
    accessTrnmtResults(){
      this.$router.push({ name: 'ResultList', params: { id: this.tournament.id} });
    }
  },

  computed: {
    ...mapState([
      'organiser',
      'tournaments',
    ]),
  }
}

</script>

<style scoped>

  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }

</style>