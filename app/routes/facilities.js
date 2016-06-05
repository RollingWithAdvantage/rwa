var Facility = require('../models/facility')
var ObjectId = require('mongoose').Types.ObjectId;

exports.view = (req, res) => {
  console.log('test facility view ' + req.params.id )

  var facility_id = new ObjectId(req.params.id)
  
  console.log('test facility view ' + facility_id)

  Facility.findById(facility_id, (err, facility) => {
    if (err) {
      console.log('err ' + err);

      res.render('error')
    }

    console.log('found ' + facility);

    // TODO make a real page!
    res.render('error')
  })
}

exports.new = (req, res) => {
  res.render('facilities/new')
}

exports.create = (req, res) => {
  var facility = new Facility({
    name: req.body.name,
    street_address: req.body.address,
    zip: req.body.zip,
    campaign_description: req.body.campaign_description,
    help_needed: req.body.help_needed,
    description: req.body.description,
    geolocation: locationService.getPoint(req.body.zip)
  })
  facility.save((err) => {
    if (err) console.log(err)
    else console.log('New facility created')
  })
  res.send(req.body)
}

exports.findInRadius = (req, res) => {
  /*
  Facility.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
    if (err) return handleError(err);
    console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
  })
  */
}