var zipcodes = require('zipcodes');

var LocationService = function() {};

LocationService.prototype.getCoordinates = function(zipcode) {
    var geodata = zipcodes.lookup(zipcode);
    
    return [geodata.longitude, geodata.latitude];
}

LocationService.prototype.zipRadius = function(zipcode, radius) {
    return zipcodes.radius(zipcode, radius);
}

module.exports = new LocationService();
