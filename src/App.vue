<template>
  <NavbarView/>
  <HomeView/>
  <router-view/>
  <!-- <CardView/> -->
  
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
// import CardView from './components/CardView.vue';


export default {
  name: 'App',
  components: {
    NavbarView,
    // CardView,
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* background: #1C161D; */
}
</style>
