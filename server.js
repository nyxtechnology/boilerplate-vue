var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var history = require('connect-history-api-fallback')

var app = express()
app.use(history())
app.use(serveStatic(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

var port = process.env.NODE_PORT || 5000
app.listen(port)
console.log('server started ' + port)
