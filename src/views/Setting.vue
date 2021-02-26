<template>
  <transition appear>
    <div class="setting">
      <SettingHeader></SettingHeader>
      <SettingBottom></SettingBottom>
    </div>
  </transition>
</template>

<script>
import SettingHeader from '../components/Setting/SettingHeader'
import SettingBottom from '../components/Setting/SettingBottom'
export default {
  name: 'Setting',
  components: {
    SettingHeader,
    SettingBottom
  },
  metaInfo () {
    return {
      // set a title
      title: '设置',
      // set meta
      meta: [
        {
          name: 'keyWords',
          content: '设置'
        },
        {
          name: 'description',
          content: '这是设置页面'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";
.setting {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @include bg_sub_color();
}
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
