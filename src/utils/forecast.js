const request = require('request')

const forecast = ( latitude,longitude,callback ) => {
    const url = 'https://api.darksky.net/forecast/e6f15f2ff29939d94ed98ab3a7574a20/' +latitude +','+ longitude + '?units=si'

    request({url,json:true}, (error,{body}) => {
        if (error) 
            callback('Unable to connect to weather service!',undefined)
        else if (body.error)
            callback('Unable to find location',undefined)
        else{ 
            callback(undefined,`${body.daily.data[0].summary} It is currently ${body.currently.temperature}˚C out. There is ${body.currently.precipProbability}% chance of rain`)
        }
    })

}

module.exports=forecast