const CityRepository = require('../repositories/cityRepository');
const repocitory = new CityRepository();

const findCities  = async city => {
    const cities = await repocitory.findCities(city);

    return cities.features.map(e => {
        return {
            id: e.id,
            name: e.place_name,
            log: e.geometry.coordinates[0],
            lat: e.geometry.coordinates[1]
        }
    })
}

module.exports = { 
    findCities,
};