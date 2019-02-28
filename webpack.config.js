const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: '@/js/main.js',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'htdocs')
  }/*,
  plugins: [
      new ExtractTextPlugin('css/[name].css')
  ]*/,
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,
  watch: process.env.NODE_ENV === 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                'scss': 'vue-style-loader!css-loader!sass-loader'
              }
            }
          }
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[hash].[ext]',
                outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(gif|jpg|png)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
};
