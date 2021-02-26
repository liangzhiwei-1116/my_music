import { getSongDetail, getSongLyric, getSongUrl } from '../api/index'
import { parseLyric } from '../tools/tools'

export default {
  // 用于保存触发 mutations 中保存的方法的方法
  setFullScreen ({ commit }, flag) {
    commit('changeFullScreen', flag)
  },
  setMiniPlayer ({ commit }, flag) {
    commit('changeMiniPlayer', flag)
  },
  setListPlayer ({ commit }, flag) {
    commit('changeListPlayer', flag)
  },
  setPlaying ({ commit }, flag) {
    commit('changePlaying', flag)
  },
  setPlayMode ({ commit }, flag) {
    commit('changePlayMode', flag)
  },
  async getSongsDetail ({ commit }, ids) {
    const result = await getSongDetail({ ids: ids.join(',') })
    const urls = await getSongUrl({ id: ids.join(',') })
    const list = []
    result.songs.forEach((value) => {
      const obj = {}
      // 由于请求歌曲播放返回的urls数组并不是按照请求id顺序返回的 所以需要做一个循环判断
      for (let j = 0; j < urls.data.length; j++) {
        const item = urls.data[j]
        if (value.id === item.id) {
          obj.url = item.url
          break
        }
      }
      obj.name = value.name
      obj.id = value.id
      // eslint-disable-next-line
      obj.picUrl = value['al'].picUrl
      let singer = ''
      // eslint-disable-next-line
      value['ar'].forEach((item, index) => {
        if (index === 0) {
          singer = item.name
        } else {
          singer += '-' + item.name
        }
      })
      obj.singer = singer
      list.push(obj)
    })
    commit('getSongsDetail', list)
  },
  async getSongsLyric ({ commit }, id) {
    const result = await getSongLyric({ id })
    let obj = {}
    // 解决伴奏歌曲没有歌词的报错问题
    if (result.lrc === undefined) {
      obj = {
        0: '纯伴奏没有歌词'
      }
    } else {
      obj = parseLyric(result.lrc.lyric)
    }
    commit('getSongsLyric', obj)
  },
  delSongs ({ commit }, index) {
    commit('delSongs', index)
  },
  changeCurrentIndex ({ commit }, index) {
    commit('changeCurrentIndex', index)
  },
  changeCurTime ({ commit }, time) {
    commit('setCurTime', time)
  },
  addFavoriteSong ({ commit }, song) {
    commit('addFavoriteSong', song)
  },
  reFavoriteList ({ commit }, list) {
    commit('reFavoriteList', list)
  },
  addHistorySong ({ commit }, song) {
    commit('addHistorySong', song)
  },
  reHistoryList ({ commit }, list) {
    commit('reHistoryList', list)
  },
  changeLoginState ({ commit }, flag) {
    commit('changeLoginState', flag)
  },
  changeRegisterState ({ commit }, flag) {
    commit('changeRegisterState', flag)
  }
}
