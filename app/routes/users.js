var User = require('../models/user')
var locationService = require('../services/location/locationService')

exports.view = (req, res) => {
}
exports.new = (req, res) => {
  res.render('users/new')
}

/*
function(req, res, next) {

    console.log('user registered!');

  });
}
*/

exports.create = (req, res) => {
  console.log('registering user')

  var user = new User({
    username:  req.body.username,
    em:  req.body.em,
//    password:  req.body.password,
    fn:  req.body.fn,
    ln:  req.body.ln,
    zip: req.body.zip,
    geolocation: {
      type: "Point",
      coordinates: locationService.getCoordinates(req.body.zip)
	  }
  })

  User.register(user, req.body.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    } else { 
      console.log('New user created')
    }

    res.redirect('/');
  })
}

exports.loginForm = (req, res) => {
  res.render('users/loginForm')
}
exports.login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      console.log('login error ' + err);
      
      return null
    }
    
    if (req.body.password && req.body.password === user.password) {
      console.log('logged in!')
    }
  })
}
exports.logout = (req, res) => {}
