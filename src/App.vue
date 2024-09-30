<template>
  <NavbarView/>
  <router-view/> 
  <FooterView/>
</template>

<script>
import NavbarView from './components/NavbarView.vue';
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: {
    NavbarView,
    FooterView,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
