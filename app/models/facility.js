var mongoose = require('mongoose')

var Facility = mongoose.model('Facility', new mongoose.Schema({
  name: String,
  street_address: String,
  zip:  String,
  campaign_description: String,
  help_needed: String,
  description: String,
  geolocation: mongoose.Schema.Types.Point
}))

module.exports = Facility;
