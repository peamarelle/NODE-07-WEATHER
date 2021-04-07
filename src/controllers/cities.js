const express = require('express');
const { findCities } = require('../services/cityService')
const { weatherByCoordinates: findWeatherByCoordinates } = require('../services/weatherService')
const Success = require('../handlers/successHandler');
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const cities = async (req, res) => {

    const cities = await findCities(req.params.city)
    const success = new Success(cities);
    res.json(success);
}

const weatherByCoordinates = async (req, res) => {
    const {lon, lat} = req.query;

    const weather = await findWeatherByCoordinates(lon, lat);

    const success = new Success(weather);
    
    res.json(success);
}

module.exports = {
    cities,
    weatherByCoordinates,
}