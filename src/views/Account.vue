<template>
  <!--appear：初始化就显示动画效果-->
  <transition appear>
    <div class="account">
      <AccountHeader @switchItem="changeSwitchNumber"></AccountHeader>
      <AccountBottom :switchNumber="switchNumber"></AccountBottom>
    </div>
  </transition>
</template>

<script>
import AccountHeader from '../components/Account/AccountHeader'
import AccountBottom from '../components/Account/AccountBottom'
export default {
  name: 'Account',
  metaInfo () {
    return {
      title: '收藏与历史',
      meta: [
        {
          name: 'keyWords',
          content: '收藏与历史'
        },
        {
          name: 'description',
          content: '这是收藏与历史页面'
        }
      ]
    }
  },
  components: {
    AccountHeader,
    AccountBottom
  },
  data () {
    return {
      switchNumber: 0
    }
  },
  methods: {
    changeSwitchNumber (index) {
      this.switchNumber = index
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  @import "../assets/css/variable";
.account {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @include bg_sub_color();
}
/*设置推荐歌单页面的动画效果*/
.v-enter {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0%);
}
.v-enter-active {
  transition: transform 1s;
}
.v-leave {
  transform: translateX(0%);
}
.v-leave-to {
  transform: translateX(100%);
}
.v-leave-active {
  transition: transform 1s;
}
</style>
