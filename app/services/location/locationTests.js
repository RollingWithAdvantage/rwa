var locationService = require('./locationService');
var mongoose = require('mongoose')

console.log('75001: ' + locationService.getCoordinates('75001'));
console.log('75115: ' + locationService.getCoordinates('75115'));
console.log('78665: ' + locationService.getCoordinates('78665'));

console.log('90210: ' + locationService.getCoordinates('90210'));

console.log('75115 radius: ' + locationService.zipRadius(75115, 25));
console.log('90210 radius: ' + locationService.zipRadius(90210, 25));

/*
mongoose.connect(process.env.MONGODB_CONNECT_STRING)

var ZipLocation = mongoose.model('ZipLocation', new mongoose.Schema({
    zipcode: Number,
    cordinates: {
        type: [Number],
        index: '2dsphere'
    }
}));

var testLoc1 = new ZipLocation(
    {
        zipcode: 78665,
        getCoordinates: locationService.getCoordinates(78665)
    }
)

testLoc1.save(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('SAVED');
    }
});
*/
