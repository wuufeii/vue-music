<template>
  <div class="m-header">
    <h1 class="text"><i class="icon-music"></i>飞飞音乐</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  @import "~assets/stylus/mixin"
  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
      .icon-music
        padding-right:5px
      .icon-music:before
        vertical-align:middle
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
