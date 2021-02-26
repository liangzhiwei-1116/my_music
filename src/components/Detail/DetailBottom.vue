<template>
    <ul class="detail-bottom">
      <li class="bottom-top" @click="playAllMusic">
        <div class="bottom-icon"></div>
        <div class="bottom-title">播放全部</div>
      </li>
      <li v-for="value in playList" :key="value.id" class="item" @click="playSong(value.id)">
        <h3>{{ value.name }}</h3>
        <p>{{value.al.name}} - {{value.ar[0].name}}</p>
      </li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DetailBottom',
  props: {
    playList: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer',
      'getSongsDetail'
    ]),
    playSong (id) {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
      this.getSongsDetail([id])
    },
    playAllMusic () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
      const ids = this.playList.map((item) => {
        return item.id
      })
      this.getSongsDetail(ids)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
.detail-bottom {
  width: 100%;
  li {
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    @include bg_sub_color();
    border: 1px solid #ccc;
  }
  .bottom-top {
    display: flex;
    align-items: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    .bottom-icon {
      width: 60px;
      height: 60px;
      margin-right: 20px;
      @include bg_img('../../assets/images/small_play')
    }
    .bottom-title {
      @include font_color;
      @include font_size($font_large);
    }
  }
  .item {
    h3 {
      @include font_size($font_medium);
      @include font_color();
    }
    p {
      opacity: 0.8;
      @include font_size($font_samll);
      @include font_color();
    }
  }
}
</style>
