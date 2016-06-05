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

module.exports = User;
