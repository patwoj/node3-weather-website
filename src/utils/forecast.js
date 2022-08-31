const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dea8df8595338beb73c4b42d638e47eb&query=' + latitude + ',' + longitude + '&units=m'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. The humidity is ' + body.current.humidity + '%.')
        }  
    })
}

module.exports = forecast