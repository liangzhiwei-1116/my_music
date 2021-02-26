<template>
    <div class="tabbar">
      <router-link tag="div" class="item " to="/recommend">
          <span>推荐</span>
      </router-link>
      <router-link tag="div" class="item " to="/singer">
        <span>歌手</span>
      </router-link>
      <router-link tag="div" class="item " to="/rank">
        <span>排行</span>
      </router-link>
      <router-link tag="div" class="item " to="/search">
        <span>搜索</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  @import "../assets/css/variable";
  .tabbar {
    @include bg_sub_color();
    width: 100%;
    height: 84px;
    display: flex;
    justify-content: space-around;
    .item {
      span {
        @include font_size($font_medium);
        @include font_color();
        line-height: 84px;
      }
      &.router-link-active {
        span {
          @include font_active_color();
        }
        border-bottom: 3px solid #000;
        @include border_color();
      }
    }
  }
</style>
