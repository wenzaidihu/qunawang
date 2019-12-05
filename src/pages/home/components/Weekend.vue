<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     weekendList: [{
  //       id: '0001',
  //       imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/4636d3ad-3468-4f4a-82c6-b7ac11427125.jpg_r_480x320x90_7cab183d.jpg',
  //       title: '深圳-泰国 6天跟团游',
  //       desc: '尾单甩位❖曼谷芭提雅6天4晚❖富贵黄金屋❖泰拳表演❖升级海边酒店❖76楼自助'
  //     },
  //     {
  //       id: '0002',
  //       imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/5958b155-6345-4dc8-afea-881a83d90c60.jpg_r_480x320x90_c9422665.jpg',
  //       title: '深圳-海口 5天跟团游',
  //       desc: '三亚超值纯玩派5日游+帆船游艇出海！分界洲/大小洞天/天涯海角/亚龙湾玫瑰谷'
  //     },
  //     {
  //       id: '0003',
  //       imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/67d500ae-a5c7-42a8-9ca8-2be5da8ba921.jpg_r_480x320x90_4c6597bf.jpg',
  //       title: '深圳-桂林 4天跟团游',
  //       desc: '错峰金秋游桂林龙脊古东瀑布丨民族自助宴+遇龙河双人漂流丨漓江阳朔银子岩'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
