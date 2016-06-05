var mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_CONNECT_STRING)

var express = require('express')
var bodyParser = require('body-parser')

/* EXPRESS CONFIG */
var app = express()

app.set('views', './app/views')
app.set('view engine', 'pug')

/* ROUTES */
var home = require('./app/routes/home')
var users = require('./app/routes/users')
var facilities = require('./app/routes/facilities')

var router = express.Router()
router.route('/').get(home.default)
router.route('/about').get(home.about)
router.route('/contact').get(home.contact)
router.route('/user/:un').get(users.view)
router.route('/sign-up').get(users.new)
router.route('/users').post(users.create)
router.route('/login').get(users.loginForm)
router.route('/login').post(users.login)
router.route('/bye').get(users.logout)
router.route('/facility/:id').get(facilities.view)
router.route('/add-facility').get(facilities.new)
router.route('/facilities').post(facilities.create)

/* SERVER */
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)
app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), () => {
  console.log('Running on 127.0.0.1:' + app.get('port'))
})
