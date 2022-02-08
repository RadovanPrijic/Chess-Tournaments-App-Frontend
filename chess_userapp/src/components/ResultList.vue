<template>

 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="results.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="results"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="results.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <b-button v-on:click="accessResultPost()">Dodaj rezultat</b-button>
  </div>

</template>

<script>

  import { mapState } from 'vuex';

  export default {
    name: "ResultList",

    data() {
      return {
        fields: ['userId', 'ranking', 'prize', 'country', 'elo_change', 'coach'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    // TODO Ovde treba dodati metode upravljanje paginacijom

    mounted() {

    },

    computed: {
      ...mapState([
        'results'
      ])
    },

    methods: {
      rowClicked(record, index) {
        this.$router.push({ name: 'SingleResult', params: { id: record.id} });
      },
      accessResultPost(){
        this.$router.push({ name: 'PostResult', params: { id: this.$route.params.id} });
      }
    }
  }

</script>

<style scoped>

  .pagination {
    justify-content: center;
  }
  
</style>