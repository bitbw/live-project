module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: "dist",
  // git page 需要指定公共路径为仓库名 否则会找不到index.html 中连接的资源 (使用域名不需要)
  // publicPath: process.env.NODE_ENV === "production" ? "/live-project/" : "./",
  publicPath: "./",
};
