let request = require('request');

const getLocation = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);

    request(
        {
            url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCpffFx5sZstG6aclYoEnodK4Nj5DF14F4&address=${encodedAddress}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                callback('Unable to connect to Server');
            }
            else if (body.status === 'ZERO_RESULTS') {
                callback('Address not found');
            }
            else {
                callback('', {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longtitude: body.results[0].geometry.location.lng
                })
            }
        }
    )
}

module.exports.getLocation = getLocation;