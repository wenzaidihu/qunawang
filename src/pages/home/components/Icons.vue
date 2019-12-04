<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'Icons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      },
      {
        id: '0002',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      },
      {
        id: '0003',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      },
      {
        id: '0004',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      },
      {
        id: '0005',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '景点门票'
      },
      {
        id: '0006',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/innBnb.png',
        desc: '民宿客栈'
      },
      {
        id: '0007',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/bargainflight.png',
        desc: '低价机票'
      },
      {
        id: '0008',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/group.png',
        desc: '特惠酒店'
      },
      {
        id: '0009',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/haiwai.png',
        desc: '海外酒店'
      },
      {
        id: '0010',
        imgUrl: '//picbed.qunarzz.com/7804b43ac02cd0333bd0f866eebd43b3.png',
        desc: '一日游'
      },
      {
        id: '0011',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/bus.png',
        desc: '汽车票船票'
      },
      {
        id: '0012',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/tuan.png',
        desc: '旅游团购'
      },
      {
        id: '0013',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/freeTravel.png',
        desc: '自由行'
      },
      {
        id: '0014',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/car.png',
        desc: '专车自驾'
      },
      {
        id: '0015',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
        desc: '周边短途'
      },
      {
        id: '0016',
        imgUrl: '//picbed.qunarzz.com/b8bc00a84142f52d21824d5ebeba29a3.png',
        desc: '赚钱信用卡'
      },
      {
        id: '0017',
        imgUrl: '//picbed.qunarzz.com/8bb259c54352f32ebcfc3df189eb3afa.png',
        desc: '借钱'
      },
      {
        id: '0018',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/travel.png',
        desc: '攻略'
      },
      {
        id: '0019',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/youlun.png',
        desc: '邮轮'
      },
      {
        id: '0020',
        imgUrl: '//picbed.qunarzz.com/c983101ec3fc6b3c6c93ccffea08965c.png',
        desc: '白金卡'
      }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style  lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
@import '../../../assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 39%
    .icon
      position: relative
      width: 20%
      padding-bottom: 20%
      float: left
      overflow: hidden
      height: 0
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto
      .icon-text
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .44rem
        height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
        font-size: .12rem
</style>
