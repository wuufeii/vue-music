<template>
  <div class="recommend">
    <div class="recommend-content">
      <div>
        <swiper :options="swiperOption" class="slider">
          <swiper :options="swiperOption" v-if="sliders.length">
            <swiper-slide v-for="item of sliders" :key="item.id">
              <a :href="item.linkUrl">
                <img class="swiper-img" :src="item.picUrl">
              </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单</h1>
          <div class="item" v-for="item in songLists" :key="item.id">
            <div class="img">
              <img :src="item.picUrl">
            </div>
            <div class="desc">
              {{item.songListDesc}}
            </div>
            <div class="name">
              {{item.songListAuthor}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
export default{
  data () {
    return {
      sliders: [],
      songLists: [],
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data)
          this.sliders = res.data.slider
          this.songLists = res.data.songList
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"

  .recommend
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider
        width:100%;
        img
          width:100%;
      .recommend-list
        overflow: hidden
        margin-bottom:20px
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          box-sizing: border-box
          align-items: center
          width:calc(50% - 8px)
          float:left
          background-color:#333
          margin:10px 4px 0
          overflow：hidden
          .img
            width:100%
            img
              width:100%
          .desc
            color: $color-text-d
            padding:5px
            font-size:14px
            text-overflow:ellipsis
            overflow:hidden
            white-space:nowrap
          .name
            color: $color-text-d
            padding:5px
            font-size:14px
            text-overflow:ellipsis
            overflow:hidden
            white-space:nowrap
</style>
