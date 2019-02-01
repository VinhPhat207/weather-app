let yargs = require('yargs');
let axios = require('axios');

const argv = yargs
    .option({
        a: {
            alias: 'address',
            string: true,
            demand: true,
            describe: 'Enter the location'
        }
    })

    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCpffFx5sZstG6aclYoEnodK4Nj5DF14F4&address=${encodedAddress}`;

axios.get(geocodeURL).then(res => {
    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find address');    
    }

    console.log('The address: ' + res.data.results[0].formatted_address);

    console.log("======================================================");
    
    let lat = res.data.results[0].geometry.location.lat;
    let lng = res.data.results[0].geometry.location.lng;

    let darkskyURL = `https://api.darksky.net/forecast/563df19d46c4eec11a9ccf2746004e30/${lat},${lng}`;

    return axios.get(darkskyURL);
})
.then(res => {
    let temperature = (res.data.currently.temperature - 32) / 1.8;
    temperature = Math.round(temperature * 1000)/1000;
    console.log('Summary: ' + res.data.currently.summary);
    console.log('Icon: ' + res.data.currently.icon);
    console.log('Temperature: ' + temperature + ' *C');
})
.catch (err => {
    if (err.code === 'ENOTFOUND') {
        console.log('Unable to connect Google Servers');
    } else {
        console.log(err.message);
    }
})
