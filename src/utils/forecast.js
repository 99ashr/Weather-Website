const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1b9c63723b25255f21fc4e18300fd061&query=' + latitude + ',' + longitude + '&units=f'
    request({
        url,
        json: true
    }, (error, {
        body
    } = {}) => {
        if (error) {
            callback('Unable to connect. Try again after some time!', undefined)
        } else if (body.error) {
            callback('Unable to find the location, try again with different location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degree fahrenheit out now. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}


module.exports = forecast