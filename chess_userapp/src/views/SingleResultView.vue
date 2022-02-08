<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleResult v-if="result" :result="result"/>
  </div>

</template>

<script>

  import {mapActions, mapState} from "vuex";
  import Header from '@/components/Header.vue';
  import SingleResult from "@/components/SingleResult.vue";

  export default {
    name: 'SingleResultView',

    components: {
      Header,
      SingleResult
    },

    data() {
      return {
        subtitle: 'Rezultat'
      }
    },

    computed: {
      ...mapState([
        'result'
      ])
    },
    
    methods: {
      ...mapActions([
        'fetchResultById'
      ])
    },

    mounted() {
      this.fetchResultById(this.$route.params.id);
    }
  }

</script>

<style scoped>

</style>