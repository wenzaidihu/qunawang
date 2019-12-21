<template>
    <div>
      <homeheader></homeheader>
      <homeswiper :list="swiperList"></homeswiper>
      <homeicons :list="iconList"></homeicons>
      <homerecommend :list=" recommendList"></homerecommend>
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
import { mapState } from 'vuex'
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
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // res = res.data
      if (res.data.ret && res.data.data) {
        // const data = res.data
        this.swiperList = res.data.data.swiperList
        this.iconList = res.data.data.iconList
        this.recommendList = res.data.data.recommendList
        this.weekendList = res.data.data.weekendList
      }
      // console.log(res.data.data.city)
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
