<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      // 隐藏滚动条
      scrollbars: false,
      // 像素级别的拖拽事件
      probeType: 3,
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true,
      // 解决安卓端click失效
      preventDefault: false
    })
    /*
    * 创建一个观察者对象：
    * mutationList：发生变化的数组
    * observer：观察者对象
    * */
    const observer = new MutationObserver((mutationList, observer) => {
      this.iscroll.refresh()
    })
    /*
    * 告诉观察者我们需要关注什么内容
    * */
    const config = {
      childList: true, // 观察目标子节点的变化，添加或者删除
      subtree: true, // 默认为 false，设置为 true 可以观察后代节点
      attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
    }
    /*
    * 第一个参数：观察谁
    * 第二个参数：需要观察什么内容
    * */
    observer.observe(this.$refs.wrapper, config)
  },
  methods: {
    // 提供一个监听滚动距离的方法给外界使用
    scrolling (fn) {
      this.iscroll.on('scroll', function () {
        fn(this.y)
      })
    },
    // 提供一个方法给列表歌单计算当前滚动范围
    refresh () {
      setTimeout(() => {
        this.iscroll.refresh()
      }, 50)
    },
    scrollTo (x, y, time) {
      this.iscroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>
#wrapper {
  width: 100%;
  height: 100%;
}
</style>
