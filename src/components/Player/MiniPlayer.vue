<template>
  <transition
    :css="false"
    @enter="enter"
    @leave="leave"
  >
    <div class="mini-player" v-show="this.isShowMini">
      <div class="player-warpper">
        <div class="player-left" @click="playSong">
          <img :src="currentSong.picUrl" alt="" ref="cdImg">
          <div class="player-title">
            <h3>{{ this.currentSong.name }}</h3>
            <p>{{ this.currentSong.singer }}</p>
          </div>
        </div>
        <div class="player-right">
          <div class="play" @click="play" ref="play"></div>
          <div class="list" @click.stop="showList"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'MiniPlayer',
  computed: {
    ...mapGetters([
      'isShowMini',
      'isPlaying',
      'isShowList',
      'currentSong'
    ])
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer',
      'setPlaying',
      'setListPlayer'
    ]),
    playSong () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    },
    showList () {
      this.setListPlayer(true)
    },
    enter (el, done) {
      Velocity(el, 'transition.bounceUpIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.bounceDownOut', { duration: 500 }, function () {
        done()
      })
    },
    play () {
      this.setPlaying(!this.isPlaying)
    }
  },
  watch: {
    // 监听...mapGetters中isPlaying的变化
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
        this.$refs.cdImg.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
        this.$refs.cdImg.classList.remove('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
  .mini-player {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    .player-warpper {
      @include bg_color();
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .player-left {
        display: flex;
        align-items: center;
        padding-left: 30px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-right: 20px;
          animation: sport 4s linear infinite;
          animation-play-state: paused;
          &.active {
            animation-play-state: running;
          }
        }
        .player-title {
          width: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          h3 {
            width: 100%;
            @include font_color();
            @include font-size($font_medium);
            @include no-wrap();
          }
          p {
            width: 100%;
            @include font_color();
            @include font-size($font_medium_s);
            @include no-wrap();
          }
        }
      }
      .player-right {
        display: flex;
        align-items: center;
        .play {
          width: 84px;
          height: 84px;
          @include bg_img('../../assets/images/play');
          &.active {
            @include bg_img('../../assets/images/pause');
          }
        }
        .list {
          width: 130px;
          height: 130px;
          @include bg_img('../../assets/images/list')
        }
      }
    }
  }
  @keyframes sport {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
