var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var UserSchema = new mongoose.Schema({
  username: String,
  fn: String,
  ln: String,
  password: String,
  em: String,
  zip: Number,
  geolocation: mongoose.Schema.Types.Point
  // salt: String
});

/*
var passportOptions = {
  usernameField: 'un',
  usernameLowerCase: true
};
*/

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);

module.exports = User;
