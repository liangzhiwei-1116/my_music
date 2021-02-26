<template>
  <Header class="header">
    <!--记得阻止一下冒泡-->
    <div slot="left" class="header-left" @click.stop="back"></div>
    <ul slot="center" class="header-title">
      <li :class="{'active' : switchNumber === 0}" @click.stop="switchItem(0)">我喜欢的</li>
      <li :class="{'active' : switchNumber === 1}" @click.stop="switchItem(1)">最近听的</li>
    </ul>
    <div slot="right" class="header-right" @click.stop="goSetting"></div>
  </Header>
</template>

<script>
import Header from '../Header'
export default {
  name: 'AccountHeader',
  components: {
    Header
  },
  data () {
    return {
      switchNumber: 0
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    switchItem (index) {
      this.switchNumber = index
      this.$emit('switchItem', index)
    },
    goSetting () {
      this.$router.push('/setting')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .header {
    .header-left {
      @include bg_img('../../assets/images/back')
    }
    .header-right {
      @include bg_img('../../assets/images/more')
    }
    .header-title {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      border: 1px solid #fff;
      border-radius: 10px;
      height: 60px;
      margin-top: 20px;
      @include font_size($font_medium);
      @include no-wrap();
      li {
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
        &:nth-of-type(1) {
          border-right: 1px solid #fff;
        }
        &.active {
          background: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
</style>
