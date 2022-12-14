const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibW9oYW1lZGFzbXI5OCIsImEiOiJjbDg3ZG90eXoxODZjM3FzMjE1aTg3d3M2In0.zEC9V2ZWaSZhG6x_3oDEXQ'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unabel to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unabel to find my location try another search!' , undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
    
}
module.exports = geocode