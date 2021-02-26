/*
* 封装各种工具类方法
*/

// 格式化时间
export const formatTime = (time) => {
  let min = Math.floor(time / 60 % 60)
  min = min >= 10 ? min : '0' + min
  let second = Math.floor(time % 60)
  second = second >= 10 ? second : '0' + second
  return {
    min: min,
    second: second
  }
}

// 封装格式化歌词的方法
export const parseLyric = (lrc) => {
  const lyrics = lrc.split('\n')
  // 1.定义正则表达式提取[00:00.000]
  const reg1 = /\[\d*:\d*\.\d*\]/g
  // 2.定义正则表达式提取 [00
  const reg2 = /\[\d*/i
  // 3.定义正则表达式提取 :00
  const reg3 = /\:\d*/i
  // 4.定义对象保存处理好的歌词
  const lyricObj = {}
  lyrics.forEach(function (lyric) {
    // 1.提取时间
    let timeStr = lyric.match(reg1)
    if (!timeStr) { return }
    timeStr = timeStr[0]
    // 2.提取分钟
    const minStr = timeStr.match(reg2)[0].substr(1)
    // 3.提取秒钟
    const secondStr = timeStr.match(reg3)[0].substr(1)
    // 4.合并时间, 将分钟和秒钟都合并为秒钟
    const time = parseInt(minStr) * 60 + parseInt(secondStr)
    // 5.处理歌词
    const text = lyric.replace(reg1, '').trim()
    // 6.保存数据
    lyricObj[time] = text
  })
  return lyricObj
}

// 取出一个随机数
export const getRandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 存储本地存储
// export const setLocalStorage = (key, value) => {
//   window.localStorage.setItem(key, JSON.stringify(value))
// }

// 读取本地存储
// export const getLocalStorage = (key) => {
//   return JSON.parse(window.localStorage.getItem(key))
// }

// 存储本地存储
export const setSessionStorage = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

// 读取本地存储
export const getSessionStorage = (key) => {
  return JSON.parse(window.sessionStorage.getItem(key))
}

// 预先定义榜单的数组
export const beforeCategory = () => {
  const obj = {
    officialList: [
      { name: '飙升榜', id: 3 },
      { name: '新歌榜', id: 0 },
      { name: '原创榜', id: 2 },
      { name: '热歌榜', id: 1 }
    ],
    recList: [
      { name: '云音乐说唱榜', id: 23 },
      { name: '云音乐电音榜', id: 25 },
      { name: '云音乐国电榜', id: 32 },
      { name: '云音乐韩语榜', id: 26 },
      { name: '云音乐ACG榜', id: 22 },
      { name: '云音乐古典榜', id: 24 }
    ],
    globalList: [
      { name: '美国Billboard榜', id: 6 },
      { name: 'UK排行榜周榜', id: 5 },
      { name: 'Beatport全球电子舞曲榜', id: 21 },
      { name: '日本Oricon榜', id: 10 },
      { name: 'iTunes榜', id: 8 },
      { name: '中国新乡村音乐排行榜', id: 29 }
    ],
    otherList: [
      { name: 'KTV唛榜', id: 7 },
      { name: '法国 NRJ Vos Hits 周榜', id: 19 },
      { name: '云音乐欧美新歌榜', id: 27 },
      { name: '云音乐ACG动画榜', id: 28 },
      { name: '云音乐ACG游戏榜', id: 30 },
      { name: '云音乐ACG VOCALOID榜', id: 31 }
    ],
    titles: { officialList: '官方榜', recList: '推荐榜', globalList: '全球榜', otherList: '更多榜单' }
  }
  return obj
}

// 定义登入后返回数据的代码
export const returnCode = {
  NOT_FOUND: 0,
  CODE_ERROR: 1,
  CODE_OK: 2
}
