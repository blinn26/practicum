// webpack.config.js
const path = require('path') // connect path to webpack config

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    // rewrite the output point using the path utility
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
}
