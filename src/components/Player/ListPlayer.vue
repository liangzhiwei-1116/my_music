<template>
  <transition
    :css="false"
    @enter="enter"
    @leave="leave"
  >
    <div class="list-player" v-show="this.isShowList">
      <div class="player-warpper">
        <div class="player-top">
          <div class="top-left">
            <div class="mode loop" @click.stop="changeMode" ref="mode"></div>
            <p>顺序播放</p>
          </div>
          <div class="top-right">
            <div class="del" @click.stop="delAll"></div>
          </div>
        </div>
        <div class="player-middle">
          <scroll-view ref="scrollView">
            <ul ref="play">
              <li class="item" v-for="(value, index) in songs" :key="value.id" @click="selectMusic(index)">
                <div class="item-left">
                  <div class="item-play" @click.stop="play" v-show="currentIndex === index"></div>
                  <p>{{ value.name }}</p>
                </div>
                <div class="item-right">
                  <div
                    :class="{'active' : isFavorite(value)}"
                    class="item-favorite"
                    @click.stop="favorite(value)"
                    >
                    </div>
                  <div class="item-close" @click.stop="del(index)"></div>
                </div>
              </li>
            </ul>
          </scroll-view>
        </div>
        <div class="player-bottom">
          <p @click="closeListPlayer">关闭</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ScrollView from '../ScrollView'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
import { mapActions, mapGetters } from 'vuex'
import PlayMode from '../../store/PlayMode'
export default {
  name: 'ListPlayer',
  components: {
    ScrollView
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'playMode',
      'isShowList',
      'songs',
      'currentIndex',
      'favoriteList'
    ])
  },
  methods: {
    ...mapActions([
      'setPlaying',
      'setPlayMode',
      'setListPlayer',
      'delSongs',
      'changeCurrentIndex',
      'addFavoriteSong'
    ]),
    closeListPlayer () {
      this.setListPlayer(false)
    },
    enter (el, done) {
      Velocity(el, 'transition.slideUpIn', { duration: 300 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.slideDownOut', { duration: 300 }, function () {
        done()
      })
    },
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
    del (index) {
      this.delSongs(index)
    },
    delAll () {
      this.delSongs()
    },
    selectMusic (index) {
      this.changeCurrentIndex(index)
    },
    favorite (value) {
      this.addFavoriteSong(value)
    },
    isFavorite (song) {
      const result = this.favoriteList.find((currentValue) => {
        return currentValue.id === song.id
      })
      return result !== undefined
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
    isShowList (newValue, oldValue) {
      if (newValue) {
        this.$refs.scrollView.refresh()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
  .list-player {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    @include bg_sub_color();
    .player-warpper {
      .player-top {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .top-left {
          display: flex;
          align-items: center;
          padding-left: 20px;
          .mode {
            width: 56px;
            height: 56px;
            margin-right: 20px;
            &.loop {
              @include bg_img('../../assets/images/small_loop');
            }
            &.one {
              @include bg_img('../../assets/images/small_one');
            }
            &.random {
              @include bg_img('../../assets/images/small_shuffle');
            }
          }
          p {
            @include font_color();
            @include font_size($font_medium);
          }
        }
        .top-right {
          .del {
            width: 84px;
            height: 84px;
            @include bg_img('../../assets/images/small_del')
          }
        }
      }
      .player-middle {
        width: 100%;
        height: 700px;
        overflow: hidden;
        ul {
          &.active {
            .item {
              .item-play {
                @include bg_img('../../assets/images/small_pause');
              }
            }
          }
        }
        .item {
          border-top: 1px solid #ccc;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          box-sizing: border-box;
          .item-left {
            display: flex;
            align-items: center;
            .item-play {
              width: 56px;
              height: 56px;
              margin-right: 20px;
              @include bg_img('../../assets/images/small_play');
            }
            p {
              width: 500px;
              @include font-size($font-medium);
              @include font-color();
              @include no-wrap();
            }
          }
          .item-right {
            display: flex;
            align-items: center;
            .item-favorite {
              width: 56px;
              height: 56px;
              @include bg_img('../../assets/images/small_un_favorite');
              &.active {
                @include bg_img('../../assets/images/small_favorite')
              }
            }
            .item-close {
              width: 52px;
              height: 52px;
              margin-left: 20px;
              @include bg_img('../../assets/images/small_close')
            }
          }
        }
      }
      .player-bottom {
        width: 100%;
        height: 100px;
        line-height: 100px;
        @include bg_color();
        p {
          color: #cccccc;
          text-align: center;
          @include font_size($font_medium);
        }
      }
    }
  }
</style>
