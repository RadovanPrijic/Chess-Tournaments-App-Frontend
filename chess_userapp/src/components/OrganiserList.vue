<template>

 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="organisers.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="organisers"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="organisers.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
  </div>

</template>

<script>

  import { mapState } from 'vuex';

  export default {
    name: "OrganiserList",

    data() {
      return {
        fields: ['name', 'formation_date', 'president', 'country', 'website'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    mounted() {

    },

    computed: {
      ...mapState([
        'organisers'
      ])
    },

    methods: {
      rowClicked(record, index) {
        this.$router.push({ name: 'SingleOrganiser', params: { id: record.id} });
      }
    }
  }

</script>

<style scoped>

  .pagination {
    justify-content: center;
  }
  
</style>