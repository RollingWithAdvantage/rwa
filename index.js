var express = require('express')
var app = express()

app.set('views', './app/views')
app.set('view engine', 'pug')

/* MODEL */
var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECT_STRING)

var User = mongoose.model('User', new mongoose.Schema({
  fn: String,
  ln: String,
  pw: String,
  em: String,
  zip: Number
}))

var Facility = mongoose.model('Facility', new mongoose.Schema({
  name: String,
  zip: Number
}))

/* ROUTES */
app.get('/', (req, res) => {
  res.render('index')
})
app.use(express.static('public'));
/*
app.get('/about-us', (req, res) => {
  res.render('about-us')
})
app.get('/sign-up', (req, res) => {
  res.render('sign-up')
})
*/

/* SERVER */
app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), () => {
  console.log('Running on 127.0.0.1:' + app.get('port'))
})
