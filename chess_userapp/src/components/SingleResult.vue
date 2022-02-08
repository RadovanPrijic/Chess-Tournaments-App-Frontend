<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>Participantov broj: {{ result.userId }}</li>
            <li>Osvojeno mesto: {{ result.ranking }}</li>
            <li>Nagrada (u dolarima): {{ result.prize }}</li>
            <li>Država: {{ result.country_represented }}</li>
            <li>Promena ELO rejtinga: {{ result.elo_change }}</li>
            <li>Trener: {{ result.coach }}</li>
        </ul>
        <button v-on:click="accessResultUpdate()">Modifikacija rezultata</button>
        </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SingleResult",

  props: {
    result: Object
  },

  methods: {
    ...mapMutations([
        "setResultData"
    ]),
    
    accessResultUpdate() {
      if (this.loggedUserId == this.result.userId){
        this.setResultData({
          id: this.result.id,
          userId: this.result.userId,
          tournamentId: this.result.tournamentId,
          ranking: this.result.ranking,
          prize: this.result.prize,
          country_represented: this.result.country_represented,
          elo_change: this.result.elo_change,
          coach: this.result.coach,
        })
        this.$router.push({ name: 'UpdateResult'});
      }
      else{
        alert("Ne možete modifikovati rezultat ako niste ulogovani, odnosno ako ovo nije vaš rezultat.")
      }
    }
  },

  computed: {
    ...mapState([
      'resultData',
      'loggedUserId'
    ])
  },

}

</script>

<style scoped>

  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }

</style>