<template>
  <div class="song-container swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide cd">
        <div class="cd-warpper" ref="cdWarpper">
          <img :src="currentSong.picUrl" alt="">
        </div>
        <p>{{ this.getFirstLyric() }}</p>
      </div>
      <div class="swiper-slide lyric" ref="lyric">
        <scroll-view ref="scrollView">
          <ul>
            <li
              v-for="(value, index) in this.currentLyric"
              :key="index"
              :class="{'active' : currentLineNumber === index}"
            >
              {{ value }}
            </li>
          </ul>
        </scroll-view>
      </div>
    </div>
    <div class="song-pagination swiper-pagination"></div>
  </div>
</template>

<script>
import 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper' // 引入Swiper依赖
import ScrollView from '../ScrollView'
import { mapGetters } from 'vuex'
export default {
  name: 'PlayerMiddle',
  components: {
    ScrollView
  },
  data () {
    return {
      currentLineNumber: '0'
    }
  },
  props: {
    currentTime: {
      type: Number,
      default: 0,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentSong',
      'currentLyric'
    ])
  },
  methods: {
    getSongBanners () {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper('.song-container', {
        loop: false, // 循环模式选项
        autoplay: false,
        // 如果需要分页器
        pagination: {
          el: '.song-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        initialSlide: 0,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        observeSlideChildren: true
      })
    },
    getFirstLyric () {
      for (const key in this.currentLyric) {
        return this.currentLyric[key]
      }
    },
    // 处理更换进度条进度后对应时间无歌词的情况
    getActiveLineNumber (lineNumber) {
      // 防止无限递归死循环
      if (lineNumber < 0) {
        return this.currentLineNumber
      }
      const result = this.currentLyric[lineNumber + '']
      if (result === undefined || result === '') {
        lineNumber--
        return this.getActiveLineNumber(lineNumber)
      } else {
        return lineNumber + ''
      }
    },
    // 设置歌词的滚动同步
    updateLyric () {
      if ((document.querySelector('li.active')) !== null) {
        const currentLyricTop = document.querySelector('li.active').offsetTop
        const lyricHeight = this.$refs.lyric.offsetHeight
        if (currentLyricTop > lyricHeight / 2) {
          this.$refs.scrollView.scrollTo(0, lyricHeight / 2 - currentLyricTop, 100)
        } else {
          this.$refs.scrollView.scrollTo(0, 0, 100)
        }
      }
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.getBanners()
    // })
    setTimeout(() => {
      this.getSongBanners()
    }, 0)
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.cdWarpper.classList.add('active')
      } else {
        this.$refs.cdWarpper.classList.remove('active')
      }
    },
    currentTime (newValue, oldValue) {
      // 歌词的高亮
      const lineNumber = Math.floor(newValue)
      this.currentLineNumber = this.getActiveLineNumber(lineNumber)
      // 歌词的滚动
      setTimeout(() => {
        this.updateLyric()
      }, 50)
    },
    // 监听歌词变化以解决歌曲第一句歌词对应key不是0开始的情形
    currentLyric (newValue, oldValue) {
      for (const key in newValue) {
        this.currentLineNumber = newValue[key]
        return
      }
    }
  }

}

</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
  .swiper-container {
    position: fixed;
    top: 150px;
    bottom: 250px;
    left: 0;
    right: 0;
    .cd {
      .cd-warpper {
        display: block;
        margin: 0 auto;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        border: 20px solid #fff;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
        }
        animation: sport 4s linear infinite;
        animation-play-state: paused;
        &.active {
          animation-play-state: running;
        }
      }
      p {
        text-align: center;
        margin-top: 50px;
        @include font_color();
        @include font-size($font_medium);
      }
    }
    .lyric {
      li {
        text-align: center;
        margin: 10px 0;
        @include font-size($font_medium);
        @include font-color();
        &:last-of-type {
          padding-bottom: 50%;
        }
        &.active {
          color: #FFFFFF;
        }
      }
    }
  }
  @keyframes sport {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
<style lang="scss">
  @import "../../assets/css/mixin";
  .my-bullet{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #fff;
    margin: 0 20px;
  }
  .my-bullet-active{
    width: 40px;
    @include bg_color();
  }
</style>
