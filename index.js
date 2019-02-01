let yargs = require('yargs');
let geocode = require('./geocode')
let darksky = require('./darksky/darksky')

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

geocode.getLocation(argv.a, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
        darksky.getWeather(res.latitude, res.longtitude, (err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    }
});
