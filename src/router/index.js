import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'pages/recommend/recommend'
import Singer from 'pages/singer/singer'
import Rank from 'pages/rank/rank'
import Search from 'pages/search/search'
import SingerDetail from 'pages/singer-detail/singer-detail'
import RankDetail from 'pages/rank-detail/rank-detail'
import RecommendDetail from 'pages/recommend-detail/recommend-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: RecommendDetail
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})
