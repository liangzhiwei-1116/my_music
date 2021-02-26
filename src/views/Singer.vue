<template>
  <div class="singer">
    <div class="singer-wrapper">
      <ScrollView ref="scrollView">
        <ul class="list-wrapper">
          <li class="list-group" v-for="(value, index) in list" :key="index" ref="listGroup">
            <h2 class="group-title">
              {{keys[index]}}
            </h2>
            <ul>
              <li class="group-item" v-for="obj in list[index]" :key="obj.id" @click.stop="chooseSinger(obj.id)">
                <img v-lazy="obj.img1v1Url" alt="">
                <p>{{obj.name}}</p>
              </li>
            </ul>
          </li>
        </ul>
      </ScrollView>
      <ul class="list-keys">
        <li
          v-for="(key, index) in keys"
          :key="key"
          :class="{'active' : currentLi === index}"
          :data-index="index"
          @touchstart.stop.prevent="touchstart"
          @touchmove.stop.prevent="touchmove"
        >
          {{ key }}
        </li>
      </ul>
      <div class="fix-title" v-show="fixTitle !== ''">
        {{fixTitle}}
      </div>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getAllArtists } from '../api/index'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Singer',
  metaInfo () {
    return {
      title: '歌手',
      meta: [
        {
          name: 'keyWords',
          content: '歌手'
        },
        {
          name: 'description',
          content: '这是歌手页面'
        }
      ]
    }
  },
  components: {
    ScrollView
  },
  data () {
    return {
      keys: [],
      list: [],
      groupTop: [],
      currentLi: 0,
      beginOffsetY: 0,
      moveOffsetY: 0,
      scrollY: 0
    }
  },
  computed: {
    fixTitle () {
      if (this.scrollY >= 0) {
        // 不需要显示
        return ''
      } else {
        return this.keys[this.currentLi]
      }
    }
  },
  created () {
    getAllArtists()
      .then((result) => {
        this.keys = result.keys
        this.list = result.list
      })
      .catch((err) => {
        console.log(err)
      })
  },
  mounted () {
    // 处理当歌手界面滚动到不同区域时 右边导航class的切换
    this.$refs.scrollView.scrolling((y) => {
      // 对 scrollY 进行储存
      this.scrollY = y

      // 处理第一个区域
      if (y >= 0) {
        this.currentLi = 0
        // eslint-disable-next-line
        return
      }

      // 处理中间区域
      for (let i = 0; i < this.groupTop.length - 1; i++) {
        const preTop = this.groupTop[i]
        const nextTop = this.groupTop[i + 1]
        // 滚动区域在两个模块之间
        if (-y >= preTop && -y <= nextTop) {
          this.currentLi = i
          // eslint-disable-next-line
          return
        }
      }

      // 处理最后一个区域
      this.currentLi = this.groupTop.length - 1
    })
  },
  methods: {
    setLiTop (index) {
      this.currentLi = index
      this.$refs.scrollView.scrollTo(0, -(this.groupTop[index]))
    },
    touchstart (e) {
      // 直接设置点击后的li的位置
      this.setLiTop(parseInt(e.target.dataset.index))

      // 定位该处点击的位置
      this.beginOffsetY = e.touches[0].pageY
    },
    // 屏幕触摸到的位置
    touchmove (e) {
      this.moveOffsetY = e.touches[0].pageY
      const offsetY = Math.floor(((this.moveOffsetY - this.beginOffsetY) / e.target.offsetHeight))
      let index = parseInt(e.target.dataset.index) + offsetY
      if (index < 0) {
        index = 0
      } else if (index > this.keys.length - 1) {
        index = this.keys.length - 1
      }
      this.setLiTop(index)
    },
    chooseSinger (id) {
      this.$router.push(`/singer/detail/${id}/singer`)
    }
  },
  watch: {
    list () {
      // 调用延时加载
      this.$nextTick(() => {
        this.$refs.listGroup.forEach((value) => {
          this.groupTop.push(value.offsetTop)
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";
.singer {
  height: 100%;
  width: 100%;
  .singer-wrapper{
    position: fixed;
    top: 184px;
    bottom: 0;
    left: 0;
    right: 0;
    @include bg_sub_color();
    overflow: hidden;
    .list-wrapper {
      .list-group {
        .group-title {
          @include bg_color();
          @include font_size($font_medium);
          color: white;
          padding: 10px 20px;
          box-sizing: border-box;
        }
        .group-item {
          display: flex;
          justify-content: flex-start;
          padding: 15px 20px;
          border-bottom: 1px solid gray;
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
          }
          p {
            @include font_size($font_medium);
            @include font_color();
            display: flex;
            align-items: center;
            margin-left: 20px;
          }
        }
      }
    }
    .list-keys {
      position: fixed;
      right: 10px;
      top: 58%;
      transform: translateY(-50%);
      li {
        padding: 4px 0;
        @include font_color();
        @include font_size($font_medium_s);
        &.active {
          color: #b2bec3;
        }
      }
    }
    .fix-title {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      padding: 10px 20px;
      color: white;
      @include font_size($font_medium);
      @include bg_color();
    }
  }
}
/*设置歌手歌单页面的动画效果*/
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
