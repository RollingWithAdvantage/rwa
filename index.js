var express = require('express')
var bodyParser = require('body-parser')
var User = require('./app/models/user')
var locationService = require('./app/services/location/locationService')

/* EXPRESS CONFIG */
var app = express()

app.set('views', './app/views')
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }))

/* MODEL */
var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECT_STRING)

var Facility = mongoose.model('Facility', new mongoose.Schema({
  name: String,
  zip:  Number
}))

/* ROUTES */
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/sign-up', (req, res) => {
  res.render('sign-up')
})
app.post('/users', (req, res) => {
  var user = new User({
    un:  req.body.un,
    em:  req.body.em,
    pw:  req.body.pw,
    fn:  req.body.fn,
    ln:  req.body.ln,
    zip: req.body.zip,
    geolocation: {
      type: "Point",
      coordinates: locationService.getCoordinates(req.body.zip)
	}
  })
  user.save((err) => {
    if (err) console.log(err)
    else console.log('New user created')
  })
  res.send(req.body)
})
app.get('/login', (req, res) => {
  res.render('login')
})
app.post('/login', (req, res) => {
  User.findOne({ un: req.body.un }, (err, user) => {})
})
/*
app.get('/about-us', (req, res) => {
  res.render('about-us')
})
*/

/* SERVER */
app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), () => {
  console.log('Running on 127.0.0.1:' + app.get('port'))
})
