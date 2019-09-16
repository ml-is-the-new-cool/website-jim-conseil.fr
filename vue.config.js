/*
configureWebpack: {
  module: {
    rules: [
      {
        test: /\.(pdf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'files/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
*/

// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
    }
};
