<template>
    <div>
      <homeheader></homeheader>
      <homeswiper></homeswiper>
    </div>
</template>

<script>
import homeheader from './components/Header'
import homeswiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper
  }
}
</script>

<style>
</style>
