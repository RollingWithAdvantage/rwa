var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

var User = mongoose.model('User', new mongoose.Schema({
    fn: String,
    ln: String,
    pw: String,
    em: String,
    zip: Number,
    geolocation: mongoose.Schema.Types.Point
}));

/*
	point: {
	  type: "Point",
	  coordinates: [12.123456, 13.134578]
	}
*/

module.exports = new User();
