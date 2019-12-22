<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="https://imgs.qunarzz.com/vs_ceph_vs_tts/5958b155-6345-4dc8-afea-881a83d90c60.jpg_r_390x260x90_2dd95f3d.jpg">
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界（AAAA）景区</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe615;</span>
        39
      </div>
    </div>
  </div>
  <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></CommonGallary>
</div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'https://imgs.qunarzz.com/vs_ceph_vs_tts/5958b155-6345-4dc8-afea-881a83d90c60.jpg_r_390x260x90_2dd95f3d.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
