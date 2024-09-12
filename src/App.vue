<template>
  <NavbarView/>
  
  <img src="@/assets/tablaempanada.png" class="img-fluid" alt="..." width="100%" height="300px">

  <router-view/>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'


export default {
  name: 'App',
  components: {
    NavbarView,
  
  }
}
</script>

<style>

</style>
