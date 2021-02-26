<template>
  <div class="setting-bottom">
    <div class="heart"></div>
    <div class="buttonCollection" v-if="!isChangePassword">
      <input type="submit" class="logout" value="退出登入" @click="logout">
      <input type="submit" class="change" value="修改密码" @click="changePassword">
      <input type="submit" class="destroy" value="注销账户" @click="destroyAccount">
    </div>
    <div class="box" v-else>
      <h1>Change Your Password</h1>
      <input type="password" class="pwd" v-model="password" placeholder="Enter your Password">
      <span class="prompt">{{secondPrompt}}</span>
      <input type="password" class="pwd" v-model="rePassword" placeholder="Enter your new Password">
      <span class="prompt">{{thirdPrompt}}</span>
      <div class="singleButton">
        <input type="submit" class="cancel" value="cancel" @click="cancel">
        <input type="submit" class="submit" value="submit" @click="submit">
      </div>
    </div>
  </div>
</template>

<script>
import Network from '../../api/network'
import { getSessionStorage, returnCode } from '../../tools/tools'
import { mapActions } from 'vuex'
export default {
  name: 'SettingBottom',
  data () {
    return {
      isChangePassword: false,
      password: '',
      rePassword: '',
      secondPrompt: '',
      thirdPrompt: ''
    }
  },
  methods: {
    ...mapActions([
      'changeLoginState'
    ]),
    logout () {
      const result = confirm('你确认退出登录吗?')
      if (result) {
        this.$router.push('/login')
        this.changeLoginState(false)
      }
    },
    changePassword () {
      this.isChangePassword = true
    },
    destroyAccount () {
      const result = confirm('你确认注销账户吗? 一旦注销无法找回')
      if (result) {
        Network.post('/users/delete', {
          username: getSessionStorage('username')
        }).then((result) => {
          if (result.code === returnCode.CODE_OK) {
            alert(result.msg)
            window.sessionStorage.clear()
            this.$router.push('/login')
            this.changeLoginState(false)
          } else if (result.code === returnCode.CODE_ERROR) {
            alert(result.msg)
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    submit () {
      const name = getSessionStorage('username')
      const pwd = getSessionStorage('password')
      if (this.password === '') {
        this.secondPrompt = '请先输入您的原始密码'
      } else if (this.rePassword === '') {
        this.thirdPrompt = '请先输入您的新密码'
      } else {
        if (this.password === this.rePassword) {
          alert('新密码 不能与旧密码相同')
          this.rePassword = ''
        } else if (pwd !== this.password) {
          alert('您的初始密码输入有误 请检查后重试')
          this.password = ''
          this.rePassword = ''
        } else {
          Network.post('/users/updatePwd', [
            {
              username: name,
              password: this.password
            },
            {
              username: name,
              password: this.rePassword
            }
          ]).then((result) => {
            if (result.code === returnCode.CODE_OK) {
              alert(result.msg)
              window.sessionStorage.removeItem('password')
              this.$router.push('/login')
              this.changeLoginState(false)
            } else if (result.code === returnCode.CODE_ERROR) {
              alert(result.msg)
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    },
    cancel () {
      this.isChangePassword = false
    }
  },
  watch: {
    password (newValue, oldValue) {
      if (newValue !== '') {
        this.secondPrompt = ''
      }
    },
    rePassword (newValue, oldValue) {
      if (newValue !== '') {
        this.thirdPrompt = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.setting-bottom {
  position: fixed;
  top: 92px;
  bottom: 0;
  left: 0;
  right: 0;
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
  .buttonCollection {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: -70px;
    .logout, .change, .destroy{
      margin: 20px auto;
      background: none;
      display: block;
      width: 400px;
      text-align: center;
      border: 2px solid palevioletred;
      padding: 14px 10px;
      outline: none;
      color: white;
      border-radius: 20px;
    }
  }
  .box{
    width: 600px;
    padding: 80px;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);/*参考自身位置平移*/
    text-align: center;
    h1{
      color: mediumvioletred;
      text-transform: uppercase;
      font-weight: 500;
      margin: 40px 0px;
    }
    .pwd{
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
    }
    .singleButton {
      margin-top: 2px;
      display: flex;
      justify-content: center;
      .submit, .cancel{
        background: none;
        display: block;
        width: 150px;
        text-align: center;
        border: 2px solid palevioletred;
        padding: 14px 10px;
        outline: none;
        color: white;
        border-radius: 20px;
      }
      .cancel {
        margin-right: 100px;
      }
    }
    .prompt {
      margin-right: 160px;
      color: #ff7675;
      @include font_size($font_samll);
      &:last-of-type {
        margin-right: 200px;
      }
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
