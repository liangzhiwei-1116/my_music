<template>
    <div class="song">
      <div class="song-top">
        <h3>最新音乐</h3>
      </div>
      <songList :songs="songs"></songList>
    </div>
</template>

<script>
import songList from '../songList'
export default {
  name: 'Song',
  components: {
    songList
  },
  props: {
    songs: {
      type: Array,
      // 需要通过箭头函数传值
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .song {
    width: 100%;
    @include bg_sub_color();
    .song-top {
      @include bg_sub_color();
      padding: 0 20px;
      width: 100%;
      height: 84px;
      line-height: 84px;
      border-bottom: 1px solid whitesmoke;
      h3 {
        @include font_size($font_large);
        @include font-color();
        font-weight: bold;
      }
    }
  }
</style>
