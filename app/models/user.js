var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var UserSchema = new mongoose.Schema({
    un: String,
    fn: String,
    ln: String,
    pw: String,
    em: String,
    zip: Number,
    geolocation: mongoose.Schema.Types.Point
})
UserSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User',UserSchema);

/*
	point: {
	  type: "Point",
	  coordinates: [12.123456, 13.134578]
	}
*/

module.exports = User;
