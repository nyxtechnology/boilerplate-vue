module.exports = {
  isProd: function isProd () {
    return process.env.NODE_ENV === 'production'
  },
  isDevelopment: function isDevelopment () {
    return process.env.NODE_ENV === 'development'
  }
}
