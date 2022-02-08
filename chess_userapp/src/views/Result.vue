<template>

  <div id="app">
    <Header :subtitle="subtitle"/>
    <ResultList />
  </div>

</template>

<script>

  import Header from '@/components/Header.vue';
  import ResultList from '@/components/ResultList.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Result',
    
    components: {
      Header,
      ResultList
    },

    data() {
        return {
            subtitle: 'Rezultati',
        }
    },

    mounted() {
        this.fetchResults();
    },

    methods: {
      ...mapActions([
        'fetchResults'
      ])
    }
  }

</script>

<style scoped>

</style>
