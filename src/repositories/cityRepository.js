const axios = require('axios');
const config = require('../config/index');

class CityRepository {

    constructor() {
        this._pathBase = config.mapbox.pathBase;
        this._limit = 10;
        this._language = 'es';
        this._key = config.mapbox.apiKey;
    }

    async findCities(city) {
        const instance = axios.create({
            baseURL: `${this._pathBase}${city}.json`,
            params: {
                'access_token': this._key,
                'limit': this._limit,
                'language': this._language
            }
        })
        const response = await instance.get();
        return response.data;
    }
}

module.exports = CityRepository;