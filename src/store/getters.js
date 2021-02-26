export default {
  // 通过 getters 访问共享数据 不直接使用state
  isFullScreen (state) {
    return state.isFullScreen
  },
  isShowMini (state) {
    return state.isShowMini
  },
  isShowList (state) {
    return state.isShowList
  },
  isPlaying (state) {
    return state.isPlaying
  },
  playMode (state) {
    return state.playMode
  },
  songs (state) {
    return state.songs
  },
  currentSong (state) {
    let fakeObj = {
      id: '',
      name: '',
      singer: '',
      picUrl: null
    }
    if (state.songs.length !== 0) {
      fakeObj = state.songs[state.currentIndex]
    }
    return fakeObj
  },
  currentLyric (state) {
    return state.currentLyric
  },
  currentIndex (state) {
    return state.currentIndex
  },
  curTime (state) {
    return state.curTime
  },
  favoriteList (state) {
    return state.favoriteList
  },
  historyList (state) {
    return state.historyList
  },
  loginState (state) {
    return state.loginState
  },
  registerState (state) {
    return state.registerState
  }
}
