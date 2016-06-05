var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

var Facility = mongoose.model('Facility', new mongoose.Schema({
    name: String,
    zip: Number,
    geolocation: mongoose.Schema.Types.Point
}));

module.exports = Facility;
