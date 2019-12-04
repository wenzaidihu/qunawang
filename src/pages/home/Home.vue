<template>
    <div>
      <homeheader></homeheader>
      <homeswiper></homeswiper>
      <homeicons></homeicons>
    </div>
</template>

<script>
import homeheader from './components/Header'
import homeswiper from './components/Swiper'
import homeicons from './components/Icons'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper,
    homeicons
  }
}
</script>

<style>
</style>
