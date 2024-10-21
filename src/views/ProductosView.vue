<template>
  <div class="prod-container">
    <CardView/>
  </div>
</template>

<script>
import CardView from '@/components/CardView.vue'

export default {
  name: 'ProductosView',
  components: {
    CardView,
  }
}
</script>

<style scoped>
.prod-container{
  margin-top: 20px;
  text-align: center;
  height: auto;
  padding: 0px;
}
</style>

