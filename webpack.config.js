var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: 'vue'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm'
    }
  }
}
