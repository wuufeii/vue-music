import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = (resolve) => {
  import('pages/recommend/recommend').then((recommend) => {
    resolve(recommend)
  })
}

const Singer = (resolve) => {
  import('pages/singer/singer').then((singer) => {
    resolve(singer)
  })
}

const Rank = (resolve) => {
  import('pages/rank/rank').then((rank) => {
    resolve(rank)
  })
}

const Search = (resolve) => {
  import('pages/search/search').then((search) => {
    resolve(search)
  })
}

const SingerDetail = (resolve) => {
  import('pages/singer-detail/singer-detail').then((singerDetail) => {
    resolve(singerDetail)
  })
}

const RankDetail = (resolve) => {
  import('pages/rank-detail/rank-detail').then((rankDetail) => {
    resolve(rankDetail)
  })
}

const RecommendDetail = (resolve) => {
  import('pages/recommend-detail/recommend-detail').then((recommendDetail) => {
    resolve(recommendDetail)
  })
}

const UserCenter = (resolve) => {
  import('pages/user-center/user-center').then((userCenter) => {
    resolve(userCenter)
  })
}

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
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
