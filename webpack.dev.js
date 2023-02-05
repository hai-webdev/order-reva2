const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

// webpack的开发环境配置，从基本配置中合并
// 合并是利用 webpack-merge 完成的： https://github.com/survivejs/webpack-merge
const devConfig = {
  mode: "development",
  // devtool: "source-map",
  devServer: {
    open: true,
    port: getRandom(8000, 8999),
    // port:8082,
    proxy: {
      // 如果开发环境中有跨域问题，在这里配置代理
    },
    stats: "minimal",
    inline:true,
    disableHostCheck:true,
    host:'192.168.0.124',
  }
};
module.exports = merge(baseConfig, devConfig);
