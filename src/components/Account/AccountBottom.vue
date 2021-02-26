<template>
    <div class="account-bottom">
      <div class="bottom-play" @click="playAllMusic">
        <span></span>
        <span>播放全部</span>
      </div>
      <div class="bottom-wrapper">
        <ScrollView>
          <songList :songs="switchNumber === 0 ? myFavoriteList : myHistoryList"></songList>
        </ScrollView>
      </div>
    </div>
</template>

<script>
import ScrollView from '../ScrollView'
import songList from '../songList'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AccountBottom',
  components: {
    ScrollView,
    songList
  },
  data () {
    return {
      myFavoriteList: [],
      myHistoryList: []
    }
  },
  created () {
    this.myFavoriteList = this.favoriteList.reverse()
    this.myHistoryList = this.historyList.reverse()
  },
  computed: {
    ...mapGetters([
      'favoriteList',
      'historyList'
    ])
  },
  props: {
    switchNumber: {
      type: Number,
      default: 0,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer',
      'getSongsDetail',
      'changeCurrentIndex'
    ]),
    playAllMusic () {
      // 更改CurrentIndex防止上次播放的歌曲对本次播放产生影响
      this.changeCurrentIndex(0)

      /*
      * 请求返回 暂时还未解决 403
      * 直接使用mutation中的方法从vuex中更改数据避免二次请求
        if (this.switchNumber === 0) {
          this.getSongsDetail(this.favoriteList)
        } else {
          this.getSongsDetail(this.historyList)
        }
      * */
      let ids = []
      if (this.switchNumber === 0) {
        ids = this.favoriteList.map((item) => {
          return item.id
        })
      } else {
        ids = this.historyList.map((item) => {
          return item.id
        })
      }
      this.getSongsDetail(ids)

      // 界面的显示与隐藏
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .account-bottom {
    position: fixed;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    .bottom-play {
      width: 230px;
      height: 60px;
      margin: 20px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000;
      @include border_color();
      border-radius: 30px;
      span {
        display: inline-block;
        &:nth-of-type(1) {
          width: 46px;
          height: 46px;
          margin-right: 20px;
          @include bg_img('../../assets/images/small_play');
        }
      }
    }
    .bottom-wrapper {
      position: fixed;
      top: 200px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }
  }
</style>
