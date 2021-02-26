import Mode from './PlayMode'
export default {
  /*
  * 保存全局共享的数据
  */
  // 主要播放界面的显示与隐藏
  isFullScreen: false,
  // 迷你播放界面的显示与隐藏
  isShowMini: false,
  // 列表播放器的显示与隐藏
  isShowList: false,
  // 播放暂停按钮的同步
  isPlaying: false,
  // 播放模式的切换
  playMode: Mode.loop,
  // 需要播放的歌曲
  songs: [],
  // 当前播放歌曲
  currentSong: {},
  // 播放到第几首歌曲
  currentIndex: 0,
  // 目前播放歌曲的歌词
  currentLyric: {},
  // 调整歌曲播放进度后歌曲所在的时间
  curTime: 0,
  // 我的收藏
  favoriteList: [],
  // 播放歌曲历史
  historyList: [],
  // 登陆的状态
  loginState: false,
  // 注册的状态
  registerState: false
}
