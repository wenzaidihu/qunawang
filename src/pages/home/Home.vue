<template>
    <div>
      <homeheader></homeheader>
      <homeswiper></homeswiper>
      <homeicons></homeicons>
      <homerecommend></homerecommend>
    </div>
</template>

<script>
import homeheader from './components/Header'
import homeswiper from './components/Swiper'
import homeicons from './components/Icons'
import homerecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper,
    homeicons,
    homerecommend
  }
}
</script>

<style>
</style>
