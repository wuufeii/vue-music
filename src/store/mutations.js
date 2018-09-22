import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_TOP_LIST] (state, topList) {
    state.topList = topList
  }
}

export default mutations
