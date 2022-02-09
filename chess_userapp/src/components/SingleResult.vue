<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>ID: {{ result.id }}</li>
            <li>Trnmt ID: {{ result.tournamentId }}</li>
            <li>Participantov broj: {{ result.userId }}</li>
            <li>Osvojeno mesto: {{ result.ranking }}</li>
            <li>Nagrada (u dolarima): {{ result.prize }}</li>
            <li>Država: {{ result.country_represented }}</li>
            <li>Promena ELO rejtinga: {{ result.elo_change }}</li>
            <li>Trener: {{ result.coach }}</li>
        </ul>
        </div>
        <b-button v-on:click="accessResultModification()">Modifikacija rezultata</b-button>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SingleResult",

  props: {
    result: Object
  },

  computed: {
    ...mapState([
      'loggedUserId'
    ])
  },

  methods: {
    accessResultModification(){
      if(this.loggedUserId == this.result.userId){
        this.$router.push({ name: 'UpdateResult', params: { id: this.result.id, tournamentId: this.result.tournamentId} });
      } else {
        alert("Rezultat možete modifikovati samo ako ste ulogovani, i rezultat je vaš.")
      }
    }
  }
}

</script>

<style scoped>

  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }

</style>