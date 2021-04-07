const WeatherRepocitory = require('../repositories/weatherRepocitory');
const repocitory = new WeatherRepocitory();

const weatherByCoordinates = async (lon, lat) => {

    const weather = await repocitory.weatherByCoordinates(lon, lat)
    
    return {
        name: weather.name,
        description: weather.weather[0].description,
        temperature: weather.main.temp,
        temperatureMin: weather.main.temp_min,
        temperatureMax: weather.main.temp_max
    };

}

module.exports = {
    weatherByCoordinates,
}