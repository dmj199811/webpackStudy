const { EXDEV } = require('node:constants')
const path = require('path')
module.exports ={
  //入口文件
  entry:"./main.js",
  output:{    

      filename:'bundle.js',
      path:path.resolve(__dirname,'./dist')
  },
  module:{
    rules:[{
      test:/\.css$/,
      use:['style-loader','css-loader']
    }]
  },
  mode:'development',
  // plugins :[
  //   new ExtractTextPlugin({
  //     filename:`[name]_{contenthash:8}.css`
  //   }),
  // ]
}