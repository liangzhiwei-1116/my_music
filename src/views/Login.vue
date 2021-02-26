<template>
  <div class="login">
    <div class="heart"></div>
    <div class="box">
      <h1>Welcome to music zone</h1>
      <input type="text" class="username" v-model="username" placeholder="Username">
      <span class="prompt">{{firstPrompt}}</span>
      <input type="password" class="pwd" v-model="password" placeholder="Password">
      <span class="prompt">{{secondPrompt}}</span>
      <div class="buttonCollection">
        <input type="submit" class="submit" value="submit" @click="login">
        <input type="submit" class="register" value="register" @click="register">
      </div>
    </div>
  </div>
</template>

<script>
import Network from '../api/network'
import { setSessionStorage, getSessionStorage, returnCode } from '../tools/tools'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  metaInfo () {
    return {
      // set a title
      title: '登录',
      // set meta
      meta: [
        {
          name: 'keyWords',
          content: '登录'
        },
        {
          name: 'description',
          content: '这是登录页面'
        }
      ]
    }
  },
  data () {
    return {
      username: getSessionStorage('username'),
      password: getSessionStorage('password'),
      firstPrompt: '',
      secondPrompt: ''
    }
  },
  methods: {
    ...mapActions([
      'changeLoginState',
      'changeRegisterState'
    ]),
    login () {
      if (this.username === '' || this.username === null) {
        this.firstPrompt = '请先输入您的账号'
      } else if (this.password === '' || this.password === null) {
        this.secondPrompt = '请先输入您的密码'
      } else if (this.username !== '' && this.password !== '') {
        Network.post('/users/login', {
          username: this.username,
          password: this.password
        }).then((result) => {
          if (result.code === returnCode.NOT_FOUND) {
            alert(result.msg)
            this.username = ''
            this.password = ''
          } else if (result.code === returnCode.CODE_ERROR) {
            alert(result.msg)
            this.password = ''
          } else if (result.code === returnCode.CODE_OK) {
            // 将数据存入sessionStorage
            setSessionStorage('username', this.username)
            setSessionStorage('password', this.password)
            this.changeLoginState(true)
            this.changeRegisterState(true)
            this.$router.push('/recommend')
          }
        }).catch(function (error) {
          // 连接失败
          console.log(error)
        })
      }
    },
    register () {
      this.changeLoginState(true)
      this.$router.push('/register')
    }
  },
  watch: {
    username (newValue, oldValue) {
      if (newValue !== '') {
        this.firstPrompt = ''
      }
    },
    password (newValue, oldValue) {
      if (newValue !== '') {
        this.secondPrompt = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";
.login {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: pink;
  .heart{
    width: 280px;
    height: 280px;
    background: red;
    transform: rotate(45deg) scale(0.85);
    margin: 250px auto;
    animation: moveheart 1s infinite;
    &::before, &::after {
      content: "";
      position: absolute;
      width: 280px;
      height: 280px;
      background: red;
      border-radius: 50%;
    }
    &::before {
      left: -159px;
    }
    &::after{
      top: -159px;
    }
  }
  .box{
    width: 600px;
    padding: 80px;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%,-50%);/*参考自身位置平移*/
    text-align: center;
    h1{
      color: mediumvioletred;
      text-transform: uppercase;
      font-weight: 500;
      margin: 40px 0px;
    }
    .username, .pwd{
      background: none;
      display: block;
      margin: 2px auto;
      text-align: center;
      border: 2px solid palevioletred;
      padding: 20px 10px;
      width: 400px;
      outline: none;
      color: white;
      border-radius: 24px;
      transition: 0.25s;/*在规定时间变化width*/
    }
    .buttonCollection {
      margin-top: 2px;
      display: flex;
      justify-content: center;
      .submit, .register{
        background: none;
        display: block;
        width: 150px;
        /*margin: 20px auto;*/
        text-align: center;
        border: 2px solid palevioletred;
        padding: 14px 10px;
        outline: none;
        color: white;
        border-radius: 20px;
      }
      .submit {
        margin-right: 20px;
      }
      .register {
        margin-left: 20px;
      }
    }
    .prompt {
      margin-right: 220px;
      color: #ff7675;
      @include font_size($font_samll)
    }
  }
}
@keyframes moveheart{
  0%{
    transform: rotate(45deg) scale(0.85);
  }
  50%{
    transform: rotate(45deg) scale(1);
  }
  100%{
    transform: rotate(45deg) scale(0.85);
  }
}
</style>
