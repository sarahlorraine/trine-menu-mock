const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    modules: true,
    sourceMap: true,
  }
}
module.exports = {
  entry: {
    app: './src/index.tsx',
    vendor: ['react', 'react-dom']
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
      rules: [
          { 
              test: /\.scss$/, 
              use: [ "style-loader", {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true
                }
              }, 
              {
                loader: 'postcss-loader'
              },
              CSSModuleLoader, 
              "sass-loader" 
            ],
              exclude: /\.module\.scss$/, 

          },
          {
              test: /\.css$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: true
                  }
                },
                {
                  loader: 'postcss-loader'
                }
              ],
              include: /\.module\.css$/
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader',
                {
                  loader: 'postcss-loader',
                }
              ],
              exclude: /\.module\.css$/
            },
          { test: /\.tsx?$/, loader: "babel-loader" },
          { test: /\.tsx?$/, loader: "ts-loader" },
          {
            test: /\.svg$/,
            use: [
              {
                loader: "react-svg-loader"
              },
              {
                loader: "babel-loader"
              }
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: "file-loader"
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
      new webpack.HotModuleReplacementPlugin(),
      require('precss'),
      require('autoprefixer')
  ]
}