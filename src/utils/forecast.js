const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const urlDarkSky = 'https://api.darksky.net/forecast/fcda0fd6a8d84611b3464bff043eb45c/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si&lang=pt';
    request({ url: urlDarkSky, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, ('Atualmente estão ' + body.currently.temperature + ' ºC. Existe uma chance de ' + (body.currently.precipProbability * 100) + '% de chuva. ' + body.daily.data[0].summary + ' Hoje a temperatura varia entre ' + body.daily.data[0].temperatureMin + 'ºC e ' + body.daily.data[0].temperatureMax + 'ºC. '));
        }
    });
}

module.exports = forecast;