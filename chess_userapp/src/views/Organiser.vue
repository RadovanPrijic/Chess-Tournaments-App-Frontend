<template>

  <div id="app">
    <Header :subtitle="subtitle"/>
    <OrganiserList />
  </div>

</template>

<script>

  import Header from '@/components/Header.vue';
  import OrganiserList from '@/components/OrganiserList.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Organiser',
    
    components: {
      Header,
      OrganiserList
    },

    data() {
        return {
            subtitle: 'Organizatori',
        }
    },

    mounted() {
        this.fetchOrganisers();
    },

    methods: {
      ...mapActions([
        'fetchOrganisers'
      ])
    }
  }

</script>

<style scoped>

</style>
