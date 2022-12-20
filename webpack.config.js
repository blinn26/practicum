/* -------------------------------------------------------------------------- */
/*                            DEBUGGER AND DEVTOOL                            */
/* -------------------------------------------------------------------------- */
// webpack.config.js
module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js',
  },
  // ... existing code
}

/* -------------------------------------------------------------------------- */
/*                     POINT OF ENTRY  USING PATH UTILITY                     */
/* -------------------------------------------------------------------------- */
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
/* -------------------------------------------------------------------------- */
/*                        CONNECTING WEBPACK TO CONFIG                        */
/* -------------------------------------------------------------------------- */

// webpack.config.js
const path = require('path') // connect path to webpack config

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development', // add development mode here like this
}
/* -------------------------------------------------------------------------- */
/*                        DEPLOYMENT OF LOCALHOST 8080                        */
/* -------------------------------------------------------------------------- */
module.exports = {
  // ... previous settings
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // specifies a folder from where to serve the application and its contents
    compress: true, // this will speed up file loading in development mode
    port: 8080, // will open your site at localhost:8080 (you can use another port)
    open: true, // site will open automatically in the browser after executing npm run dev
    liveReload: true,
    hot: false,
  },
}
/* -------------------------------------------------------------------------- */
/*                                STATS  MODULE                               */
/* -------------------------------------------------------------------------- */

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js',
  },
  stats: 'errors-only', // only output when errors happen
  // ... existing code
}

/* -------------------------------------------------------------------------- */
/*                         CONFIG FILE OF ALL CHANGES                         */
/* -------------------------------------------------------------------------- */
// webpack.config.js

const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  stats: 'errors-only',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
    liveReload: true,
    hot: false,
  },
}
