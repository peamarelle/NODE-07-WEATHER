const express = require('express');
const CityRepository = require('../repositories/cityRepositoy');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const cities = async (req, res) => {
    const {city} = req.params;
    const repocitory = new CityRepository();
    const data = await repocitory.findCities(city);
    res.json(data);
}

module.exports = {
    cities
}