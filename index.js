var mongoose = require('mongoose')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var Account = require('./app/models/user');

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
router.route('/user/:username').get(users.view)

router.route('/sign-up').get(users.new)

router.route('/users').post(users.create)

router.route('/login').get(users.loginForm)
router.route('/login').post(function(req,res){console.log("HEY");passport.authenticate('local')(req, res, function () {
            console.log("THIS SUCKS");
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });}) ;
router.route('/bye').get(users.logout)
router.route('/facility/:facility').get(facilities.view)
router.route('/add-facility').get(facilities.new)
router.route('/facilities').post(facilities.create)

/* SERVER */
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)
app.use(express.static('public'));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'the dude abides',
    resave: false,
    saveUninitialized: false
}));

passport.use(new LocalStrategy(Account.authenticate()));
/*
passport.serializeUser(passport.serializeUser(function(user, done) {
    return user.id;
}));
passport.deserializeUser(passport.serializeUser(function(user, done) {
    return user.id;
}));
*/
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), () => {
  console.log('Running on 127.0.0.1:' + app.get('port'))
})
