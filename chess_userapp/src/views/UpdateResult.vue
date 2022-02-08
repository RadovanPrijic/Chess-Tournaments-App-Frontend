<template>

  <div id="app"  v-if="this.token">
    <Header subtitle="Modifikacija postojećeg rezultata"/>

    <b-form @submit="onSubmit">

      <b-form-group label="ID rezultata:" label-for="id">
        <b-form-input id="id" v-model="form.id" type="number" placeholder="Unesite ID rezultata" required></b-form-input>
      </b-form-group>
      
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
  <p v-else>Nemate pravo na ovu modifikaciju.</p>
  
</template>

<script>

import Header from '@/components/Header.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UpdateResult',

  components: {
    Header
  },

  props: {
    
  },

  data() {
    return {
      form: {
        id: '',
        userId: '',
        tournamentId: '',
        ranking: '',
        prize: '',
        country_represented: '',
        elo_rating: '',
        coach: ''
      }
    }
  },

  computed: {
    ...mapState([
      'token',
      //'ResultData',
      'loggedUserId'
    ]),
  },

/*
  mounted() {
    this.form.id = this.ResultData.id.toString(),
    this.form.ranking = this.ResultData.ranking,
    this.form.prize= this.ResultData.prize,
    this.form.country_represented= this.ResultData.country_represented,
    this.form.elo_rating= this.ResultData.elo_rating,
    this.form.coach= this.ResultData.coach
  }, */

  methods: {
    ...mapActions([
      'updateResult'
    ]),

    onSubmit(e) {
      e.preventDefault();
      this.form.userId = this.loggedUserId.toString()
      this.form.tournamentId = this.$route.params.id.toString()
      this.addResult(this.form);
      this.$router.back();
    }
  }
}
</script>

<style scoped>

</style>
