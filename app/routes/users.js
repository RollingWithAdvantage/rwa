var User = require('../models/user')
var locationService = require('../services/location/locationService')

exports.view = (req, res) => {
}
exports.new = (req, res) => {
  res.render('users/new')
}
exports.create = (req, res) => {
  var user = new User({
    un:  req.body.un,
    em:  req.body.em,
    pw:  req.body.pw,
    fn:  req.body.fn,
    ln:  req.body.ln,
    zip: req.body.zip,
    geolocation: locationService.getPoint(req.body.zip)
  })
  user.save((err) => {
    if (err) console.log(err)
    else console.log('New user created')
  })
  res.send(req.body)
}
exports.loginForm = (req, res) => {
  res.render('users/loginForm')
}
exports.login = (req, res) => {
  User.findOne({ un: req.body.un }, (err, user) => {
    if (err) {
      console.log('login error ' + err);
      
      return null
    }
    
    if (req.body.pw && req.body.pw === user.pw) {
      console.log('logged in!')
    }
  })
}
exports.logout = (req, res) => {}
