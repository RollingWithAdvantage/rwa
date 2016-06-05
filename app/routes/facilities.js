exports.view = (req, res) => {}
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
  })
  facility.save((err) => {
    if (err) console.log(err)
    else console.log('New facility created')
  })
  res.send(req.body)
}
