import webpack from 'webpack'
import path from 'path'

const HtmlWebpackPlugin = require('html-webpack-plugin');


export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index.js')  
   ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module:{
    rules:[
        {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
        {test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'},
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: './Asset',
          },    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
   })
  ] 
}