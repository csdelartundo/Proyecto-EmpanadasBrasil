<template>
  <NavbarView/>
  <HomeView>
    <router-view/>
  </HomeView>
  <FooterView/>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue';
import HomeView from './views/HomeView.vue';
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: {
    NavbarView,
    HomeView,
    FooterView,
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
