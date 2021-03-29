const dotenv = require('dotenv');

const envFound = dotenv.config();
if(!envFound){
    throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 5000;

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: '/api/v1'
    },
    log: {
        level: process.env.LOG_LEVEL
    },
    swagger: {
        path: '/documentation'
    },
    mapbox: {
        apiKey: process.env.MAPBOX_API_KEY,
        pathBase: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    },
    openweathermap: {
        apiKey: process.env.OPEN_WEATHER_MAP,
        pathBase: 'api.openweathermap.org/data/2.5/weather'
    }
}
