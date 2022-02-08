<template>

  <div id="app">
    <Header subtitle="Prijava"/>

    <b-form @submit="onSubmit">
      <b-form-group label="Korisničko ime:" label-for="username">
        <b-form-input id="username" v-model="form.username" placeholder="Unesite korisničko ime" required></b-form-input>
      </b-form-group>

      <b-form-group label="Lozinka:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>

</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Login',
    
    components: {
      Header
    },

    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },

    methods: {
      ...mapActions([
        'login'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.login(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
  
</script>

<style scoped>

</style>
