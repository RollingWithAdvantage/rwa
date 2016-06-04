var express = require('express')
var bodyParser = require('body-parser')

/* EXPRESS CONFIG */
var app = express()

app.set('views', './app/views')
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }))
// create public media access
app.use(express.static('public'));

/* MODEL */
var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECT_STRING)

var User = mongoose.model('User', new mongoose.Schema({
  un:  String,
  em:  String,
  pw:  String,
  fn:  String,
  ln:  String,
  zip: Number
}))

var Facility = mongoose.model('Facility', new mongoose.Schema({
  name: String,
  street_address: String,
  zip:  String,
  campaign_description: String,
  help_needed: String,
  description: String  
}))

/* ROUTES */
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/sign-up', (req, res) => {
  res.render('sign-up')
})
app.get('/add-facility', (req, res) => {
  res.render('add-facility')
})
app.post('/facilities', (req, res) => {
  var facility = new Facility({
    name:  req.body.name,
    street_address:  req.body.address,
    zip: req.body.zip,
    campaign_description:  req.body.campaign_description,
    help_needed:  req.body.help_needed,
    description: req.body.description,
  })
  facility.save((err) => {
    if (err) console.log(err)
    else console.log('New Facility Created')
  })
  res.send(req.body)
})
app.post('/users', (req, res) => {
  var user = new User({
    un:  req.body.un,
    em:  req.body.em,
    pw:  req.body.pw,
    fn:  req.body.fn,
    ln:  req.body.ln,
    zip: req.body.zip
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
