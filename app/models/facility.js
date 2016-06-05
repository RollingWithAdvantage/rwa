var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECT_STRING)

var Facility = mongoose.model('Facility', new mongoose.Schema({
  name: String,
  street_address: String,
  zip:  String,
  campaign_description: String,
  help_needed: String,
  description: String
}))

module.exports = User;
