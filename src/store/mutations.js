export default {
  // 保存修改全局共享数据的方法
  changeFullScreen (state, flag) {
    state.isFullScreen = flag
  },
  changeMiniPlayer (state, flag) {
    state.isShowMini = flag
  },
  changeListPlayer (state, flag) {
    state.isShowList = flag
  },
  changePlaying (state, flag) {
    state.isPlaying = flag
  },
  changePlayMode (state, flag) {
    state.playMode = flag
  },
  getSongsDetail (state, list) {
    state.songs = list
  },
  getSongsLyric (state, lyric) {
    state.currentLyric = lyric
  },
  delSongs (state, index) {
    if (index !== undefined) {
      state.songs.splice(index, 1)
    } else {
      state.songs = []
    }
    if (index < state.currentIndex) {
      state.currentIndex--
    }
    if (state.songs.length === 0) {
      state.isFullScreen = false
      state.isShowMini = false
      state.isShowList = false
    }
  },
  changeCurrentIndex (state, index) {
    if (index < 0) {
      index = state.songs.length - 1
    } else if (index > state.songs.length - 1) {
      index = 0
    }
    state.currentIndex = index
  },
  setCurTime (state, time) {
    state.curTime = time
  },
  addFavoriteSong (state, song) {
    const result = state.favoriteList.find((currentValue) => {
      return currentValue.id === song.id
    })
    if (result === undefined) {
      state.favoriteList.push(song)
    }
  },
  reFavoriteList (state, list) {
    state.favoriteList = list
  },
  addHistorySong (state, song) {
    const result = state.historyList.find((currentValue) => {
      return currentValue.id === song.id
    })
    if (result === undefined) {
      if (state.historyList.length > 30) {
        state.historyList.shift()
      }
      state.historyList.push(song)
    }
  },
  reHistoryList (state, list) {
    state.historyList = list
  },
  changeLoginState (state, flag) {
    state.loginState = flag
  },
  changeRegisterState (state, flag) {
    state.registerState = flag
  }
}
