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
        </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "SingleResult",

  props: {
    result: Object
  },
}

</script>

<style scoped>

  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }

</style>