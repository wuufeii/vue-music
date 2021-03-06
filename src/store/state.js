import {loadSearch, loadPlay, loadFavorite} from 'assets/js/cache'
import {playMode} from 'assets/js/config'

const state = {
  singer: {},
  topList: {},
  searchHistory: loadSearch(),
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
