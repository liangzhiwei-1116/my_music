<template>
  <div class="box">
<!--    swiper中的bug：当数据是从网络请求下来的时 那么自动轮播到最后一页就会失效 使用v-if解决-->
    <div class="banner-container swiper-container" v-if="banners.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="value in banners" :key="value.bannerId">
          <a :href="value.url">
            <img :src="value.pic" alt="">
          </a>
        </div>
      </div>
      <div class="banner-pagination swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper' // 引入Swiper依赖

export default {
  name: 'Banner',
  props: {
    banners: {
      type: Array,
      // 需要通过箭头函数传值
      default: () => [],
      required: true
    }
  },
  methods: {
    getBanners () {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper('.banner-container', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 1500, // 自动切换的时间间隔，单位ms
          stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
          disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
        },
        // 如果需要分页器
        pagination: {
          el: '.banner-pagination'
        },
        initialSlide: 0,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        observeSlideChildren: true
      })
    }
  },
  watch: {
    banners () {
      // 调用延迟加载 $nextTick
      this.$nextTick(() => {
        this.getBanners()
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  .swiper-container {
    .swiper-slide {
      img {
        width: 100%;
        height: 300px;
      }
    }
  }
  /* ::v-deep 样式穿透 */
  ::v-deep .swiper-container{
    .swiper-pagination-bullet{
      width: 14px;
      height: 14px;
      background: #fff;
      opacity: 1;
    }
    .swiper-pagination-bullet-active{
      @include bg_color();
    }
  }
</style>
