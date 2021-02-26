<template>
  <div class="recommend">
    <div class="recommend-warpper">
      <scrollView>
        <div>
          <banner :banners="banners"></banner>
          <personalized
            :personalized="personalized"
            :title="'推荐歌单'"
            @select="fatherSelectItem"
            :type="'personalized'"
          >
          </personalized>
          <personalized
            :personalized="albums"
            :title="'最新专辑'"
            @select="fatherSelectItem"
            :type="'albums'"
          >
          </personalized>
          <song :songs="songs"></song>
        </div>
      </scrollView>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getAlbumNewest, getNewSong } from '../api/index'
import Banner from '../components/Recommend/Banner'
import Personalized from '../components/Recommend/Personalized'
import Song from '../components/Recommend/Song'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Recommend',
  metaInfo () {
    return {
      // set a title
      title: '推荐',
      // set meta
      meta: [
        {
          name: 'keyWords',
          content: '推荐'
        },
        {
          name: 'description',
          content: '这是推荐页面'
        }
      ]
    }
  },
  components: {
    Banner,
    Personalized,
    Song,
    ScrollView
  },
  data () {
    return {
      banners: [],
      personalized: [],
      albums: [],
      songs: []
    }
  },
  methods: {
    fatherSelectItem (id, type) {
      this.$router.push({
        path: `/recommend/detail/${id}/${type}`
      })
    }
  },
  created () {
    // 轮播图
    getBanner().then((data) => {
      this.banners = data.banners
    }).catch(function (error) {
      console.log(error)
    })

    // 推荐歌单
    getPersonalized().then((data) => {
      this.personalized = data.result
    }).catch(function (error) {
      console.log(error)
    })

    // 最新专辑
    getAlbumNewest().then((data) => {
      const randomNumber = Math.floor(Math.random() * 7)
      this.albums = data.albums.splice(randomNumber, 6)
    }).catch(function (error) {
      console.log(error)
    })

    // 推荐新音乐
    getNewSong().then((data) => {
      const list = []
      data.result.forEach((value) => {
        const obj = {}
        obj.id = value.id
        obj.name = value.name
        obj.picUrl = value.song.album.picUrl
        let singer = ''
        // eslint-disable-next-line
        for (let i = 0; i < value.song['artists'].length; i++) {
          if (i === 0) {
            // eslint-disable-next-line
            singer = value.song['artists'][i].name
          } else {
            // eslint-disable-next-line
            singer += '-' + value.song['artists'][i].name
          }
        }
        obj.singer = singer
        list.push(obj)
      })
      this.songs = list
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style scoped lang="scss">
.recommend {
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
  .recommend-warpper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
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
