<template>
    <div class="player-bottom">
      <div class="bottom-progress">
        <span ref="theCurrentTime">00:00</span>
        <div class="progress-bar" @click="progressClick" ref="progressBar">
          <div class="progress-line" ref="progressLine">
            <div class="progress-dot"></div>
          </div>
        </div>
        <span ref="theTotalTime">00:00</span>
      </div>
      <div class="bottom-control">
        <div class="mode loop" @click.stop="changeMode" ref="mode"></div>
        <div class="prev" @click.stop="prev"></div>
        <div class="play" @click.stop="play" ref="play"></div>
        <div class="next" @click.stop="next"></div>
        <div class="favorite" @click.stop="favorite" :class="{'active' : isFavorite(this.currentSong)}"></div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PlayMode from '../../store/PlayMode'
import { formatTime } from '../../tools/tools'
export default {
  name: 'PlayerBottom',
  props: {
    totalTime: {
      type: Number,
      default: 0,
      required: true
    },
    currentTime: {
      type: Number,
      default: 0,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'playMode',
      'currentIndex',
      'currentSong',
      'favoriteList'
    ])
  },
  methods: {
    ...mapActions([
      'setPlaying',
      'setPlayMode',
      'changeCurrentIndex',
      'changeCurTime',
      'addFavoriteSong'
    ]),
    play () {
      this.setPlaying(!this.isPlaying)
    },
    changeMode () {
      if (this.playMode === PlayMode.loop) {
        this.setPlayMode(PlayMode.one)
      } else if (this.playMode === PlayMode.one) {
        this.setPlayMode(PlayMode.random)
      } else {
        this.setPlayMode(PlayMode.loop)
      }
    },
    prev () {
      this.changeCurrentIndex(this.currentIndex - 1)
    },
    next () {
      this.changeCurrentIndex(this.currentIndex + 1)
    },
    favorite () {
      this.addFavoriteSong(this.currentSong)
    },
    isFavorite (song) {
      const result = this.favoriteList.find((currentValue) => {
        return currentValue.id === song.id
      })
      return result !== undefined
    },
    progressClick (e) {
      // 计算进度条所在位置
      const normalLeft = this.$refs.progressBar.offsetLeft
      const eventLeft = e.pageX
      const clickLeft = eventLeft - normalLeft
      const progressWidth = this.$refs.progressBar.offsetWidth
      const value = clickLeft / progressWidth * 100
      this.$refs.progressLine.style.width = value + '%'

      // 更新点击之后歌曲的播放时间
      const currentTime = this.totalTime * value / 100
      this.changeCurTime(currentTime)
    }
  },
  watch: {
    // 监听...mapGetters中isPlaying的变化
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },
    playMode (newValue, oldValue) {
      if (newValue === PlayMode.loop) {
        this.$refs.mode.classList.remove('random')
        this.$refs.mode.classList.add('loop')
      } else if (newValue === PlayMode.one) {
        this.$refs.mode.classList.remove('loop')
        this.$refs.mode.classList.add('one')
      } else {
        this.$refs.mode.classList.remove('one')
        this.$refs.mode.classList.add('random')
      }
    },
    totalTime (newValue, oldValue) {
      const time = formatTime(newValue)
      this.$refs.theTotalTime.innerHTML = time.min + ':' + time.second
    },
    currentTime (newValue, oldValue) {
      // 格式化当前播放时间
      const time = formatTime(newValue)
      this.$refs.theCurrentTime.innerHTML = time.min + ':' + time.second
      // 计算进度条播放比例
      const value = newValue / this.totalTime * 100
      this.$refs.progressLine.style.width = value + '%'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
.player-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  .bottom-progress {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .progress-bar {
      width: 100%;
      margin: 0 10px;
      height: 10px;
      background: #fff;
      .progress-line {
        position: relative;
        width: 0%;
        height: 100%;
        background: #ccc;
        .progress-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .bottom-control {
    width: 80%;
    margin: 0 auto;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 84px;
      height: 84px;
    }
    .mode {
      &.loop {
        @include bg_img('../../assets/images/loop');
      }
      &.one {
        @include bg_img('../../assets/images/one');
      }
      &.random {
        @include bg_img('../../assets/images/shuffle');
      }
    }
    .prev {
      @include bg_img('../../assets/images/prev');
    }
    .play {
      @include bg_img('../../assets/images/play');
      &.active {
        @include bg_img('../../assets/images/pause');
      }
    }
    .next {
      @include bg_img('../../assets/images/next');
    }
    .favorite {
      @include bg_img('../../assets/images/un_favorite');
      &.active {
        @include bg_img('../../assets/images/favorite');
      }
    }
  }
}
</style>
