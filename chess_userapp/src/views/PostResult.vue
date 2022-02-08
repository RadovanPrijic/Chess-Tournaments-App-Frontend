<template>

  <div id="app"  v-if="this.token">
    <Header subtitle="Objava novog rezultata"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Osvojeno mesto:" label-for="ranking">
        <b-form-input id="ranking" v-model="form.ranking" type="number" placeholder="Unesite osvojeno mesto" required></b-form-input>
      </b-form-group>

      <b-form-group label="Nagrada (u dolarima):" label-for="prize">
        <b-form-input id="prize" v-model="form.prize" type="number" step="0.01" placeholder="Unesite osvojeni iznos" required></b-form-input>
      </b-form-group>

      <b-form-group label="Država:" label-for="country_represented">
        <b-form-input id="country_represented" v-model="form.country_represented" type="text" placeholder="Unesite državu" required></b-form-input>
      </b-form-group>

      <b-form-group label="Promena ELO rejtinga:" label-for="elo_rating">
        <b-form-input id="elo_rating" v-model="form.elo_rating" type="number" placeholder="Unesite promenu ELO rejtinga" required></b-form-input>
      </b-form-group>

      <b-form-group label="Trener:" label-for="coach">
        <b-form-input id="coach" v-model="form.coach" type="text" placeholder="Unesite ime trenera" required></b-form-input>
      </b-form-group>

      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
  <p v-else>Nemate pravo na ovaj unos.</p>
  
</template>

<script>

import Header from '@/components/Header.vue';
import {mapActions, mapState} from "vuex";


export default {
  name: 'PostResult',

  components: {
    Header
  },

  data() {
    return {
      form: {
        userId: '',
        tournamentId: '',
        ranking: '',
        prize: '',
        country_represented: '',
        elo_rating: '',
        coach: ''
      },
    }
  },

  computed: {
    ...mapState([
      'token',
      'loggedUserId'
    ]),
  },

  methods: {
    ...mapActions([
      'postResult',
    ]),

    onSubmit(e) {
      e.preventDefault();
      this.form.userId = this.loggedUserId.toString()
      this.form.tournamentId = this.$route.params.id.toString()
      this.postResult(this.form);
      this.$router.back();
    }
  }
}

</script>

<style scoped>

</style>
