<template>
    <div>
      <homeheader></homeheader>
      <homeswiper></homeswiper>
      <homeicons></homeicons>
      <homerecommend></homerecommend>
      <homeweekend></homeweekend>
    </div>
</template>

<script>
import homeheader from './components/Header'
import homeswiper from './components/Swiper'
import homeicons from './components/Icons'
import homerecommend from './components/Recommend'
import homeweekend from './components/Weekend'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper,
    homeicons,
    homerecommend,
    homeweekend
  }
  // methods: {
  //   getHomeInfo () {
  //     axios.get('../../../static/mock/index.json')
  //       .then(this.getHomeInfoSucc)
  //   },
  //   getHomeInfoSucc (res) {
  //     console.log(res)
  //   }
  // },
  // mounted () {
  //   this.getHomeInfo()
  // }
}
</script>

<style>
</style>
