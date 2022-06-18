const Cities = require('../models/Cities');
const { travelDistanceApi } = require('./apiBingCotroller');

function getCities(req, res){

    const {city1 , city2 } = req.body;
    
    
    travelDistanceApi(city1, city2)
    
    res.send('Recebido com sucesso');
};


module.exports = { getCities };