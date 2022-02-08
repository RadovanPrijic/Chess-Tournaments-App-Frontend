<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>Ime organizatora: {{ organiser.name }}</li>
            <li>Datum osnivanja: {{ organiser.formation_date }}</li>
            <li>Precednik: {{ organiser.president }}</li>
            <li>Država: {{ organiser.country }}</li>
            <li>Vebsajt: {{ organiser.website }}</li>
        </ul>
        </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "SingleOrganiser",

  props: {
    organiser: Object
  },

  methods: {

  }
}

</script>

<style scoped>

  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }

</style>