<template>
    <div class="player">
      <normal-player :totalTime="totalTime" :currentTime="currentTime"></normal-player>
      <mini-player></mini-player>
      <list-player></list-player>
      <audio
        ref="audio"
        :src="currentSong.url"
        @timeupdate="timeupdate"
        @ended="end"
      >
      </audio>
    </div>
</template>

<script>
import NormalPlayer from '../components/Player/NormalPlayer'
import MiniPlayer from '../components/Player/MiniPlayer'
import ListPlayer from '../components/Player/ListPlayer'
import { mapGetters, mapActions } from 'vuex'
import mode from '../store/PlayMode'
import { getRandomNumber, setSessionStorage, getSessionStorage } from '../tools/tools'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  computed: {
    ...mapGetters([
      'currentSong',
      'isPlaying',
      'currentIndex',
      'curTime',
      'playMode',
      'songs',
      'favoriteList',
      'historyList'
    ])
  },
  data () {
    return {
      totalTime: 0,
      currentTime: 0
    }
  },
  created () {
    // 取出localStorage中储存的数据
    const favoriteList = getSessionStorage('favoriteList')
    if (favoriteList === null) {
      return
    }
    this.reFavoriteList(favoriteList)

    const historyList = getSessionStorage('historyList')
    if (historyList === null) {
      return
    }
    this.reHistoryList(historyList)
  },
  mounted () {
    this.$refs.audio.ondurationchange = () => {
      this.totalTime = this.$refs.audio.duration
    }
  },
  methods: {
    ...mapActions([
      'changeCurrentIndex',
      'reFavoriteList',
      'addHistorySong',
      'reHistoryList'
    ]),
    timeupdate (e) {
      this.currentTime = e.target.currentTime
    },
    end () {
      if (this.playMode === mode.loop) {
        this.changeCurrentIndex(this.currentIndex + 1)
      } else if (this.playMode === mode.one) {
        this.$refs.audio.play()
      } else {
        const index = getRandomNumber(0, this.songs.length - 1)
        this.changeCurrentIndex(index)
      }
    }
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.addHistorySong(this.currentSong)
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
    currentIndex () {
      // 监听audio是否可以播放
      /*
      * 注：ios系统中不会自动加载歌曲 所以使用 oncanplay 不会自动执行
      * 所以可以监听 ondurationchange(歌曲或视频时间发生变化) 事件：当歌曲加载完之后执行 因为只有歌曲加载完之后才能获取到歌曲的总时长
      * */
      this.$refs.audio.ondurationchange = () => {
        // 切换歌曲后就要更新歌曲时长
        this.totalTime = this.$refs.audio.duration
        if (this.isPlaying) {
          this.addHistorySong(this.currentSong)
          this.$refs.audio.play()
        } else {
          this.$refs.audio.pause()
        }
      }
    },
    curTime (newValue, oldValue) {
      this.$refs.audio.currentTime = newValue
    },
    // 使用localStorage储存我的收藏歌曲
    favoriteList (newValue, oldValue) {
      setSessionStorage('favoriteList', newValue)
    },
    // 使用localStorage储存我的播放历史
    historyList (newValue, oldValue) {
      setSessionStorage('historyList', newValue)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
