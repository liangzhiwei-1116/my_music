<template>
    <div class="detail">
      <sub-header :title="playlist.name"></sub-header>
      <!--解决图片放大盖住头部区域-->
      <div style="overflow: hidden">
        <detail-top :path="playlist.coverImgUrl" ref="top"></detail-top>
      </div>
      <div class="bottom">
        <scroll-view ref="scrollview">
          <detail-bottom :playList="playlist.tracks"></detail-bottom>
        </scroll-view>
      </div>
    </div>
</template>

<script>
import SubHeader from '../components/Detail/DetailHeader'
import DetailTop from '../components/Detail/DetailTop'
import DetailBottom from '../components/Detail/DetailBottom'
import ScrollView from '../components/ScrollView'
/* 引入方法接口时需要使用大括号 */
import { getPlayList, getAlbum, getArtistSongs, getTopList } from '../api/index'
export default {
  name: 'Detail',
  metaInfo () {
    return {
      title: '歌曲详情',
      meta: [
        {
          name: 'keyWords',
          content: '歌曲详情'
        },
        {
          name: 'description',
          content: '这是歌曲详情页面'
        }
      ]
    }
  },
  components: {
    SubHeader,
    DetailTop,
    DetailBottom,
    ScrollView
  },
  data () {
    return {
      playlist: {}
    }
  },
  created () {
    if (this.$route.params.type === 'personalized') {
      getPlayList({ id: this.$route.params.id })
        .then((data) => {
          this.playlist = data.playlist
        }).catch((err) => {
          console.log(err)
        })
    } else if (this.$route.params.type === 'albums') {
      getAlbum({ id: this.$route.params.id })
        .then((data) => {
          this.playlist = {
            name: data.album.name,
            coverImgUrl: data.album.picUrl,
            tracks: data.songs
          }
        }).catch((err) => {
          console.log(err)
        })
    } else if (this.$route.params.type === 'singer') {
      getArtistSongs({ id: this.$route.params.id })
        .then((data) => {
          this.playlist = {
            name: data.artist.name,
            coverImgUrl: data.artist.picUrl,
            tracks: data.hotSongs
          }
        }).catch((err) => {
          console.log(err)
        })
    } else if (this.$route.params.type === 'rank') {
      getTopList({ id: this.$route.params.id })
        .then((data) => {
          this.playlist = {
            name: data.playlist.name,
            coverImgUrl: data.playlist.creator.backgroundUrl,
            tracks: data.playlist.tracks
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    const defaultTop = this.$refs.top.$el.offsetHeight
    this.$refs.scrollview.scrolling((offsetY) => {
      if (offsetY < 0) {
        // 向上拖拽 图片模糊
        // 高斯模糊非常消耗性能 移动端不建议使用 可以使用一个盒子盖住然后调整盒子透明度的方式实现类似效果
        // const scale = 5 * Math.abs(offsetY) / defaultTop
        // this.$refs.top.$el.style.filter = `blur(${scale}px)`
        const scale = Math.abs(offsetY) / defaultTop
        this.$refs.top.changeMask(scale)
      } else {
        // 向下拖拽 图片放大
        const scale = 1 + offsetY / defaultTop
        this.$refs.top.$el.style.transform = `scale(${scale})`
      }
    })
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
.detail {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @include bg_sub_color();
  .bottom {
    position: fixed;
    top: 500px;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
