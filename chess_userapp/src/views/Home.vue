<template>
  <div id="app">
    <Header subtitle="Početna stranica"/>
    <img
      src="https://i.pinimg.com/736x/3c/4f/18/3c4f1886e5b1d47f3126703fd20f56b7.jpg"
      width="200"
      alt="Logo"
    />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'Home',
    
    components: {
      Header
    }
  }
</script>
