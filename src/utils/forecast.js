const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8ebfd80f81bdbe77487ee5c14e35a6fc&query=' +  latitude + ',' + longitude + '&units=m'

    request({ url, json:true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find the location', undefined)
            console.log('Url', url)
        } else {
            const temprature = body.current.temperature
            const feelsLike = body.current.feelslike
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + temprature + ' degrees out. It feels like ' + feelsLike + ' degrees out.')
        }
    })
}

module.exports = forecast