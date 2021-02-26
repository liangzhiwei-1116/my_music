<template>
  <div id="app">
    <login v-if="!loginState"></login>
    <Register v-else-if="!registerState"></Register>
    <div v-else>
      <MainHeader></MainHeader>
      <Tabbar></Tabbar>
      <!--使用 keep-alive 缓存歌手界面数据 避免多次请求-->
      <keep-alive include="Singer">
        <router-view></router-view>
      </keep-alive>
      <player></player>
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'
import Tabbar from './components/Tabbar'
import Player from './views/Player'
import Login from './views/Login'
import Register from './views/Register'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    MainHeader,
    Tabbar,
    Player,
    Login,
    Register
  },
  computed: {
    ...mapGetters([
      'loginState',
      'registerState'
    ])
  },
  methods: {
    ...mapActions([
      'changeLoginState'
    ])
  },
  watch: {
    $route (to, from) {
      if (to.path === '/login') {
        this.changeLoginState(false)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "assets/css/variable";
</style>
