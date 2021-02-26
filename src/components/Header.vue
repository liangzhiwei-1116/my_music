<template>
  <div class="header" @click="changeTheme()">
    <!--不能直接设置插槽的样式 可以将其包裹在某个标签内-->
    <div class="left">
      <slot name="left">左</slot>
    </div>
    <slot name="center">中</slot>
    <div class="right">
      <slot name="right">右</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      theme: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.theme.length) this.index = 0
      document.documentElement.setAttribute('data-theme', this.theme[this.index])
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  @import "../assets/css/variable";
  .header {
    @include bg_color();
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    .header-left, .header-right {
      width: 84px;
      height: 84px;
      margin-top: 8px;
      * {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
