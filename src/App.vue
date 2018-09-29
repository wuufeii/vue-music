<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import MTab from 'components/m-tab/m-tab'
import Player from 'pages/player/player'
export default {
  name: 'App',
  components: {
    MHeader,
    MTab,
    Player
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
