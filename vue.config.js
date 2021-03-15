module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/live-project/" : "/",
  // publicPath: process.env.NODE_ENV === "production" ? "" : "/",
};
