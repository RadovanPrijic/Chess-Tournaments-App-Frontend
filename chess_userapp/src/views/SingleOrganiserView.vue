<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleOrganiser v-if="organiser" :organiser="organiser"/>
  </div>

</template>

<script>

  import {mapActions, mapState} from "vuex";
  import Header from '@/components/Header.vue';
  import SingleOrganiser from "@/components/SingleOrganiser.vue";

  export default {
    name: 'SingleOrganiserView',

    components: {
      Header,
      SingleOrganiser
    },

    data() {
      return {
        subtitle: 'Organizator'
      }
    },
    
    methods: {
      ...mapState([
        'organiser'
      ]),

      ...mapActions([
        'getOrganiserById'
      ])
    },

    mounted() {
      this.fetchOrganiserById(this.$route.params.id);
    }
  }

</script>