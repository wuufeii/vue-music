<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="topList">
      <div>
          <swiper :options="swiperOption" class="slider" v-if="sliders.length">
            <swiper-slide v-for="item of sliders" :key="item.id">
              <a :href="item.linkUrl">
                <img class="swiper-img" @load="loadImage" :src="item.picUrl">
              </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单</h1>
          <div class="item"
               v-for="item in topList"
               :key="item.id"
               @click="selectItem(item)">
            <div class="img">
              <img v-lazy="item.picUrl">
            </div>
            <div class="desc">
              {{item.topTitle}}
            </div>
          </div>
        </div>
      </div>
      <div class="loading-container" v-show="!topList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import {getRecommend} from 'api/recommend'
import {getTopList} from 'api/rank'
import {ERR_OK} from 'api/config'
import {mapMutations} from 'vuex'
import {playlistMixin} from 'assets/js/mixin'
import scroll from 'components/scroll/scroll'
import loading from 'components/loading/loading'
export default{
  mixins: [playlistMixin],
  name: 'Recommend',
  components: {
    scroll,
    loading
  },
  data () {
    return {
      sliders: [],
      topList: [],
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
    this._getTopList()
  },
  methods: {
    loadImage () {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    selectItem (item) {
      this.$router.push({
        path: `/recommend/${item.id}`
      })
      this.setTopList(item)
    },
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.sliders = res.data.slider
        }
      })
    },
    _getTopList () {
      getTopList().then((res) => {
        if (res.code === ERR_OK) {
          this.topList = res.data.topList
        }
      })
    },
    ...mapMutations({
      setTopList: 'SET_TOP_LIST'
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      margin-bottom:20px
      .slider
        width:100%
        img
          width:100%
      .recommend-list
        overflow: hidden
        .list-title
          height: 50px
          line-height: 50px
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
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
