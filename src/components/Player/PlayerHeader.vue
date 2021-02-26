<template>
  <div class="header">
    <div class="header-left" @click="hiddenSong"></div>
    <div class="header-title">
      <h3>{{ this.currentSong.name }}</h3>
      <p>{{ this.currentSong.singer }}</p>
    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PlayerHeader',
  computed: {
    ...mapGetters([
      'currentSong'
    ])
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    hiddenSong () {
      this.setFullScreen(false)
      this.setMiniPlayer(true)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    .header-left, .header-right {
      width: 84px;
      height: 84px;
      margin-top: 8px;
    }
    .header-left {
      @include bg_img('../../assets/images/down')
    }
    .header-title {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: white;
      @include font_size($font_medium);
      @include no-wrap();
    }
  }
</style>
