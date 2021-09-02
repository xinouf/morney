const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/morney-website/'
      : '/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end()
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
        .use('svgo-loader').loader('svgo-loader') //发现加载了svg
        .tap(options => ({...options, plugins:[{removeAttrs: {attrs: 'fill'}}]})).end()//就删除svg自带的属性（fill）
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)
  }
}
