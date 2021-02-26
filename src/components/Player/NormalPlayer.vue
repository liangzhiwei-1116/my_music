<template>
  <transition
    :css="false"
    @enter="enter"
    @leave="leave"
  >
    <div class="normal-player" v-show="this.isFullScreen">
    <div class="player-warpper">
      <player-header></player-header>
      <player-middle :currentTime="currentTime"></player-middle>
      <player-bottom :totalTime="totalTime" :currentTime="currentTime"></player-bottom>
    </div>
    <div class="player-bg">
      <img :src="currentSong.picUrl" alt="">
    </div>
  </div>
  </transition>
</template>

<script>
import PlayerHeader from './PlayerHeader'
import PlayerMiddle from './PlayerMiddle'
import PlayerBottom from './PlayerBottom'
import { mapGetters, mapActions } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'NormalPlayer',
  components: {
    PlayerHeader,
    PlayerMiddle,
    PlayerBottom
  },
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
      'isFullScreen',
      'currentSong'
    ])
  },
  methods: {
    // 动画执行完 需要告知 否则无法实现离开的动画
    enter (el, done) {
      Velocity(el, 'transition.shrinkIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.shrinkOut', { duration: 500 }, function () {
        done()
      })
    },
    ...mapActions([
      'getSongsLyric'
    ])
  },
  watch: {
    currentSong (newValue, oldValue) {
      if (newValue.id === '') {
        return
      }
      this.getSongsLyric(newValue.id)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .normal-player {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    @include bg_sub_color();
    .player-warpper {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 999;
    }
    .player-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      img {
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        filter: blur(10px);
      }
    }
  }
</style>
