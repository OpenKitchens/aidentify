module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://34.170.246.161',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
