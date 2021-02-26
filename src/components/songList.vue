<template>
  <ul class="song-list">
    <li v-for="value in songs" :key="value.id" class="item" @click="playSong(value.id)">
      <img v-lazy="value.picUrl" alt="">
      <div>
        <h3>{{ value.name }}</h3>
        <p>{{ value.singer }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'songList',
  props: {
    songs: {
      type: Array,
      // 需要通过箭头函数传值
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
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  @import "../assets/css/variable";
  .song-list {
    width: 100%;
    overflow: hidden;
    .item {
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid #dfe6e9;
      /*margin-bottom: 20px;*/
      img {
        width: 150px;
        height: 150px;
        border-radius: 20px;
        margin-right: 20px;
      }
      div {
        width: 70%;
        h3 {
          @include font_size($font_large);
          @include font_color();
          @include no-wrap();
        }
        p {
          @include font_size($font_samll);
          @include font_color();
          @include no-wrap();
          opacity: 0.6;
          margin-top: 20px;
        }
      }
    }
  }
</style>
