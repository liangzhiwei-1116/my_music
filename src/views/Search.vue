<template>
  <div class="search">
    <div class="search-box">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==" alt="">
      <input type="text" placeholder="搜索歌曲、歌手、专辑" v-model="keyWords" v-throttle="search">
    </div>
    <div class="search-suggest" v-show="keyWords !== ''">
      <ScrollView>
        <ul>
          <li v-for="value in songs" :key="value.id" @click.stop="playSong(value.id)">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==" alt="">
            <p>{{value.name}} - {{value.ar[0].name}}</p>
          </li>
        </ul>
      </ScrollView>
    </div>
    <div class="search-hot">
      <h3>热门搜索</h3>
      <ul>
        <li v-for="value in hots" :key="value.first" @click.stop="goSearch(value.first)">
          {{value.first}}
        </li>
      </ul>
    </div>
    <ul class="search-history">
      <li v-for="(value, index) in searchHistory" :key="index">
        <div class="history-left">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJNMTUgMzBDNi43MTYgMzAgMCAyMy4yODQgMCAxNVM2LjcxNiAwIDE1IDBzMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOEM3LjgyIDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzUzIyLjE4IDIgMTUgMm03IDE2aC04YTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAxIDEgMiAwdjloN2ExIDEgMCAxIDEgMCAyIi8+PC9zdmc+" alt="">
          <p>{{value}}</p>
        </div>
        <div class="history-right">
          <img @click.stop="delHistory(value)" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJNMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdhLjk3NS45NzUgMCAxIDEtMS4zNzggMS4zNzlMMTIuMDAxIDEzLjM3OCAxLjY2MyAyMy43MTZhLjk3NC45NzQgMCAxIDEtMS4zNzgtMS4zNzlMMTAuNjIzIDEyIC4yODUgMS42NjJBLjk3NC45NzQgMCAxIDEgMS42NjMuMjg0bDEwLjMzOCAxMC4zMzhMMjIuMzM5LjI4NGEuOTc0Ljk3NCAwIDEgMSAxLjM3OCAxLjM3OEwxMy4zNzkgMTIiLz48L3N2Zz4=" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ScrollView from '../components/ScrollView'
import { getSearchData, getSearchHotList } from '../api/index'
import { mapActions } from 'vuex'
import { getSessionStorage, setSessionStorage } from '../tools/tools'
export default {
  name: 'Search',
  metaInfo () {
    return {
      title: '搜索',
      meta: [
        {
          name: 'keyWords',
          content: '搜索'
        },
        {
          name: 'description',
          content: '这是搜索页面'
        }
      ]
    }
  },
  components: {
    ScrollView
  },
  data () {
    return {
      keyWords: '',
      songs: [],
      hots: [],
      searchHistory: []
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer',
      'getSongsDetail'
    ]),
    playSong (id) {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
      this.getSongsDetail([id])
      // 添加本地存储
      if (this.searchHistory.includes(this.keyWords)) {
        // eslint-disable-next-line
        return
      }
      this.searchHistory.push(this.keyWords)
      setSessionStorage('searchHistory', this.searchHistory)
      this.keyWords = ''
    },
    search () {
      getSearchData({ keywords: this.keyWords })
        .then((result) => {
          this.$set(this, 'songs', result.result.songs)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goSearch (params) {
      this.keyWords = params
      // 手动调用搜索功能
      this.search()
    },
    delHistory (value) {
      this.searchHistory = this.searchHistory.filter((item) => {
        return item !== value
      })
      setSessionStorage('searchHistory', this.searchHistory)
    }
  },
  created () {
    getSearchHotList()
      .then((result) => {
        this.$set(this, 'hots', result.result.hots)
      })
      .catch((err) => {
        console.log(err)
      })
    // 查看本地存储
    if (getSessionStorage('searchHistory') === undefined || getSessionStorage('searchHistory') === null) {
      // eslint-disable-next-line
      return
    }
    this.searchHistory = getSessionStorage('searchHistory')
  },
  // 自定义节流指令
  directives: {
    throttle: {
      // 指令的定义
      inserted: function (el, obj) {
        let timerId = null
        let flag = true
        el.addEventListener('input', () => {
          if (!flag) return
          flag = false
          timerId && clearTimeout(timerId)
          timerId = setTimeout(() => {
            flag = true
            obj.value()
          }, 500)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";
.search {
  position: fixed;
  top: 184px;
  bottom: 0;
  left: 0;
  right: 0;
  @include bg_sub_color();
  .search-box {
    display: flex;
    align-items: center;
    margin: 40px 20px;
    background: #ebecec;
    border-radius: 30px;
    border-bottom: 1px solid #ccc;
    img {
      width: 40px;
      height: 40px;
      margin-left: 20px;
    }
    input {
      border: none;
      outline: none;
      background: transparent;
      height: 60px;
      margin-left: 15px;
      @include font_size($font_medium);
    }
  }
  .search-suggest {
    position: fixed;
    top: 300px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    @include bg_sub_color();
    li {
      display: flex;
      align-items: center;
      padding: 20px 40px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      img {
        width: 40px;
        height: 40px;
      }
      p {
        margin-left: 10px;
        @include font_color();
        @include font_size($font_medium);
      }
    }
  }
  .search-hot {
    h3 {
      @include font_size($font_medium);
      @include font_color();
      padding: 10px 20px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        height: 60px;
        line-height: 60px;
        border: 1px solid #000;
        border-radius: 30px;
        padding: 0 20px;
        margin: 12px 20px;
        @include font_color();
        @include font_size($font_medium);
      }
    }
  }
  .search-history {
    li {
      padding: 10px 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      .history-left {
        display: flex;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
        }
        p {
          margin: 20px;
          @include font_size($font_medium);
          @include font_color();
        }
      }
      .history-right {
        img {
          margin-top: 25px;
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>
