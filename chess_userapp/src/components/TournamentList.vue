<template>

 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="tournaments.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="tournaments"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="tournaments.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
  </div>

</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: "TournamentList",

    data() {
      return {
        fields: ['name', 'city', 'country', 'start_date', 'end_date', 'format'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    mounted() {

    },

    computed: {
      ...mapState([
        'tournaments'
      ])
    },

    methods: {
    /*...mapActions([
        'fetchResults'
      ]),*/

      rowClicked(record, index) {
        this.$router.push({ name: 'SingleTournament', params: { id: record.id} });
      }
    }
  }

</script>

<style scoped>

  .pagination {
    justify-content: center;
  }
  
</style>