const merge = require('webpack-merge')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}


module.exports = (commonConfig, wco, cfgType) => {
  commonConfig.module.rules.forEach(item => {
    if (item.test.test('.svg')) {
      item.exclude = [resolve('src/app/icons')]
    }
  })
  const customConfig = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          include: [resolve('src/app/icons')],
          options: {
            symbolId: 'icon-[name]'
          }
        }
      ]
    }
  }
  const mergeConfig = merge(commonConfig, customConfig)

  mergeConfig.module.rules.forEach(item => {
    console.log(item)
  })

  return mergeConfig
}