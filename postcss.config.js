// 自动将px转化成rem的配置
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      // 设置根元素字体大小
      rootValue: 100,
      // 所有属性值的px都会自动转换成rem 如果不想转换只需要大写P即可：Px
      propList: ['*']
    }
  }
}
