module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    host: "0.0.0.0",
    port: 9000,
    proxy: {
      "/": {
        target: "",
        changeOrigin: true,
        pathRewrite: {
          "/": ""
        }
      }
    }
  },
  productionSourceMap: false,
}
