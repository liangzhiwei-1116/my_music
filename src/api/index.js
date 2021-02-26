// 管理接口地址
import Network from './network'
import { beforeCategory } from '../tools/tools'

// 请求轮播图
export const getBanner = () => {
  return Network.get('/banner?type=2')
}

// 推荐歌单
export const getPersonalized = () => {
  return Network.get('/personalized?limit=6')
}

// 最新专辑
export const getAlbumNewest = () => {
  return Network.get('/album/newest')
}

// 推荐新音乐
export const getNewSong = () => {
  return Network.get('/personalized/newsong')
}

// 获取推荐歌单详情
export const getPlayList = (data) => {
  return Network.get('/playlist/detail', data)
}

// 获取专辑内容
export const getAlbum = (data) => {
  return Network.get('/album', data)
}

// 获取歌曲详情
export const getSongDetail = (data) => {
  return Network.get('/song/detail', data)
}

// 获取歌词详情
export const getSongLyric = (data) => {
  return Network.get('/lyric', data)
}

// 获取歌曲播放地址
export const getSongUrl = (data) => {
  return Network.get('/song/url', data)
}

// 获取热门歌手
export const getHotArtists = () => {
  return new Promise((resolve, reject) => {
    // offset: 偏移数量 用于分页
    // limit: 取出数量 , 默认为 50
    Network.get('/top/artists?offset=0&limit=5')
      .then((result) => {
        resolve(result.artists)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 根据字母获取对应歌手
export const getLetterArtists = (letter) => {
  return new Promise((resolve, reject) => {
    const allSingers = []
    // offset : 偏移数量，用于分页
    // limit : 返回数量，默认为 30
    // initial: 按首字母索引查找参数
    /*
    * type 取值: {
    *   -1:全部
        1:男歌手
        2:女歌手
        3:乐队
    * }
    * area 取值: {
    *   -1:全部
        7:华语
        96:欧美
        8:日本
        16韩国
        0:其他
    * }
    * */
    // 节约请求资源 自行添加吧
    Network.all([
      Network.get(`/artist/list?limit=5&type=1&area=7&initial=${letter}`),
      // Network.get(`/artist/list?limit=5&type=1&area=96&initial=${letter}`),
      Network.get(`/artist/list?limit=5&type=2&area=7&initial=${letter}`)
      // Network.get(`/artist/list?limit=5&type=2&area=96&initial=${letter}`),
      // Network.get(`/artist/list?limit=5&type=3&area=7&initial=${letter}`)
      // Network.get(`/artist/list?limit=5&type=3&area=96&initial=${letter}`)
    ])
      .then((result) => {
        result.forEach((item) => {
          allSingers.push(...item.artists)
        })
        resolve(allSingers)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

// 获取所有歌手
export const getAllArtists = () => {
  return new Promise((resolve, reject) => {
    const keys = ['热']
    const list = [getHotArtists()]
    // 输出字母 A-Z
    for (let i = 65; i <= 90; i++) {
      const char = String.fromCharCode(i)
      keys.push(char)
      list.push(getLetterArtists(char))
    }
    Network.all(list)
      .then((result) => {
        const obj = {}
        obj.keys = keys
        obj.list = result
        resolve(obj)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

// 获取歌手歌曲
export const getArtistSongs = (data) => {
  return Network.get('/artists', data)
}

// 获取最新榜单
export const getTopListDetail = () => {
  // return Network.get('/toplist/detail')
  return new Promise((resolve, reject) => {
    // 获取预先定义榜单的数组
    const category = beforeCategory()
    // 调用接口获取数据进行比对填充
    Network.get('/toplist/detail')
      .then((result) => {
        result.list.forEach((obj) => {
          let flag = false
          for (const key in category) {
            for (let i = 0; i < category[key].length; i++) {
              if (category[key][i].name === obj.name) {
                category[key][i].rank = obj
                flag = true
                break
              }
            }
            if (flag) { break }
          }
        })
        resolve(category)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 获取单个榜单对应详情
export const getTopList = (data) => {
  return Network.get('/top/list', data)
}

// 搜索功能
export const getSearchData = (data) => {
  return Network.get('/cloudsearch', data)
}

// 热门搜索列表
export const getSearchHotList = () => {
  return Network.get('/search/hot')
}
