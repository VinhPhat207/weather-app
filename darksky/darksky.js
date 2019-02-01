let request = require('request');

getWeather = (lat, lng, callback) => {
    request (
        {
            url: `https://api.darksky.net/forecast/563df19d46c4eec11a9ccf2746004e30/${lat},${lng}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                callback('Unable to connect tp darksky server');
            }
            else if (body.code === 400) {
                callback('Not found location');
            }
            else {
                callback('', {
                        summary: body.currently.summary,
                        icon: body.currently.icon,
                        temperature: body.currently.temperature
                    }
                )
            }
        }
    )
}

module.exports.getWeather = getWeather;