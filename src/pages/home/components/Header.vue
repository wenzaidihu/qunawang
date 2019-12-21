<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont serach-icon">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
    <div class="header-right">{{this.city}}
    <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: ' homeheader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    // justify-content :space-between
    // align-items: center
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align:center
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      margin-bottom: .1rem
      padding-left: .1rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      .serach-icon
        margin-right: .1rem
    .header-right
      min-width: 1.04rem
      padding-left: .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .2rem
        padding-right: .1rem
</style>
