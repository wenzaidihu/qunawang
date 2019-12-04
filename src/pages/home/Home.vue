<template>
    <div>
      <homeheader :city="city"></homeheader>
      <homeswiper :list="swiperList"></homeswiper>
      <homeicons :list="iconList"></homeicons>
      <homerecommend :list="recommendList"></homerecommend>
      <homeweekend :list="weekendList"></homeweekend>
    </div>
</template>

<script>
import homeheader from './components/Header'
import homeswiper from './components/Swiper'
import homeicons from './components/Icons'
import homerecommend from './components/Recommend'
import homeweekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper,
    homeicons,
    homerecommend,
    homeweekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      // if (res.ret && res.data) {
      //   const data = res.data
      //   this.city = data.city
      //   this.swiperList = data.swiperList
      //   this.iconList = data.iconList
      //   this.recommendList = data.recommendList
      //   this.weekendList = data.weekendList
      // }
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
